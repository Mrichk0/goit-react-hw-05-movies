import PropTypes from 'prop-types';

import styles from './reviewList.module.css';

const ReviewsList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <div>we dont have any reviews for this movie</div>;
  }
  const elements = reviews.map(({ id, author, content }) => {
    return (
      <li className={styles.reviewsElement} key={id}>
        <p>{author}</p>
        <p>{content}</p>
      </li>
    );
  });
  return <ul className={styles.reviewsList}>{elements}</ul>;
};

export default ReviewsList;

ReviewsList.defaultProps = {
  reviews: [],
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      original_name: PropTypes.string,
      original_title: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ),
};
