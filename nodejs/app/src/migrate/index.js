const moniker = require('moniker');
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

const mockName = moniker.choose();

connection.query(`INSERT INTO people(name) values('${mockName}')`);

connection.end();
