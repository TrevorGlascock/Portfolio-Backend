const projects = require("../fixtures/projects");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE projects RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("projects").insert(categories);
    });
};
