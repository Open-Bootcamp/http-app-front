import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Error404 } from "../../components/Error404/Error404";
import SearchBar from "../../components/SearchBar/SearchBar";
import './notfound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };
  return (
        <div>
            <div className='hidden-l'>
              <SearchBar />
            </div>
            <Error404 />
            <div className='center'>
              <div className='hidden-m'>
                <SearchBar btnHide={'true'}/>
                <button className='nav-button' onClick={goHome}><FaHome/>Inicio</button>
              </div>
              <div className='hidden-l'>
              <button className='nav-button' onClick={goHome}><FaHome/>Inicio</button>
              </div>
             
            </div>
            
        </div>
  );
};

export default NotFound;
