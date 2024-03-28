import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Courses from "../../components/Courses-section/Courses";
import FreeCourse from "../../components/Free-course-section/FreeCourse";
import Testimonials from "../../components/Testimonial/Testimonials";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import CourseDetails from "./CourseDetails";

const Home = () => {
  return (
    <Fragment>
      <Header /> 
      <CourseDetails />            
      <Courses />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
