import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import "./HomePage.css";
import { CardLastSeen } from "../components/CardLastSeen/CardLastSeen";
import { CardRecipe } from "../components/CardRecipe/CardRecipe";
import { AddButton } from "../components/AddButton/AddButton";

export const HomePage = () => {
  return (
    <>
      <body>
        <Header />
    
        <CardRecipe />
        <CardLastSeen />
        <AddButton />
        <Outlet />
      </body>
    </>
  );
};
