const redis = require("./redis.route");
const users = require("./users.route");
const socketio = require("./socketio.route");
const restaurants = require("./restaurants.route");

module.exports.initRoutes = (app) => {
  app.use("/redis", redis);
  app.use("/socketio", socketio);
  app.use("/api/v1/users", users);
  app.use("/api/v1/restaurants", restaurants);
};
