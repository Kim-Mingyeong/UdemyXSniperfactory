import React from "react";
import useFetchMovieDetail from "../hooks/useFetchMovieDetail";

export default function MovieDetail() {
  const { loading, movie, error, handleBackPage } = useFetchMovieDetail();

  return (
    <>
      {error && console.log(error)}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {/* 뒤로가기 생성 */}
          <h5 onClick={handleBackPage}>X</h5>
          <h2>{movie.title}</h2>
          <div>
            <img src={movie.medium_cover_image} alt="영화 이미지" />
            <p>
              {movie.description_intro.length > 350
                ? `${movie.description_intro.slice(0, 350)} ... `
                : movie.description_intro}
            </p>
          </div>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>
            평점 : <span>{movie.rating}</span> / 10
          </p>
        </div>
      )}
    </>
  );
}
