const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());

const { v4: uuidv4 } = require('uuid');

//Task model: id, title, content, date, status 
const taskList = [];

const getTasks = router.get("/tasks", (req, res) => {
  res.status(200).json(taskList);
})

const getTaskById = router.get("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const taskFound = taskList.find(task => task.id === id);

  if (!taskFound) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  res.json(taskFound);
});

const createTask = router.post("/tasks", (req, res) => {
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

const updateTaskById = router.put("/tasks/:id", (req, res) => {
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

const deleteTaskById = router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const index = taskList.findIndex(task => task.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  taskList.splice(index, 1);

  return res.status(204).send();
});

app.use(getTasks);
app.use(getTaskById);
app.use(createTask);
app.use(updateTaskById);
app.use(deleteTaskById);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta: ${PORT}`);
});
