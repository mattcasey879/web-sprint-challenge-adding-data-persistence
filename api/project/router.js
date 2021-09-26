// build your `/api/projects` router here
const router = require("express").Router()
const Project = require("./model")
const { validateProjectName } = require("./project-middleware")

router.get("/", async (req, res, next) => {

    const data = await Project.getAll()
    res.status(200).json(data)
})

router.post("/", validateProjectName, async (req, res, next) => {
    const data = await Project.insert(req.body)
    res.status(200).json(data)
})

router.get("/:id", async (req,res, next) => {
    const data = await Project.getById(req.params.id)
    res.status(200).json(data)
})

module.exports = router