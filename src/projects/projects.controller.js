const service = require("./projects.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**************************** Middleware Functions ****************************/
async function hasProjectId(req, res, next) {
  const { projectId } = req.params;
  const project = await service.read(projectId);

  if (!project) return next({ status: 404, message: "Project not found!" });

  res.locals.project = project;
  return next();
}

/**************************** CRUDL Operation Handlers ****************************/
async function list(req, res) {
  const data = await service.list();
  res.json({ data });
}

function read(req, res) {
  const { project: data } = res.locals;
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(hasProjectId), read],
};
