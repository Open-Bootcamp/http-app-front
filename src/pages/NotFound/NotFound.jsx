import { Error404 } from '../../components/Error404/Error404';
import SearchBar from '../../components/SearchBar/SearchBar';
import './notfound.css';
import { useState } from 'react';
import NavigationButton from '../../components/NavigationButton/NavigationButton';

const NotFound = () => {
  const [searchCode, setSearchCode] = useState('');

  const navigateToCode = event => {
    setSearchCode(event);
  };

  return (
    <div className='not-found-container'>
      <div className='hidden-l'>
        <SearchBar />
      </div>
      <Error404 />
      <div className='center'>
        <div className='hidden-m'>
          <SearchBar onSearch={navigateToCode} code={searchCode} isValidCode={true} btnHide={'true'} />
          <NavigationButton type='home' />
        </div>
        <div className='hidden-l'>
          <NavigationButton type='home' />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
