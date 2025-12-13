import React, { useState } from "react";
import "../../assets/Style/Filter.css";
import { Link } from "react-router-dom";

const Filter = () => {
  const [filters, setFilters] = useState({
    weddingType: "",
    state: "",
    date: "",
    event: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    const { weddingType, state, date, event } = filters;

    if (!weddingType || !state || !date || !event) {
      setMessage("❌ Please complete all filter fields.");
      return;
    }

    setMessage("✅ successfully!");
    console.log("Filters Selected:", filters);
  };

  return (
    <section className="filter-section">
      <div className="container d-flex justify-content-center">
        <div className="filter-box d-flex flex-wrap gap-3 p-3 p-md-4">
          <select
            name="weddingType"
            className="filter-item"
            value={filters.weddingType}
            onChange={handleChange}
          >
            <option value="">Wedding Type</option>
            <option>Hindu Wedding</option>
            <option>Muslim Wedding</option>
            <option>Christian Wedding</option>
          </select>

          <select
            name="state"
            className="filter-item"
            value={filters.state}
            onChange={handleChange}
          >
            <option value="">State</option>
            <option>Kerala</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>More</option>
          </select>

          <input
            type="date"
            name="date"
            className="filter-item"
            value={filters.date}
            onChange={handleChange} />

          <select
            name="event"
            className="filter-item"
            value={filters.event}
            onChange={handleChange} >
                
            <option value="">Event</option>
            <option>Haldi</option>
            <option>Reception</option>
            <option>Mehendi</option>
          </select>

          <button type="button" className="search px-5" onClick={handleSearch}>
            Search
          </button>

        </div>
      </div>

      {message && (
        <p
          style={{
            textAlign: "center",
            color: "green",
            marginTop: "15px",
            fontWeight: "bold", }} >
          {message}
        </p>
      )}
    </section>
  );
};

export default Filter;
