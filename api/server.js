// build your server here and require it from index.js
const express = require("express")
const helmet = require("helmet")
const server = express()
const ProjectRtr = require("./project/router")

server.use(helmet())
server.use(express.json())

server.use("/api/projects", ProjectRtr)

server.get("/", (req, res) => {
    res.send("<h2>API UP AND RUNNING</h2>")
})




module.exports = server