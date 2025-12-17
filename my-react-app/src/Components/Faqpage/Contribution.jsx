
import React, { useState } from "react";

const faqData = [
  {
    question: "What can I purchase on Pure Wedding.com?",
    answer:"On Pure Wedding.com, you can book unique experiences related to attending authentic weddings around the world. This includes tickets or passes to join real wedding celebrations hosted by couples, cultural events tied to the weddings, and optional travel or hospitality add-ons (like local tours or meals) depending on the host’s offerings. It’s designed to help you be part of meaningful celebrations while experiencing local traditions and making new connections.",
  },

  {
    question: "What does the contribution include?",
    answer:
    "Your contribution typically includes access to the wedding celebration and related events as defined by the host. This can cover things like attending the ceremony and reception, participation in cultural experiences, food and refreshments provided during the event, and any special activities outlined in the listing. Exact inclusions may vary from wedding to wedding, so you’ll see full details when you book each experience.",
  },

  {
    question: "How does the booking process look like?",
    answer:
      "The booking process is simple and transparent. You start by browsing available weddings on JoinMyWedding.com and selecting an experience that interests you. Each listing includes details about the events, dates, location, and what’s included. Once you choose a wedding, you submit your booking and complete the payment online. After confirmation, you’ll receive all necessary information from the host, including event schedules and any guidelines to help you prepare. From there, you just plan your travel and get ready to celebrate.",
  },
  
    {
    question: "Where does the contribution go?",
    answer:
      "The contribution goes primarily to the wedding hosts to help cover the costs of welcoming additional guests, such as food, venue arrangements, and cultural activities. A portion is also used to support the operation of Pure Wedding.com, including platform maintenance, secure payments, and customer support. This ensures a fair and transparent experience for both hosts and guests.",
  },
];

const Contribution = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="faq-container">
      <h2 className="faq-title text-center">CONTRIBUTIONS</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleIndex(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                &#9660;
              </span>
            </div>

            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contribution;
