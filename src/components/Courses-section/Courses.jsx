import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./courses.css";
import CourseCard from "./CourseCard";
import { coursesData } from "../../assests/CourseData";



const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Upgrade your Sills now. <b>Select a course for details or enroll staright away</b>
                </p>
              </div>

              <div className="w-50 text-end">
              <Link to="./courses">
                <button className="btn">See All</button>
              </Link>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
