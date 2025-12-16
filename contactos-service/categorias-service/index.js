const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Datos en memoria
let categorias = [
  { id: 1, nombre: "Familia" },
  { id: 2, nombre: "Trabajo" }
];

// GET
app.get('/categorias', (req, res) => {
  res.json(categorias);
});

// POST
app.post('/categorias', (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ mensaje: "El nombre es obligatorio" });
  }

  const nuevaCategoria = {
    id: categorias.length + 1,
    nombre
  };

  categorias.push(nuevaCategoria);
  res.status(201).json(nuevaCategoria);
});

// PUT
app.put('/categorias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre } = req.body;

  const categoria = categorias.find(c => c.id === id);
  if (!categoria) {
    return res.status(404).json({ mensaje: "Categoría no encontrada" });
  }

  categoria.nombre = nombre;
  res.json(categoria);
});

// DELETE
app.delete('/categorias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  categorias = categorias.filter(c => c.id !== id);
  res.json({ mensaje: "Categoría eliminada" });
});

app.listen(PORT, () => {
  console.log(`Categorias-service corriendo en puerto ${PORT}`);
});
