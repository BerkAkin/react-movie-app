import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import axios from "axios";
import MovieDetail from "../MovieDetail/MovieDetail";
const api = process.env.REACT_APP_API_KEY;

interface AllMoviesResponse {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

function HomePage() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api}`,
    },
  };

  const [movies, setMovies] = useState<AllMoviesResponse[]>([]);

  useEffect(() => {
    axios("https://api.themoviedb.org/3/movie/upcoming?language=tr-TR&page=1", options)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        {movies.map((mov, key) => {
          return (
            <>
              <div key={key}></div>
              <Link to={`/movieDetail/${mov.id}`}>{mov.title}</Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
