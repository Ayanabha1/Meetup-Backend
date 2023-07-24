const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
require("dotenv/config");
const authRoute = require("./Routes/authRoute");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

// DB connection

const connectDB = () => {
  const uri = process.env.DB_URI;
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected");
};

// Routes and middlewares
app.use("/api/v1/auth", authRoute);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Listening to the server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

connectDB();
