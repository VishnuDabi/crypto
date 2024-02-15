import React, { useState } from "react";
import "./App.css";
import "./common css/index.css";
import Header from "./Common/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CoinsCard from "./Components/coins card/CoinsCard";
import Home from "./Components/HomePage/Home";
import Slider from "./Components/slider/Slider";
import Mission from "./Components/Mission/Mission";
import Secure from "./Components/Safe and Secure/Secure";
import Protecting from "./Components/Protecting/Protecting";
import Stay from "./Components/stay/Stay";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  function sidebarHandler() {
    setSidebar(!sidebar);
  }
  return (
    <div className="relative-1">
      <Header />
      <Slider />
      <Mission />
      <Secure />
      <Protecting />
      <Stay />

      {/* <Home/> */}
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <Header sidebarHandler={sidebarHandler} />
      <div className="flex__container">
        <div
          className={
            sidebar
              ? "sidebar__nav__left__active"
              : "sidebar__nav__left__deactive"
          }
        >
          <Sidebar sidebar={sidebar} />
        </div>
        <div className="right__container">
          <CoinsCard />
        </div>
      </div> */}
    </div>
  );
};

export default App;
