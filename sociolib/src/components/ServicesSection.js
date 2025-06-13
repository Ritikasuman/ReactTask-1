import logo from '../assets/ServiceImg.webp'; 

const ServicesSection = () => {
  return (
    <div className="services-container">
      <div className="services-left">
        <img src={logo} alt="Rocket Fun" className="services-img" />
      </div>

        <div className="services-right">
          <h3>Graphic Design
            <span>+</span></h3> 
        <div/>

        <div className="service-item">
          <h3>Interactive Design 
            <span>+</span></h3>
        </div>
        <div className="service-item">
          <h3>Web Development 
            <span>+</span></h3>
        </div>
        <div className="service-item">
          <h3>Social Media Marketing 
            <span>+</span></h3>
        </div>
        <div className="service-item">
          <h3>Content Marketing
             <span>+</span></h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
