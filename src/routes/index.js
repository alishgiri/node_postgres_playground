const redis = require("./redis.route");
const users = require("./users.route");
const restaurants = require("./restaurants.route");

module.exports.initRoutes = (app) => {
  app.use("/", redis);
  app.use("/api/v1/users", users);
  app.use("/api/v1/restaurants", restaurants);
};
