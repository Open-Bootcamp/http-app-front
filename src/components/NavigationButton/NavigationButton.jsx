import PropTypes from 'prop-types';
import { FaHome } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './navigation-button.css';

const NavigationButton = ({ type, onClick, isHidden }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  switch (type) {
    case 'back':
      return <button className={`nav-button ${isHidden && 'hide-btn'}`} onClick={onClick}><IoArrowBackCircle/>Atrás</button>;

    case 'next':
      return <button className={`nav-button ${isHidden && 'hide-btn'}`} onClick={onClick}>Siguiente<IoArrowBackCircle className='next-icon'/></button>;

    default:
      return <button className='nav-button' onClick={goHome}><FaHome/>Inicio</button>;
  }
};

NavigationButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  isHidden: PropTypes.bool
};

export default NavigationButton;
