import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import CourseCard from "./CourseCard";
import { coursesData } from "../../assests/CourseData";

const CoursesList = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <button className="btn">All Courses</button>
              </div>
            </div>
            <div style={{paddingTop: "20px"}} className="course__top__left">
              <h6 className="">
                <b>Select a course for details or enroll straight away</b>
              </h6>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <CourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CoursesList;