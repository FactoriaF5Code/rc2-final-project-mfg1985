import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { CardRecipe } from "../components/CardRecipe/CardRecipe";

export const HomePage = () => {
  return (
    <>
      <body>
        <Header />
        <CardRecipe />
        <Outlet />
      </body>
    </>
  );
};
