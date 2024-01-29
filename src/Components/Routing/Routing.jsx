import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Pages/Home";
import NewHome from "../../Pages/NewHome";
// import Sermons from "../../Pages/Sermons";
// import Contact from "../../Pages/Contact";
// import Give from "../../Pages/Give";
// import Sermons from "../../Pages/Sermons";
// import Sermons from "../../Pages/Sermons";

const Routing = () => {
  return (
    <Routes>
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="/" element={<NewHome />} />
      {/* <Route path="/sermons" element={<Sermons />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/log-in" element={<Login />} />
      <Route path="/givings" element={<Give />} /> */}
    </Routes>
  );
};

export default Routing;
