exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "leave the planet",
          task_notes: "dont forget ship",
          project_id: 1,
        },
        {
          task_description: "take over isenguard",
          task_notes: "talk to treebeard",
          project_id: 2,
        },
        { task_description: "wee", project_id: 3 },
      ]);
    });
};
