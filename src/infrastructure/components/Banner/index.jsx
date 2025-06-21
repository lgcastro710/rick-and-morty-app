import "../../styles/components/Banner.scss";
import video from "../../assets/video3.mp4";
import logo from "../../assets/logo-r&m.png";
import { FaAngleDoubleDown } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <video
        src={video}
        className="video"
        autoPlay
        muted
        playsInline
        loop
      ></video>
      <div className="banner">
        <img src={logo} alt="" className="logo-inicio" />
        <div className="arrow-bounce">
          <FaAngleDoubleDown size={60} />
        </div>
        <div className="degradade"></div>
      </div>
    </>
  );
};
export default Banner;
