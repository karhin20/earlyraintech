import React from "react";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
  return (
    <section>
      <Container>
        <h1 className="d-flex justify-content-center" style={{ color: "black", paddingBottom: "40px" }}>Conctact Us:</h1>
        <Row>
        <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center">
            <h3 className="d-flex gap-1">
              <i className="ri-phone-line"></i> <a href="tel:+233543119117" style={{ color: "black" }}>+233 543 119 117</a>
            </h3>
        </Col>
          <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center">
            <h3 className="d-flex align-items-center gap-1">
              <i className="ri-mail-line"></i> <a href="mailto:example@gmail.com" style={{ color: "black" }}>example@gmail.com</a>
            </h3> 
          </Col>

          <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center">
            <h3 className="d-flex align-items-center gap-1">
            <i className="ri-whatsapp-fill"></i><a href="https://wa.link/16otz5" style={{ color: "black", textDecoration: "none", transition: "text-decoration 0.3s", ":hover": { textDecoration: "underline" } }}>WhatsApp</a>
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;