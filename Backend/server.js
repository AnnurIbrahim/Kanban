// server.js
const express = require('express');
const cors = require('cors');
const Taak = require('./js/model');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/taak', async (req, res) => {
  const taak = await Task.getAllTaaks();
  res.json(taak);
});

app.post('/api/taak', async (req, res) => {
  const { title, description, priority } = req.body;
  await Task.createTaak(title, description, priority);
  res.sendStatus(201);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is gestart op http://localhost:${PORT}`);
});
