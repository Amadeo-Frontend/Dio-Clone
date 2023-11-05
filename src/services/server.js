const express = require('express');
const app = express();
const port = 8001; // Porta para o servidor

app.use(express.json());

// Rota para criar um novo usuário
app.get('/api/users', (req, res) => {
  const { name, email, senha } = req.body;

  if (!name || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // Simule a leitura do arquivo db.json
  const users = require('./db.json');

  // Encontre o maior ID existente e gere o próximo ID
  const nextId = Math.max(0, ...users.map((user) => parseInt(user.id, 10))) + 1;

  // Crie o novo usuário
  const newUser = {
    id: nextId.toString(),
    name,
    email,
    senha,
  };

  // Adicione o novo usuário à lista de usuários
  users.push(newUser);

  // Simule a escrita no arquivo db.json
  const fs = require('fs');
  fs.writeFileSync('db.json', JSON.stringify(users, null, 2));

  return res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
