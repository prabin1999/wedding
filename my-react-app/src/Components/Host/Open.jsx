import React from "react";
import { Container, Button } from "react-bootstrap";
import hostbanner from "../../assets/Images/wed5.jpg";
import "../../assets/Style/Open.css";

const Open = () => {
  return (
    <div
      className="host-banner"
      style={{ backgroundImage: `url(${hostbanner})` }}
    >
    <div className="banner-overlay">
        <Container>
        <div className="banner-content">
            <h2>
              Join hands, share smiles, and welcome the world to your special
              day.
            </h2>

          </div>
        </Container>
      </div>
    </div>
  );
};

export default Open;
