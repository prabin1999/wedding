import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import temple from "../../assets/Images/temple.jpg";
import "../../assets/Style/Contactuss.css";

const Contactuss = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    notes: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.notes) {
      setMessage("Please fill out all fields!");
      setMessageType("error");
      return;
    }

    setMessage("Message Sent Successfully!");
    setMessageType("success");

    setFormData({
      fullName: "",
      email: "",
      notes: "",
    });
  };

  return (
    <div>
      <div className="contact-wrapper  py-4">
        <Container className="contact-container">
          <h2 className="contact-title text-white">Get In Touch</h2>

          <Row>
            <Col md={4} className="image-col2">
              <img src={temple} alt="wedding" />
            </Col>

            <Col md={4}>
              <Form onSubmit={handleSubmit} className="contact-form">
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

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
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
                  <Button type="submit" className="contact-btn">
                    Contact Us
                  </Button>
                </div>

                {message && (
                  <p className={`form-message ${messageType}`}>{message}</p>
                )}
              </Form>
            </Col>

            <Col md={4}>
              <h6 className="text-white contactt ">Contact US</h6>
              <p className="text-white contactpara">purewedding@.com</p>

              <h6 className="text-white based">Based</h6>
              <p className="text-white india">India</p>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contactuss;
