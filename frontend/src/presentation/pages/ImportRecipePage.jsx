import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import "./NewRecipePage.css";
import { AddButton } from "../components/AddButton/AddButton";
import { ImportRecipe } from "../components/ImportRecipe/ImportRecipe";

export const ImportRecipePage = () => {
  return (
  
      <div className="importRecipe-conteiner">
        <Header />
        <AddButton />
        <ImportRecipe />
        <Outlet />
      </div>
    
  );
};
