import "./NewRecipe.css";

export const NewRecipe = () => {
  return (
    <section className="newrecipe-conteiner">
      <form>
        <div className="title-conteiner">
          {/* titulo */}
          <label htmlFor="titulo">Titulo</label>
          <input  className="form-title" type="text" />
        </div>
        <div className="time-conteiner">
        {/* tiempo */}
        <label htmlFor="time">Tiempo</label>
        <input className="form-time"  type="text" />
        </div>
        <div className="servings-conteiner">
        {/* Raciones */}
        <label htmlFor="servings">Raciones</label>
        <input className="form-servings" type="text" />
        </div>
        <div className="tags-conteiner">
        {/* etiquetas */}
        <label htmlFor="tags">Etiquetas</label>
        <input className="form-tags" type="text" />
        </div>
        <div className="dishtype-conteiner">
        {/* plato */}
        <label htmlFor="dish_type">Plato</label>
        <input  className="form-dishtype" type="text" />
        </div>
        <div className="collection-conteiner">
        {/* coleccion */}
        <label htmlFor="collection">Colección</label>
        <input className="form-collection" type="text" />
        </div>
        <div  className="category-conteiner">
        {/* categoria */}
        <label htmlFor="category">Categoria</label>
        <input className="form-category" type="text" />
        </div>
        <div className="ingredients-conteiner">
        {/* ingredientes */}
        <label htmlFor="ingredients">Ingredientes</label>
        <input className="form-ingredients" type="text" />
        </div>
        <div className="instructions-conteiner">
        {/* instruciones */}
        <label htmlFor="instructions">Paso a paso</label>
        <input className="form-isntruccion"type="text" />
        </div>
        <div className="images-conteiner">
        {/* imagenes */}
        <label htmlFor="images">Imagenes</label>
        <input className="form-images"type="text" />
        </div>
        <div className="notes-conteiner">
        {/* notas */}
        <label htmlFor="notes">Notas</label>
        <input className="form-notes" type="text" />
        </div>
        <button className="save-recipe">Guardar</button>
      </form>
    
    </section>
  );
};
