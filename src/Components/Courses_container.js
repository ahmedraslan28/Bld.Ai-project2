import React from "react";
import "../styles/Courses_container.css";
const Courses_container = ({ data }) => {
  const { tit, disc, topic } = data;
  return (
    <div class="courses-header-text">
      <div class="title">{tit}</div>
      <div class="details">{disc}</div>
      <button type="button" class="Explore-btn">{`Explore ${topic}`}</button>
    </div>
  );
}
export default Courses_container;
