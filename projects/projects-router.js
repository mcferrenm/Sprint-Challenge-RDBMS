const express = require("express");

const Projects = require("./projects-model");
const Actions = require("../actions/actions-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving projects" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.getProjectById(req.params.id);
    if (project) {
      const actions = await Actions.getActionsByProjectId(req.params.id);

      const projectWithActions = {
        ...project,
        actions
      };
      res.status(201).json(projectWithActions);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving project" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.description) {
      res.status(404).json({ error: "Please provide name and description" });
    } else {
      const [id] = await Projects.addProject(req.body);
      res.status(201).json(id);
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating project" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await Projects.removeProject(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting project" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const count = await Projects.updateProject(req.params.id, req.body);

    if (count > 0) {
      const project = await Projects.getProjectById(req.params.id);
      if (project) {
        const actions = await Actions.getActionsByProjectId(req.params.id);

        const projectWithActions = {
          ...project,
          actions
        };
        res.status(201).json(projectWithActions);
      } else {
        res.status(404).json({ error: "Project not found" });
      }
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating project" });
  }
});

module.exports = router;
