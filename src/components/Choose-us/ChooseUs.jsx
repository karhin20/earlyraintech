import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./choose-us.css";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
        <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
                className="fade-in-list"
              >
                <motion.li>
                  Tailored Groups: Learners are grouped by age and coding skills level. We have One on One lesson too.
                </motion.li>
                <motion.li>
                  Real Projects: Courses focus on practical, project-based learning.
                </motion.li>
                <motion.li>
                  Live & Recorded Lessons: Flexible learning with live Q&A sessions and recorded videos.
                </motion.li>
                <motion.li>
                  Beginner Support: We guide beginners through the entire learning process.
                </motion.li>
                <motion.li>
                  Rich Resources: Access extensive resources for deeper understanding.
                </motion.li>
              </motion.ul>
              <p>Choose us for personalized tech learning that suits your needs.</p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
            
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=vQPgEm9jAJI"
                  controls
                  width="100%"
                  height="350px"
                />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
