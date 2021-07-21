const socketio = require("socket.io");
const { storeUser, getUser } = require("../services/redis.service");

const errorEmit = (socket) => {
  return (err) => {
    console.log(err);
    socket.broadcast.emit("user.events", "Something went wrong!");
  };
};

module.exports.initSocketIO = (server) => {
  const io = socketio(server);

  io.on("connection", (socket) => {
    // Using broadcast everyone but not self gets the message
    socket.broadcast.emit("user.events", "Someone has joined!");

    socket.on("name", (name) => {
      storeUser(socket.id, name).then(() => {
        console.log(`${name} says hello!`);
        socket.broadcast.emit("name", name);
      }, errorEmit(socket));
    });

    socket.on("disconnect", () => {
      getUser(socket.id)
        .then((user) => {
          if (!user) return "Unknown";
          return user;
        })
        .then((user) => {
          console.log(`${user} left`);
          socket.broadcast.emit("user.events", `${user} left`);
        }, errorEmit(socket));
    });
  });

  // // No broadcast everyone including self gets the message
  // io.on("connection", (socket) => {
  //   socket.on("name", (name) => {
  //     console.log(name + " says hello!");
  //     io.emit("name", name);
  //   });
  // });

  // // ROOMS in socket.io;
  // io.on("connection", (socket) => {
  //   const now = Date.now();
  //   if (now % 2 === 0) {
  //     socket.join("even");
  //   } else {
  //     socket.join("odd");
  //   }
  //   io.to("even").emit("event", "Even Room " + now);
  //   io.to("odd").emit("event", "Odd Room " + now);
  //   setTimeout(() => {
  //     io.to("even").emit("event", "Even Room");
  //     io.to("odd").emit("event", "Odd Room");
  //   }, 5000);
  // });
};
