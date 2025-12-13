import React from "react";
import hands from "../../assets/Images/handsindian.jpg";
import "../../assets/Style/Banner.css";
import Filter from "./Filter";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <div className="row align-items-center no-gutters">
          <div className="col-md-6 banner-text-col">
            <h1 className="mb-5 experiance ms-5 fw-bold">
              Experience An <br />
              Authentic <br />
              Indian Wedding
            </h1>
            <div className="col-md-12 ">
              <h4 className="crafting  welcome ms-5">
                Crafting unforgettable celebrations that tell your story, with
                artistry, precision, and heart.
              </h4>
            </div>
          </div>

          <div className="col-md-6 banner-image-col">
            <img src={hands} alt="hands" className="hands" />
          </div>
        </div>

        <Filter />
      </div>
    </div>
  );
};

export default Banner;
