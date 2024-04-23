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
    "Details": [
      "HTML defines the content and structure, while CSS brings style and visual appeal to your web pages. You’ll gain essential skills like building core programming concepts, working with objects, and reading and writing JavaScript code. With these skills, you’ll be well on your way to creating your own amazing websites!",
      {
        "title": "HTML (Hypertext Markup Language)",
        "content": [
          "Structure: Understand the basic structure of an HTML document, including tags, elements, and attributes.",
          "Semantic Elements: Learn about semantic tags like <header>, <nav>, <main>, <section>, and <footer> that give meaning to your content.",
          "Links and Images: Discover how to create hyperlinks and embed images.",
          "Forms: Explore form elements for user input, such as text fields, checkboxes, radio buttons, and submit buttons.",
          "Tables: Learn how to create tabular data using <table> elements.",
          "Lists: Use ordered (<ol>) and unordered (<ul>) lists to organize content."
        ]
      },
      {
        "title": "CSS (Cascading Style Sheets)",
        "content": [
          "Styling: Dive into CSS properties to control the visual appearance of HTML elements.",
          "Selectors: Understand how to select specific elements for styling (e.g., by tag name, class, or ID).",
          "Box Model: Learn about margins, borders, padding, and the content area.",
          "Layout: Explore positioning, floats, and display properties.",
          "Flexbox and Grid: Create flexible and responsive layouts.",
          "Colors and Fonts: Customize colors and typography.",
          "Transitions and Animations: Add smooth transitions and animations to elements.",
          "Responsive Design: Make your web pages adapt to different screen sizes."
        ]
      },
      {
        "title": "Introduction to JavaScript",
        "content": [
          "Understand what JavaScript is and its role in web development.",
          "Learn how to set up your development environment (using tools like Visual Studio Code) to write and execute JavaScript code.",
          "Data Types and Variables: Explore different data types (such as numbers, strings, booleans, and objects).",
          "Learn how to declare variables and constants.",
          "Conditionals: Master control flow using if, else if, else, switch, and ternary syntax.",
          "Functions: Dive into function syntax, including parameters and return values.",
          "Scope: Understand global and block-level scope in JavaScript.",
          "Arrays: Learn about arrays, a data structure used to store lists of data.",
          "Loops: Use for and while loops to execute blocks of code multiple times."
        ]
      }
    ],
    "Course related projects to be completed": [
      "Develop a responsive landing page",
      "Build a simple interactive web application",
      "Survey page with HTML forms",
      "Restaurant menu",
      "Create a personal portfolio website",
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
    "Details": [
      "Scratch isn’t just about coding—it’s about nurturing creativity, problem-solving, and preparing kids for a digital world",
      {
        "title": "Encourages Creative Thinking",
        "description": [
          "It provides an easy-to-learn yet powerful visual programming platform.",
          "Kids can create interactive stories, games, animations, and more.",
          "They can customize sprites, draw their designs, and let their imagination run wild.",
          "Creativity blossoms as they bring characters and worlds to life."
        ]
      },
      {
        "title": "Fosters Problem-Solving",
        "description": [
          "Scratch follows the constructionist approach to learning.",
          "Kids break down problems into smaller sub-components using code blocks.",
          "They explore multiple solutions and plan out how different parts of their project will work together.",
          "Strong problem-solving and organizational skills develop through brainstorming in Scratch."
        ]
      },
      {
        "title": "Fun and Interactive Learning",
        "description": [
          "Learning happens naturally when kids are having fun.",
          "Scratch’s visually appealing interface makes coding enjoyable.",
          "Projects are like puzzles, where kids snap code blocks together logically.",
          "It’s a playful environment that encourages exploration and experimentation."
        ]
      },
      {
        "title": "Develops Logical Thinking Skills",
        "description": [
          "Scratch enforces proper programming syntax.",
          "Kids learn to assemble and formulate programming logic correctly.",
          "They understand how different blocks fit together to create functional programs."
        ]
      },
      {
        "title": "Stepping Stone to High-Level Programming",
        "description": [
          "Scratch serves as a gateway to more complex programming languages.",
          "It builds a solid foundation for future learning.",
          "As kids gain confidence, they can transition to languages like Python, Java, or C++."
        ]
      }
    ],
    "Course related projects to be completed": [
      "Hide and Seek Game",
      "Simple Calculator",
      "Car racing Game",
      "Water boat Game",
      "Shooting Game",
      "Weather Application",
      "Shark and fish Game"
      
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
    title: "Introduction to HTML and CSS",
    difficulty: "Beginner Level",
    Requirements: "Computer and Internet",
    imgUrl: courseImg1,
    videourl: "https://example.com/scratch_intro_video",
    students: 73,
    rating: 4.7,
  },
  {
    id: "02",
    title: "Introduction to Git and Github",
    difficulty: "Beginner Level",
    Requirements: "Computer and Internet",
    imgUrl: courseImg02,
    videourl: "https://example.com/scratch_intro_video",
    students: 203,
    rating: 4.9,
  },

  {
    id: "03",
    title: "Graphic Design with Photoshop",
    difficulty: "Beginner Level",
    Requirements: "Computer and Internet connection",
    imgUrl: courseImg03,
    videourl: "https://example.com/scratch_intro_video",
    students: 63,
    rating: 3.5,
  },

  {
    id: "04",
    title: "Basic UI-UX Design - Figma",
    difficulty: "Beginner Level",
    Requirements: "Computer and Internet connection",
    imgUrl: courseImg04,
    students: 53,
    rating: 4.7,
  },
];