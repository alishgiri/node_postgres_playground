const redis = require("redis");
const config = require("./config");

const client = redis.createClient(config.redis_port, config.redis_host);
const publishClient = redis.createClient(config.redis_port, config.redis_host);

client.set("REDIS_KEY", "0");
client.subscribe("REQUESTS");

client.on("error", (err) => {
  console.log("REDIS ERROR", err);
});

client.on("message", (channel, message) => {
  console.log("REDIS message", { channel, message });
});

module.exports = { client, publishClient };
