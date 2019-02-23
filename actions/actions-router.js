const express = require("express");

const Actions = require("./actions-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await Actions.getActions();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving actions" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const action = await Actions.getActionById(req.params.id);
    if (action) {
  
      const contexts = await Actions.getContextsByActionId(req.params.id);
      
      const actionWithContexts = {
        ...action,
        contexts
      }

      res.status(201).json(actionWithContexts);
    } else {
      res.status(404).json({ error: "Action not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving action" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.project_id || !req.body.description || !req.body.notes) {
      res
        .status(404)
        .json({ error: "Please provide project id, description, and notes" });
    } else {
      const [id] = await Actions.addAction(req.body);
      res.status(201).json(id);
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating acton" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await Actions.removeAction(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Action not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting action" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const count = await Actions.updateAction(req.params.id, req.body);

    if (count > 0) {
      const action = await Actions.getActionById(req.params.id);
      res.status(200).json(action);
    } else {
      res.status(404).json({ error: "Error updating action" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating action" });
  }
});

module.exports = router;
