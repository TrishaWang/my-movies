import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, id) => (
        <div key={id} className='d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='movie-poster' />
        </div>
      ))}
    </>
  );
};

export default MovieList;
