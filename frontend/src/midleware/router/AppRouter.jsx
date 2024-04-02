import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import { NewRecipePage } from "../../presentation/pages/NewRecipePage";
import { ImportRecipePage } from "../../presentation/pages/ImportRecipePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/newrecipe" element={<NewRecipePage />}></Route>
        <Route path="/importrecipe" element={<ImportRecipePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
