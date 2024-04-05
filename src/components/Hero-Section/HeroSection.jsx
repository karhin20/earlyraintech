import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero__content"
            >
              <h2 className="mb-4 hero__title">
                At your convenience <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Select from our wide range of <strong>hands-on <br/> and project-based </strong> courses to suit your <br/> interest or that of your ward! <br />
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p>Unsure of the course to select? <br/>Get in touch. <br/><b>We will help you choose.</b> </p>
            </motion.div>
          </Col>

          <Col lg="6" md="6">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={heroImg}
              alt=""
              className="w-100 hero__img"
            />
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default HeroSection;