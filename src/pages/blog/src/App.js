import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/Footer"
import Homepages from "./components/home/Homepages";
import SinglePage from "./components/singlePage/SinglePage"
import Events from "./components/events/Events"
import "./App.css"



const App = () => {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/events' component={Events} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}


export default App
