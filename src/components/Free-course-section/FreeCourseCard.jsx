import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;
  const [ref, inView] = useInView({
    threshold: 0.1, 
  })

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
      <Link to={`/courses/${props.item.title}`} style={{ textDecoration: "none", color: "inherit" }}>
      <motion.img
        ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          src={imgUrl} alt="" className="w-100" 
        />
        </Link>
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details">
      <Link to={`/courses/${props.item.title}`} style={{ textDecoration: "none", color: "inherit" }}>
        <h6>{title}</h6>
      </Link>
        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i class="ri-user-line"></i> {students}
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
