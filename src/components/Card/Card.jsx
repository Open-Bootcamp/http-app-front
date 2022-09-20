import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = ({ codeElement }) => {
  const navigate = useNavigate();

  const seeCodeDetails = () => {
    navigate(`/${codeElement.code}`, {

    });
  };

  return (
        <div className='code-card' onClick={seeCodeDetails}>
           <h3 className='code-card-title'>{codeElement.code}</h3>
           <img src={codeElement.image} alt={codeElement.code + '-cat'} className='code-card-img'/>
           <p className='code-title'>{codeElement.title}</p>
           <div className='card-shadow'></div>
        </div>
  );
};

Card.propTypes = {
  codeElement: PropTypes.object
};

export default Card;
