const redisClient = require("../redis/redis_client");

module.exports = {
  getPage: async (req, res) => {
    redisClient.incr("REDIS_KEY");
    redisClient.get("REDIS_KEY", (err, reply) => {
      res.send(
        `
            <html>
                <head>
                    <title>Node, Redis & WebSocket</title>
                </head>
                <body>
                    <h1>Our Redis and Express Web Application</h1>
                    <p>Redis coumt: ${reply}</p>
                </body>
            </html>
            `
      );
      res.end();
    });
  },
};
