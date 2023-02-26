import React, { useState } from "react";
const api_img = "https://image.tmdb.org/t/p/w500/";

const MovieList = (props) => {
  const FavoriteComponent = props.favoritesComponents;
  return (
    <>
      {props.movies.map((movie, id) => (
        <div
          key={id}
          className='image-container d-flex justify-content-start m-3'
        >
          <img src={api_img + movie.poster_path} alt={movie.original_title} />
          <div
            onClick={() => props.handleFavoriteClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
