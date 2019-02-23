const server = require("./server");

const PORT = process.env.PORT || 8000;

server.get("/", (req, res) => {
  res.send("Welcome to Projects & Actions API");
});

server.listen(PORT, () => {
  console.log(`\n\n*** Server up on ${PORT} ***\n`);
});
