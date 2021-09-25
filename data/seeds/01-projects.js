
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'foo', project_description: "bar", project_completed: true},
        { project_name: 'yee', project_description: "haw", project_completed: true},
        { project_name: 'lets', project_description: "go", project_completed: false}
      ]);
    });
};
