import { useState } from 'react';
import PropTypes from 'prop-types';

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ query: '' });
  };

  const { query } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <input value={query} type="text" name="query" onChange={handleChange} />
    </form>
  );
};
export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
