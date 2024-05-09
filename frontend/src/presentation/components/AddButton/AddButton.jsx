import "./AddButton.css";
import logoButton from "../../assets/botoncazo.png";
import { AddModal } from "../AddModal/AddModal";
import { useState } from "react";



export const AddButton = () => {

  const [mostrar, setMostrar] = useState(false);

  return (
    <main className="addButtonConteiner">
      <button className="btt-addRecipe"
        onClick={() => setMostrar(true)}>
        <img className="addButton" src={logoButton} alt="Añadir receta" /></button>
      <AddModal isOpen={mostrar} onClose={() => setMostrar(false)} />

    </main>
  );
}; 
