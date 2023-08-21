import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail() {
    const  [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    }
    
    useEffect(() => {
        getMovie();
    }, []);

    console.log(movie.description_full);
    return (
        <div className={styles.container}>
            <button className={styles.home}>
                <Link to={"../"}> GO Home </ Link>    
            </button>
            <h1 className={styles.title}>{movie.title}</h1>
            <img src={movie.medium_cover_image} alt={movie.title} className={styles.movie_image}/>
            <h2 className={styles.year}>Year: {movie.year}</h2>
            <h2 className={styles.rating}>Rating: {movie.rating}</h2>
            <h2 className={styles.likes}>Likes: {movie.like_count}</h2>
            <h2 className={styles.downloads}>Downloads: {movie.download_count}</h2>
            <p className={styles.story}>
                Story: {movie.description_full ===""? "Sorry... No information" : movie.description_full}
            </p>
        </div>
    );
}

export default Detail;