const db = require("../../data/dbConfig");
// build your `Resource` model here
async function getAll() {
  const data = await db("resources");
  return data;
}
async function getById(id) {
  const data = await db("resources").where("resource_id", id).first();
  return data;
}

async function insert(resource) {
  const data = await db("resources").insert(resource);
  return getById(data[0]);
}
module.exports = { getAll, insert };
