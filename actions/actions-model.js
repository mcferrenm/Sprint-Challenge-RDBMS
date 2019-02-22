const db = require("../data/knexConfig");

function addAction(project) {
  return db("actions").insert(project);
}

function getActionsByProjectId(id) {
  return db("actions").where({ project_id: id });
}

module.exports = {
  addAction,
  getActionsByProjectId
};
