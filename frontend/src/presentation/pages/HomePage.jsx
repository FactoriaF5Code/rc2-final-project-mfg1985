import "./HomePage.css";
import { CardRecipeConteiner } from "../components/CardRecipeConteiner/CardRecipeConteiner";
import { CardLastSeenConteiner } from "../components/CardLastSeenConteiner/CardLastSeenConteiner";

export const HomePage = () => {


  return (
    <>
      <CardRecipeConteiner />
      <CardLastSeenConteiner />
    </>
  );
};
