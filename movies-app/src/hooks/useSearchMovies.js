import { useState } from "react";
import { json } from "react-router-dom";

export default function useSearchMovies() {
  const [search, setSearch] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchError, setSearchError] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${search}`)
      .then((response) => response.json())
      .then((json) => {
        setSearchMovies(json.data.movies);
      })
      .catch((error) => {
        setSearchError(error);
      });
  };

  return {
    search,
    searchMovies,
    searchError,
    handleSearch,
    handleSearchSubmit,
  };
}
