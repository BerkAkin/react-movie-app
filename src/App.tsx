import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieDetail from "./components/MovieDetail/MovieDetail";
import HomePage from "./components/HomePage/HomePage";

import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/movieDetail/:id" element={<MovieDetail />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
