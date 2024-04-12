import courseImg1 from "./images/web-design.png"
import courseImg2 from "./images/scratch.png"
import courseImg3 from "./images/code.jpeg"

///freecourses
import courseImg01 from "./images/web-development.png"
import courseImg02 from "./images/git2.jpeg"
import courseImg03 from "./images/graphicDesign.jpg"
import courseImg04 from "./images/uiux.jpeg"

export const coursesData = [
  {
    "id": "01",
    "title": "Web Development for Beginners",
    "lesson": 18,
    "students": 125,
    "Requirements": "Computer and Internet",
    "difficulty": "Beginner Level",
    "rating": 4.6,
    "imgUrl": courseImg3,
    "videourl": "https://example.com/web_development_intro_video",
    "Description": "This course covers the fundamentals of web development including HTML, CSS, and JavaScript.",
    "Course related projects to be completed": [
      "Create a personal portfolio website",
      "Develop a responsive landing page",
      "Build a simple interactive web application"
    ]
  },
  {
    "id": "02",
    "title": "Scratch (Recommended for Juniors)",
    "lesson": 16,
    "Requirements": "Computer and internet",
    "difficulty": "Beginner Level",
    "students": 105,
    "rating": 4.5,
    "imgUrl": courseImg2,
    "videourl": "https://example.com/scratch_intro_video",
    "Description": "This course introduces Scratch programming language suitable for juniors to learn coding concepts through visual blocks.",
    "Course related projects to be completed": [
      "Create a simple animation",
      "Develop an interactive game",
      "Build a storytelling project"
    ]
  },
  {
    "id": "03",
    "title": "Python Programming for Beginners",
    "lesson": 12,
    "Requirements": "Computer and Internet",
    "difficulty": "Beginner Level",
    "students": 101,
    "rating": 4.8,
    "imgUrl": courseImg01,
    "videourl": "https://example.com/python_intro_video",
    "Description": "This course provides an introduction to Python programming language covering basic syntax, data types, and control structures.",
    "Course related projects to be completed": [
      "Create a simple calculator",
      "Develop a text-based adventure game",
      "Build a mini web application using Flask"
    ]
  }
]

export const freeCourseData = [
  {
    id: "01",
    title: " Introduction to HTML/CSS",
    Requirements: "Computer and Internet",
    imgUrl: courseImg1,
    students: 73,
    rating: 4.7,
  },
  {
    id: "02",
    title: "Introduction to Git and Github",
    difficulty: "Beginner Level",
    Requirements: "Computer and Internet",
    imgUrl: courseImg02,
    students: 203,
    rating: 4.9,
  },

  {
    id: "03",
    title: "Graphic Design with Photoshop",
    difficulty: "Beginner Level",
    Requirements: "Computer and Internet connection",
    imgUrl: courseImg03,
    students: 63,
    rating: 3.5,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 53,
    rating: 4.7,
  },
];