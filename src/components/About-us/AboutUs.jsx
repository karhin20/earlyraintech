import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.jpg";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h3>About Us</h3>
              <p>
              Embark on a journey of knowledge and skill development with <strong>Early Rain Tech. </strong>
              We are a premier online education platform offering a diverse range of TECH courses tailored for kids, 
              teens, and adults. Whether you're a budding coder, a curious mind, or a seasoned learner, 
              we have something for everyone.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={684} duration={2} />
                    </span>

                    <p className="counter__title">Enrolled Learners</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={6} duration={2} />
                    </span>

                    <p className="counter__title">Distinct Courses</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={168} duration={2} />
                    </span>

                    <p className="counter__title">Active Learners</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={96} duration={2} suffix="%" />
                    </span>

                    <p className="counter__title">Completion Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
