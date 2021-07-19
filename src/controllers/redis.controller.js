const redis = require("../redis/redis_client");

module.exports = {
  getPage: async (req, res) => {
    redis.client.incr("REDIS_KEY");
    redis.client.get("REDIS_KEY", (err, reply) => {
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

  publishOnRedis: (req, res) => {
    const info = `Request on ${req.socket.localPort} for ${req.url}`;
    redis.publishClient.publish("REQUESTS", info);
    res.send(info);
  },
};
