import propTypes from 'prop-types';
import Usage from '../usage/Usage';
import './description.css';

function Description ({ code, title, description, image }) {
  return (
    <div className="description-container">
      <h2 className='description-title'>{code} - {title}</h2>
      <img src={image} alt={title} className="description-img" />
      <p className='description-text'>{description}</p>
      <Usage code={code} />
    </div>
  );
}

Description.propTypes = {
  code: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired
};

export default Description;
