import { Outlet, useParams } from "react-router-dom"
import { Recipe } from "../components/Recipe/Recipe"
import "./NewRecipePage"

export const RecipePage = () => {
    const { id } = useParams();
    return (
        <div className="recipe-page-conteiner">
            <Recipe recipeId={id} />
            <Outlet />
        </div>
    )
}