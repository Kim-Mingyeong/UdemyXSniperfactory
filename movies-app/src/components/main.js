import React from "react";
import useFetchMovies from "../hooks/useFetchMovies";

export default function Main() {
  const { loading, error, movies } = useFetchMovies();

  return (
    <>
      <h1 className="title" style={{ textAlign: "center" }}>
        Movie App
      </h1>
      {error && console.log(error)}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div id="wrap">
          {movies.map((movie) => (
            <div key={movie.id} className="posterWrap">
              <img src={movie.medium_cover_image} alt="영화 포스터 이미지" />
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
