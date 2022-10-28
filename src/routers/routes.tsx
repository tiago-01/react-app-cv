import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages";
import AboutMePage from "../pages/about-me";
import DigitalSkills from "../pages/digital-skills";
import EducationTraining from "../pages/education-training";
import WorkExperience from "../pages/work-experience";

function MyRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/digital-skills" element={<DigitalSkills />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/education-training" element={<EducationTraining />} />
        {/* <Route path="*">
          <NoRoute />
        </Route> */}
      </Routes>
    </Router>
  );
}
export default MyRouters;
