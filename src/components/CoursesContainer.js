import { React, useContext } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { CourseContext } from "../Contexts/CoursesContext";
import { IDContext } from "../Contexts/CourseIDContext";
function CoursesContainer({ searchVal }) {
  const { summary } = useContext(CourseContext);
  const { data } = useContext(CourseContext);
  const { id } = useContext(IDContext);
  let tmp = summary[id].items;
  let arr = [tmp[0], tmp[1], tmp[2], tmp[3], tmp[7]];
  const Filtered_Courses = arr.filter((course) =>
    course.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  // console.log(searchVal.toLowerCase());
  // console.log(arr[0].title.toLowerCase().includes(searchVal.toLowerCase()));
  console.log(Filtered_Courses);
  return (
    <div class="course-preview-container">
      {Filtered_Courses.map((course, index) => {
        console.log(course);
        return (
          <Link to={`/course/${course.id}`}>
            <CourseCard key={index} course={course} />
          </Link>
        );
      })}
      {/* <Link to={`/course/${arr[0].id}`}>
        <CourseCard idx={0} />
      </Link>
      <Link to={`/course/${arr[1].id}`}>
        <CourseCard idx={1} />
      </Link>
      <Link to={`/course/${arr[2].id}`}>
        <CourseCard idx={2} />
      </Link>
      <Link to={`/course/${arr[3].id}`}>
        <CourseCard idx={3} />
      </Link>
      <Link to={`/course/${arr[4].id}`}>
        <CourseCard idx={7} />
      </Link> */}
    </div>
  );
}

export default CoursesContainer;
