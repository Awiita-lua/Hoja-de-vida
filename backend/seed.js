// seed.js
const db = require('./database');

// Limpia y llena "about"
db.run(`DELETE FROM about`);
db.run(`INSERT INTO about (content) VALUES (?)`, [
  "Soy una persona responsable, dedicada y comprometida con todo lo que emprendo. Aunque soy introvertida, valoro profundamente el trabajo en equipo y me adapto con facilidad a entornos colaborativos. Me gusta aprender algo nuevo cada día, y siempre busco dar lo mejor en cada tarea. Fuera del código, disfruto de los pequeños placeres: leer, dibujar y pasar tiempo con mis gatos, quienes me inspiran a ser paciente, observadora y detallista."
]);

// Limpia y llena "experiences"
db.run(`DELETE FROM experiences`);
db.run(`INSERT INTO experiences (role, company, period, description) VALUES (?, ?, ?, ?)`, [
  "Monitoría Administrativa",
  "Universidad Del Valle Regional Eje Cafetero Sede Caicedonia",
  "2025-1, 2025-2",
  "Redacción y gestión de comunicaciones formales (correos, informes, recordatorios). Creación de guías paso a paso para inducciones y protocolos operativos. Diseño y creación de formularios digitales y físicos para recolección de información. Desarrollo de fichas técnicas, matrices de identificación de peligros y formatos de inventario."
]);

// Limpia y llena "projects"
db.run(`DELETE FROM projects`);
db.run(`INSERT INTO projects (title, description, technologies, github_url, image_urls) VALUES (?, ?, ?, ?, ?)`, [
  "Sistema PetroGas",
  "Aplicación web integral con arquitectura full-stack para la gestión operativa de una estación de servicio. Desarrollé interfaces responsivas (HTML, CSS, JavaScript/JSX) y lógica de backend en Python para procesamiento de datos, autenticación y gestión de transacciones. Incluye módulos para empleados (ventas, clientes, productos), clientes (historial) y administración (inventario, proveedores, reportes).",
  JSON.stringify(["HTML", "CSS", "JavaScript", "Python"]),
  "https://github.com/Karatsuyu/Proyecto-PetroGas-Oficial.git",
  JSON.stringify(["/imagen1.png", "/imagen2.png", "/imagen3.png", "/imagen4.png"])
]);

db.run(`INSERT INTO projects (title, description, technologies, github_url, image_urls) VALUES (?, ?, ?, ?, ?)`, [
  "Delicious Food",
  "Plataforma web full-stack para un restaurante de comidas rápidas. Diseñé y desarrollé el frontend interactivo (HTML, CSS, JavaScript/JSX) y el backend con manejo completo de base de datos en PostgreSQL para productos, pedidos, usuarios y notificaciones. Permite personalizar combos, ver precios en tiempo real y sigue el estado del pedido desde el carrito hasta su entrega.",
  JSON.stringify(["HTML", "CSS", "JavaScript", "Python", "PostgreSQL"]),
  "https://github.com/Karatsuyu/delicious-food-app.git",
  JSON.stringify(["/imagen5.png", "/imagen6.png", "/imagen7.png"])
]);

console.log("✅ Datos reales insertados");
process.exit(0);