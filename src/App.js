import { Button } from 'antd';
import Courses from './pages/Courses';
import About from './pages/About';
import CourseDetails from './pages/CourseSinglePage/CourseDetails';
import Home from "./pages/Home";
import Register from './components/EnrollSubmit/Enroll';
import Payments from "./pages/paystacks/Payments";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    // Delay the appearance of the install prompt by 10 seconds
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/payments" element={<Payments />} />
        <Route path='/enroll' element={<Register />}/>
        <Route path="/about" element={<About />} />
        <Route path="/courses/:title" element={<CourseDetails />} />  
      </Routes>
      <Button 
        style={{ color: 'white', backgroundColor: "#17bf9e", transform: 'scale(1.1)', transition: 'transform 0.2s' }} 
        type="primary" 
        onClick={handleInstallClick}
      >
        Install App
      </Button>
    </BrowserRouter>
  );   
}

export default App;

