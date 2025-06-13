import React from 'react';
import logo from '../assets/ContactBackground.webp';
import useInView from './useInView';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="contact-section">
      <div className="contact-background">
        <img
          src={logo}
          alt="Team meeting background"
          className="background-image"
        />
        <div className="layer"></div>
      </div>

      <div className="contact-content">
        <div className="contact-button">CONTACT</div>

        <div
          className={`contact-text ${inView ? 'slide-up' : ''}`}
          ref={ref}
        >
          <h1 className="contact-title">
            Start your digital journey with confidence
          </h1>
          <p className="contact-subtitle">
            Empowering brands with innovative designs and tailored strategies to
            thrive and grow in the ever-evolving digital landscape.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
