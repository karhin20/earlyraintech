import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {coursesData} from "../../assests/CourseData";
import ReactPlayer from 'react-player';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = coursesData.find((course) => course.id === id);
    window.scrollTo(0, 0);
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [id]);

  return (
    <>
      {course ? (
        <>
          <Header />
          <Container>
            <Row>
              <Col>
                <h1>{course.title}</h1>
                <Card>
                  <CardImg top src={course.imgUrl} alt={course.title} />
                  <CardBody>
                    <CardText>{course.Description}</CardText>
                  </CardBody>
                </Card>
                <ReactPlayer url={course.videourl} controls />
                <h2>Course Projects:</h2>
                <ListGroup>
                  {course["Course related projects to be completed"].map((project, index) => (
                    <ListGroupItem key={index}>{project}</ListGroupItem>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Container>
          <Footer />
        </>
      ) : (
        <h1>Course not found</h1>
      )}
    </>
  );
}

export default CourseDetails;