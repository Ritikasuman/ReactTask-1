import React from 'react';
import logo from '../assets/digibiz.webp';
import hero from '../assets/main-hero-digibiz.webp';

function Home() {
  return (
    <div id = "root ">
    <section id="first">
      
      <div className="vedio-section ">
       <iframe
          src="https://www.youtube.com/embed/RBnObvMCpOU?autoplay=1&mute=1&loop=1&playlist=RBnObvMCpOU"
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <nav>
        <img src={logo} alt="logo" />
        <a href="#home">Home</a> |<a href="#Pages">Pages</a> |<a href="#services">Services</a> |<a href="#Portfolio">Portfolio</a> |  <a href="#about">About</a>
      </nav>
      <hr/>
    </section>
    
  <div className='parentdiv'>
    <div className='leftdiv'>

    <div id="transform">
      <p>Transform Your<br/>vision into digital<br/> excellence </p>
    </div>

     <div>
      <p>Empowering brands with innovative designs and tailored <br/>business strategies to thrive and grow in the ever-evolving <br/> digital landscape. </p>
    </div>
    
    <div>
      <button>View Portfolio</button>
      <button>Watch Reels</button>
    </div>
    </div>

    
    <div id="Heroimage" className='rightdiv'>
      <img src={hero} alt="hero" className="hero-img" />
    </div>
  </div>





 </div>


    

  );
}

export default Home;
