import React from 'react';
import Carousel from './Carousel';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Proyectos</h2>
      
      <div className="projects-container">
        <div className="project-card">
          <Carousel 
            images={[
              { src: "/imagen1.png", alt: "PetroGas 1" },
              { src: "/imagen2.png", alt: "PetroGas 2" },
              { src: "/imagen3.png", alt: "PetroGas 3" },
              { src: "/imagen4.png", alt: "PetroGas 4" }
            ]} 
          />
          <div className="project-info">
            <h3>Sistema PetroGas</h3>
            <p>Aplicación web integral con arquitectura full-stack para la gestión operativa de una estación de servicio. Desarrolla interfaces responsivas (HTML, CSS, JavaScript/JSX) y lógica de backend en Python para procesamiento de datos, autenticación y gestión de transacciones. Incluye módulos para empleados (ventas, clientes, productos), clientes (historial) y administración (inventario, proveedores, reportes).</p>
            <div className="project-tech">
              <strong>HTML</strong>
              <strong>CSS</strong>
              <strong>Python</strong>
              <strong>JavaScript</strong>
            </div>
            <a href="https://github.com/Karatsuyu/Proyecto-PetroGas-Oficial.git" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <Carousel 
            images={[
              { src: "/imagen5.png", alt: "Inicio" },
              { src: "/imagen6.png", alt: "Personalización" },
              { src: "/imagen7.png", alt: "Menu" }
            ]} 
          />
          <div className="project-info">
            <h3>Delicious Food</h3>
            <p>Plataforma web full-stack para un restaurante de comidas rápidas. Diseñé y desarrollé el frontend interactivo (HTML, CSS, JavaScript/JSX) y el backend con manejo completo de base de datos en SQLite para productos, pedidos, usuarios y notificaciones. Permite personalizar combos, ver precios en tiempo real y sigue el estado del pedido desde el carrito hasta su entrega.</p>
            <div className="project-tech">
              <strong>HTML</strong>
              <strong>CSS</strong>
              <strong>SQLite</strong>
              <strong>Python</strong>
              <strong>JavaScript</strong>
            </div>
            <a href="https://github.com/Karatsuyu/delicious-food-app.git" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Projects;