import "./CardRecipe.css";
import { Link } from 'react-router-dom';


export const CardRecipe = ({title}) => {
  return (
    <div className="card">
      <div className="titulo">
        <Link to="/" ><h2>{title}</h2></Link>
      </div>
      <div className="photo">
      <Link to="/"><img className="recipePhoto" src="" alt="" /></Link>
      </div>
    </div>
  );
};

