import './Header.css';
import logo from '../../assets/logo.png';


export const Header = () => {
  return (
    <header>
        <img src={logo} alt="Los secretos de la abuela" />
        <ul>
          <li>Home</li>
        </ul>
    </header>

  )
}
