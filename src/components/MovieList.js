import React, { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import {} from "react-icons/bi";

const api_img = "https://image.tmdb.org/t/p/w500/";

const MovieList = (props) => {
  const FavoriteComponent = props.favoritesComponents;

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    // console.log(slider);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  // +props.RowID;
  const slideRight = () => {
    let slider = document.getElementById("slider");
    // let sliders = document.getElementById("slider").;
    // console.log(slider);
    slider.scrollRight = slider.scrollRight - 500;
  };
  return (
    <>
      {props.movies.map((movie, id) => (
        <div className='movie-list-container'>
          {/* image-container */}
          <div key={id} className='image-container justify-content-start'>
            <img src={api_img + movie.poster_path} alt={movie.original_title} />
            <div
              onClick={() => props.handleFavoriteClick(movie)}
              className='overlay d-flex align-items-center justify-content-center'
            >
              <FavoriteComponent />
            </div>
          </div>
          {/* movie-list-title */}
          <div className='movie-list-title '>
            {/* <span >{id + 1}</span> */}
            <div>
              <h5>{movie.original_title}</h5>
              <p>{movie.release_date.slice(0, 4)}</p>
            </div>
          </div>
        </div>
      ))}
      <div className='button-left' onClick={slideLeft}>
        <BiChevronLeft className='button-left-icon' />
      </div>
      <div className='button-right' onClick={slideRight}>
        <BiChevronRight className='button-right-icon' />
      </div>

      {/* <svg
        className='button-right'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        class='bi bi-chevron-right button-right'
        viewBox='0 0 16 16'
      >
        <path
          class='button-right-path'
          fill-rule='evenodd'
          d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
        />
      </svg> */}
    </>
  );
};

export default MovieList;
