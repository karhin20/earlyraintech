import React from "react";
import { Container, Row, Col } from "reactstrap";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <Container
      style={{ backgroundColor: boxProps.backgroundColor, color: isDarkBackground ? "white" : "black" }}
      fluid
    >
      <Row>
        <Col style={{ maxWidth: "1280px", minHeight: "100vh" }} {...boxProps}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FullScreenSection;