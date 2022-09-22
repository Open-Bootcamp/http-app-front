import { useEffect, useState } from 'react';
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
import axios from 'axios';
import Spinner from './components/Spinner/Spinner';

function App () {
  const [codes, setCodes] = useState([]);
  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    try {
      const response = await axios.get('https://http-app-back-production.up.railway.app/cats');
      setTimeout(() => {
        setCodes(response.data);
      }, 800);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <Header />
      {
        codes.length > 0
          ? <div className='App'>
            <Routes>
              <Route exact path="/" element={<Home codes={codes} />} />
              <Route path="/:id" element={<CodePage codes={codes} />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
        </div>
          : <Spinner />
      }
      <Footer />
    </Router>

  );
}

export default App;
