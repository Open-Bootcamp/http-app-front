import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App () {
  const [searchCode, setSearchCode] = useState('');

  const codes = ['100', '101', '200', '202', '301', '404', '500'];

  useEffect(() => {
    console.log('Do something after counter has changed', searchCode);
  }, [searchCode]);

  const searchHTTPCode = code => {
    setSearchCode(code);
    console.log(searchCode);
  };


  return (
    <div className="App">
      <Header/>
      <SearchBar onSearch={searchHTTPCode}/>
      {/* TODO: hacer un simulador de las cards y pasar el code como props
      */}
      <div style={{ display: 'flex', flexFlow: 'wrap' }}>
      {searchCode === ''
        ? codes.map(el => <h1 key={el} style={{ margin: '0 10px' }}>{el}</h1>)
        : codes.filter(item => item.includes(searchCode)).map(el => <h1 key={el} style={{ margin: '0 10px' }}>{el}</h1>)
      }
      </div>
    </div>
  );
}

export default App;
