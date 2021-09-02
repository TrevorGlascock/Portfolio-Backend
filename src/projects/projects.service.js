const db = require("../db/connection");

/**************************** CRUDL Knex Queries ****************************/
function list() {
  return db("projects").select("*");
}

module.exports = {
  list,
};
