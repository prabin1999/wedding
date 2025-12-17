import React from "react";
import hands from "../../assets/Images/audi.jpg";
import photo from "../../assets/Images/punjabiii.jpeg";
import nava from "../../assets/Images/navratri.jpg";
import "../../assets/Style/Banner.css";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  const slides = [
    {
      image: hands,
      heading: "Be our guest. Experience an Indian wedding, not just as a spectator—but as family.",
      text: "Be a guest, meet new people, and explore traditions.",
    },
    {
      image: photo,
      heading: "You’re invited to celebrate love, culture, and tradition—at a real Indian wedding.",
      text: "Join guests from around the world in a cultural experience.",
    },
    {
      image: nava,
      heading: "Come for the culture. Stay for the celebration.",
      text: "Celebrate love, tradition, and community in style.",
    },
  ];

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="banner-item">
          <img
            className="d-block w-100 banner-image"
            src={slide.image}
            alt={`Slide ${index + 1}`}
          />
          {/* Overlay */}
          <div className="banner-overlay"></div>

          <Carousel.Caption>
            <h1>{slide.heading}</h1>
            {slide.text && <p>{slide.text}</p>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
