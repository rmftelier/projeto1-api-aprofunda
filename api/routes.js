const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//Task model: id, title, content, date, status 
const taskList = [];

router.get("/tasks", (req, res) => {
  res.json(taskList);
})

router.get("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const taskFound = taskList.find(task => task.id === id);

  if (!taskFound) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  res.json(taskFound);
});

router.post("/tasks", (req, res) => {
  const { title, content, status } = req.body;

  const newTask = {
    id: uuidv4(),
    title,
    content,
    date: new Date().toLocaleDateString('pt-BR'),
    status
  };

  taskList.push(newTask);

  res.status(201)
    .json({ message: `A tarefa com o título: ${title} foi criada com sucesso!`, task: newTask });

});

router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, status } = req.body;

  const index = taskList.findIndex(task => task.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  taskList[index] = {
    ...taskList[index],
    title,
    content,
    date: new Date().toLocaleDateString('pt-BR'),
    status,
  }

  res.json({ message: `Tarefa com o id: ${id} foi atualizada.`, task: taskList[index] });

})

router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const index = taskList.findIndex(task => task.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  taskList.splice(index, 1);

  return res.status(204).send();
});

module.exports = router;