import Logo from '../../assets/images/cat-modem-removebg.png';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="col-md">
        <img alt="sleepy-cat-in-modem" src={Logo} width="120px" />
      </div>
      <div className="titles-info">
          <h1 className="main-title">OB Catsponses</h1>
          <p className="side-title">Personaliza tus respuestas HTTP con estos curiosos y graciosos gatos</p>
      </div>
    </div>
  );
};

export default Header;
