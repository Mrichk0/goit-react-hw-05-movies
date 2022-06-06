import { lazy, S, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('pages/MovieDetailsPage/Cast/Cast'));
const Reviews = lazy(() => import('pages/MovieDetailsPage/Reviews'));
const Notfoundpage = lazy(() => import('../pages/Notfoundpage'));

const Layout = lazy(() => import('./Layout/Layout'));

export function App() {
  return (
    <>
      <Suspense callback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
