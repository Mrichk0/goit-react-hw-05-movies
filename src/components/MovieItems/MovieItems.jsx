import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './movieItems.module.css';

const MovieItems = ({
  data: { poster_path, title, vote_average, overview, genresName },
  id,
  goBack,
  from,
}) => {
  return (
    <>
      <>
        <div className={styles.movie}>
          <button onClick={goBack}>go back</button>
          <div className={styles.moviePage}>
            <div>
              <img
                className={styles.poster}
                src={`http://image.tmdb.org/t/p/w400/${poster_path}`}
                alt={title}
              />
            </div>
            <div className={styles.info}>
              <h1>{title}</h1>
              <p> User score: {vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{genresName}</p>
            </div>
            <div />
          </div>
        </div>
        <Link
          className={styles.movieBtn}
          to={`/movies/${id}/cast`}
          state={{ from }}
        >
          Cast
        </Link>
        <Link
          className={styles.movieBtn}
          to={`/movies/${id}/reviews`}
          state={{ from }}
        >
          Reviews
        </Link>
        <Outlet />
      </>
    </>
  );
};

export default MovieItems;

MovieItems.propTypes = {
  data: PropTypes.shape({
    original_name: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
  }),
  goBack: PropTypes.func.isRequired,
};
