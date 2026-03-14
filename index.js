const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let filmes = [
  { id: 1, titulo: "À Procura da Felicidade", ano: 2006 }
];

// listar filmes
app.get("/filmes", (req, res) => {
  res.json(filmes);
});

// buscar filme por id
app.get("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const filme = filmes.find(f => f.id === id);

  if (!filme) {
    return res.status(404).json({ mensagem: "Filme não encontrado" });
  }

  res.json(filme);
});

// cadastrar filme
app.post("/filmes", (req, res) => {
  const { titulo, ano } = req.body;

  const novoFilme = {
    id: filmes.length + 1,
    titulo,
    ano
  };

  filmes.push(novoFilme);

  res.status(201).json(novoFilme);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});