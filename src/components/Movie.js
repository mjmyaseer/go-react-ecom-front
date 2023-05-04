import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {

    const [movie, setMovie] = useState({})
    let { id } = useParams();

    useEffect(() => {
        let myMovie = {
            id: 1,
            title: "Highlander",
            release_date: "1986-03-07",
            runtime: 116,
            mpaa_rating: "R",
            description: "Some long description",
        }

        setMovie(myMovie);
    }, [id])
    return (
        <div>
            <h2>Movies: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} Minutes, Rated {movie.mpaa_rating}</em></small>
            <hr />
            <p>Some long description</p>
        </div>
    );

}

export default Movie;