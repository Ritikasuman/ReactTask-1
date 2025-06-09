import React from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { FaRegDotCircle } from "react-icons/fa";
import logo from "../assets/ValueImg.webp";
import fly from  "../assets/OurValuesImgOne.webp";


const ValueSection = () => {
  const leftValues = ['Transparency', 'Innovation', 'Results-Driven', 'Client-Centric'];
  const rightValues = ['Integrity', 'Accountability', 'Collaboration', 'Excellence'];

  return (
    <div className="value-section">
      <div className="value-container">
        <div className="value-content">
          <div className="value-badge">
          <FaRegDotCircle/>OUR VALUES
          </div>
          <h2 className="value-title">Principles that drive<br/>performance</h2>
          <p className="value-description">
            Empowering brands with innovative designs and tailored strategies to<br/> thrive and grow in the ever-evolving digital landscape.
          </p>
          <div className="values-grid">
            <div className="values-column">
              {leftValues.map((value, index) => (
                <div key={index} className="value-item">
                <CiCircleCheck />
                  <span className="value-text">{value}</span>
                </div>
              ))}
            </div>
            <div className="values-column">
              {rightValues.map((value, index) => (
                <div key={index} className="value-item">
                 <CiCircleCheck />
                  <span className="value-text">{value}</span>
                </div>
              ))}
            </div>
             <div className='flytransparent'>
                <div className='flyimg'>
                   <img src = {fly} alt="man flying" />
                </div>
             </div>
          </div>
        </div>

        <div className="value-image">
          <img 
            src={logo}
            alt="Team member" 
          />
        </div>
      </div>
      
     
       
    </div>
  );
};

export default ValueSection;
