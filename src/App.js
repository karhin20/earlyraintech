import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses';
import About from './pages/About';
import CourseDetails from './pages/CourseSinglePage/CourseDetails';
import Home from "./pages/Home";
import Enroll from './components/EnrollSubmit/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/register' element={< Enroll/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/courses/:title" element={<CourseDetails />} />  
      </Routes>
    </BrowserRouter>
  );   
}

export default App;