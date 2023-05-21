import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Stats from "./components/Stats";
import Offers from "./components/Offers";

function MainNav() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="stats" element={<Stats />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainNav;
