// seed.js
const db = require('./database');

db.serialize(() => {
  // Limpiar
  db.run('DELETE FROM about');
  db.run('DELETE FROM experiences');
  db.run('DELETE FROM projects');

  // Insertar "about" (solo un registro)
  db.run(
    `INSERT INTO about (id, content) VALUES (1, ?)`,
    ["Estudiante de Tecnología en Desarrollo de Software, con conocimientos prácticos en lenguajes como Python y JavaScript, además de experiencia en el desarrollo web con HTML, CSS y bases de datos PostgreSQL. Tengo una actitud proactiva, gran interés por aprender nuevas tecnologías y resolver problemas de forma eficiente. Busco mi primera oportunidad profesional para aplicar lo aprendido, seguir creciendo como desarrolladora y contribuir en proyectos reales con enfoque colaborativo y calidad técnica."]
  );

  // Insertar experiencia
  db.run(
    `INSERT INTO experiences (role, company, period, description) VALUES (?, ?, ?, ?)`,
    [
      "Monitoría Administrativa",
      "Universidad Del Valle Regional Eje Cafetero Sede Caicedonia",
      "2025-1, 2025-2",
      "Redacción y gestión de comunicaciones formales (correos, informes, recordatorios). Creación de guías paso a paso para inducciones y protocolos operativos. Diseño y creación de formularios digitales y físicos para recolección de información. Desarrollo de fichas técnicas, matrices de identificación de peligros y formatos de inventario."
    ]
  );

  // Insertar proyectos
  const projects = [
    {
      title: "Sistema PetroGas",
      description: "Aplicación web integral con arquitectura full-stack para la gestión operativa de una estación de servicio. Desarrolla interfaces responsivas (HTML, CSS, JavaScript/JSX) y lógica de backend en Python para procesamiento de datos, autenticación y gestión de transacciones. Incluye módulos para empleados (ventas, clientes, productos), clientes (historial) y administración (inventario, proveedores, reportes).",
      technologies: JSON.stringify(["HTML", "CSS", "JavaScript", "Python"]),
      github_url: "https://github.com/Karatsuyu/Proyecto-PetroGas-Oficial.git",
      image_urls: JSON.stringify(["/imagen1.png", "/imagen2.png", "/imagen3.png", "/imagen4.png"])
    },
    {
      title: "Delicious Food",
      description: "Plataforma web full-stack para un restaurante de comidas rápidas. Diseñé y desarrollé el frontend interactivo (HTML, CSS, JavaScript/JSX) y el backend con manejo completo de base de datos en SQLite para productos, pedidos, usuarios y notificaciones. Permite personalizar combos, ver precios en tiempo real y sigue el estado del pedido desde el carrito hasta su entrega.",
      technologies: JSON.stringify(["HTML", "CSS", "JavaScript", "Python", "SQLite"]),
      github_url: "https://github.com/Karatsuyu/delicious-food-app.git",
      image_urls: JSON.stringify(["/imagen5.png", "/imagen6.png", "/imagen7.png"])
    }
  ];

  const stmt = db.prepare(`
    INSERT INTO projects (title, description, technologies, github_url, image_urls)
    VALUES (?, ?, ?, ?, ?)
  `);

  projects.forEach(p => {
    stmt.run(p.title, p.description, p.technologies, p.github_url, p.image_urls);
  });

  stmt.finalize();
  console.log("✅ Datos insertados en SQLite");
});

// Cerrar DB después de 1 segundo
setTimeout(() => db.close(), 1000);