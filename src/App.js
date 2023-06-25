import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=1a53d214";

const movie1 = {
  Title: "Harry Potter and the Forbidden Journey",
  Year: "2010",
  imdbID: "tt1756545",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); // fetch the data from the API
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Harry Potter");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value="superman"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="Search Icon" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https//via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span> {movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
