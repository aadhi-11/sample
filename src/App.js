import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./User/Home";
import NavBar from "./User/NavBar";
import District from "./User/District";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/District" element={<District />} />
      </Routes>
    </div>
  );
};

export default App;
