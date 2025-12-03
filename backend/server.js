// server.js
const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Ruta: GET /api/about
app.get('/api/about', (req, res) => {
  db.get('SELECT content FROM about LIMIT 1', (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row ? { content: row.content } : { content: '' });
  });
});

// Ruta: GET /api/experiences
app.get('/api/experiences', (req, res) => {
  db.all('SELECT * FROM experiences', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Ruta: GET /api/projects
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
      res.status(500).json({ error: 'Error al procesar proyectos' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});