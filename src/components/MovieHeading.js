import React from "react";
import MovieLogo from "./components/MovieLogo";
import SearchBox from "./components/SearchBox";

const MovieHeading = () => {
  return (
    <div className='movie-header row d-flex align-items-center'>
      <MovieLogo />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default MovieHeading;
