exports.seed = async function (knex) {
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');

  await knex("channel").insert([
    { id: 1, name: "channel1" },
    { id: 2, name: "channel2" },
    { id: 3, name: "channel3" },
  ]);

  await knex("user").insert([
    { id: 1, name: "user1", email: "user1@email.com", channel_id: 1 },
    { id: 2, name: "user2", email: "user2@email.com", channel_id: 2 },
    { id: 3, name: "user3", email: "user3@email.com" },
  ]);

  await knex("video").insert([
    { id: 1, title: "video1ByUser1", channel_id: 1 },
    { id: 2, title: "video2ByUser1", channel_id: 1 },
    { id: 3, title: "video3ByUser2", channel_id: 2 },
  ]);
};
