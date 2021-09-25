const express = require("express")
const db = require("../../data/dbConfig")


const validateResourceNameUnique = (req, res, next) => {
    const existing = db("resources").where("resource_name", req.body.resource_name)
    if (existing) {
        next({ staus: 404, message: "resource with that name already exists!"})
    }
    else{
        next()
    }
}

const validateResourceName = (req, res, next) => {
    const {resource_name} = req.body
    if(resource_name === undefined) {
        next({ status: 404, message: "please enter a resource name"})
    } else {
        next()
    }
}

module.exports = { validateResourceName, validateResourceNameUnique }