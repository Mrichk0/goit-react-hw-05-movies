import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieSearchForm from 'components/MovieSearchForm';
import MovieList from 'components/MovieList';
import { searchMovie } from 'shared/api/films';

const MovieSearch = () => {
  const [movie, setMovie] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(prevState => ({ ...prevState, loading: true }));
      try {
        const { results } = await searchMovie(searchParams.get('query'));
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          items: results,
        }));
      } catch (error) {
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    if (searchParams.get('query')) {
      fetchMovie();
    }
  }, [searchParams]);

  const onSubmit = ({ query }) => {
    setSearchParams({ query });
  };

  return (
    <>
      <MovieSearchForm onSubmit={onSubmit} />
      <MovieList items={movie.items} />
    </>
  );
};
export default MovieSearch;
