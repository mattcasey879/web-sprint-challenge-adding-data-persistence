const express = require("express");
const db = require("../../data/dbConfig");

const validateTask = async (req, res, next) => {
  const { task_description, project_id } = req.body;
  if (task_description === undefined) {
    next({ status: 400, message: "please enter a task description" });
  } else if (project_id === undefined) {
    next({ status: 400, message: "please enter a project ID" });
  } else if (await db("projects").where("project_id", project_id).first()) {
    next();
  } else {
    next({ status: 400, message: `inavlid project with id ${project_id}` });
  }
};

module.exports = { validateTask };
