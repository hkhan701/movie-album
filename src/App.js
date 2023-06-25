import { useEffect, useState} from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com/?apikey=1a53d214";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); // fetch the data from the API
        const data = await response.json();
        setMovies(data.Search);
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
          value= {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt="Search Icon" onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 
        ? (
            <div className="container">
                {
                    movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))
                }
            </div>
        ): (
            <div className="empty">
                <h2>No movies found</h2>
            </div>   
        )
      }
    </div>
  );
};

export default App;
