const router = require("express").Router();
const bcrypt = require("bcrypt");
const userModel = require("../Models/User");
const {
  registerValidation,
  loginValidation,
} = require("../Validation/SchemaValidation");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

async function generateToken(data) {
  const token = await jwt.sign(
    {
      data,
    },
    process.env.JWT_SECRET
  );
  return token;
}

// Register

router.post("/signup", async (req, res) => {
  // Checking for validation wrt the schema defined
  const { error } = registerValidation.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  // check if the user already exists in the db
  const userFound = await userModel.findOne({
    email: req.body.email,
  });
  if (userFound) {
    return res.status(400).send({ message: "User already exists" });
  }

  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  //   Creating a new user
  const user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  });

  try {
    const newUser = await user.save();
    // Generate the jwt Token
    const _token = await generateToken(newUser);
    res.send({ user: newUser, message: "Signup success!", token: _token });
  } catch (err) {
    res.send(err);
  }
});

// Get user details using jwt token

router.get("/get-user", async (req, res) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const decoded = jwt_decode(token);
    const userDetails = await userModel.findOne({ _id: decoded.data._id });
    if (userDetails) {
      res.send(userDetails);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(404).send({ message: "User not found" });
  }
});

// Login
router.post("/login", async (req, res) => {
  // Checking for validation wrt the schema defined
  try {
    const { error } = loginValidation.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // finding the user from the db
    const user = await userModel.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(400).send({ message: "Invalid Login Credentials" });
    }

    // compare passwords
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      return res.status(400).send({ message: "Invalid Login Credentials" });
    }

    // Generate the jwt Token
    const _token = await generateToken(user);
    res.send({ user: user, message: "Login success!", token: _token });
  } catch (err) {
    res
      .status(400)
      .send({ message: "Something went wrong ... please try again" });
  }
});

module.exports = router;
