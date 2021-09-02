if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const projectsRouter = require("./projects/projects.router");

app.use(cors());
app.use(express.json());

app.use("/projects", projectsRouter);

app.use(routeNotFound);
app.use(errorHandler);

module.exports = app;
