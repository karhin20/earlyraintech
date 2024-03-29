import courseImg1 from "./images/web-design.png"
import courseImg2 from "./images/scratch.png"
import courseImg3 from "./images/ui-ux.png"

///freecourses
import courseImg01 from "./images/web-development.png"
import courseImg02 from "./images/kids-learning.png"
import courseImg03 from "./images/seo.png"
import courseImg04 from "./images/ui-ux.png"

export const coursesData = [
  {
    "id": "01",
    "title": "Web Development for Beginners",
    "lesson": 54,
    "students": 12.5,
    "rating": 7.9,
    "imgUrl": courseImg1,
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
    "lesson": 12,
    "students": 12.5,
    "rating": 8.5,
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
    "students": 12.5,
    "rating": 7.7,
    "imgUrl": courseImg3,
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
    title: " Introduction to HTML/CSS - 2024",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 6.7,
  },
  {
    id: "02",
    title: "Introduction to Git and Github",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 5.7,
  },

  {
    id: "03",
    title: "Graphic Design with Photoshop",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 3.5,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 4.7,
  },
];