const { intToBoolean } = require("../project/project-helpers");

function mapObjects(tasks) {
  return tasks.map((data) => ({
    ...data,
    task_completed: intToBoolean(data.task_completed),
  }));
}

module.exports = { mapObjects };
