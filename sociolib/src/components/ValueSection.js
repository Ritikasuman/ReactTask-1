import React from 'react';

const ValueSection = () => {
  const leftValues = ['Transparency', 'Innovation', 'Results-Driven', 'Client-Centric'];
  const rightValues = ['Integrity', 'Accountability', 'Collaboration', 'Excellence'];

  return (
    <div className="value-section">
      <div className="value-container">
        <div className="value-content">
          <div className="value-badge">
            <span className="value-dot"></span>
            OUR VALUES
          </div>
          <h2 className="value-title">Principles that drive performance</h2>
          <p className="value-description">
            Empowering brands with innovative designs and tailored strategies to grow in the digital world.
          </p>
          <div className="values-grid">
            <div className="values-column">
              {leftValues.map((value, index) => (
                <div key={index} className="value-item">
                  <span className="value-checkmark">✓</span>
                  <span className="value-text">{value}</span>
                </div>
              ))}
            </div>
            <div className="values-column">
              {rightValues.map((value, index) => (
                <div key={index} className="value-item">
                  <span className="value-checkmark">✓</span>
                  <span className="value-text">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="value-image">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-06%20173812-AwYc7sGwhBDxxSy5vAL4u5PjCxjuFS.png" 
            alt="Team member" 
            className="team-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
