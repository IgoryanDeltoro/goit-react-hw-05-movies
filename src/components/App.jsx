import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './sharedLayout/SharedLayout';

const Home = lazy(() => import('pages/home/Home'));
const Movies = lazy(() => import('pages/movie/Movies'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./rewiews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
