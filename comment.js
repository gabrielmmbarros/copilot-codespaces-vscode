// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor web!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


