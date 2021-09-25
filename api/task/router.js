// build your `/api/tasks` router here
const router = require("express").Router()
const Project = require("./model")


router.get("/", async (req, res, next) => {

    const data = await Project.getAll()
    res.send(data)
})

module.exports = router