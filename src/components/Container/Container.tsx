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
            <Route path="/:seriesDetail/:id" element={<MovieDetail />}></Route>
            <Route path="/:newsDetail/:id" element={<MovieDetail />}></Route>
            <Route path="/:trendsDetail/:id" element={<MovieDetail />}></Route>
            <Route path="/genres" element={<HomePage />}></Route>
            <Route path="/tvSeries" element={<HomePage />}></Route>
            <Route path="/newsa" element={<HomePage />}></Route>
            <Route path="/" element={<HomePage />}>
              <Route path="/:category" element={<HomePage />}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default Container;
