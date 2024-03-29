import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import {  NewRecipePage } from "../../presentation/pages/NewRecipePage";




export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/newrecipe" element={<NewRecipePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};