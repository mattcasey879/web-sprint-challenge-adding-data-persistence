const e = require("express");
const express = require("express");
const db = require("../../data/dbConfig");

const validateResourceNameUnique = async (req, res, next) => {
    try {
        const exsisting = await db("resources")
            .where("resource_name", req.body.resource_name)
            .first()

            if (exsisting) {
                next({ status: 400, message: "name is taken"})
            } else {
                next()
            }
    } catch (error) {
        next(error)
    }
}
const validateResourceName = (req, res, next) => {
  const { resource_name } = req.body;
  if (resource_name === undefined) {
    next({ status: 404, message: "please enter a resource name" });
  } else {
    next();
  }
};

module.exports = { validateResourceName, validateResourceNameUnique };
