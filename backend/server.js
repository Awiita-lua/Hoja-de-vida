// server.js
const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3001;

app.use(cors());

// Ruta: /api/about
app.get('/api/about', (req, res) => {
  db.get('SELECT content FROM about WHERE id = 1', (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ content: row?.content || '' });
  });
});

// Ruta: /api/experiences
app.get('/api/experiences', (req, res) => {
  db.all('SELECT * FROM experiences', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Ruta: /api/projects
app.get('/api/projects', (req, res) => {
  db.all('SELECT * FROM projects', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    try {
      const projects = rows.map(p => ({
        ...p,
        technologies: JSON.parse(p.technologies),
        image_urls: JSON.parse(p.image_urls)
      }));
      res.json(projects);
    } catch (e) {
      res.status(500).json({ error: 'Error al parsear proyectos' });
    }
  });
});

// Ruta raíz (opcional)
app.get('/', (req, res) => {
  res.json({ message: 'Backend de hoja de vida funcionando ✅' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});