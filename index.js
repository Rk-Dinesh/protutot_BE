const app = require("./app");
const db = require("./config/db");


const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to PROTUTOR");
});

app.listen(port, () => {
  console.log(`Server Listening on Port http://localhost:${port}`);
});
