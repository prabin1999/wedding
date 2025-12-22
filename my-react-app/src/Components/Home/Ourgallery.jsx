import React from "react";
import decor from "../../assets/Images/decor.jpg";
import wed1 from "../../assets/Images/wed1.jpg";
import wed2 from "../../assets/Images/wed2.jpg";
import wed3 from "../../assets/Images/wed3.jpg";

import "../../assets/Style/Ourgallery.css";
import { Link } from "react-router-dom";

const Ourgallery = () => {
  return (
    <div className="ourgallery-section">
      <div className="container py-3">
        <h2 className="text-center mt-0 ourgallery">Our Gallery</h2>

        <p className="text-center mb-5 oursub">
          Step inside our world of elegance and artistry. Explore real weddings
          and <br />
          events curated by HoD, where every picture tells a story of love,
          beauty, and timeless celebration.
        </p>

        <div className="row g-3">
          <div className="col-md-8 decor">
            <img src={decor} alt="decor" className="img-fluid w-100" />
          </div>

          <div className="col-md-4 wed1">
            <img src={wed1} alt="wed1" className="img-fluid w-100" />
          </div>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-md-4 wed2">
            <img src={wed2} alt="wed2" className="img-fluid w-100" />
          </div>

          <div className="col-md-8 wed3">
            <img src={wed3} alt="wed3" className="img-fluid w-100" />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-5 buttons mb-4">
          <Link to="/gallery">
            <button type="button" className="btn px-4 view">
              View Our Gallery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ourgallery;
