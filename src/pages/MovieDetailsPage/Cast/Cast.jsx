import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../../shared/api/films';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const [state, setState] = useState({
    cast: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async id => {
      try {
        setState(prevState => ({ ...prevState, loading: true }));
        const { cast } = await getMovieCredits(id);
        setState(prevState => ({ ...prevState, loading: false, cast }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: error.message,
        }));
      }
    };
    fetchCast(id);
  }, [id]);

  const { cast } = state;

  return (
    <div>
      <CastList casts={cast} />
    </div>
  );
};

export default Cast;
