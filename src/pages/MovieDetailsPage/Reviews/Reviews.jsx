import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getMovieReview } from '../../../shared/api/films';

import ReviewList from 'components/ReviewList';

const Reviews = () => {
  const [state, setState] = useState({
    reviews: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        setState(prevState => ({ ...prevState, loading: true }));
        const { results } = await getMovieReview(id);

        setState(prevState => ({
          ...prevState,
          loading: false,
          reviews: results,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: error.message,
        }));
      }
    };
    fetchReviews(id);
  }, [id]);

  const { reviews } = state;

  return (
    <div>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Reviews;
