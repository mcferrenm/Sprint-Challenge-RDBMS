const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hello from actions router");
});

router.post("/", async (req, res) => {});

module.exports = router;
