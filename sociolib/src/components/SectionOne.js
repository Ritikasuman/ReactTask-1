import React from 'react';
import logo from '../assets/main-hero-digibiz.webp';

function SectionOne() {
  return (
    <div className="home-section">
      {/* Background video */}
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/RBnObvMCpOU?autoplay=1&mute=1&loop=1&playlist=RBnObvMCpOU"
          title="Background Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content*/}
      <div className="content-container">
        <div className="left-section">
          <h1 className="Main-heading">Transform your<br />vision into digital<br />excellence</h1>
          <p className="Main-subtext">
            Empowering brands with innovative designs and tailored<br />
            business strategies to thrive and grow in the ever-evolving<br />
            digital landscape.
          </p>

          <div className="SectionOne-buttons">
            <button className="button primary">View Portfolio</button>
            <button className="button secondary">Watch Reels</button>
          </div>
        </div>

        <div className="right-section">
          <img src={logo} alt="hero" className="hero-img" />
        </div>

      </div>
      
      
    </div>

   
  );
}

export default SectionOne;
