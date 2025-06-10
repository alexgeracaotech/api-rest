
import express from 'express';
import { logger } from './middlewares/logger.js';

const PORT = 3000;

const app = express();

app.listen(PORT, () => console.log('Servidor rodando em http://localhost:3000.'));

app.use(express.json());

app.get('/produtos', (req, res) => {
  
  const { pagina, limite } = req.query;
  
  res.send(`Página ${pagina} de ${limite}.`);
  
});

app.post('/produtos', logger, (req, res) => {

  const { nome, preco } = req.body;
  const id = req.user_id;
  
  res.status(201).json({id, nome, preco });
  
});
