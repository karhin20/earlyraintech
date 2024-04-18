import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTopOnMount from "./ScrolltoTop";

const Courses = () => {

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
      <Header />
      <ScrollToTopOnMount /> 
      <div>
        <h5>We Provide You with Technology news <br/> when you need it</h5>
      </div>           
      <Footer />
      </div>
    </Fragment>
  );
};

export default Courses;
