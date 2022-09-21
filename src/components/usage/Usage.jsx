import './usage.css';
import { HiClipboard } from 'react-icons/hi';
import propTypes from 'prop-types';

function Usage ({ code }) {
  const handleClick = () => {
    navigator.clipboard.writeText(`https://http.cat/${code || '[status_code]'}`);
  };

  return (
    <div className='usage-container'>
      {!code && (<h3 className='usage-title'>Uso:</h3>)}
      <div className='usage-box'>
        <span onClick={handleClick}><HiClipboard /></span>
        <span>https://http.cat/{code || '[status_code]'}</span>
      </div>
      {!code && (<p className='usage-note'><strong>Nota:</strong> Si necesitas una extensión al final de la URL solo añade .jpg.</p>)}
    </div>
  );
}

Usage.propTypes = {
  code: propTypes.number
};

export default Usage;
