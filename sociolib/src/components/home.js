import React from 'react';
import logo from '../assets/digibiz.webp';

function Home() {
  return (
    
    <section id="hero">
      <div className="first-section">
      <iframe
          src="https://www.youtube.com/embed/RBnObvMCpOU?autoplay=1&mute=1&loop=1&playlist=RBnObvMCpOU"
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <nav>
        <img src={logo} alt="Logo" />
        <a href="#home">Home</a> |<a href="#Pages">Pages</a> |<a href="#services">Services</a> |<a href="#Portfolio">Portfolio</a> |  <a href="#about">About</a>
      </nav>

      <h1>Grow Your Business Digitally</h1>
      <p>We are a full-service digital marketing agency.</p>
      <button>Get Started</button>



    </section>
  );
}

export default Home;
