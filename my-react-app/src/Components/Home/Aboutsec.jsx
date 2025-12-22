import React from "react";
import aboutimg from "../../assets/Images/photoreal.jpg";
import "../../assets/Style/Aboutsec.css";

const Aboutsec = () => {
  return (
    <div className="container about-section py-4">
      <div className="row align-items-center mt-5 mb-5">
        <div className="col-md-6 mb-5 mb-md-0">
          <img
            src={aboutimg}
            alt="beautiful"
            className="img-fluid rounded aboutimg"
          />
        </div>

        <div className="col-md-6 text-center text-md-start">
          <h2 className="about mb-3 ">About</h2>

          <p className="about-para">
            India’s weddings are not just ceremonies — they are grand
            celebrations of love, culture, and togetherness. We invite you to
            become a special guest in these vibrant traditions, to Sangeet, from
            Baraat to Reception — live every moment as part of the family. Your
            unforgettable cultural journey begins here. Join us in the heart of
            India to experience real weddings full of color, music, rituals, and
            joy. Dress like a local, dance with the family, taste traditional
            food, and create unforgettable memories. Welcome to a
            once-in-a-lifetime Indian wedding experience!
          </p>

          <ul className="about-lists">
            <li>Strangers become family</li>
            <li>Cultures blend beautifully</li>
            <li>Memories become lifelong treasure</li>
            <li>Guests feel a deep emotional connection</li>
            <li>Traditional costumes & dress styling</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Aboutsec;
