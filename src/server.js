const { PORT = 5000 } = process.env;

const app = require("./app");
const db = require("./db/connection");

const listener = () => console.log(`Listening on Port ${PORT}!`);

db.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);
