const socket = io({
  upgrade: false,
  transports: ["websocket"],
});

document.getElementById("send").addEventListener("click", (e) => {
  socket.emit("name", document.getElementById("name").value);
});

socket.on("name", (name) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(name + " says Hello!"));
  document.getElementById("list").appendChild(li);
});
