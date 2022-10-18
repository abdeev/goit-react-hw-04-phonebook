import PropTypes from 'prop-types';
import css from './Filter.module.css';

const SearchContactFilter = ({ changeFilter }) => {
  return (
    <>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        onChange={changeFilter}
      />
    </>
  );
};

SearchContactFilter.propTypes = {
  changeFilter: PropTypes.func,
};

export default SearchContactFilter;
