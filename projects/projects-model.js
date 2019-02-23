const db = require("../data/knexConfig");

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects").insert(project);
}

function removeProject(id) {
  return db("projects")
    .where({ id })
    .del();
}

function updateProject(id, project) {
  return db("projects")
    .where({ id })
    .update(project);
}

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  removeProject,
  updateProject
};
