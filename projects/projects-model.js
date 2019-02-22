const db = require('../data/knexConfig');

function addProject(project) {
  return db("projects")
    .insert(project)
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

module.exports = {
  addProject,
  getProjectById
}