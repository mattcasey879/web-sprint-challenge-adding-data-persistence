
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'Star Wars', resource_description: "Tattoine"},
        { resource_name: 'Lord of the Rings', resource_description: "Middle Earth"},
        { resource_name: 'Your a wizard Harry', resource_description: "Hogwarts"}
      ]);
    });
};
