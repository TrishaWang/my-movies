import React, { useState,useEffect } from "react";
import AddFavorites from "./AddFavorites";
import RemoveFavourites from "./RemoveFavourites";
const api_img = "https://image.tmdb.org/t/p/w500/";

const Movie = ({movie, id, trendNum, FavoriteComponent,handleFavoriteClick}) => {
      const [fav, setFav] = useState(false);
    movie = Object.assign(movie,{isfav : false});


    useEffect(()=>{
        movie.isfav = fav;
        handleFavoriteClick(movie);
    },[fav])
    
   const clickFav = (movie)=>{

    setFav(p=>!p);
    console.log("f",movie.isfav )
    
    
}

  return (
    <div className='movie-poster'>
    {/* image-container */}
    <div
      key={id}
      className='image-container d-flex justify-content-start'
      >
      <img src={api_img + movie.poster_path} alt={movie.original_title} />
      <div
        onClick={() => {;clickFav(movie)}}
        className='overlay d-flex align-items-center justify-content-center'
        >
          {fav? <RemoveFavourites />:<AddFavorites /> }
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
  );
  
};

export default Movie;
