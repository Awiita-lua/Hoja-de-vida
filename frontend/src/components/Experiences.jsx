import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experiences = () => {
  return (
    <section className="experiences" id="experiences">
      <h2 className="heading">Experiencia</h2>
    
      <div className="exp-item">
        <div className="exp-icon">
          <FaBriefcase/>
        </div>
        <div className="exp-content">
          <h3>Monitoria Administrativa</h3>
          <h4>Universidad Del Valle Regional Eje Cafetero Sede Caicedonia</h4>
          <p><small>2025-1, 2025-2</small></p>
          <ul>
            <li>Redacción y gestión de comunicaciones formales (correos, informes, recordatorios).</li>
            <li>Creación de guías paso a paso para inducciones y protocolos operativos.</li>
            <li>Diseño y creación de formularios digitales y físicos para recolección de información.</li>
            <li>Desarrollo de fichas técnicas, matrices de identificación de peligros y formatos de inventario.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experiences;