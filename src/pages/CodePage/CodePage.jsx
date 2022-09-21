import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Description from '../../components/Description/Description';
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
        <>
          { currentCodeIndex === -1
            ? <Navigate to='/not-found' />
            : <div>
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
            <Description {...codes[currentCodeIndex]}
            />
        </div>

          }
        </>
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
