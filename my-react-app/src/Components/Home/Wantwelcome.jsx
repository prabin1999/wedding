import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Style/Want.css";

const Wantwelcome = () => {
  return (
    <div className="want-bg">
      <h2 className="text-center wantto ">
        Want to welcome guests from around the world to your wedding?
      </h2>

      <p className="text-center want-para">
        If sharing your wedding joy with international travelers who truly value
        Indian traditions excites you, we’d love to connect with you.
      </p>

      <div className="d-flex justify-content-center mt-5 buttons ">
        <Link to="/host">
          <button type="button" className="btn px-4 view">
            Become A Host
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Wantwelcome;

