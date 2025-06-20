const express = require('express');
const router = express.Router();

//Task model: id, title, content, date, status, author
const taskList = [];

router.get("/", (req, res) => {
  res.send("Bem vinde ao gerenciador de tarefas!");
});

module.exports = router;