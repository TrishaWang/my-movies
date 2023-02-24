import logo from "./logo.svg";
import "./App.scss";
import MovieList from "./components/MovieList";
import react, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=toy&apikey=3b69450b";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className='movie-app container-fluid'>
      <div className='movie-header'>
        <div className='header'>
          <img alt='movie-app-logo' src='../img/movie-app-logo.png' />
          <input type='text' />
        </div>
      </div>
      {/* movie body */}

      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
