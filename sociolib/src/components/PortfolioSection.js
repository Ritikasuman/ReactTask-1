import React, { useState, useEffect } from "react";
import image1 from "../assets/p1.webp";
import image2 from "../assets/P2.webp";
import image3 from "../assets/P3.webp";
import { FaRegDotCircle } from "react-icons/fa";
const PortfolioSection = () => {
  // Portfolio projects data - only 3 projects
  const projects = [
    {
      id: 1,
      image: image1,
      title: "1998 Cafe Bagels",
      description: "Branding & Interior Design",
    },
    {
      id: 2,
      image: image2,
      title: "Book Mockup",
      description: "Print Design",
    },
    {
      id: 3,
      image: image3,
      title: "Mobile App",
      description: "UI/UX Design",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  };

  // Function to handle dot navigation
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
   <div className="pS">
    <div className="portfolio-section">
      <div className="badge">
        <span>  <FaRegDotCircle className="badgecolor"/>PORTFOLIO</span>
      </div>
      
      <div className="heading">
        <h2>Creative projects that speak</h2>
        <h2>for themselves</h2>
      </div>
      
      <div className="view-all">
        <a href="#">View All <span>→</span></a>
      </div>
      
      
    </div>
    <div className="carousel-container">
        <button className="arrow prev-arrow" onClick={prevSlide}>
          &#10094;
        </button>
        
        <div className="carousel">
          <div 
            className={`carousel-track ${isTransitioning ? 'transitioning' : ''}`} 
            style={{  transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {projects.map((project) => (
              <div className="carousel-item" key={project.id}>
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="arrow next-arrow" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      
      <div className="pagination">
        {projects.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
   </div>  
  );
};

export default PortfolioSection;