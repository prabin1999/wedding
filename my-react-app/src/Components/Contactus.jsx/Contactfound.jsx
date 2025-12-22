import React from "react";
import "../../assets/Style/Contactfound.css";
import founder from "../../assets/Images/david.jpg";

const Contactfound = () => {
  return (
    <div className="found-section">
      <div className="found-card container mb-5 text-center">
        <h2 className="mb-4">Founders</h2>

        <img
          src={founder}
          alt="Founder"
          className="david rounded-circle mb-3"/>

        <h6>Xenventure</h6>
        <p className="text-center">India,Kerala</p>
      </div>
    </div>
  );
};

export default Contactfound;
