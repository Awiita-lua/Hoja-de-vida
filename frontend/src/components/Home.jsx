import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hola, Soy <span>Laura Sofia</span></h1>
        <h3>Futura Desarrolladora de <span>Software</span></h3>
        <p>Estudiante de Tecnología en Desarrollo de Software, con conocimientos prácticos en lenguajes como Python y JavaScript, 
          además de experiencia en el desarrollo web con HTML, CSS y bases de datos PostgreSQL. Tengo una actitud proactiva, 
          gran interés por aprender nuevas tecnologías y resolver problemas de forma eficiente. Busco mi primera oportunidad 
          profesional para aplicar lo aprendido, seguir creciendo como desarrolladora y contribuir en proyectos reales con 
          enfoque colaborativo y calidad técnica. </p>

        <div className="social-icons">
            <a href="https://github.com/Awiita-lua" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/laura-sofia-132471392/" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://wa.me/qr/6XRXPATH6S2QF1" target="_blank" rel="noreferrer">
                <FaWhatsapp />
            </a>
        </div>

        <div className="btn-group">
          <a href="#contact" className="btn">Contactar</a>
        </div>
      </div>

      <div className="home-img">
        <img src="/foto.jpg" alt="Foto de Perfil" />
      </div>
    </section>
  );
};

export default Home;