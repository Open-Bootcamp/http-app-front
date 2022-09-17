import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-box">
      <div className="searchbar">
        <BiSearch className="search-icon" />
        <input
          className="searchbar-input"
          type="text"
          placeholder="Ingresa el código HTTP"
          onChange={event => onSearch(event.target.value)}
        />
      </div>
      <button className="search-button">Buscar</button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func
};

export default SearchBar;
