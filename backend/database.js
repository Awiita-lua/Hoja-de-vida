// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta fija: la base de datos siempre estará en la raíz del backend
const dbPath = path.resolve(__dirname, 'data.db');
const db = new sqlite3.Database(dbPath);

console.log('📂 Base de datos en:', dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS about (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS experiences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      role TEXT NOT NULL,
      company TEXT NOT NULL,
      period TEXT NOT NULL,
      description TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      technologies TEXT NOT NULL,
      github_url TEXT,
      image_urls TEXT NOT NULL
    )
  `);
});

module.exports = db;