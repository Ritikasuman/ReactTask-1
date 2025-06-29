import React from 'react';
import logo from '../assets/main-hero-digibiz.webp';
import mega from '../assets/megaSponsorlogo.webp';
import ultrap from '../assets/ultraPSponsorLogo.webp';
import ultra from '../assets/ultraSponsorLogo.webp';
import power from '../assets/powerSponsorLogo.webp';
import hyper from '../assets/HyperSponsorLogo.webp';
import vedio from '../assets/vedio.gif'
function SectionOne() {
  return (
    <div className='Main'>
     <div className="home-section">
      {/* Background video */}
      <div className="video-section">
  <img src={vedio} alt="Background Animation" className="video-bg" />
</div>


      {/* Content*/}
      <span className="content-container">
        <div className="left-section">
          <h1 className="Main-heading">Transform your<br />vision into digital<br />excellence</h1>
          <p className="Main-subtext">
            Empowering brands with innovative designs and tailored<br />
            business strategies to thrive and grow in the ever-evolving<br />
            digital landscape.
          </p>

          <div className="SectionOne-buttons">
            <button className="button primary">View Portfolio</button>
            <button className="button secondary">&#9654; Watch Reels</button>
          </div>
        </div>

        <div className="right-section  scale-up-img ">
          <img src={logo} alt="hero" className="hero-img" />
        </div>

      </span> 
      <div className='SponsorMain'>
               <div className='SponsorSub'>
                  <img src={mega} alt="logo" className="Slogo scale-up-img" />
                  <img src={power} alt="logo" className="Slogo scale-up-img" />
                  <img src={hyper} alt="logo" className="Slogo scale-up-img" />
                  <img src={ultra} alt="logo" className="Slogo scale-up-img" />
                  <img src={ultrap} alt="logo" className="Slogo scale-up-img" />
                  <img src={mega} alt="logo" className="Slogo scale-up-img" />
                     </div>
      </div> 
      
    </div>
          

</div>
   
  );
}

export default SectionOne;
