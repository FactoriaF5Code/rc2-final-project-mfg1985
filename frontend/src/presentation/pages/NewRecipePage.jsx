import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import "./NewRecipePage.css";
import { AddButton } from "../components/AddButton/AddButton";
import { NewRecipe } from "../components/NewRecipe/NewRecipe";

export const NewRecipePage = () => {

  
  return (
    <>
      <body>
        <Header />
        <AddButton />
        <NewRecipe />
        <Outlet />
      </body>
    </>
  );
};
