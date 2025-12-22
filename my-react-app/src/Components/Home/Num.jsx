import React, { useState, useEffect } from "react";
import "../../assets/Style/Num.css";


const useCountUp = (end, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Num = () => {
  const clients = useCountUp(50);
  const events = useCountUp(120);
  const awards = useCountUp(10);

  return (
    <div className="num-section">
      <div className="container mt-2">
        <div className="row text-center justify-content-center">
          
          <div className="col-4 col-md-2">
            <h1 className="fw-bold">{clients}+</h1>
            <p className="text-uppercase small">Clients</p>
          </div>

          <div className="col-4 col-md-6">
            <h1 className="fw-bold">{events}+</h1>
            <p className="text-uppercase small">Events</p>
          </div>

          <div className="col-4 col-md-2">
            <h1 className="fw-bold">{awards}+</h1>
            <p className="text-uppercase small">Awards</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Num;
