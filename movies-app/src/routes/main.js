import React from "react";
import { Link } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import useSearchMovies from "../hooks/useSearchMovies";

import SearchForm from "../components/searchForm";

export default function Main() {
  const { loading, error, movies } = useFetchMovies();
  const {
    search,
    searchMovies,
    searchError,
    handleSearch,
    handleSearchSubmit,
  } = useSearchMovies();

  return (
    <>
      <h1 className="title">Movie App</h1>

      {error && console.log(error)}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="영화 제목을 입력하세요."
            />
            <input type="submit" value="검색" />
          </form>

          <div id="wrap">
            {movies.map((movie) => (
              <div key={movie.id} className="posterWrap">
                <Link to={`moviedetail/${movie.id}`}>
                  <img
                    src={movie.medium_cover_image}
                    alt="영화 포스터 이미지"
                  />
                  <h2>{movie.title}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
