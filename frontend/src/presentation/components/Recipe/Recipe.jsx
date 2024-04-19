import { useEffect, useState } from "react";
import "./Recipe.css";

import Reloj from "../../assets/reloj-de-pared-2.png"
import Plato from "../../assets/plato.png"

export const Recipe = ({recipeId}) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
   
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8080/recipes/${recipeId}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error al obtener la receta:", error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  // Verifica si la receta se ha cargado
  if (!recipe) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="recipe-view-conteiner">
      <div className="view-conteiner">
        <h1 className="ti-receta">{recipe.titleRecipe}</h1>
        <div className="photo-conteiner">
          <img className="photo-receta" src={recipe.image} alt="Foto receta" />
        </div>
        <p className="ing-receta">
        {recipe.ingredients}
        </p>
        <div className="etq-contein"><h2 className="etq-receta">{recipe.tag}</h2></div>
        <h2 className="ctg-receta">{recipe.category}</h2>
        <h2 className="plt-receta">{recipe.dishType}</h2>
        <h2 className="col-receta">{recipe.collection}</h2>
        <div className="tiempo-receta">
          <img className="reloj" src={Reloj} alt="dibujo reloj" />
          <h2 className="tiempo">{recipe.time}</h2>
        </div>
        <div className="raciones-receta">
          <img className="cubiertos" src={Plato} alt="dibujo reloj" />
          <h2 className="txt-cubierto">{recipe.servings}</h2>
        </div>
        <p className="instr-receta">
        {recipe.instructions}
        </p>
        <p className="notas-receta">{recipe.note}</p>
        <button className="edit-recipe">Editar</button>
      </div>
    </div>
  );
};
