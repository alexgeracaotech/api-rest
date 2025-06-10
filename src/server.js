
import express from 'express';
import { rotas } from './routes/index.js';
import { Erro } from './Utils/Error.js';

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log('Servidor rodando em http://localhost:3000.'));

app.use(express.json());
app.use(rotas);
app.use((err, req, res, next) => {

  if (err instanceof Erro) {
    return res.status(err.status).json({ mensagem: err.mensagem })
  }

  res.status(500).json({ mensagem: err.mensagem });
})
