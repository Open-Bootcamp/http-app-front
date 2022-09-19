import './footer.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import OpenBootcamp from '../../assets/openbootcamp.svg';

function Footer () {
  return (
    <footer className="footer-container">
      <div className='social-box'>
        <a href='https://github.com/Open-Bootcamp/http-app-front' target='_blank' rel="noreferrer">
          <AiFillGithub className='icon' />
        </a>
        <a href='https://www.linkedin.com/school/openbootcamp-escuela/' target='_blank' rel="noreferrer">
          <AiFillLinkedin className='icon' />
        </a>
        <a href='https://twitter.com/Open_Bootcamp' target='_blank' rel="noreferrer">
          <AiOutlineTwitter className='icon' />
        </a>
      </div>

      <p>Proyecto de OpenWeekApps para</p>
      <a href='https://open-bootcamp.com/' target='_blank' rel="noreferrer">
        <img src={OpenBootcamp} alt='OpenBootcamp' id='openbootcamp' />
      </a>
      <p>Todos los derechos reservados © 2022</p>
    </footer>
  );
};

export default Footer;
