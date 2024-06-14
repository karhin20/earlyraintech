import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;
  const [ref, inView] = useInView({
    threshold: 0.1, 
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="single__course__item"
    >
      <div className="course__img">
          <Link to={`/courses/${props.item.title}`} style={{ textDecoration: "none", color: "inherit" }}>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={imgUrl} alt="" className="w-100"
          />
          </Link>
      </div>

      <div className="course__details">
        <Link to={`/courses/${props.item.title}`} style={{ textDecoration: "none", color: "inherit" }}>
          <h6 className="course__title mb-4">{title}</h6>
        </Link>

        <div className="d-flex justify-content-between align-items-center">


          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}
          </p>

          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {students}
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <Link to="/enroll">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="course-btn"
            >
              Enroll Now
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;