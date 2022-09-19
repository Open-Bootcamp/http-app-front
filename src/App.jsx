import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home/Home';
import CodePage from './pages/CodePage';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ButtonFilter } from './components/ButtonFilter/ButtonFilter';

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<CodePage />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
