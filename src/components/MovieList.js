import React from "react";

const MovieList = (props) => {
  const FavoriteComponent = props.favoritesComponents;
  return (
    <>
      {props.movies.map((movie, id) => (
        <div
          key={id}
          className='image-container d-flex justify-content-start m-3'
        >
          <img src={movie.Poster} alt='movie-poster' />
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
