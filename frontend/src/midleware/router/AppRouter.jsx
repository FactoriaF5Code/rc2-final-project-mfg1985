import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import { NewRecipePage } from "../../presentation/pages/NewRecipePage";
import { ImportRecipePage } from "../../presentation/pages/ImportRecipePage";
import { RecipePage } from "../../presentation/pages/RecipePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/newrecipe" element={<NewRecipePage />}></Route>
        <Route path="/importrecipe" element={<ImportRecipePage />}></Route>
        <Route path="/recipe/{id}" element={<RecipePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
