import { useEffect, useState } from "react";
import "./App.css";
import Search from "./component/Search.jsx";
import MovieCard from "./component/MovieCard.jsx";

import { useDebounce } from "react-use";
import MovieDetail from "./component/MovieDetail.jsx";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const API_BASEURL = "https://api.themoviedb.org/3";
    const apiKey = import.meta.env.VITE_API_KEY;

    useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

    const API_OPTION = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
    };

    const fetchMovies = async (query = "") => {
        setLoading(true);
        try {
            const endpointURL = query
                ? `${API_BASEURL}/search/movie?query=${query}`
                : `${API_BASEURL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpointURL, API_OPTION);

            if (!response.ok) {
                throw new Error("Could not find movie data");
            }

            const data = await response.json();
            setMovieList(data.results || []);
        } catch (e) {
            console.error("Error fetching movies:", e);
            setMovieList([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(debounceSearchTerm);
    }, [debounceSearchTerm]);

    return (
        <main>
            <div className="pattern" />
            <div className="wrapper">
                <header>
                    <img src="./hero-img.png" alt="heroimage" />
                    <h1>
                        Find <span className="text-gradient">Movies</span> you enjoy without a hassle
                    </h1>
                </header>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <section className="all-movies">
                    <h2>All Movies</h2>
                    {loading ? (
                        <p className="text-white">Loading movies...</p>
                    ) : (
                        <ul>
                            {movieList.length > 0 ? (
                                movieList.map((movie) => (
                                    <MovieCard
                                        key={movie.id}
                                        movie={movie}
                                        onClick={setSelectedMovie} // Ensure onClick is passed correctly
                                    />
                                ))
                            ) : (
                                <p className="text-white">No movies found</p>
                            )}
                        </ul>
                    )}
                </section>
            </div>
            {selectedMovie && (
                <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
            )}
        </main>
    );
}

export default App;
