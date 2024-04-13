import React, { useRef } from "react";
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
               
              >
                <ul>
                  <motion.li>
                    <b>Tailored Groups:</b> Learners are grouped by age and coding skills level. We have One on One lesson too.
                  </motion.li>
                  <motion.li>
                    <b>Real Projects:</b> Courses focus on practical, project-based learning.
                  </motion.li>
                  <motion.li>
                    <b>Live & Recorded Lessons:</b> Flexible learning with live Q&A sessions and recorded videos.
                  </motion.li>
                  <motion.li>
                    <b>Beginner Support:</b> We guide beginners through the entire learning process.
                  </motion.li>
                  <motion.li>
                    <b>Rich Resources:</b> Access extensive resources for deeper understanding.
                  </motion.li>
                </ul>
              </motion.div>
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
