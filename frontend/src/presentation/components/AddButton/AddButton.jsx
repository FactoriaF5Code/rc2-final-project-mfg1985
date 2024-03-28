import "./AddButton.css";
import logoButton from "../../assets/botoncazo.png";



export const AddButton = () => {
  return (
    <main className="addButtonConteiner">
    <button className="btt-addRecipe"><img className="addButton" src={logoButton} alt="Añadir receta" /> </button> 
    </main>
  );
};
