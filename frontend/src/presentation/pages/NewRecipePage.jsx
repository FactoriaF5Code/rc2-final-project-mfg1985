import { Outlet } from "react-router-dom";
import "./NewRecipePage.css";
import { NewRecipe } from "../components/NewRecipe/NewRecipe";

export const NewRecipePage = () => {
  return (
      <div className="newRecipe-conteiner">
        <NewRecipe />
        <Outlet />
      </div>
    
  );
};
