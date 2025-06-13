import React from "react";

import design from "../assets/OneMS.webp";
import ideas from "../assets/TwoMS.webp";
import marketing from "../assets/ThreeMS.webp";
import strategy from "../assets/FourMS.webp";
import { FaRegDotCircle } from "react-icons/fa";
const services = [
  {
    id: 1,
    image: design,
    title: "Design",
    description:(
    <>
      Empowering brands with <br />
      innovative designs and<br />
       tailored strategies
    </>
  ),
  },
  {
    id: 2,
    image: ideas,
    title: "Ideas",
     description:(
    <>
      Empowering brands with <br />
      innovative designs and<br />
       tailored strategies
    </>
  ),
  },
  {
    id: 3,
    image: marketing,
    title: "Marketing",
    description:(
    <>
      Empowering brands with <br />
      innovative designs and<br />
       tailored strategies
    </>
  ),
  },
  {
    id: 4,
    image: strategy,
    title: "Strategy",
    description:(
    <>
      Empowering brands with <br />
      innovative designs and<br />
       tailored strategies
    </>
  ),
  },
];

function MSSection() {
  return (
    <section className="ms-section">
    <div className="subMs">
      <div className="ms-header">
         <div className="ms-tag">
           <span className="badge">  <FaRegDotCircle className="badgecolor"/> SERVICES</span>
         </div>

        <div className="head">
               <div className="ms-heading">
                  <h2>We handle the digital, you <br />focus on business</h2>
               </div>

               <div className="ms-view">
                 <a href="#" className="ms-view-all">View All →</a>
               </div>
        </div>
      </div>


      <div className="ms-cards">
        {services.map(service => (
          <div className="ms-card" key={service.id}>
            <img src={service.image} alt={service.title} className="ms-icon" />
            <div className="SecondContent">
               <h3>{service.title}</h3>
               <p>{service.description}</p>
               <a href="#" className="ms-learn">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default MSSection;
