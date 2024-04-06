import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import AboutUs from "../components/About-us/AboutUs"
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import Testimonials from "../components/Testimonial/Testimonials";
import ScrollToTopOnMount from "./ScrolltoTop";
import DrawerIcon from "../components/Drawer/drawer"



const About = () => {
    return (
      <Fragment>
        <Header />
        <DrawerIcon /> 
        <ScrollToTopOnMount />            
        <AboutUs/>
        <Testimonials />
        <Newsletter />
        <Footer />
      </Fragment>
    );
  };
  
  export default About;
  