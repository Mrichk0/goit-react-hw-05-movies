import PropTypes from 'prop-types';

import styles from './castList.module.css';

const CastList = ({ casts }) => {
  const elements = casts.map(
    ({ id, profile_path, original_name, name, character }) => {
      const photo = profile_path
        ? `http://image.tmdb.org/t/p/w300/${profile_path}`
        : 'https://www.unmc.edu/cihc/_images/faculty/default.jpg';
      return (
        <li className={styles.castElement} key={id}>
          <img src={photo} alt={original_name} />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      );
    }
  );
  return <ul className={styles.castList}>{elements}</ul>;
};

export default CastList;

CastList.defaultProps = {
  casts: [],
};

CastList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      original_name: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
