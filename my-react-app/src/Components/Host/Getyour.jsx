import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"; 
import bannerImage from "../../assets/Images/freepik9.png";
import "../../assets/Style/Getready.css";

const GetYourGuests = () => {
  return (
    <div className="hero-banner ">
      <img src={bannerImage} alt="Wedding celebration" className="banner-img" />

      <div className="overlay">
        <div className="overlay-content">
          <h2 className="hero-title">Get ready to meet your guests</h2>

         <div className="d-flex justify-content-center">
            <Button as={Link} to="/" className="buttons">
              Register your wedding
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourGuests;

