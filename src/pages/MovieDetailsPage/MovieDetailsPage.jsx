import { useState, useEffect } from 'react';

import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { getMovieById } from '../../shared/api/films';
import MovieItems from 'components/MovieItems';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    response: {},
    loading: false,
    error: null,
  });
  const location = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();
  const from = location?.state?.from || '/';

  const goBack = () => {
    navigate(from);
  };

  useEffect(() => {
    const fetchMovie = async id => {
      try {
        setState(prevState => ({ ...prevState, loading: true }));
        const response = await getMovieById(id);

        setState(prevState => ({ ...prevState, response, loading: false }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    fetchMovie(id);
  }, [setState, id]);

  const { response, loading, error } = state;
  const isData = Boolean(Object.values(response).length);

  const { data } = response;
  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isData && <MovieItems goBack={goBack} data={data} id={id} from={from} />}
    </>
  );
};
export default MovieDetailsPage;
