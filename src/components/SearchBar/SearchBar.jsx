import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './searchbar.css';

const SearchBar = ({ onSearch, code, isValidCode, btnHide }) => {
  const navigate = useNavigate();

  const navigateToCode = () => {
    if (isValidCode) {
      navigate(`/${code}`);
    } else {
      navigate('/not-found');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigateToCode();
    }
  };

  const dNone = {
    display: 'none'
  };

  const dBlock = {
    display: 'block'
  };

  return (
    <div className="search-box">
      <div className="searchbar">
        <BiSearch className="search-icon" />
        <input
          className="searchbar-input"
          type="text"
          placeholder="Ingresa el código HTTP"
          onChange={event => onSearch(event.target.value, true)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <button className="search-button" style={btnHide ? dNone : dBlock} onClick={navigateToCode}>Buscar</button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  code: PropTypes.string,
  isValidCode: PropTypes.bool,
  btnHide: PropTypes.string
};

export default SearchBar;
