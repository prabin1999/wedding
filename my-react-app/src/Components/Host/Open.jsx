import React from "react";
import { Container, Button } from "react-bootstrap";
import hostbanner from "../../assets/Images/Hailuo3.jpeg";
import "../../assets/Style/Open.css";
import { Link } from "react-router-dom";

const Open = () => {
  return (
    <div
      className="host-banner "
      style={{ backgroundImage: `url(${hostbanner})` }} >

      <div className="banner-overlay">
        <Container>
          <div className="banner-content">
            <h2>
              Join hands, share smiles, and welcome the world to your special
              day.
            </h2>
            <Button as={Link} to="/" className=" buttons mt-3 px-4 py-2">
              Register your wedding
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Open;
