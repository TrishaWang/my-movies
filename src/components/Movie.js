import React, { useState, useEffect } from "react";
import AddFavorites from "./AddFavorites";
import RemoveFavourites from "./RemoveFavourites";
const api_img = "https://image.tmdb.org/t/p/w500/";

const Movie = ({
  movie,
  id,
  trendNum,
  FavoriteComponent,
  handleFavoriteClick,
}) => {
  // const [fav, setFav] = useState(false);

  // // useEffect(() => {
  // //   console.log("3", movie.isfav);
  // //   handleFavoriteClick(movie);
  // // }, [fav]);

  // const clickFav = (movie) => {
  //   // if (movie.isfav) {
  //   // }
  //   console.log(movie);
  //   console.log(movie.isfav);
  //   setFav((p) => {
  //     console.log("toggledmovie.isfav");
  //     return !p;
  //   });
  //   console.log(movie);
  //   console.log(movie);
  //   // setFav(!fav);
  //console.log(movie.isfav);
  // console.log("2", movie.isfav);
  // const newMovie = Object.assign(movie, { isfav: fav });
  // console.log(newMovie);
  //movie.isfav = fav;
  //console.log("3", movie.isfav);
  // };

  return (
    <div className='movie-poster'>
      {/* image-container */}
      <div key={id} className='image-container d-flex justify-content-start'>
        <img src={api_img + movie.poster_path} alt={movie.original_title} />
        <div
          onClick={() => {
            //check if movie id is in favourite already
            // if yes means favourite is === true
            //
            // if (favourites) movie.favourite = !movie.favourite;
            // console.log(movie);
            // console.log(movie.isfav);
            handleFavoriteClick(movie);
            return;
          }}
          className='overlay d-flex align-items-center justify-content-center'
        >
          {movie.favourite ? <RemoveFavourites /> : <AddFavorites />}
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
