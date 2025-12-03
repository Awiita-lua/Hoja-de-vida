// check.js
const db = require('./database');

db.all('SELECT * FROM projects', (err, rows) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Proyectos en la DB:', rows);
  }
  db.close();
});