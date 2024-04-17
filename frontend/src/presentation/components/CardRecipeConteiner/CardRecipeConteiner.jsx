import "./CardRecipeConteiner.css";
import { CardRecipe } from "../CardRecipe/CardRecipe";
import { useContext } from "react";
import { DataContext } from "../../../midleware/data/DataContext";

export const CardRecipeConteiner = () => {
    
    const {recipes } = useContext(DataContext);
    
    return (
        <main className="recipeConteiner">
            { 
                recipes.map( (r,k) => 
                    <CardRecipe key={k} title={r.titleRecipe} image={r.image}/>
                )
            }
        </main>
    )
}