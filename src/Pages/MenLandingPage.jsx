import React from "react";
import Slider from "react-slick";
import "../Styled/LandingPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoBg from "../assets/videoBg.mp4";
import videoBg2 from "../assets/videoBg2.mp4";
import videoBg3 from "../assets/videoBg3.mp4";
import videoBg5 from "../assets/videoBg5.mp4";
import video1 from "../assets/video1.mp4";

const MenLandingPage = () => {
  const settings = {
    dots: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    vertical: true,
  };
  return (
    <Slider {...settings} style={{ height: "100vh" }}>
      <div className="slide" style={{ padding: "0px" }}>
        <video
          style={{ width: "100%", height: "auto", margin: "0px" }}
          src={videoBg5}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="slide" style={{ margin: "0px" }}>
        <video
          style={{ width: "100%", height: "auto", marginTop: "-10px" }}
          src={video1}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="slide">
        <video
          style={{ width: "100%", height: "auto", marginTop: "-10px" }}
          src={videoBg2}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="slide">
        <video
          style={{ width: "100%", height: "auto", marginTop: "-10px" }}
          src={videoBg3}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="slide" margin="0px">
        <video
          style={{ width: "100%", height: "auto", marginTop: "-10px" }}
          src={videoBg}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="slide">
        <img
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-backtowork/subhome-xmedia-34//w/934/IMAGE-landscape-fill-be630125-a936-42b9-9a38-c204eaeb4597-default_0.jpg?ts=1661323695441"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default MenLandingPage;
