const config = require("../redis/config");
const myRedis = require("../redis/redis_client");

const callback = (resolve, reject) => {
  return (err, data) => {
    if (err) reject(err);
    resolve(data);
  };
};

module.exports = {
  getUser: (socketId) => {
    return new Promise((resolve, reject) => {
      myRedis.client.get(socketId, callback(resolve, reject));
    });
  },

  storeUser: (socketId, user) => {
    return new Promise((resolve, reject) => {
      myRedis.client.setex(
        socketId,
        config.expire,
        user,
        callback(resolve, reject)
      );
    });
  },
};
