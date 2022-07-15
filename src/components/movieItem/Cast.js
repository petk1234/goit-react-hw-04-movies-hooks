import { useState, useEffect, React } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import getResponse from "../../server/serverResponse";
function Cast(props) {
  const [id] = useOutletContext();
  const [cast, setCast] = useState();
  const location = useLocation();
  console.log(location.state.movie);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=79c40bd34353ff43c76be010da767c58&language=en-US`;
    getResponse(url).then((data) => {
      console.log(data);
      setCast(data.cast);
    });
  }, []);
  return (
    <>
      {cast !== undefined ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt=""
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Is loading</p>
      )}
    </>
  );
}
export default Cast;
