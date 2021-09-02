const db = require("../db/connection");

/**************************** CRUDL Knex Queries ****************************/
function list() {
  return db("projects").select("*");
}

function read(project_id) {
  return db("projects").select("*").where({ project_id }).first();
}

module.exports = {
  list,
  read,
};
