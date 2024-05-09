import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import { NewRecipePage } from "../../presentation/pages/NewRecipePage";
import { ImportRecipePage } from "../../presentation/pages/ImportRecipePage";
import { RecipePage } from "../../presentation/pages/RecipePage";
import { Layout } from "../../presentation/pages/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/newrecipe" element={<NewRecipePage />} />
          <Route path="/importrecipe" element={<ImportRecipePage />} />
          <Route path="/recipes/:id" element={<RecipePage  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
