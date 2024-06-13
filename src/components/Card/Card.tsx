import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface Props {
  movie: {
    id: number;
    overview: string;
    poster_path: string;
    name?: string;
    title?: string;
    first_air_date?: string;
    release_date?: string;
  };
  category?: string;
}

function Card(props: Props) {
  const { movie, category } = props;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <>
      <div className={`${styles.cardBody} d-flex flex-column justify-content-start`}>
        <div className={styles.cardImagePanel}>
          <Link to={`/${category}Detail/${movie.id}`}>
            <img style={{ borderRadius: "10px" }} src={`${backdropUrl}`} width={200} />
          </Link>
        </div>
        <div className={`${styles.cardTitlePanel} text-center my-auto pt-2 `}>
          <Link className="text-decoration-none text-light  fw-bold" to={`/${category}Detail/${movie.id}`}>
            {movie.name ? movie.name : movie.title}
          </Link>
        </div>
        <div className={`${styles.cardTitlePanel} text-center text-light my-auto `}>
          {category === "series" ? `${movie.first_air_date?.substring(0, 4)}` : `${movie.release_date?.substring(0, 4)}`}
        </div>
      </div>
    </>
  );
}

export default Card;
