
export class Produtos {

  index(req, res) {

    const { pagina, limite } = req.query;

    res.send(`Página ${pagina} de ${limite}.`);

  }

  create(req, res) {
    
    const { nome, preco } = req.body;
    const id = req.user_id;

    res.status(201).json({ id, nome, preco });
  }

}