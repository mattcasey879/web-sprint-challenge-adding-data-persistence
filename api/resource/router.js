// build your `/api/resources` router here
const router = require("express").Router();
const Resource = require("./model");
const {
  validateResourceName,
  validateResourceNameUnique,
} = require("./resource-middleware");

router.get("/", async (req, res, next) => {
  const data = await Resource.getAll();
  res.status(200).json(data);
});

router.post(
  "/",
  validateResourceNameUnique,
  validateResourceName,
  async (req, res, next) => {
    const data = await Resource.insert(req.body);
    res.status(200).json(data);
  }
);

module.exports = router;
