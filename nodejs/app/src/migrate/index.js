const mysql = require("mysql");
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "app",
};
const connection = mysql.createConnection(config);

connection.query(
  `create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id))`
);

connection.query(`DELETE FROM people;`);
connection.query(`INSERT INTO people(name) values('Gildo Jr')`);
connection.query(`INSERT INTO people(name) values('Wesley Full Cycle')`);

connection.end();
