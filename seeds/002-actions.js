
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: "Fix screenshot images", notes: "Download latest version of Photoshop. Watch tutorials. Figure out the best formatting and image optimization" },
        {project_id: 1, description: "Set Correct Domain", notes: "Learn how to use netlify to point to my google domains registry. Look up CNAME. Find a tutorial." },
        {project_id: 1, description: "Fix Title", notes: "Template Title still showing." },
        {project_id: 1, description: "Add vector image", notes: "Top header needs some more eye candy. Maybe add an elegant vector image/svg of a euca leaf." },
        {project_id: 1, description: "Refactor OER Bookr", notes: "Remove authentication. Decouple from server. Use better mock book data/img. Fix router issue. Clean up. Add a few more pages. Implement a proper dashboard/authentication using what I learned from BuilderBook." },
        {project_id: 2, description: "Show Up Everyday", notes: "Only going to learn with daily repetition. Even on weekends and friday sprints." },
        {project_id: 2, description: "Grokking Algorithms", notes: "Get some strategy going and add some common problem solving tools." },
        {project_id: 2, description: "Read MDN JavaScript", notes: "Make sure you are familiar with the toolset. There are so many to use. Keep learning new ones." },
        {project_id: 3, description: "Breathe correctly", notes: "Take four strokes before breathing. Start with 2 laps then 4 then whole pool." },
      ]);
    });
};
