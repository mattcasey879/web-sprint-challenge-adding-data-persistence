module.exports = { mapObjects, intToBoolean };

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function mapObjects(project) {
  return project.map((data) => ({
    ...data,
    project_completed: intToBoolean(data.project_completed),
  }));
}
