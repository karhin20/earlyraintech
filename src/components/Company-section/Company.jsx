import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "./company-section.css"

const Company = () => {
  return (
    <section>
      <Container>
        <h1 className="d-flex justify-content-center" style={{ color: "black", paddingBottom: "40px" }}>Contact Us:</h1>
        <Row className="contact-item">
          <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center">
              <i className="ri-phone-line"></i>
              <motion.div
                whileHover={{ textDecoration: "underline" }}    
            >
              <a href="tel:+233543119117" style={{ color: "black", textDecoration: "none" }}>+233 543 119 117</a>
            </motion.div>
          </Col>
          <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center">
              <i className="ri-mail-line"></i>
            <motion.div
            whileHover={{ textDecoration: "underline" }}
            className="contact-item"
            >
              <a href="mailto:example@gmail.com" style={{ color: "black", textDecoration: "none" }}>example@gmail.com</a>
            </motion.div>
          </Col>
          <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center">
            <i className="ri-whatsapp-fill"></i>
            <motion.div
              whileHover={{ textDecoration: "underline" }}
              className="contact-item"
            >
              <a href="https://wa.link/16otz5" style={{ color: "black", textDecoration: "none", transition: "text-decoration 0.3s" }}>WhatsApp</a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;