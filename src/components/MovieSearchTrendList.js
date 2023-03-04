import React from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import MovieList from "./MovieList";

const MovieSearchTrendList = (props) => {
    const rowId=props.rowId
  
    const slideLeft = () => {
      let slider = document.getElementById(`slider ${rowId}`);
      slider.scrollLeft = slider.scrollLeft - 1120;
    };
  
    const slideRight = () => {
      let slider = document.getElementById(`slider ${rowId}`);
      console.log(slider.scrollLeft);
      slider.scrollLeft = slider.scrollLeft + 1120;
    };

    console.log(props)
    console.log(props.movie)
    console.log(props.favourites)
    return(
        <div className="movie-list-container">
        
        <div className='movie-list row' id={`slider ${rowId}`}>
        
        <MovieList props={props}/>
        </div>
        <div className='button-left' onClick={slideLeft}>
        <BiChevronLeft className='button-left-icon' />
        </div>
        <div className='button-right' onClick={slideRight}>
        <BiChevronRight className='button-right-icon' />
        </div>
        </div>
    );
       
    };
    
export default MovieSearchTrendList;
    