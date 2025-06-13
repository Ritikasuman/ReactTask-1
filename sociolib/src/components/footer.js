import React from 'react';
import useInView from './useInView'; // Custom hook

const Footer = () => {
  const [colRef, colInView] = useInView();
  const [bottomRef, bottomInView] = useInView();
  const [tagRef, tagInView] = useInView();

  return (
    <div className="MainF">
      <footer className="footer">
        <div className={`footer-main ${colInView ? 'slide-up' : ''}`} ref={colRef}>
          <div className="footer-column">
            <h4>MENU</h4>
            <ul>
              <li>Portfolio</li>
              <li>Expertise</li>
              <li>Insight</li>
              <li>About us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>OFFICE</h4>
            <p>3891 Ranchview Dr. Richardson,<br />California 62639</p>
            <p>📱 +123 456 789</p>
          </div>

          <div className="footer-column">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <span>Instagram</span>
              <span>|</span>
              <span>Facebook</span>
              <span>|</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>

        <div className={`footer-bottom ${bottomInView ? 'slide-up' : ''}`} ref={bottomRef}>
          <p>Powered by SocioLib</p>
          <p>Terms & Condition</p>
        </div>
      </footer>

      <div className={`Tag ${tagInView ? 'slide-up' : ''}`} ref={tagRef}>
        <h1 id="digitalTag">Digital Agency</h1>
      </div>
    </div>
  );
};

export default Footer;
