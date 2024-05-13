import { useEffect } from "react";
import { getMovies } from "../services/ExamenService";
import Movie from "../sections/Movie";
import { useState } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [message, setMessage] = useState("");

    const [search, setSearch] = useState("");

    const fetchMovies = async () => {
        const response = await getMovies();
        setMovies(response.data);
        setFilteredMovies(response.data);
    }
    useEffect(() => {
        fetchMovies();
    }, []);

    const handleSearch = () => {
        const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
        if (filteredMovies.length === 0) {
            setMessage("No movie found");
        } else {
            setMessage("");
        }
        setFilteredMovies(filteredMovies);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-auto ms-auto">
                    <label htmlFor="">seatch by title </label>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" />
                    <button onClick={() => handleSearch()} className="btn btn-primary"> search </button>
                </div>
            </div>
            <div className="row">
                <h1>{message}</h1>
                {filteredMovies.map((movie, i) => (
                    <div key={i} className="col-12 col-md-3">
                        <Movie data={movie} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Movies;