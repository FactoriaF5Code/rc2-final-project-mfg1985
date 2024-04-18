import './Header.css';
import logo from '../../assets/logorosaf.png';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
       <Link to="/"> <img className='logo' src={logo} alt="Los secretos de la abuela" /></Link>
        <ul className='menu-header'>
         <Link to="/"> <li className='home-header'>Home</li></Link>
        </ul>
    </header>

  )
}
