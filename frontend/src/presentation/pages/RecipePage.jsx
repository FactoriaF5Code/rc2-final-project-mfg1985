import { Outlet } from "react-router-dom"
import { Recipe } from "../components/Recipe/Recipe"
import "./NewRecipePage"

export const RecipePage = () => {
    return (
        <div className="recipe-page-conteiner">
            <Recipe />
            <Outlet />
        </div>
    )
}