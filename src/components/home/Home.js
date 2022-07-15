import { useState, useEffect } from "react";
import HomeMovieItem from "./HomeMovieItem";
import getResponse from "../../server/serverResponse";
export default function Home() {
  const [trendMovies, setTrendMovies] = useState();
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=79c40bd34353ff43c76be010da767c58`;
    getResponse(url).then((data) => {
      //   console.log(data);
      setTrendMovies(data.results);
    });
  }, []);
  //   console.log(trendMovies);
  return (
    <>
      {trendMovies ? (
        <HomeMovieItem movies={trendMovies}></HomeMovieItem>
      ) : (
        <p>No</p>
      )}
    </>
  );
}
