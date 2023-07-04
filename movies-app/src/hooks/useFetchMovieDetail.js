import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useFetchMovieDetail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`) //api 가져오기
      .then((response) => response.json())
      .then((json) => {
        setMovie(json.data.movie);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // 뒤로가기 클릭
  const handleBackPage = () => {
    navigate(-1);
  };

  return { loading, movie, error, handleBackPage };
}
