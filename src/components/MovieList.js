import React, { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import Movie from "./Movie";

const MovieList = (props) => {
  const FavoriteComponent = props.favoritesComponents;
  const trendNum = props.trendNums;
  const favourites = props.favourites;
  const handleFavoriteClick = props.handleFavoriteClick;
  const movieListType = props.movieListType;
  const movies = props.movies;

  const rowId = props.rowId;

  const slideLeft = () => {
    let slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft = slider.scrollLeft - 1120;
  };

  const slideRight = () => {
    let slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft = slider.scrollLeft + 1120;
  };

  const favoriteStatus = (favourites, movie) => {
    if (favourites.length !== 0 && movie.length !== 0) {
      console.log(movieListType, favourites, movie);
      if (favourites && favourites.length !== 0) {
        favourites.some((x) => {
          if (x.id === movie.id) {
            // console.log(true, x, movie);

            return "true";
          }
          // console.log(false, x, movie);
          return "false";
        });
      }
    }
    return "falses";
  };

  return (
    <>
      <div className='movie-list-container'>
        <div className='movie-list row' id={`slider ${rowId}`}>
          {movies.map((movie, id) => (
            <Movie
              favourites={favourites}
              movie={movie}
              key={id}
              id={id}
              favoriteStatus={favoriteStatus}
              FavoriteComponent={FavoriteComponent}
              trendNum={trendNum}
              handleFavoriteClick={handleFavoriteClick}
            />
          ))}
        </div>
        <div className='button-left' onClick={slideLeft}>
          <BiChevronLeft className='button-left-icon' />
        </div>
        <div className='button-right' onClick={slideRight}>
          <BiChevronRight className='button-right-icon' />
        </div>
      </div>
    </>
  );
};

export default MovieList;
