import "./AddButton.css";
import logoButton from "../../assets/botoncazo.png";
import { Link } from 'react-router-dom';


export const AddButton = () => {
  return (
    <main className="addButtonConteiner">
     <Link to="/"> <img className="addButton" src={logoButton} alt="Añadir receta" /> </Link>
     
    </main>
  );
};
