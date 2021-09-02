exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("project_id").primary();
    table.string("project_title");
    table.text("project_description");
    table.string("project_screenshot");
    
    table.string("frontend_repo");
    table.string("frontend_deploy");

    table.string("backend_repo");
    table.string("backend_deploy");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
