import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

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
      <SearchBar onSearch={searchHTTPCode} code={searchCode} isValidCode={isValidCode}/>
      <div style={{ display: 'flex', flexFlow: 'wrap' }}>
      {searchCode === ''
        ? codes.map(el => <h1 key={el} style={{ margin: '0 10px' }}>{el}</h1>)
        : codes.filter(item => item.includes(searchCode)).map(el => <h1 key={el} style={{ margin: '0 10px' }}>{el}</h1>)
      }
      </div>
    </div>
  );
};

export default Home;
