import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Usage from '../../components/Usage/Usage';
import Card from '../../components/Card/Card';
import './home.css';
import { ButtonFilter } from '../../components/ButtonFilter/ButtonFilter';

const Home = ({ codes }) => {
  const [searchCode, setSearchCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);

  useEffect(() => {
    setIsValidCode(validateCode());
  }, [searchCode, codes]);

  const searchHTTPCode = code => {
    setSearchCode(code);
  };

  const validateCode = () => {
    return codes.filter(item => item.code.toString().includes(searchCode)).length > 0;
  };

  const filterCards = () => {
    return codes.filter(item => item.code.toString().includes(searchCode)).map(el => <Card key={el.code} codeElement={el}/>);
  };

  return (
    <div className='App'>
      <div className='action-bars'>
        <Usage/>
        <SearchBar onSearch={searchHTTPCode} code={searchCode} isValidCode={isValidCode}/>
      </div>
      <ButtonFilter onClick={searchHTTPCode}/>
      <div className='cards-section'>
      {!isValidCode
        ? <h2 className='not-found-message'>Lo sentimos, al parecer no existe el código que buscas :/</h2>
        : searchCode === ''
          ? codes.map(el => <Card key={el.code} codeElement={el}/>)
          : filterCards()
      }
      </div>
    </div>
  );
};

Home.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

export default Home;
