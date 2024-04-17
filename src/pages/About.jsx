import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import AboutUs from "../components/About-us/AboutUs"
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import Testimonials from "../components/Testimonial/Testimonials";
import ScrollToTopOnMount from "./ScrolltoTop";
import DrawerIcon from "../components/Drawer/drawer"




const About = () => {

  const styles = {
    container: {
      maxWidth: "100%",
      padding: "0 8px", 
      boxSizing: "border-box",
      overflowX: "hidden"
    },
  };

    return (
      <Fragment>
        <div style={styles.container}>
        <DrawerIcon />
        <Header /> 
        <ScrollToTopOnMount />            
        <AboutUs/>
        <Testimonials />
        <Newsletter />
        <Footer />
        </div>
      </Fragment>
    );
  };
  
  export default About;
  