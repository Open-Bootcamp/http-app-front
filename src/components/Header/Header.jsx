import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/cat-modem-removebg.png';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img alt="sleepy-cat-in-modem" src={Logo} className="header-img" onClick={() => navigate('/')} />

      <div className="titles-info">
        <h1 className="main-title">OB Catsponses</h1>
        <p className="side-title">Personaliza tus respuestas HTTP con estos curiosos y graciosos gatos</p>
      </div>
    </div>
  );
};

export default Header;
