const mysql = require("mysql");

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

const insertPeople = () => {
  const CREATE_TABLE = `
      CREATE TABLE IF NOT EXISTS people (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
      )
  `;

  connection.query(CREATE_TABLE, () => {
    const INSERT = `INSERT INTO people(name) VALUES('Marcos')`;
    connection.query(INSERT);
  });
};

const getPeople = (res) => {
  const SELECT = `SELECT * FROM people`;

  connection.query(SELECT, (_, results) => {
    const list = results.map((r) => `<li>${r.name}</li>`).join("");

    res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
            ${list}
        </ul>
    `);
  });
};

module.exports = {
  insertPeople,
  getPeople,
};
