import './App.css';
import Header from './components/Header/Header';
import Usage from './components/usage/Usage';
import { ButtonFilter } from './components/ButtonFilter/ButtonFilter';

function App () {
  return (
    <div className="App">
      <Header />
      <ButtonFilter />
      <Usage />
      
    </div>
  );
}

export default App;
