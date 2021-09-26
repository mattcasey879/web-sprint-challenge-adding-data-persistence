// build your `Project` model here
const db = require("../../data/dbConfig");
const { intToBoolean } = require("../helpers/api-helpers");

async function getAll() {
  const projects = await db("projects");
  return projects.map((data) => ({
    ...data,
    project_completed: intToBoolean(data.project_completed),
  }));
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
