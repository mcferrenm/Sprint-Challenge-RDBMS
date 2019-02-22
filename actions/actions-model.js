const db = require('../data/knexConfig');

function addAction(project) {
  return db("projects")
    .insert(project)
}

module.exports = {
  addAction,
}