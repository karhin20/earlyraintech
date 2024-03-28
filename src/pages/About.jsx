import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import AboutUs from "../components/About-us/AboutUs"
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import Testimonials from "../components/Testimonial/Testimonials";



const About = () => {
    return (
      <Fragment>
        <Header />             
        <AboutUs/>
        <Testimonials />
        <Newsletter />
        <Footer />
      </Fragment>
    );
  };
  
  export default About;
  