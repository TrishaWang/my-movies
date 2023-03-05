import React, { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import Movie from "./Movie";


const MovieList = (props) => {

  const FavoriteComponent = props.favoritesComponents;
  const trendNum = props.trendNums;
  const handleFavoriteClick= props.handleFavoriteClick;

  const rowId=props.rowId;

  const slideLeft = () => {
    let slider = document.getElementById(`slider ${rowId}`);
    // console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 1120;
  };

  const slideRight = () => {
    let slider = document.getElementById(`slider ${rowId}`);
    // let sliders = document.getElementById("slider").;
    slider.scrollLeft = slider.scrollLeft + 1120;
  };
  return (
    <>
    <div className="movie-list-container">

      
    <div className='movie-list row' id={`slider ${rowId}`}>

      {props.movies.map((movie, id) => (
        <Movie movie={movie} key={id} id={id} FavoriteComponent={FavoriteComponent} trendNum={trendNum} handleFavoriteClick={handleFavoriteClick}/>
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
