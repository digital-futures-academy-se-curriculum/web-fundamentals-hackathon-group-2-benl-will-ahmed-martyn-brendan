import React from 'react'
import movie1 from "../images/flubber.webp";
import movie2 from "../images/FatefulFindings.png";
import movie3 from "../images/aTalkingCat.jpeg";

const SignUpMedia = () => {
  return (
    <div className="left-side">
        <img src={movie1} alt="" className="signup-img" />
        <img src={movie2} alt="" className="signup-img" />
        <img src={movie3} alt="" className="signup-img" />
    </div>
  )
}

export default SignUpMedia