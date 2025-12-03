import React from 'react';
import { FaTrophy, FaAward } from 'react-icons/fa';

const Educacion = () => {
  return (
    <section className="educacion" id="educacion">
      <h2 className="heading">Educación</h2>
      <div className="educacion-container">
        <div className="educacion-box">
          <div className="educacion-info">
          <FaTrophy/>
            <h4>Bachillerato</h4>
            <p>Institución Educativa Bolivariano -
              Bachiller Técnico. Especialidad en Conservación de Recursos Naturales SENA, 
              7 DICIEMBRE 2022.</p> 
          </div>
        </div>
        <div className="educacion-box">
          <div className="educacion-info">
            <FaAward/>
            <h5>Certificación en Inglés – Nivel 1</h5>
            <p>SENA 2024
              ENGLISH DOES WORK - LEVEL 1 Con una intensidad horaria de Cuarenta y Ocho (48) evalución Apto (A) con una
              equivalencia de (4.5), MARZO 2024.
            </p>
          </div>
        </div>
        <div className="educacion-box">
          <div className="educacion-info">
          <FaAward/>
            <h6>Certificación en Inglés - Nivel 2</h6>
              <p>SENA 2025
                ENGLISH DOES WORK - LEVEL 2 Con una intesidad horaria de Cuarenta y Ocho (48) evalución Apto (A) con una
                equivalencia de (4.5), SEPTIEMBRE 2025.
              </p>
          </div>
        </div>  
      </div>  
    </section>
  );
};

export default Educacion;