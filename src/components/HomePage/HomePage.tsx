import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./styles.module.css";
import Card from "../Card/Card";

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
      <div className={"container pt-5"}>
        <div className="row pt-5">
          {movies.map((mov) => {
            return (
              <>
                <div className="col-2 mt-5">
                  <div key={mov.id}></div>

                  <Card movie={mov} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
