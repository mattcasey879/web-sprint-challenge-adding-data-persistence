// build your `Task` model here
const db = require("../../data/dbConfig");
const { intToBoolean } = require("../helpers/api-helpers");

async function getAll() {
  const data = await db("projects as p")
    .leftJoin("tasks as t", "p.project_id", "t.project_id")
    .select("t.*", "project_name", "project_description")
    .orderBy("t.task_id")
    return data.map((task) => ({
      ...task,
      task_completed: intToBoolean(task.task_completed),
    }));
}
async function getById(id) {
  const data = await db("tasks").where("task_id", id).first();
  return {
    ...data,
    task_completed: intToBoolean(data.task_completed),
  };
}

async function insert(data) {
  const task = await db("tasks").insert(data);
  console.log(task[0]);
  return getById(task[0]);
}

module.exports = { getAll, insert };
