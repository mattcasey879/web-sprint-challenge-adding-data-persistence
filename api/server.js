// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");
const server = express();
const ProjectRtr = require("./project/router");
const ResourceRtr = require("./resource/router");
const TaskRtr = require("./task/router");

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRtr);
server.use("/api/resources", ResourceRtr);
server.use("/api/tasks", TaskRtr);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});
server.get("/", (req, res) => {
  res.send("<h2>API UP AND RUNNING</h2>");
});

module.exports = server;
