import "./CardRecipe.css";
import { Link } from 'react-router-dom';


export const CardRecipe = () => {
  return (
    <div className="card">
      <div className="titulo">
        <Link to="/" ><h2>Titulo receta</h2></Link>
      </div>
      <div className="photo">
      <Link to="/"><img className="recipePhoto" src="" alt="" /></Link>
      </div>
    </div>
  );
};

