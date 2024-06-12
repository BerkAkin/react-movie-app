import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "../MovieDetail/MovieDetail";
import HomePage from "../HomePage/HomePage";
import NavbarComponent from "../Navbar/NavbarComponent";
import styles from "./styles.module.css";

function Container() {
  return (
    <>
      <div className={styles.bgImage}>
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/movieDetail/:id" element={<MovieDetail />}></Route>
            <Route path="/genres" element={<HomePage />}></Route>
            <Route path="/tvSeries" element={<HomePage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/:trending" element={<HomePage />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default Container;
