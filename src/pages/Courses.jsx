import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import CoursesList from "../components/Courses-section/Courseslist";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import ScrollToTopOnMount from "./ScrolltoTop";
import DrawerIcon from "../components/Drawer/drawer"

const Courses = () => {
  return (
    <Fragment>
      <Header />
      <DrawerIcon />
      <ScrollToTopOnMount />            
      <CoursesList />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Courses;
