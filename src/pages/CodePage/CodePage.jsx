import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import './code-page.css';

const CodePage = ({ codes }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentCodeIndex, setCurrentCodeIndex] = useState(codes.findIndex(el => el.code === parseInt(id)));

  const handleBack = () => {
    navigate(`/${codes[currentCodeIndex - 1].code}`);
    setCurrentCodeIndex(currentCodeIndex - 1);
  };

  const handleNext = () => {
    navigate(`/${codes[currentCodeIndex + 1].code}`);
    setCurrentCodeIndex(currentCodeIndex + 1);
  };

  return (
        <div>
            <div className='control-buttons'>
              {currentCodeIndex !== 0
                ? <NavigationButton type='back' isHidden={false} onClick={handleBack}/>
                : <NavigationButton type='back' isHidden={true} onClick={handleBack}/>
              }
              <NavigationButton type='home'/>
              {currentCodeIndex !== codes.length - 1
                ? <NavigationButton type='next' isHidden={false} onClick={handleNext}/>
                : <NavigationButton type='next' isHidden={true} onClick={handleNext}/>}
            </div>
            <div>
              {codes[currentCodeIndex].code}
              {codes[currentCodeIndex].title}
              {codes[currentCodeIndex].description}
            </div>
        </div>
  );
};

CodePage.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

export default CodePage;
