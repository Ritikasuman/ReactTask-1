import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import useInView from "./useInView"; 

function Aboutus() {
  const [aboutRef, inViewAbout] = useInView();
  const [mainTextRef, inViewMainText] = useInView();
  const [leftRef, inViewLeft] = useInView();
  const [rightRef, inViewRight] = useInView();

  return (
    <div className="MainAboutUs">
      <div
        ref={aboutRef}
        className={`AboutText ${inViewAbout ? "slide-up" : ""}`}
      >
        <h1><FaRegDotCircle className="badgecolor" /> ABOUT US</h1>
      </div>

      <div
        ref={mainTextRef}
        className={`MainText ${inViewMainText ? "slide-up" : ""}`}
      >
        <p>
          We are a full cycle agency with designers,<br />
          developers, and business strategists driven by<br />
          passion and purpose
        </p>
      </div>

      <div className="JoinDiv">
        <div
          ref={leftRef}
          className={`LeftDiv ${inViewLeft ? "slide-up" : ""}`}
        >
          <iframe
            src="https://www.youtube.com/embed/J11Qme3vAio"
            allow="autoplay; encrypted-media"
            title="About us video"
          ></iframe>
        </div>

        <div
          ref={rightRef}
          className={`RightDiv ${inViewRight ? "slide-up" : ""}`}
        >
          <p>
            With years of experience in design, development, and strategy, we collaborate to<br />
            craft digital solutions that leave a lasting impact. Our goal is to empower businesses <br />
            to grow, innovate, and stand out in a competitive digital world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
