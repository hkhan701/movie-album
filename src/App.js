import { useEffect, useState} from "react";
import MovieCard from "./MovieCard";

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
