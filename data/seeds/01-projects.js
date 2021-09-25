exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "In a galaxy far far away",
          project_description: "I am your father",
        },
        {
          project_name: "Destroy the One Ring",
          project_description: "Don't go through Moria",
        },
        {
          project_name: "The boy who lived",
          project_description: "Survive Hogwarts",
        },
      ]);
    });
};
