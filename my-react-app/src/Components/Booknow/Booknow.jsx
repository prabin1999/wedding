import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/Style/Booknow.css";
import our from "../../assets/Images/ourmission.jpg";

const BookNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    weddingType: "",
    date: "",
    notes: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, guests, weddingType, date } = formData;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !guests.trim() ||
      !weddingType.trim() ||
      !date.trim()
    ) {
      setMessage("Please fill all required fields before submitting!");
      setMessageType("error");
      return;
    }

    console.log("Submitted:", formData);

    setMessage("Your booking request has been submitted successfully! ");
    setMessageType("success");

  };

  return (
    <div className="booknow-wrapper mt-4 ">
      <Container className="booknow-container">
        <h2 className="booknow-title text-white">
          Book Your Wedding Experience
        </h2>
        <p className="booknow-subtitle text-white">
          Reserve your spot & join real Indian celebrations
        </p>

        <Row>
          <Col md={6} className="image-col">
            <img src={our} alt="wedding" />
          </Col>

          <Col md={6}>
            <Form onSubmit={handleSubmit} className="booknow-form">
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-line"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-line"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone with Country Code</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-line"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Adults</Form.Label>
                <Form.Control
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-line"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Wedding</Form.Label>
                <Form.Control
                  as="select"
                  name="weddingType"
                  value={formData.weddingType}
                  onChange={handleChange}
                  className="input-line"
                >
                  <option value="">Choose...</option>
                  <option>Haldi</option>
                  <option>Mehendi</option>
                  <option>Sangeet</option>
                  <option>Wedding Ceremony</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="input-line"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Additional Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="input-line"
                />
              </Form.Group>

              <div className="button-wrapper">
                <Button type="submit" className="booknow-btn">
                  Book Now
                </Button>
              </div>

              {message && (
                <p className={`form-message ${messageType}`}>
                  {message}
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookNow;
