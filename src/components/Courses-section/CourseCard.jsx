import React from "react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
      <Link to={`/courses/${props.item.title}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={imgUrl} alt="" className="w-100" />
      </Link>
      </div>

      <div className="course__details">
      <Link to={`/courses/${props.item.title}`} style={{ textDecoration: "none", color: "inherit" }}>
        <h6 className="course__title mb-4">{title}</h6>
      </Link>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="https://formfacade.com/public/101831235159428287253/all/form/1FAIpQLSdYEuZmv4AGpvnNuRU7sXlWy18WMdkHx4yb1Y1RhZEDPjq2Qw"> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
