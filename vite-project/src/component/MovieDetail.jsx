import React from "react";

const MovieDetail = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="movie-detail-overlay">
            <div className="movie-detail">
                <button className="close-btn" onClick={onClose}>✖</button>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Overview:</strong> {movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
