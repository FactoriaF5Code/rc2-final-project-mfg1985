import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
       <Link to="/"> <img className='logo' src={logo} alt="Los secretos de la abuela" /></Link>
        <ul>
         <Link to="/"> <li>Home</li></Link>
        </ul>
    </header>

  )
}
