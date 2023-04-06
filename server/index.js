const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoute = require("./routes/messagesRoute");
const socket = require("socket.io");
const { DB_URL, PORT, SERVER_URL } = require("./utils/globalEnv");
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const Users = require("../server/model/userModel");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoute);
app.use("/upload", upload.single("file"), (req, res) => {
  console.log(req.file.path)
})

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected!!!");
  })
  .catch((error) => {
    console.log(error);
  });

const server = app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: SERVER_URL,
    credentials: true,
  },
});

global.onlineUsers = new Map();
let onlineUserIds = {};

io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
    onlineUserIds[userId]=true;
    io.emit("online-users", onlineUserIds);
  });

  socket.on("send-msg", async (data) => {
    const userData = await Users.findById(data.from);
    const date = new Date();
    userData.lastMessage = date;
    await userData.save();
    const allUserdata = await Users.find({}).sort({ lastMessage: -1 });
    console.log(allUserdata)
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message, allUserdata);
    }
  });

  socket.on("logout", (userId) => {
    onlineUserIds[userId]=false;

    io.emit("online-users", onlineUserIds);
  })
});
