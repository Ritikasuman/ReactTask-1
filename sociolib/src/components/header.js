import React from 'react';
import logo from '../assets/envato_market.svg';

function Header() {
  return (
    <header >
       <img src={logo} alt="eLogo" className="elogo-img" />
      <div className="header-button">
        <button className="buy-now">Buy Now</button>
      </div>
    </header>
  );
}

export default Header;
