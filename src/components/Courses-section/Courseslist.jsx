import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/scratch.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Development for Beginners - 2024",
    lesson: 54,
    students: 12.5,
    rating: 7.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Scratch (Recommended for Juniors) -2024",
    lesson: 12,
    students: 12.5,
    rating: 8.5,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Python Programming for Beginners - 2024",
    lesson: 12,
    students: 12.5,
    rating: 7.7,
    imgUrl: courseImg3,
  },
];



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

export default CoursesList;
