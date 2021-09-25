// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");
const { validateTask } = require("./task-middleware");

router.get("/", async (req, res, next) => {
  const data = await Task.getAll();
  res.status(200).json(data);
});

router.post("/", validateTask, async (req, res, next) => {
  const data = await Task.insert(req.body);
  res.status(200).json(data);
});

module.exports = router;
