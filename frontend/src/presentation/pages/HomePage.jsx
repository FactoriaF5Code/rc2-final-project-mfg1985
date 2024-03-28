import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import "./HomePage.css";
import { AddButton } from "../components/AddButton/AddButton";
import { CardRecipeConteiner } from "../components/CardRecipeConteiner/CardRecipeConteiner";
import { CardLastSeenConteiner } from "../components/CardLastSeenConteiner/CardLastSeenConteiner";

export const HomePage = () => {

  
  return (
    <>
      <body>
        <Header />
        <AddButton />
        <CardRecipeConteiner />
        <CardLastSeenConteiner />
        
        <Outlet />
      </body>
    </>
  );
};
