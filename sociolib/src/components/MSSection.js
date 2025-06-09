import React from "react";
import image1 from "../assets/OneMS.webp";
import image2 from "../assets/TwoMS.webp";  // Replace with actual file name
import image3 from "../assets/ThreeMS.webp"; // Replace with actual file name
import image4 from "../assets/FourMS.webp"; 
import { FaRegDotCircle } from "react-icons/fa";

const MSSection = () => {
  // Service card data
  const services = [
    {
      id: 1,
      image: image1,
      title: "Design",
      description: "Empowering brands with innovative designs and tailored strategies",
    },
    {
      id: 2,
      image: image2,
      title: "Ideas",
      description: "Empowering brands with innovative designs and tailored strategies",
    },
    {
      id: 3,
      image:image3,
      title: "Marketing",
      description: "Empowering brands with innovative designs and tailored strategies",
    },
    {
      id: 4,
      image:image4,
      title: "Strategy",
      description: "Empowering brands with innovative designs and tailored strategies",
    },
  ];

  return (
    <div className="MService">
      <div className="badge">
        <FaRegDotCircle/>SERVICES
      </div>
      
      <div className="heading">
          <h2>We handle the digital, you <br/> focus on business</h2>
      </div>
      
      <div className="viewAll">
        <a href="#">View All <span>→</span></a>
      </div>
      
      <div className="Flags">
        {services.map((service) => (
          <div className="ImgFlag" key={service.id}>
            <div className="image-container">
              <img src={service.image || "/placeholder.svg"} alt={service.title} />
            </div>
            
            <div className="Content">
              <div className="subcontent">
                <div className="topicname">
                  <h3>{service.title}</h3>
                </div>
                <div className="context">
                  <p>{service.description}</p>
                </div>
              </div>
              <div className="Learnmore">
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MSSection;