import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/movieDetail/:id" element={<MovieDetail />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
