import React from "react";
import { header_data, courses_data } from "./Constants/db";
import "./styles/App.css";
import Card from "./Components/Card";
import Courses_container from "./Components/Courses_container";
const App = () => {
  return (
    <div className="App">
      <Courses_container data={header_data} />
      <Card data={courses_data} />
    </div>
  );
}

export default App;
