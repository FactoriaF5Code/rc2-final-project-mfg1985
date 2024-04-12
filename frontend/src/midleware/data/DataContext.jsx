import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/recipes")
            .then( response => response.json())
            .then( response => setRecipes(response));
    }, [])

    const value = {
        recipes
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}