import logo from "./logo.svg";
import "./App.scss";
import MovieList from "./components/MovieList";
import react, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import MovieHeading from "./components/MovieHeading";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const SearchResultContainer = useRef(null);

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=937c84a48d4896f7cc0b7b27855cfc86&language=en-US&page=1&include_adult=false&query=${searchValue}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  const getTrendingMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=937c84a48d4896f7cc0b7b27855cfc86&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setTrending(responseJson.results);
    }
  };

  const getRecentMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=937c84a48d4896f7cc0b7b27855cfc86`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setUpcoming(responseJson.results);
    }
  };

  // useEffect(() => {
  //   // const SearchHeight =
  //   //   SearchResultContainer.current.getBoundingClientRect().height;
  //   // console.log(SearchHeight);
  //   if (searchValue) {
  //     SearchResultContainer.current.style.height = `auto`;
  //     SearchResultContainer.current.style.maxHeight = `auto`;
  //     SearchResultContainer.current.style.background = `#a68555`;
  //     SearchResultContainer.current.style.transition = `all 10s ease-in`;
  //     SearchResultContainer.current.style.top = `3px`;

  //     console.log(SearchResultContainer.current.style);
  //   } else {
  //     SearchResultContainer.current.style.height = `0px`;
  //     SearchResultContainer.current.style.top = `0`;
  //     // SearchResultContainer.current.style.maxHeight = `0px`;
  //     SearchResultContainer.current.style.transition = `none`;
  //     SearchResultContainer.current.style.background = `none`;
  //   }
  // }, [searchValue]);

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-favourites")
    );
    setFavourites(movieFavourites);
  }, []);

  useEffect(() => {
    getTrendingMovieRequest();
    getRecentMovieRequest();
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
      (favorite) => favorite.id !== movie.id
    );
    setFavourites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className='movie-app container-fluid'>
      {/* movie body */}
      <div className='movie-header row d-flex align-items-center'>
        <MovieHeading />

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {/* Search Result */}

      <div
        ref={SearchResultContainer}
        className='movie-container search-result-container'
      >
        {searchValue && (
          <div className='row d-flex align-items-center'>
            <MovieListHeading heading='Search Results' />
          </div>
        )}
        <div className='movie-list row' id='slider'>
          <MovieList
            movies={movies}
            favourites={favourites}
            handleFavoriteClick={AddFavoriteMovie}
            favoritesComponents={AddFavorites}
          />
        </div>
      </div>
      {/* Top 10 Trending */}
      <div className='movie-container'>
        <div className='row d-flex align-items-center'>
          <MovieListHeading heading='Top 10 Trending' />
        </div>
        <div className='movie-list row' id='slider2'>
          <MovieList
            movies={trending.filter((movies, id) => id <= 9)}
            favourites={favourites}
            trendNums={true}
            handleFavoriteClick={AddFavoriteMovie}
            favoritesComponents={AddFavorites}
          />
        </div>
      </div>
      {/* Upcoming
      <div className='row d-flex align-items-center'>
        <MovieListHeading heading='Upcoming Movies' />
      </div>
      <div className='movie-list row'>
        <UpcomingList
          movies={upcoming}
          favourites={favourites}
          handleFavoriteClick={AddFavoriteMovie}
          favoritesComponents={AddFavorites}
        />
      </div> */}
      {/* Favorite */}
      <div className='movie-container'>
        <div className='row d-flex align-items-center'>
          <MovieListHeading heading='Favourites' />
        </div>
        <div className='favorite-list row'>
          <MovieList
            movies={favourites}
            handleFavoriteClick={RemoveFavoriteMovie}
            favoritesComponents={RemoveFavourites}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
