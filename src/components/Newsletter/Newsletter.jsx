import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" md={12} className="text-center">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <div className="subscribe">
              <input type="email" placeholder="Email" />
              <button className="btn">Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
