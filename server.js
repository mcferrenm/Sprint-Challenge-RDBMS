const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");

const server = express();

// Global Middleware
server.use(helmet());
server.use(express.json());

// Routes
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
