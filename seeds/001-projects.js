
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Portfolio", description: "Create a better web design portfolio using work from Lambda. Include previous life experiences."},
        {name: "Codewars", description: "Get better at coding so I can get through whiteboard interviews."},
        {name: "Swimming", description: "Exercise is a porject too?"},
      ]);
    });
};
