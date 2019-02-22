exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("contexts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contexts").insert([
        { name: "Home" },
        { name: "Work" },
        { name: "Gym" }
      ]);
    });
};
