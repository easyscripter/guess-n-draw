const dotenv = require("dotenv");
dotenv.config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const http = require("http");
// const bodyParser = require("body-parser");
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import router from "./routes";
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
const server = http.createServer(app);

const io = new Server(server);

mongoose
  .connect("mongodb://localhost/guess-n-draw")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });

io.on("connection", (socket) => {
  console.log("user connected");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
