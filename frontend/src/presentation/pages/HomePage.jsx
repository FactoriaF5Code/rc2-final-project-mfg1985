import "./HomePage.css";
import { CardRecipeConteiner } from "../components/CardRecipeConteiner/CardRecipeConteiner";
import { CardCollectionConteiner } from "../components/CardCollectionConteiner/CardCollectionConteiner";

export const HomePage = () => {


  return (
    <>
      <CardRecipeConteiner />
      <CardCollectionConteiner />
    </>
  );
};
