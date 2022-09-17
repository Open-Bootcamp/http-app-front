import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Usage from '../../components/Usage/Usage';
import './home.css';

const Home = () => {
  const [searchCode, setSearchCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);

  const codes = ['100', '101', '200', '202', '301', '404', '500'];

  useEffect(() => {
    setIsValidCode(validateCode());
  }, [searchCode]);

  const searchHTTPCode = code => {
    setSearchCode(code);
  };

  const validateCode = () => {
    return codes.includes(searchCode);
  };

  return (
    <div className="App">
      <div className='action-bars'>
        <Usage/>
        <SearchBar onSearch={searchHTTPCode} code={searchCode} isValidCode={isValidCode}/>
      </div>
      <div style={{ display: 'flex', flexFlow: 'wrap', width: '70%' }}>
      {searchCode === ''
        ? codes.map(el => <h1 key={el} style={{ margin: '0 10px' }}>{el}</h1>)
        : codes.filter(item => item.includes(searchCode)).map(el => <h1 key={el} style={{ margin: '0 10px' }}>{el}</h1>)
      }
      </div>
    </div>
  );
};

export default Home;
