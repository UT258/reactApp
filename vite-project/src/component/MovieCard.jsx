import React from "react";

const MovieCard = ({ movie, onClick }) => {
    const baseurl = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className="movie-card">
            <img
                src={movie.poster_path ? `${baseurl}${movie.poster_path}` : ""}
                alt={movie.title}
                onClick={() => onClick(movie)} // Trigger onClick when image is clicked
            />
            <div className="mt-4">
                <p className="text-white">{movie.title}</p>
            </div>
            <div className="content">
                <div className="rating">
                    <img src="Rating.svg" alt="rating" />
                    <p>{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
                </div>
                <p className="lang">{movie.original_language}</p>
            </div>
        </div>
    );
};

export default MovieCard;
