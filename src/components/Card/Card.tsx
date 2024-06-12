import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface Props {
  movie: {
    id: number;
    overview: string;
    poster_path: string;
    name?: string;
    title?: string;
  };
}

function Card(props: Props) {
  const { movie } = props;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <>
      <div className={`${styles.cardBody} d-flex flex-column justify-content-start`}>
        <div className={styles.cardImagePanel}>
          <Link className="text-decoration-none text-dark fw-bold" to={`/movieDetail/${movie.id}`}>
            <img style={{ borderRadius: "10px" }} src={`${backdropUrl}`} width={200} />
          </Link>
        </div>
        <div className={`${styles.cardTitlePanel} text-center pt-2 `}>
          <Link className="text-decoration-none text-dark fw-bold" to={`/movieDetail/${movie.id}`}>
            {movie.name ? movie.name : movie.title}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
