import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [movieDetail, setMovieDetail] = useState({});

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
      <div> {JSON.stringify(movieDetail)} </div>
    </>
  );
}

export default MovieDetail;
