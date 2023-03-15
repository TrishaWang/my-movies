import React from "react";
import MovieLogo from "./MovieLogo";
import SearchBox from "./SearchBox";

const MovieHeading = (props) => {
  const searchValue = props.searchValue;
  const setSearchValue = props.setSearchValue;

  return (
    <div className='movie-header row d-flex align-items-center'>
      <MovieLogo />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default MovieHeading;
