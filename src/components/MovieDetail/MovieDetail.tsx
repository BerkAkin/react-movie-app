import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const api = process.env.REACT_APP_API_KEY;

function MovieDetail() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api}`,
    },
  };

  const { id, seriesDetail } = useParams();
  console.log(seriesDetail);
  const [movieDetail, setMovieDetail] = useState<{
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
    genres: { id: number; name: string }[];
    name: string;
    episode_run_time: string;
    number_of_seasons: string;
    first_air_date: string;
    created_by?: [{ name: string }];
  }>({
    backdrop_path: "",
    poster_path: "",
    title: "",
    overview: "",
    genres: [],
    release_date: "",
    name: "",
    number_of_seasons: "",
    episode_run_time: "",
    first_air_date: "",
    created_by: [{ name: "" }],
  });
  const posterUrl = `https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`;

  useEffect(() => {
    let url = ``;
    if (seriesDetail === "seriesDetail") {
      url = `https://api.themoviedb.org/3/tv/${id}?language=tr-TR`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${id}?language=tr-TR`;
    }
    axios(url, options)
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
                <div style={{ fontSize: "5.1rem" }} className="d-flex text-white fw-bold mt-1">
                  {seriesDetail === "seriesDetail" ? `${movieDetail.name}` : `${movieDetail.title}`}
                </div>
                <div className="mt-4">
                  {movieDetail.genres.map((genre) => (
                    <span key={genre.id} className={`border rounded text-white px-2 py-1 mr-2 mx-1 ${styles.genre}`}>
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: "1.05rem" }} className="d-flex text-white  mt-3">
                  {movieDetail.overview}
                </div>{" "}
                <div style={{ fontSize: "1.05rem" }} className="d-flex text-white  mt-4">
                  {seriesDetail === "seriesDetail" &&
                    movieDetail.created_by &&
                    movieDetail.created_by.length > 0 &&
                    `Yapımcı: ${movieDetail.created_by[0].name}`}
                </div>{" "}
                <div style={{ fontSize: "1.05rem" }} className="d-flex text-white  mt-1">
                  {seriesDetail === "seriesDetail" ? `İlk Yayın Tarihi: ${movieDetail.first_air_date}` : ""}
                </div>{" "}
                <div style={{ fontSize: "1.05rem" }} className="d-flex text-white  mt-1">
                  {seriesDetail === "seriesDetail" ? `Sezon Sayısı: ${movieDetail.number_of_seasons}` : `Çıkış Tarihi:  ${movieDetail.release_date}`}
                </div>{" "}
                <div style={{ fontSize: "1.05rem" }} className="d-flex text-white  mt-1">
                  {seriesDetail === "seriesDetail" ? `Bölüm Uzunluğu: ${movieDetail.episode_run_time} Dk` : ""}
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
