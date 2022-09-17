import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = ({ code }) => {
  const navigate = useNavigate();

  const seeCodeDetails = () => {
    navigate(`/${code}`);
  };

  return (
        <div className='code-card' onClick={seeCodeDetails}>
           <h3 className='code-card-title'>{code}</h3>
           <img src="https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg" alt={code + '-cat'} className='code-card-img'/>
           <p className='code-title'>Title</p>
           <div className='card-shadow'>
            ok
           </div>
        </div>
  );
};

Card.propTypes = {
  code: PropTypes.string
};

export default Card;
