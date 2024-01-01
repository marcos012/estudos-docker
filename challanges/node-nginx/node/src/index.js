const express = require("express");
const { insertPeople, getPeople } = require("./people-service");

const app = express();
const PORT = 3000;

insertPeople();

app.get("/", (_req, res) => {
  getPeople(res);
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
