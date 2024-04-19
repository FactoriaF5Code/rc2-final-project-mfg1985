import "./CardRecipe.css";
import { Link } from 'react-router-dom';


export const CardRecipe = ({recipeId, title, image}) => {
  return (
    <div className="card">
      <div className="titulo">
        <Link to={`/recipes/${recipeId}`} ><h2 className="title-cards">{title}</h2></Link>
      </div>
      <div className="photo">
      <Link to={`/recipes/${recipeId}`}><img className="recipePhoto" src={`${image}`} alt={title} /></Link>
      </div>
    </div>
  );
};

