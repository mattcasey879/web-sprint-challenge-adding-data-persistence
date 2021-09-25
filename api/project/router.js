// build your `/api/projects` router here
const router = require("express").Router()
const Project = require("./model")


router.get("/", async (req, res, next) => {

    const data = await Project.getAll()
    res.json(data)
})

router.post("/", async (req, res, next) => {
    const data = await Project.insert(req.body)
    res.json(data)
})

router.get("/:id", async (req,res, next) => {
    const data = await Project.getById(req.params.id)
    res.status(200).json(data)
})

module.exports = router