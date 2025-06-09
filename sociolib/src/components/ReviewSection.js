import React from "react";
import logo from '../assets/ReviewImg.webp'; 
import { FaRegDotCircle } from "react-icons/fa";
import profile from '../assets/ReviewTwo.webp'; 

function ReviewSection(){
   return (
    <div className="Main-review">
        <div className="sub-review">
            <div className="left-img">
                <img src={logo} alt="winImage " />
            </div>
            <div className="right-content">
                <div className="badge">
                <FaRegDotCircle/>REVIEWS
                </div>
                <div className="heading">
                 <h1>
                    ”This team transformed our vision into a <br/>stunning, high-performing website. Their <br/>creativity and professionalism exceeded our<br/> expectations, driving more traffic and <br/>engagement. Highly recommend!”
                 </h1>
                </div>
                <div className="Reviewer">
                 <div className="profileImg">
                    <img src={profile} alt ="profile"/>
                 </div>
                 <div className="profile-content">
                     <div id="name">
                       <h3>JOHN DOE</h3>
                     </div>
                     <div id="Work">
                      <h6>Designer</h6>
                     </div>
                 </div>
                </div>
            </div>
        </div>
    </div>



   );
}
export default ReviewSection;