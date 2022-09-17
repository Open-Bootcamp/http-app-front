import './usage.css';
import { HiClipboard } from 'react-icons/hi';
import propTypes from 'prop-types';

function Usage ({ code }) {
  const handleClick = () => {
    navigator.clipboard.writeText(`https://http.cat/${code || '[status_code]'}`);
  };

  return (
    <div className='usage-container'>
      <h3 className='usage-title'>Usage:</h3>
      <div className='usage-box'>
        <span onClick={handleClick}><HiClipboard /></span>
        <span>https://http.cat/{code || '[status_code]'}</span>
      </div>
      <p className='usage-note'><strong>Note:</strong> If you need an extension at the end of the URL just add .jpg.</p>
    </div>
  );
}

Usage.propTypes = {
  code: propTypes.number
};

export default Usage;
