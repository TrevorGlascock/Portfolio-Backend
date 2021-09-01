exports.up = function(knex) {
    return knex.schema.createTable("categories", (table) => {
    table.increments("project_id").primary();
    table.string("project_title");
    table.text("project_description");
    table.string("project_screenshot")
    table.string("project_repo")
    table.string("project_deploy")
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("projects")
};
