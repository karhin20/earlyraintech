import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        "I've tried various platforms to learn tech skills, 
                        but none have compared to this platform. The combination 
                        of theory and hands-on projects truly  boosted my 
                        confidence in applying what I've learned."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Uzeiru Aminu Zaanaani </h6>
                        <p>Ofankor, Accra</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        
                      The hands-on projects I engaged in while learning provided 
                      me with practical application of the theoretical concepts, 
                      significantly enhancing my comprehension.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Richmond Boakye</h6>
                        <p>Sowutuom, Accra</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        "This platform's real-world applications enhanced my 
                        skills profoundly. The practical approach helped 
                        me grasp complex concepts effortlessly. Highly recommend!"
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Joseph Nyamekye</h6>
                        <p>Achimota, Accra</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
