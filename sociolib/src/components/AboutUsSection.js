import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

function Aboutus(){
    return(
      <div  className="MainAboutUs">
          <div className="AboutText">
            <h1>  <FaRegDotCircle /> ABOUT US</h1>
          </div>
          <div className="MainText">
            <p>We are a full cycle agency with designers,<br/>developers, and business strategists driven by<br/>passion and purpose </p>
          </div>
          <div className="JoinDiv">
             <div className="LeftDiv">
                <iframe
                 src="https://www.youtube.com/watch?v=J11Qme3vAio"
                   allow="autoplay; encrypted-media"
                ></iframe>
             </div>
             <div className="RightDiv">
               <p>With years of experience in design, development, and strategy, we collaborate to<br/>craft digital solutions that leave a lasting impact. Our goal is to empower businesses <br/> to grow, innovate, and stand out in a competitive digital world</p>
             </div>
          </div>
      </div>


    );
}

export default Aboutus;