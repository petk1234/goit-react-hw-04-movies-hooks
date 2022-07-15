import { React, lazy, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Loader from "./components/loader/Loader";
// import Home from "./components/home/Home";
// import Movies from "./components/movies/Movies";
// import MovieItem from "./components/movieItem/MovieItem";
// import Cast from "./components/movieItem/Cast";
// import Reviews from "./components/movieItem/Reviews";
const Home = lazy(() => import("./components/home/Home"));
const Movies = lazy(() => import("./components/movies/Movies"));
const MovieItem = lazy(() => import("./components/movieItem/MovieItem"));
const Cast = lazy(() => import("./components/movieItem/Cast"));
const Reviews = lazy(() => import("./components/movieItem/Reviews"));
function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routes.home} element={<Home />}></Route>
          <Route path={routes.movies} element={<Movies />}></Route>
          <Route
            path={`${routes.movies}${routes.movieItem}`}
            element={<MovieItem />}
          >
            <Route path={routes.cast} element={<Cast />}></Route>
            <Route path={routes.reviews} element={<Reviews />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

// Если мы хотим прокинуть пропсы используя useNavigate при клике на кнопку,
// мы можем воспользоваться 2-мя вариантами:
//  1. В родительском компоненте, используя специальный компонент Outlet,
//     передать в его свойство context свои свойства, которые ты хочешь прокинуть.
//      Затем, в дочернем компоненте, используя хук useOutletContext получаешь доступ к пропсам.
//      Пример:
//        В род. компоненте пишем: <Outlet context={[твои пропсы что ты хочешь прокинуть]}/>.
//        В дочернем компоненте: const [получаемые пропсы] = useOutletContext()
//  2. Второй вариант: в род. компоненте: let navigation = useNavigate(),
//     затем в колбэк функции пишем: navigation(“your path”, {state:{movie:movie}}).
//     В дочернем компоненте, чтоб получить доступ к род. стейту пишем:
//       const location=useLocation(),
//       затем чтоб получить к какому-то свойству доступ, пишем location.state.movie
