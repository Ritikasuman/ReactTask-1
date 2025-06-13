import { useState } from "react";
import logo from '../assets/ServiceImg.webp';
import { FaRegDotCircle } from "react-icons/fa";

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const services = [
    {
      title: "Graphic Design",
      description: "Whether you need a brand-new website, a rebranding campaign, or a performance boost for your current platform, we’ve got you covered. Building user-friendly, mobile-optimized websites"
    },
    {
      title: "Interactive Design",
      description: "Whether you need a brand-new website, a rebranding campaign, or a performance boost for your current platform, we’ve got you covered. Building user-friendly, mobile-optimized websites"
    },
    {
      title: "Web Development",
      description: "Whether you need a brand-new website, a rebranding campaign, or a performance boost for your current platform, we’ve got you covered. Building user-friendly, mobile-optimized websites"
    },
    {
      title: "Social Media Marketing",
      description: "Whether you need a brand-new website, a rebranding campaign, or a performance boost for your current platform, we’ve got you covered. Building user-friendly, mobile-optimized websites."
    },
    {
      title: "Content Marketing",
      description: "Whether you need a brand-new website, a rebranding campaign, or a performance boost for your current platform, we’ve got you covered. Building user-friendly, mobile-optimized websites"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-left">
        <img src={logo} alt="Rocket Fun" className="services-img" />
      </div>
     
      <div className="services-right">
         <div className="value-badge">
          <FaRegDotCircle className="badgecolor"/>WHAT WE DO 
          </div>
        {services.map((service, index) => (
          <div key={index}>
            <div className="service-item" onClick={() => handleToggle(index)}>
              {service.title}
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className={`service-description ${openIndex === index ? "open" : ""}`}>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
