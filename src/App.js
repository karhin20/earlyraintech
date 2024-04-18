
import Courses from './pages/Courses';
import About from './pages/About';
import CourseDetails from './pages/CourseSinglePage/CourseDetails';
import FreeCourseDetails from './pages/CourseSinglePage/freeCourseDetails';
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import InstallButton from "./pages/InstallButton";
import Register from './components/EnrollSubmit/Enroll';
import Payments from "./pages/paystacks/Payments";
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import RouteChangeTracker from './pages/RouteChangeTracker';


function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}




function App() {
  useEffect(() => {
    ReactGA.initialize('G-4F6BBX8BK6', {
      debug: true,
      titleCase: false,
      gaOptions: {
      userId: 234
      }
    });
    // Additional GA4 configuration can go here
  }, []);

  const [installPrompt, setInstallPrompt] = useState(null);


  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

  
    const timeout = setTimeout(() => {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setInstallPrompt(null);
      });
    }
  };

  return (
    <BrowserRouter>
     <PageTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/free-courses/:title" element={<FreeCourseDetails />} />  
        <Route path="/courses/:title" element={<CourseDetails />} /> 
        <Route path="/enroll" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <InstallButton onInstallClick={handleInstallClick} />
      <RouteChangeTracker />
    </BrowserRouter>
  );   
}

export default App;

