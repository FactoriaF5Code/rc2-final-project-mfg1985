import "./CardRecipe.css";
import { Link } from 'react-router-dom';


export const CardRecipe = ({title, image}) => {
  return (
    <div className="card">
      <div className="titulo">
        <Link to="/" ><h2>{title}</h2></Link>
      </div>
      <div className="photo">
      <Link to="/"><img className="recipePhoto" src={`${image}`} alt={title} /></Link>
      </div>
    </div>
  );
};

