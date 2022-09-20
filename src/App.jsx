import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home/Home';
import CodePage from './pages/CodePage/CodePage';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Data from './api/cat-codes.json';

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home codes={Data.codes}/>} />
        <Route path="/:id" element={<CodePage codes={Data.codes}/>} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
