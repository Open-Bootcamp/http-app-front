import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Usage from '../../components/Usage/Usage';
import Card from '../../components/Card/Card';
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
    <div className='App'>
      <div className='action-bars'>
        <Usage/>
        <SearchBar onSearch={searchHTTPCode} code={searchCode} isValidCode={isValidCode}/>
      </div>
      <div style={{ display: 'flex', flexFlow: 'wrap', marginTop: '25px', padding: '8px', justifyContent: 'space-around' }}>
      {searchCode === ''
        ? codes.map(el => <Card key={el} style={{ margin: '0 10px' }} code={el}/>)
        : codes.filter(item => item.includes(searchCode)).map(el => <Card key={el} style={{ margin: '0 10px' }} code={el}/>)
      }
      </div>
    </div>
  );
};

export default Home;
