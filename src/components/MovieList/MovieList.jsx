import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const MovieList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => (
    <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
      <li>
        <h4>{title}</h4>
      </li>
    </Link>
  ));
  return <ul>{elements}</ul>;
};

export default MovieList;

MovieList.defaultProps = {
  items: [],
};

MovieList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
