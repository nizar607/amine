import { Link } from 'react-router-dom'
import { useState } from 'react'
import { updateMovie } from "../services/ExamenService"

const Movie = ({ data }) => {

    const [rate, setRate] = useState(0);
    const [movie, setMovie] = useState(data);

    const handleRating = async () => {
        if (rate >= 0 && rate <= 5) {
            movie.rating.push(rate);
            const repsone = await updateMovie(movie.id, movie);
            setMovie(repsone.data);
        }else{
            alert("rating must be between 0 and 5")
        }
    }


    return (

        <div className="card">
            <img src="/assets/images/image.png" className="card-img-top img-fluid" alt="..." />
            <div className="card-body text-center">
                <Link to={`/movie-details/${movie?.id}`} className="card-title">{movie?.title}</Link>
                <p className="card-text">Year: {movie?.year}</p>
                <p className="card-text">Genre: {movie?.genre}</p>
                <p className="card-text">Description: {movie?.description}</p>


                <h2>Movie rating</h2>

                <div className="row">
                    <div className="col-auto ms-auto">
                        <label>Rate this movie: </label>
                        <input onChange={(e) => setRate(Number(e.target.value))} type="number" />
                        <button onClick={() => handleRating()} className="btn btn-primary ms-1 mt-2">Rate</button>
                        {movie?.rating.length == 0 ?
                            <h4>no ratings yet</h4> :
                            <h4>rating : {movie?.rating.reduce((a, b) => a + b) / movie?.rating.length}</h4>
                        }
                        {/* <input onChange={(e) => handleRating(e)} type="number" />
                        <button onClick={() => rate()} className="btn btn-primary ms-1 mt-2">Rate</button>
                        <button onClick={() => handleAddToWishlist()} className="btn btn-primary col-12 my-3">add to wishlist</button> */}
                    </div>
                </div>

                {/* {movie?.rating.length == 0 ? <p className="card-text">No rating found</p> : <p className="card-text"> Rating : {movie?.rating.reduce((a, b) => a + b) / movie?.rating.length} </p>} */}

            </div>


        </div>
    )
}

export default Movie
