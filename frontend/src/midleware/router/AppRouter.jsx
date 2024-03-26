import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import { CardRecipe } from "../../presentation/components/CardRecipe/CardRecipe";
import { CardLastSeen } from "../../presentation/components/CardLastSeen/CardLastSeen";



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};