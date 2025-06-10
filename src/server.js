
import express from 'express';
import { rotas } from './routes/index.js'

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log('Servidor rodando em http://localhost:3000.'));

app.use(express.json());
app.use(rotas);
