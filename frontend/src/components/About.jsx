// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/foto.jpg" alt="Foto de Perfil" />
      </div>
      
      <div className="about-content">
        <h2>Sobre <span>Mi</span></h2>
        <p>Soy una persona responsable, dedicada y comprometida con todo lo que emprendo. Aunque soy introvertida, 
          valoro profundamente el trabajo en equipo y me adapto con facilidad a entornos colaborativos. 
          Me gusta aprender algo nuevo cada dia, y siempre busco dar lo mejor en cada tarea. 
          Fuera del código, disfruto de los pequeños placeres: leer, dibujar y pasar tiempo con mis gatos, 
          quienes me inspiran a ser paciente, observadora y detallista.</p>
          <a href="#" className="btn">Leer mas</a>
      </div>
    </section>
  );
};

export default About;