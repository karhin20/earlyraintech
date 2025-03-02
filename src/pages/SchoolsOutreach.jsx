import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SchoolRegistrationForm from "../components/SchoolRegistration/SchoolRegistrationForm";
import "./schools-outreach.css";

// Import school program related images
import schoolImg1 from "../assests/images/hero.jpg";
import schoolImg2 from "../assests/images/hero1.jpg";
import schoolImg3 from "../assests/images/hero3.jpg";

const SchoolsOutreach = () => {
  return (
    <>
      <Header />
      <section className="schools-outreach">
        <Container>
          {/* Title Section */}
          <Row className="mb-5">
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="section__title">Schools Outreach Program</h2>
                <p className="section__subtitle">
                  Empowering the next generation through coding education
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* Images Section */}
          <Row className="mb-5">
            <Col lg="4" md="4" sm="6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="school-image-container"
              >
                <img src="https://ton.x.com/i/ton/data/grok-attachment/1882745304501387264" alt="School Program" className="w-100 rounded" />
              </motion.div>
            </Col>
            <Col lg="4" md="4" sm="6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="school-image-container"
              >
                <img src="https://ton.x.com/i/ton/data/grok-attachment/1882745512480157696" alt="Students Coding" className="w-100 rounded" />
              </motion.div>
            </Col>
            <Col lg="4" md="4" sm="6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="school-image-container"
              >
                <img src="https://ton.x.com/i/ton/data/grok-attachment/1896271924470104064" alt="Classroom Learning" className="w-100 rounded" />
              </motion.div>
            </Col>
          </Row>

          {/* Benefits and Registration Section */}
          <Row className="mb-5">
            <Col lg="6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>Program Benefits</h3>
                <ul className="benefits-list">
                  <li>Hands-on, project-based learning experience</li>
                  <li>Customized curriculum for different age groups</li>
                  <li>Professional instructors with teaching experience</li>
                  <li>Flexible scheduling options</li>
                  <li>Regular progress reports and assessments</li>
                </ul>
              </motion.div>
            </Col>
            <Col lg="6">
              <SchoolRegistrationForm />
            </Col>
          </Row>

          {/* Contact Section */}
          <Row className="mb-5">
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <h3 className="mb-4">Contact Us</h3>
              </motion.div>
            </Col>
            <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center contact-item">
              <i className="ri-phone-line"></i>
              <motion.div whileHover={{ textDecoration: "underline" }}>
                <a href="tel:+233543119117" className="contact-link">+233 543 119 117</a>
              </motion.div>
            </Col>
            <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center contact-item">
              <i className="ri-mail-line"></i>
              <motion.div whileHover={{ textDecoration: "underline" }}>
                <a href="mailto:earlyraintech@gmail.com" className="contact-link">earlyraintech@gmail.com</a>
              </motion.div>
            </Col>
            <Col lg="4" md="4" sm="4" xs="12" className="d-flex justify-content-center contact-item">
              <i className="ri-whatsapp-fill"></i>
              <motion.div whileHover={{ textDecoration: "underline" }}>
                <a href="https://wa.link/16otz5" className="contact-link">WhatsApp</a>
              </motion.div>
            </Col>
          </Row>

          {/* Features Section */}
          <Row>
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3>Why Choose Our Program?</h3>
                <p>
                  Our program is designed to provide students with comprehensive
                  coding education while being flexible enough to fit into your
                  school's schedule. We offer:
                </p>
                <div className="features-grid">
                  <div className="feature-item">
                    <h4>Customized Learning</h4>
                    <p>Programs tailored to your school's needs and goals</p>
                  </div>
                  <div className="feature-item">
                    <h4>Expert Instruction</h4>
                    <p>Experienced teachers and industry professionals</p>
                  </div>
                  <div className="feature-item">
                    <h4>Flexible Scheduling</h4>
                    <p>Options for during or after school programs</p>
                  </div>
                  <div className="feature-item">
                    <h4>Ongoing Support</h4>
                    <p>Regular communication and progress tracking</p>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default SchoolsOutreach; 