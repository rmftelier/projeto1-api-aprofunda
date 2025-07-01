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

## 🔗 Exemplos de Requisição

### ✅ Listar todas as tarefas | `GET /tasks`

**Requisição:**
````
GET http://localhost:3000/tasks
````

**Resposta:**
```json 
[]
```

### ➕ Criar uma nova tarefa | `POST /tasks`

**Requisição:**
````
POST http://localhost:3000/tasks
````

Corpo (Body):

```json
  {
    "title": "Aprofunda | Pretalab",
    "content": "Entrega do Projeto Guiado",
    "status": "Em Andamento"
  }
```

**Resposta:**
```json
{
  "message": "A tarefa com o título: Aprofunda | Pretalab foi criada com sucesso!",
  "task": {
      "id": "1c2da18e-cf5b-4dd4-b631-695a85eaecd4",
      "title": "Aprofunda | Pretalab",
      "content": "Entrega do Projeto Guiado",
      "date": "01/07/2025",
      "status": "Em Andamento"
    }
}
```

### 🔍 Buscar uma tarefa por ID | `GET /tasks/:id`

**Requisição:**
````
GET http://localhost:3000/tasks/1c2da18e-cf5b-4dd4-b631-695a85eaecd4
````

**Resposta:**

```json
{
  "id": "1c2da18e-cf5b-4dd4-b631-695a85eaecd4",
  "title": "Aprofunda | Pretalab",
  "content": "Entrega do Projeto Guiado",
  "date": "01/07/2025",
  "status": "Em Andamento"
}
```


### ✏️ Atualizar uma tarefa | `PUT /tasks/:id`

**Requisição:**
````
PUT http://localhost:3000/tasks/1c2da18e-cf5b-4dd4-b631-695a85eaecd4
````

Corpo (Body):

```json
{
  "title": "Projeto Guiado 1 API",
  "content": "Codificar o Projeto Guiado do Módulo 1",
  "status": "Em Andamento"
}
```

**Resposta:**

```json
{
  "message": "Tarefa com o id: 1c2da18e-cf5b-4dd4-b631-695a85eaecd4 foi atualizada.",
  "task": {
    "id": "1c2da18e-cf5b-4dd4-b631-695a85eaecd4",
    "title": "Projeto Guiado 1 API",
    "content": "Codificar o Projeto Guiado do Módulo 1",
    "date": "01/07/2025",
    "status": "Em Andamento"
  }
}
```

### 🗑️ Deletar uma tarefa | `DELETE /tasks/:id`

**Requisição:**
````
DELETE http://localhost:3000/tasks/1c2da18e-cf5b-4dd4-b631-695a85eaecd4
````

**Resposta:**

```json
204 NO CONTENT
```

---

<div align="center"> 
  <p> 💌 Desenvolvido por Roberta Meyrelles</p>
  <a href = "mailto:bertameyrelles@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/roberta-meyrelles" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href="https://github.com/rmftelier" target="_blank"><img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"></a>
</div>