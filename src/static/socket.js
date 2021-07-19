const socket = io({
  upgrade: false,
  transports: ["websocket"],
});

const addLi = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  document.getElementById("list").appendChild(li);
};

document.getElementById("send").addEventListener("click", (e) => {
  socket.emit("name", document.getElementById("name").value);
});

socket.on("name", (name) => addLi(name + " says Hello!"));
socket.on("user.events", addLi);
