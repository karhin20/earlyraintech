import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, ListGroupItem, Card, CardBody } from 'reactstrap';
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
                  <p>{course.Description}</p>
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
                  <h5><span><i class="ri-wallet-3-line"></i></span> Fee per Month</h5>
                  <span>
                    <ul>
                      <li>Online (Group): 400 cedis</li>
                      <li>Online (One on One): 1000 cedis</li>
                      <li>In-person (One on One): 1800 cedis</li>
                    </ul>
                  </span>
                </div>
              </Col>
              <Col lg={4} md={12} className="lesson gap-5" style={{paddingTop: "125px", paddingLeft: "30px", paddingBottom: "50px"}}>
              <Card className="shadow">
                  <CardBody className="lesson gap-5" style={{paddingTop: "30px", paddingLeft: "50px"}}>
                    <div style={{paddingBottom: "10px"}}>
                      <div>
                        <h5> <i class="ri-book-open-line"></i> {course.lesson} Lessons </h5>
                      </div>
                      <div>
                        <h5> <i class="ri-user-line"></i> {course.students} Learners</h5>
                      </div>
                      <div>
                        <h5> <i class="ri-star-fill"></i> {course.rating} </h5>
                      </div>
                      <div>
                        <h5><i class="ri-code-s-slash-fill"></i> {course.difficulty}</h5>
                        <h6>No previous knowledge required</h6>
                      </div>
                      <div>
                        <h5 style={{paddingTop: "10px", color:"#17bf9e"}}>Requirements:</h5>
                        <h5 style={{paddingBottom: "5px"}}><i class="ri-computer-fill"></i> {course.Requirements}</h5>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Col>
              <h4 style={{color:"#17bf9e"}}>Course Projects:</h4>
              <ul>
                {course["Course related projects to be completed"].map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </Col>
            <Col>
              <h4 style={{paddingTop: "30px", paddingBottom: "10px", color:"#17bf9e"}}>Course Details:</h4>
              {course.Details.map((detail, index) => (
                <div key={index}>
                  {typeof detail === 'string' ? (
                    <p>{detail}</p>
                  ) : (
                    <div>
                      <h5>{detail.title}</h5>
                      <ul>
                        {detail.content.map((item, idx) => (
                          <ListGroupItem key={idx}>{item}</ListGroupItem>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
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