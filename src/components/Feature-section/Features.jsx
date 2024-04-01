import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Choose our courses for quick learning. Streamlined curriculum ensures rapid comprehension and skill acquisition, accelerating your journey to success!",
    icon: "ri-draft-line",
  },

  {
    title: "Supportive community",
    desc: "Join our courses for a supportive community. Collaborate, share insights, and grow together with like-minded individuals on your learning journey!",
    icon: "ri-discuss-line",
  },

  {
    title: "Practical Learning",
    desc: "Our courses offer practical applications for real-world use, ensuring that you can immediately apply your newfound skills in professional settings!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
