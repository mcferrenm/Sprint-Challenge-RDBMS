const express = require("express");

const Actions = require("./actions-model");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hello from actions router");
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

module.exports = router;
