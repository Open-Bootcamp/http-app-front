import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App () {
  const searchHTTPCode = code => {
    console.log(code);
  };

  return (
    <div className="App">
      <Header/>
      <SearchBar onSearch={searchHTTPCode}/>
      {/*TODO: hacer un simulador de las cards y pasar el code como props
      */}
    </div>
  );
}

export default App;
