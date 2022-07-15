import { useState, useEffect } from "react";
import getResponse from "../../server/serverResponse";
import HomeMovieItem from "../home/HomeMovieItem";
import { useNavigate, useMatch, useSearchParams } from "react-router-dom";
export default function Movies() {
  const [input_, setInput] = useState("");
  const [searchMovies, setSearchMovies] = useState();
  let navigate = useNavigate();
  const ur = useMatch({ path: "/movies", end: false });
  let [searchParams, setSearchParams] = useSearchParams();
  let term = searchParams.get("search");

  useEffect(() => {
    if (term !== null) {
      console.log("useEffect");
      let url = `https://api.themoviedb.org/3/search/movie?api_key=79c40bd34353ff43c76be010da767c58&language=en-US&page=1&query=${term}`;
      getResponse(url).then((data) => {
        setSearchMovies(data.results);
        navigate(`?search=${term}`);
      });
    }
  }, []);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let url = `https://api.themoviedb.org/3/search/movie?api_key=79c40bd34353ff43c76be010da767c58&language=en-US&page=1&query=${input_}`;
    getResponse(url).then((data) => {
      setSearchMovies(data.results);
      if (term === null) {
        console.log("term is null");
        navigate(`?search=${input_}`);
      } else {
        console.log("term is not null");
        navigate(`?search=${input_}`);
      }
    });
  };
  return (
    <>
      <form>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}></button>
      </form>
      {searchMovies !== undefined ? (
        <HomeMovieItem movies={searchMovies} input={input_} />
      ) : (
        <p>Not found</p>
      )}
    </>
  );
}
