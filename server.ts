const express = require("express");
import mongoose from "mongoose";
const cors = require("cors");
const socket = require("socket.io");

const router = require("./router");
const passport = require("passport");

mongoose.connect("mongodb://localhost/blind-beer-tasting");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
router(app);

const server = app.listen(5000, () => {
  console.log("Node.js listening on port " + 5000);
});

const io = socket(server);
app.set("io", io);

io.on("connection", (socket) => {
  console.log("Socket connected: ", socket.id);
});
