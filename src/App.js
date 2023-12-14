import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./User/Home";
import NavBar from "./User/NavBar";
import District from "./User/District";
import Place from "./User/Place";
import Category from "./User/Category";
import Subcategory from "./User/Subcategory";
import Parent from "./User/Parent";
import UseMemoExample from "./User/UseMemoExample";
import UseReducerExample from "./User/UseReducerExample";
import UserRegistration from "./User/UserRegistration";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/District" element={<District />} />
        <Route path="/place" element={<Place />} />
        <Route path="/cat" element={<Category />} />
        <Route path="/scat" element={<Subcategory />} />
        <Route path="/Parent" element={<Parent />} />
        <Route path="/UseMemoExample" element={<UseMemoExample />} />
        <Route path="/UseReducerExample" element={<UseReducerExample />} />
        <Route path="/UserRegistration" element={<UserRegistration/>} />
      </Routes>
    </div>
  );
};

export default App;
