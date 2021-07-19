const restaurants_routes = require("./restaurants.routes");

module.exports.initRoutes = (app) => {
  app.use("/api/v1/restaurants", restaurants_routes);
};
