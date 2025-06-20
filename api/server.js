const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta: ${PORT}`);
});
