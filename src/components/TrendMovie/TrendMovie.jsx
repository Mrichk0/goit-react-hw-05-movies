import { trendingMovie } from 'shared/api/films';

import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';

const TrendMovie = () => {
  const [movie, setMovie] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setMovie(prevState => ({ ...prevState, loading: true }));
        const data = await trendingMovie();
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          items: data.results,
        }));
      } catch (error) {
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchMovie();
  }, []);
  const { items, loading, error } = movie;
  return (
    <>
      {loading && <p>...loading</p>}
      <MovieList items={items} />
      {error && <p>{error}</p>}
    </>
  );
};
export default TrendMovie;
