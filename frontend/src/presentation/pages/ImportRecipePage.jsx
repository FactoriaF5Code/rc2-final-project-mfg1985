import { Outlet } from "react-router-dom";
import "./NewRecipePage.css";
import { ImportRecipe } from "../components/ImportRecipe/ImportRecipe";

export const ImportRecipePage = () => {
  return (
  
      <div className="importRecipe-conteiner">
        <ImportRecipe />
        <Outlet />
      </div>
    
  );
};
