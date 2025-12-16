const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // MUY IMPORTANTE

let contactos = [];
let id = 1;

/* ===== GET ===== */
app.get('/contactos', (req, res) => {
  res.json(contactos);
});

/* ===== POST ===== */
app.post('/contactos', (req, res) => {
  const { nombre, telefono, categoria } = req.body;

  if (!nombre || !telefono || !categoria) {
    return res.status(400).json({ mensaje: 'Datos incompletos' });
  }

  const nuevoContacto = {
    id: id++,
    nombre,
    telefono,
    categoria
  };

  contactos.push(nuevoContacto);
  res.status(201).json(nuevoContacto);
});

/* ===== PUT ===== */
app.put('/contactos/:id', (req, res) => {
  const contacto = contactos.find(c => c.id == req.params.id);

  if (!contacto) {
    return res.status(404).json({ mensaje: 'Contacto no encontrado' });
  }

  contacto.nombre = req.body.nombre || contacto.nombre;
  contacto.telefono = req.body.telefono || contacto.telefono;
  contacto.categoria = req.body.categoria || contacto.categoria;

  res.json(contacto);
});

/* ===== DELETE ===== */
app.delete('/contactos/:id', (req, res) => {
  contactos = contactos.filter(c => c.id != req.params.id);
  res.json({ mensaje: 'Contacto eliminado' });
});

/* ===== SERVER ===== */
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`✅ Contactos-service corriendo en http://localhost:${PORT}`);
});
