import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Educacion from './components/Educacion';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Educacion />
      <Experiences />
      <Projects />
      <Contact />
      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/Awiita-lua" target="_blank" rel="noreferrer">
            <FaGithub/>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin/>
          </a>
          <a href="https://wa.me/qr/6XRXPATH6S2QF1" target="_blank" rel="noreferrer">
            <FaWhatsapp/>
          </a>
        </div>
        <ul className="list">
          <li><a href="#educacion">Educacion</a></li>
          <li><a href="#about">Sobre Mi</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <p className="copyright">&copy; Laura Sofia | Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;