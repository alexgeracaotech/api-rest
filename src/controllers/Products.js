import { Erro } from '../Utils/Error.js';

export class Produtos {

  index(req, res) {

    const { pagina, limite } = req.query;

    res.send(`Página ${pagina} de ${limite}.`);

  }

  create(req, res) {

    const { nome, preco } = req.body;
    const id = req.user_id;

    if(!nome || !preco || preco < 0){
      throw new Erro('Erro ao cadastrar produto. Informe os campos obrigatório.');
    }

    res.status(201).json({ id, nome, preco });
  }

}