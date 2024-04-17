import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, ListGroupItem } from 'reactstrap';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { coursesData } from "../../assests/CourseData";
import ReactPlayer from 'react-player';
import "./coursedetails.css"

const CourseDetails = () => {
  const { title } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = coursesData.find((course) => course.title === title);
    window.scrollTo(0, 0);
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [title]);

  return (
    <>
      {course ? (
        <>
          <Header />
          <Container>
            <Row>
              <h2 style={{ paddingTop: "100px" }}>{course.title}</h2>
              <Col lg={8} md={12}>
                <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                  <p1>{course.Description}</p1>
                </div>
                <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url={course.videourl}
                  controls
                  width='100%'
                  height='100%'
                />
                </div>
                <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                    <h5>
                      <Link to="/enroll">
                        <button className="course-btn">Enroll Now</button>
                      </Link>
                    </h5>
                    <h5><span><i class="ri-wallet-3-line"></i></span></h5>
                    <span>
                      <ul>
                        <li>Online (Group): 400 cedis</li>
                        <li>Online (One on One): 1000 cedis</li>
                        <li>In-person (One on One): 1800 cedis</li>
                      </ul>
                    </span>
                </div>
              </Col>
              <Col lg={4} md={12} className="lesson gap-5">
                <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                  <div>
                   <h5> <i class="ri-book-open-line"> </i> {course.lesson} Lessons </h5>
                  </div>
                  <div>
                    <h5> <i class="ri-user-line"></i> {course.students} Learners</h5>
                  </div>
                  <div>
                    <h5> <i class="ri-star-fill"></i> {course.rating} </h5>
                  </div>
                  <div>
                    <h5><i class="ri-computer-fill"></i> {course.Requirements}</h5>
                  </div>
                <div>
                    <h5><i class="ri-code-s-slash-fill" ></i> {course.difficulty}</h5>
                </div>
                </div>
              </Col>
            </Row>
              <Col>
                <h2>Course Projects:</h2>
                <ul>
                  {course["Course related projects to be completed"].map((project, index) => (
                    <ListGroupItem key={index}>{project}</ListGroupItem>
                  ))}
                </ul>
              </Col>
          </Container>
          <Footer />
        </>
      ) : (
        <h6>Loading...</h6>
      )}
    </>
  );
}

export default CourseDetails;