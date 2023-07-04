import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMoviestore } from "../redux/movie-store";

export default function useFetchMovies() {
  const [loading, setLoading] = useState(true); //로딩 상태
  const [error, setError] = useState(""); //Error 상태
  const [movies, setMovies] = useState([]); //영화 데이터를 가지고 있는 배열 상태
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        dispatch(updateMoviestore({ movies: json.data.movies }));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); //영화 데이터를 받아 올때 1번만 실행

  return { loading, error, movies };
}
