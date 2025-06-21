const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//Task model: id, title, content, date, status, 
const taskList = [
  {
    "id": "1234",
    "title": " Aprofunda | Pretalab",
    "content": "Encontro com a líder técnica",
    "date": "Sáb - 10hrs",
    "status": "Incompleta"
  }

];

//GET
router.get("/tasks", (req, res) => {
  res.json(taskList);
})

//GET POR ID -- melhorar aqui
router.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  //tenho que verificar se meu array tem um id igual

  const taskFound = taskList.find(task => task.id === id);
  res.json(taskFound);
});

//POST 
router.post("/tasks", (req, res) => {
  const { title, content, status } = req.body;

  const newTask = {
    id: uuidv4(),
    title: title,
    content: content,
    date: new Date().toLocaleDateString('pt-BR'),
    status: status,
  };

  taskList.push(newTask);

  res
    .status(201)
    .json({ message: `A tarefa: ${title} foi criada com sucesso!`, newTask });

});

//PUT 
router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, status } = req.body;

  const taskFound = taskList.find(task => task.id === id);

  if (title != null) {
    taskFound.title = title;
  }
  if (content != null) {
    taskFound.status = status;
  };

  res.json({ message: `Tarefa com o ${id} foi atualizada`, taskFound });

})


//DELETE
router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  //encontrando o indíce da task 
  const index = taskList.findIndex(task => task.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  //excluindo
  taskList.splice(index, 1);

  return res.status(204).send();
});

module.exports = router;