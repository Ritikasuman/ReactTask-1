import React, { useState, useEffect, useRef } from "react";
import image1 from "../assets/p1.webp";
import image2 from "../assets/P2.webp";
import image3 from "../assets/P3.webp";
import { FaRegDotCircle } from "react-icons/fa";
import useInView from "./useInView";

const PortfolioSection = () => {
  const projects = [image1, image2, image3];
  const [index, setIndex] = useState(0);

  const [headingRef, headingInView] = useInView();

  // 1. Image refs and visibility states
  const imgRefs = useRef([]);
  const [imgInViews, setImgInViews] = useState(
    Array(projects.length).fill(false)
  );

  // 2. Observer for images
  useEffect(() => {
    const observers = [];

    imgRefs.current.forEach((ref, i) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImgInViews((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

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

        <div
          className={`heading ${headingInView ? "slide-up" : ""}`}
          ref={headingRef}
        >
          <h2>Creative projects that speak</h2>
          <h2>for themselves</h2>
        </div>

        <div className="view-all">
          <a href="#">
            View All <span>→</span>
          </a>
        </div>
      </div>

      <div className="carousel-container">
        <button className="arrow prev-arrow" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel">
          {visibleSlides.map((i, pos) => (
            <div
              key={i}
              className={`carousel-item ${pos === 1 ? "center" : "side"}`}
              onClick={() => goToSlide(i)}
            >
              <img
                ref={(el) => (imgRefs.current[i] = el)}
                src={projects[i]}
                alt={`Project ${i}`}
                className={`scale-up-img ${
                  imgInViews[i] ? "slide-up" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <button className="arrow next-arrow" onClick={nextSlide}>
          &#10095;
        </button>
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
