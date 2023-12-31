import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({id, coverImg, title, summary, genres, year}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie_img}/>
            <h2 className={styles.movie_title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
            <h3 className={styles.movie_year}>{year}</h3>
            <ul className={styles.movie_genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
    </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;