import React from 'react';
import logo from '../assets/digibiz.webp';

function Header() {
  return (
    <nav className="navbar">
      <img src={logo} alt="DigiBiz Logo" className="logo scale-up-img"  />
      <ul className="nav-links">
        
        <li className="dropdown">
          <a href="#home">Home</a>
          <ul className="dropdown-menu">
            <li><a href="#home2">Home 2</a></li>
            <li><a href="#home3">Home 3</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#pages">Pages</a>
          <ul className="dropdown-menu">
            <li><a href="#process">Process</a></li>
            <li><a href="#single-services">Single Services</a></li>
            <li><a href="#single-portfolio">Single Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#coming-soon">Coming Soon</a></li>
          </ul>
        </li>

        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Header;
