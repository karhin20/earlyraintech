import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "./hero-section.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import heroImg1 from "../../assests/images/hero.jpg";
import heroImg2 from "../../assests/images/hero1.jpg";
import heroImg3 from "../../assests/images/hero3.jpg";
import heroImg4 from "../../assests/images/hero4.jpg"

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1, 
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 70 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >

          <h2 className="mb-4 hero__title">
                Learn Coding Now <br />At your convenience <br/> Online or Home <br />
              </h2>
              <p className="mb-5">
                Select from our wide range of <strong>hands-on <br/> and project-based </strong> courses
                
              </p>
              <p className="mb-5">
            
              </p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <p>Unsure of the course to select? <br/>Get in touch. <br/><b>We will help you choose.</b> </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="school-program-link"
              >
                <h4 >
                  Are you a school administrator? <br />
                  <a style={{marginTop: "10px"}} href="/schools-outreach" className="btn btn-primary ">
                    Check out our Schools Program
                  </a>
                </h4>
              </motion.div>
            </motion.div>
            
          </Col>

          <Col lg="6" md="6">
            <Slider {...settings}>
              <div>
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  src={heroImg1}
                  alt=""
                  className="w-100 hero__img"
                />
              </div>
              <div>
                <motion.img
                  src={heroImg2}
                  alt=""
                  className="w-100 hero__img"
                />
              </div>
              <div>
                <motion.img
                  src={heroImg3}
                  alt=""
                  className="w-100 hero__img"
                />
              </div>
              <div>
                <motion.img
                  src={heroImg4}
                  alt=""
                  className="w-100 hero__img"
                />
              </div>
              {/*more images */}
            </Slider>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default HeroSection;