import { useEffect, useState } from "react";
import { getMovieById } from "../services/ExamenService";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const fetchMovie = async () => {
        const response = await getMovieById(id);
        setMovie(response.data);
    }

    useEffect(() => {
        fetchMovie();
    }, [])

    if (movie == null) {
        return <h1>movie not found</h1>
    }
    return (
        <div className="container">
            <div className="row">
                <img src="/assets/images/image.png" alt="ffff" className="col-6 img-fluid" />
                <div className="col-auto">
                    <h1>Description</h1>
                    <p>{movie?.description}</p>
                    <h1>Genre</h1>
                    <p>{movie?.genre}</p>
                    <p>Genre: Action</p>
                    <h1>Year</h1>
                    <p>{movie?.year}</p>

                </div>
            </div>
        </div>
    );
}

export default MovieDetails;