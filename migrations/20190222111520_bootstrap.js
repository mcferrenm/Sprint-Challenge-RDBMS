exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .unique()
        .notNullable();

      tbl
        .string("description", 128)
        .unique()
        .notNullable();

      tbl.boolean("isCompleted").defaultTo(false);

      tbl.timestamps(true, true);
    })
    .createTable("actions", tbl => {
      tbl.increments();

      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("restrict")
        .onUpdate("cascade")
        .notNullable();

      tbl
        .string("description", 128)
        .unique()
        .notNullable();

      tbl
        .string("notes", 128)
        .unique()
        .notNullable();

      tbl.boolean("isCompleted").defaultTo(false);

      tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("actions")
};
