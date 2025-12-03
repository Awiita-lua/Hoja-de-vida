import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const toggleMenu = () => {
    document.querySelector('.navbar')?.classList.toggle('activate');
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        Laura Sofia <span>Bueno Rincón</span>
      </a>
      <FaBars id="menu-icon" onClick={toggleMenu} />
      <nav className="navbar">
        <a href="#home">Inicio</a>
        <a href="#about">Sobre Mi</a>
        <a href="#educacion">Educación</a>
        <a href="#experiences">Experiencia</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;