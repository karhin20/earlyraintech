import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import DrawerIcon from "../components/Drawer/drawer";

const Home = () => {

 const styles = {
    container: {
      maxWidth: "100%",
      padding: "0 5px", 
      boxSizing: "border-box",
    },
  };
  return (
    <Fragment>
      <div style={styles.container}>
      <Header />
      <DrawerIcon />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter /> 
      <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
