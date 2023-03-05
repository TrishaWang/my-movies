import logo from "./logo.svg";
import "./App.scss";
import MovieList from "./components/MovieList";
import react, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import RemoveFavourites from "./components/RemoveFavourites";
import MovieHeading from "./components/MovieHeading";
import MovieSearchTrendList from "./components/MovieSearchTrendList";

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

    if (!movieFavourites){
      localStorage.setItem("react-movie-favourites", JSON.stringify([]));
    } 
    setFavourites(movieFavourites);
    getTrendingMovieRequest();
    getRecentMovieRequest();
  }, []);



  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-favourites", JSON.stringify(items));
  };

  const FavoriteMovie = (movie) => {
    console.log("app",movie.isfav)
    if (movie.isfav){
      // console.log(movie.isfav)
        const newFavoriteList = [...favourites, movie];
        setFavourites(newFavoriteList);
        saveToLocalStorage(newFavoriteList)
    }else if (!movie.isfav){ 
      const newFavoriteList = favourites.filter(
        (favorite) => favorite.id !== movie.id
        );
        setFavourites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
      }
    
  
  }

  
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
            <MovieListHeading heading='Search Results' />
        )}
          <MovieList
            movies={movies}
            favourites={favourites}
            rowId="1"
            handleFavoriteClick={FavoriteMovie}
          />
      </div>
      {/* Top 10 Trending */}
      <div className='movie-container'>
          <MovieListHeading heading='Top 10 Trending' />
          <MovieList
            movies={trending.filter((movies, id) => id <= 9)}
            favourites={favourites}
            rowId="2"
            trendNums={true}
            handleFavoriteClick={FavoriteMovie}

          />
      </div>
      {/* Favorite */}
      <div className='movie-container'>
          <MovieListHeading heading='Favourites' />
        <div className='favorite-list row'>
          <MovieList
            movies={favourites}
            handleFavoriteClick={FavoriteMovie}

          />
        </div>
      </div>
    </div>
  );
}

export default App;
