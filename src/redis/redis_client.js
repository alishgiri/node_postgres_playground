const redis = require("redis");
const config = require("./config");

const redisClient = redis.createClient(config.redis_port, config.redis_host);
redisClient.set("REDIS_KEY", "0");

redisClient.on("error", (err) => {
  console.log("REDIS ERROR", err);
});

module.exports = redisClient;
