import React, { useState, useEffect } from "react";
import image1 from "../assets/p1.webp";
import image2 from "../assets/P2.webp";
import image3 from "../assets/P3.webp";
import { FaRegDotCircle } from "react-icons/fa";

const PortfolioSection = () => {
  const projects = [image1, image2, image3];
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleSlides = () => {
    const prev = (index - 1 + projects.length) % projects.length;
    const next = (index + 1) % projects.length;
    return [prev, index, next];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="pS">
      <div className="portfolio-section">
        <div className="badge">
          <span>
            <FaRegDotCircle className="badgecolor" /> PORTFOLIO
          </span>
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
        <button className="arrow prev-arrow" onClick={prevSlide}>&#10094;</button>

        <div className="carousel">
          {visibleSlides.map((i, pos) => (
            <div
              key={i}
              className={`carousel-item ${pos === 1 ? "center" : "side"}`}
              onClick={() => goToSlide(i)}
            >
              <img src={projects[i]} alt={`Project ${i}`} />
            </div>
          ))}
        </div>

        <button className="arrow next-arrow" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="pagination">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
