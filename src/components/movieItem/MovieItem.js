import { useState, useEffect } from "react";
import {
  useLocation,
  useParams,
  useNavigate,
  useMatch,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import getResponse from "../../server/serverResponse";
import routes from "../../routes/routes";
function MovieItem(props) {
  const [movie, setMovie] = useState();
  let movieId = useParams();
  let navigate = useNavigate();
  //   const url = useMatch({
  //     path: `${routes.movies}${routes.movieItem}`,
  //     end: false,
  //   });
  //   console.log(url);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=79c40bd34353ff43c76be010da767c58&language=en-US`;
    getResponse(url).then((data) => {
      console.log(data);
      return setMovie(data);
    });
  }, []);

  const handleClick = (e) => {
    let value = e.target.value;
    if (value === "cast") {
      navigate(`${value}`, {
        replace: true,
        state: { movie: movie },
      });
    }
    if (value === "reviews") {
      navigate(`${value}`, { replace: true });
    }
  };

  return (
    <>
      {movie !== undefined ? (
        <>
          <h1>{movie.original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          ></img>
          <h2>Title: {movie.vote_average * 10}%</h2>
          <h2>Overview:</h2>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <button value="cast" onClick={handleClick}>
            Cast
          </button>
          <button value="reviews" onClick={handleClick}>
            Reviews
          </button>
          <Outlet context={[movie.id]} />
        </>
      ) : (
        <p>is Loading</p>
      )}
      {/* <Routes>
        <Route path={`${location}/cast`} element={<Cast />}></Route>
      </Routes> */}
    </>
  );
}
export default MovieItem;
