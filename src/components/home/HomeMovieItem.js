import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import routes from "../../routes/routes";
function HomeMovieItem({ movies }) {
  //   let { movie } = props;
  let location = useLocation();
  //   console.log(location);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${routes.movies}/${movie.id}`}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default HomeMovieItem;
