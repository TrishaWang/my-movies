import React, { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const api_img = "https://image.tmdb.org/t/p/w500/";

const MovieList = (props) => {
  const FavoriteComponent = props.favoritesComponents;
  const trendNum = props.trendNums;
  const rowId=props.rowId

  const slideLeft = () => {
    let slider = document.getElementById(`slider ${rowId}`);
    // console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 1120;
  };

  const slideRight = () => {
    let slider = document.getElementById(`slider ${rowId}`);
    // let sliders = document.getElementById("slider").;
    console.log(slider.scrollLeft);
    slider.scrollLeft = slider.scrollLeft + 1120;
  };
  return (
    <>
    <div className="movie-list-container">

      
    <div className='movie-list row' id={`slider ${rowId}`}>

      {props.movies.map((movie, id) => (
        <div className='movie-poster'>
          {/* image-container */}
          <div
            key={id}
            className='image-container d-flex justify-content-start'
            >
            <img src={api_img + movie.poster_path} alt={movie.original_title} />
            <div
              onClick={() => props.handleFavoriteClick(movie)}
              className='overlay d-flex align-items-center justify-content-center'
              >
              <FavoriteComponent />
            </div>
          </div>
          {/* movie-title */}
          <div className='movie-title d-flex'>
            {trendNum ? <span>{id + 1}</span> : <span></span>}
            <div>
              <h5>{movie.original_title}</h5>
              <p>{movie.release_date.slice(0, 4)}</p>
            </div>
          </div>
        </div>
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
