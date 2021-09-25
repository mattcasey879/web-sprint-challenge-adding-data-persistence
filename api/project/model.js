// build your `Project` model here
const db = require("../../data/dbConfig");
const { mapObjects, intToBoolean } = require("./project-helpers");

async function getAll() {
  const data = await db("projects");
  const result = mapObjects(data);
  return result;
}

async function getById(id) {
  const data = await db("projects").where("project_id", id).first();
  return {
    ...data,
    project_completed: intToBoolean(data.project_completed),
  };
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => getById(id));
}

module.exports = { getAll, getById, insert };
