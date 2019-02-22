const db = require("../data/knexConfig");

function getActions() {
  return db("actions")
}
function getActionById(id) {
  return db("actions").where({ id }).first();
}

function addAction(action) {
  return db("actions").insert(action);
}

function removeAction(id) {
  return db("actions").where({ id }).del()
}

function updateAction(id, action) {
  return db("actions").where({ id }).update(action)
}

function getActionsByProjectId(id) {
  return db("actions").where({ project_id: id });
}

module.exports = {
  getActions,
  getActionById,
  addAction,
  removeAction,
  updateAction,
  getActionsByProjectId
};
