const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

let contador = 0;

app.post('/contador', (req, res) => {
  contador += 1;
  res.json({
    contador: contador
  });
});

app.get('/contador', (req, res) => {
  res.json({
    contador: contador
  });
});

app.delete('/contador', (req, res) => {
  contador = 0;
  res.json({
    contador: contador
  });
});

app.listen(3000, () => console.log('Servidor ejecutandose en http://localhost:3000'))