import logo from "./logo.svg";
import "./App.scss";
import MovieList from "./components/MovieList";
import react, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import MovieHeading from "./components/MovieHeading";
import RemoveFavourites from "./components/RemoveFavourites";
function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3b69450b`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-favourites")
    );
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-favourites", JSON.stringify(items));
  };

  const AddFavoriteMovie = (movie) => {
    const newFavoriteList = [...favourites, movie];
    setFavourites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const RemoveFavoriteMovie = (movie) => {
    const newFavoriteList = favourites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavourites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className='movie-app container-fluid'>
      {/* <div className='movie-header'>
        <div className='header'>
        </div>
      </div> */}
      {/* movie body */}
      <div className='movie-header row d-flex align-items-center'>
        <MovieHeading />

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {/* Movies */}
      <div className='row d-flex align-items-center'>
        <MovieListHeading heading='Movies' />
      </div>
      <div className='search-movie row'>
        <MovieList
          movies={movies}
          favourites={favourites}
          handleFavoriteClick={AddFavoriteMovie}
          favoritesComponents={AddFavorites}
        />
      </div>
      {/* Favorite */}
      <div className='row d-flex align-items-center'>
        <MovieListHeading heading='Favourites' />
      </div>

      <div className='favorite-movie row'>
        <MovieList
          movies={favourites}
          handleFavoriteClick={RemoveFavoriteMovie}
          favoritesComponents={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default App;
