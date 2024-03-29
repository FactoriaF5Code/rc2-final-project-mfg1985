import "./NewRecipe.css"

export const NewRecipe = () => {
  return (

  <section className="newrecipe-conteiner">
    <form>
        {/* titulo */}
        <label htmlFor="titulo">Titulo</label>
        <input className="title" type="text"  />

        {/* tiempo */}
        <label htmlFor="time">Tiempo</label>
        <input className="time" type="text" />

        {/* Raciones */}
        <label htmlFor="servings">Raciones</label>
        <input className="se" type="text" />

        {/* etiquetas */}
        <label htmlFor="tags">Etiquetas</label>
        <input type="text" />

        {/* plato */}
        <label htmlFor="dish_type">Plato</label>
        <input type="text" />

        {/* coleccion */}
        <label htmlFor="collection">Colección</label>
        <input type="text" />

        {/* categoria */}
        <label htmlFor="category">Categoria</label>
        <input type="text" />

        {/* ingredientes */}
        <label htmlFor="ingredients">Ingredientes</label>
        <input type="text" />

        {/* instruciones */}
        <label htmlFor="instructions">Paso a paso</label>
        <input type="text" />

        {/* imagenes */}
        <label htmlFor="images">Imagenes</label>
        <input type="text" />

        {/* notas */}
        <label htmlFor="note">Notas</label>
        <input type="text" />

    </form>
  </section>
);
};
