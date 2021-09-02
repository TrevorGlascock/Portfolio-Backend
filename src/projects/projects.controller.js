const service = require("./projects.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**************************** CRUDL Operation Handlers ****************************/
async function list(req, res) {
  const data = await service.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
