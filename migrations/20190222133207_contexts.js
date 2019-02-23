exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("contexts", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.timestamps(true, true);
    })
    .createTable("actions-contexts", tbl => {
      tbl.increments();

      tbl
        .integer("context_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("contexts")
        .onDelete("restrict")
        .onUpdate("cascade");

      tbl
        .integer("action_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("actions")
        .onDelete("restrict")
        .onUpdate("cascade");

      tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("contexts")
    .dropTableIfExists("actions-contexts");
};
