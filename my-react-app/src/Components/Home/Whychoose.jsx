import React from "react";
import sparkle from "../../assets/Images/sparkle.png";
import verify from "../../assets/Images/verify.png";
import hand from "../../assets/Images/handremove.png";
import "../../assets/Style/Whychoose.css";

const cardsData = [

  {
    id: 1,
    title: "Verified Indian Families",
    text: "Celebrations with depth, elegance, and a touch of grandeur.",
    img: sparkle,
  },

  {
    id: 2,
    title: "Secure Online Payment",
    text: "Safe, transparent, and trusted payments for peace of mind.",
    img: verify,
  },

  {
    id: 3,
    title: "Custom Packages",
    text: "Tailored experiences that reflect your unique journey.",
    img: hand,
  },
  
];

const Whychoose = () => {
  return (
    <div className="container py-5">

      <h2 className="text-center  mb-3 whychoose">
        Why Choose Us
      </h2>


      <p className="text-center mb-5 whysub">
        We don’t just plan events, we create experiences that live forever.
        <br />
        Your celebration is a chapter in your story — we make it unforgettable.
      </p>


      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center py-4">
        {cardsData.map(({ id, title, text, img }) => (
          <div className="col d-flex justify-content-center" key={id}>
            <div className="card text-center border-0 p-4 cards-services h-100">
              <div className="icon-wrapper mx-auto mb-3">
                <img
                  src={img}
                  alt={title}
                  className="service-icon"
                />
              </div>

              <div className="card-body">
                <h5 className="card-head text-white">{title}</h5>
                <p className="card-para">{text}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychoose;
