import React from 'react';
import '../../assets/Style/Howhost.css'; 

const Howhost = () => {
  const steps = [
    {
      number: 1,
      title: 'Register your wedding',
      description: 'Start your wedding journey by creating your listing.Add all the essential details and sprinkle in exciting highlights to captivate your future guests and make your celebration unforgettable.',
    },
    {
      number: 2,
      title: 'Guests find your listing and book',
      description: 'You’ll get notified via email once a booking is made for your wedding, including guest details. We encourage you to make contact with your guests prior to the wedding.',
    },
    {
      number: 3,
      title: 'Celebrate with your guests',
      description: 'Greet your guests and share with them your culture and traditions as you enjoy and cherish every second of this life-changing experience.',
    },
    {
      number: 4,
      title: 'Receive your wedding gift',
      description: 'Guests can send you gifts or contribute to experiences to celebrate your special day.',
    },
  ];

  return (
    <div className="howhost-container">
      <h2 className="howhost-heading">How Hosting Works</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <h3 className="step-title">
              <span className="step-number">{step.number}.</span> {step.title}
            </h3>
            <p className="step-description py-3 mb-5">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howhost;
