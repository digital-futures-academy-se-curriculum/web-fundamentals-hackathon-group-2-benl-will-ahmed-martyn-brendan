import movie1 from "../images/flubber.webp";
import movie2 from "../images/FatefulFindings.png";
import movie3 from "../images/aTalkingCat.jpeg";

const SignUpMedia = () => {
  return (
    <div className="left-side">
      <img src={movie1} alt="" className="film-image" />
      <img src={movie2} alt="" className="film-image" />
      <img src={movie3} alt="" className="film-image" />
    </div>
  );
};

export default SignUpMedia;
