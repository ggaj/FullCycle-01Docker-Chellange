const mysql = require("mysql");
const express = require("express");
const app = express();

const port = 8080;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "app",
};

app.get("/", (req, res) => {
  getData((listOfNames) => {
    res.send(listOfNames);
  });
});

const getData = (callback) => {
  const connection = mysql.createConnection(config);

  connection.query(`SELECT name FROM people`, function (err, result, fields) {
    if (err) throw err;

    const listOfNames = result
      .map((entry) => `<li>${entry.name}</li>`)
      .join("\n");

    return callback(`
          <h1>Full Cycle Rocks!</h1>
          <h3>List of people</h3>
          <ul>
              ${listOfNames}
          </ul>
      `);
  });

  connection.end;
};

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
