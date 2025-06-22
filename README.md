<h1 align="center"> API de Gerenciamento de Tarefas </h1>

API simples para gerenciamento de tarefas. Permite criar, listar, buscar, atualizar e deletar tarefas. Desenvolvida com `Node.js` e `Express`.

---

## 🏗️ Estrutura de uma tarefa

Cada tarefa é estruturada da seguinte maneira:

| Campo   | Tipo   | Descrição                        |
|---------|--------|-----------------------------------|
| `id`    | string | ID único gerado automaticamente  |
| `title` | string | Título da tarefa                 |
| `content` | string | Descrição ou conteúdo da tarefa  |
| `date`  | string | Data de criação ou atualização (formato `dd/mm/aaaa`) |
| `status`| string | Status da tarefa (`Incompleta`, `Completa` ou outro definido) |

---

## 📦 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/rmftelier/projeto1-api-aprofunda.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd projeto1-api-aprofunda/api
    ```

3. Instale as dependências:

    ```bash
      npm install
    ```

4. Inicie o servidor: 

    ```bash
      npm start
    ```
5. Para testar as rotas utilize ferramentas como: ThunderClient ou Postman e faça as requisições que desejar para testar os endpoints da API. 


---

## 🔗 Rotas da API

### ✅ Listar todas as tarefas
`GET /tasks`

![alt text](/assets/getTasks.png)

### 🔍 Buscar uma tarefa por ID
`GET /tasks/:id`

![alt text](/assets/getTasksId.png)

### ➕ Criar uma nova tarefa
`POST /tasks`

Body (JSON):

![alt text](/assets/bodyPostTasks.png)

Resposta:

![alt text](/assets/postTasks.png)

### ✏️ Atualizar uma tarefa
`PUT /tasks/:id`

Body (JSON):

![alt text](/assets/bodyPutTasks.png)

Resposta:

![alt text](/assets/putTasks.png)

### 🗑️ Deletar uma tarefa
`DELETE /tasks/:id`

Resposta:

![alt text](/assets/deleteTasks.png)

---

<div align="center"> 
  <p> 💌 Desenvolvido por Roberta Meyrelles</p>
  <a href = "mailto:bertameyrelles@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/roberta-meyrelles" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href="https://github.com/rmftelier" target="_blank"><img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"></a>
</div>