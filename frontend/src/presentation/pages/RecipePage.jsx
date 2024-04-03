import { Outlet } from "react-router-dom"
import { AddButton } from "../components/AddButton/AddButton"
import { Header } from "../components/Header/Header"
import { Recipe } from "../components/Recipe/Recipe"
import "./NewRecipePage"

export const RecipePage = () => {
    return (
        <div className="recipe-page-conteiner">
            <Header />
            <AddButton />
            <Recipe />
            <Outlet />
        </div>
    )
}