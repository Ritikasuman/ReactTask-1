import React from 'react';
import mega from '../assets/megaSponsorlogo.webp';
import ultrap from '../assets/ultraPSponsorLogo.webp';
import ultra from '../assets/ultraSponsorLogo.webp';
import power from '../assets/powerSponsorLogo.webp';
import hyper from '../assets/HyperSponsorLogo.webp';


function Sponsor(){
return (
    <div className='SponsorMain'>
      <div className='SponsorSub'>
         <img src={mega} alt="logo" className="Slogo" />
         <img src={power} alt="logo" className="Slogo" />
         <img src={hyper} alt="logo" className="Slogo" />
         <img src={ultra} alt="logo" className="Slogo" />
         <img src={ultrap} alt="logo" className="Slogo" />
         <img src={mega} alt="logo" className="Slogo" />
            </div>
    </div>
  );
}

export default Sponsor;