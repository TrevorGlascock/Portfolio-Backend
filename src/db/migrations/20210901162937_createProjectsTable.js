exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("project_id").primary();
    table.string("project_title");
    table.text("project_description");
    table.text("project_screenshot");
    
    table.text("frontend_repo");
    table.text("frontend_deploy");

    table.text("backend_repo");
    table.text("backend_deploy");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
