const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
require("dotenv/config");
const authRoute = require("./Routes/authRoute");
const meetRoute = require("./Routes/MeetRoute");
const path = require("path");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
    allowEIO3: true,
  },
});
app.io = io;

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
app.use("/api/v1/meet", meetRoute);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Listening to the server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

io.on("connection", (socket) => {
  socket.on("join-meeting", (user_id, session_token) => {
    socket.user_id = user_id;
    socket.session_token = session_token;
  });
  socket.on("disconnect", async () => {
    await meetRoute.leaveMeeting(socket.user_id, socket.session_token);
  });
});
connectDB();
