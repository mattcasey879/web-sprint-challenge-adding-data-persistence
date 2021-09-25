const express = require("express");

const validateProjectName = (req, res, next) => {
  const { project_name } = req.body;
  if (project_name === undefined) {
    next({ status: 404, message: "please enter a project name" });
  } else {
    next();
  }
};

module.exports = { validateProjectName };
