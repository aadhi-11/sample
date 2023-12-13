import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./User/Home";
import NavBar from "./User/NavBar";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
