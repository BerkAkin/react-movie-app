import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { title } from "process";

const api = process.env.REACT_APP_API_KEY;

function MovieDetail() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api}`,
    },
  };
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<{
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    genres: { id: number; name: string }[];
  }>({ backdrop_path: "", poster_path: "", title: "", overview: "", genres: [] });
  const posterUrl = `https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`;

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?language=tr-TR`, options)
      .then((response) => {
        setMovieDetail(response.data);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <div className={`vh-100 `} style={{ backgroundImage: `url(${posterUrl})`, backgroundSize: 2000 }}>
        <div className={`vh-100 pt-5 d-flex justify-content-center align-items-center ${styles.bgImage}`}>
          <div className="container " style={{ height: 600 }}>
            <div className="row" style={{ height: 600 }}>
              <div className="col-4">
                <div className={`${styles.cardBody} d-flex justify-content-end `}>
                  <img style={{ borderRadius: "20px" }} src={`${backdropUrl}`} width={450} />
                </div>
              </div>
              <div className="col-8">
                <div style={{ fontSize: "6rem" }} className="d-flex text-white fw-bold mt-3">
                  {movieDetail.title}
                </div>
                <div className="mt-4">
                  {movieDetail.genres.map((genre) => (
                    <span key={genre.id} className={`border rounded text-white px-2 py-1 mr-2 mx-1 ${styles.genre}`}>
                      {genre.name}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: "1.5rem" }} className="d-flex text-white  mt-5">
                  {movieDetail.overview}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
