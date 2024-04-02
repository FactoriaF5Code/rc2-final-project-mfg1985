import { useState } from "react";
import { SavedModal } from "../SavedModal/SavedModal";
import "./NewRecipe.css";
import { useForm } from "react-hook-form";

export const NewRecipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsModalOpen(true);
  };

  return (
    <section className="newrecipe-conteiner">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title-conteiner">
          {/* titulo */}
          <label htmlFor="titulo">Titulo</label>
          <input
            className="form-title"
            type="text"
            {...register("Titulo", {
              required: true,
            })}
          />
          {errors.Titulo && <span>Titulo requerido</span>}
        </div>
        <div className="time-conteiner">
          {/* tiempo */}
          <label htmlFor="time">Tiempo</label>
          <input
            className="form-time"
            type="text"
            {...register("Tiempo", {
              required: true,
            })}
          />
          {errors.Tiempo && <span>Tiempo requerido</span>}
        </div>
        <div className="servings-conteiner">
          {/* Raciones */}
          <label htmlFor="servings">Raciones</label>
          <input
            className="form-servings"
            type="text"
            {...register("Raciones")}
          />
        </div>
        <div className="tags-conteiner">
          {/* etiquetas */}
          <label htmlFor="tags">Etiquetas</label>
          <input className="form-tags" type="text" {...register("Etiquetas")} />
        </div>
        <div className="dishtype-conteiner">
          {/* plato */}
          <label htmlFor="dish_type">Plato</label>
          <input className="form-dishtype" type="text" {...register("Plato")} />
        </div>
        <div className="collection-conteiner">
          {/* coleccion */}
          <label htmlFor="collection">Colección</label>
          <input
            className="form-collection"
            type="text"
            {...register("Coleccion")}
          />
        </div>
        <div className="category-conteiner">
          {/* categoria */}
          <label htmlFor="category">Categoria</label>
          <input
            className="form-category"
            type="text"
            {...register("Categoria")}
          />
        </div>
        <div className="ingredients-conteiner">
          {/* ingredientes */}
          <label htmlFor="ingredients">Ingredientes</label>
          <textarea
            className="form-ingredients"  rows="30" cols="50"
            {...register("Ingredientes", {
              required: true,
            })}
          />
          {errors.Ingredientes && <span>Ingredientes requerido</span>}
        </div>
        <div className="instructions-conteiner">
          {/* instruciones */}
          <label htmlFor="instructions">Paso a paso</label>
          <textarea
            className="form-instructions" rows="30" cols="50"
            {...register("Pasos", {
              required: true,
            })}
          />
          {errors.Pasos && <span>Pasos requerido</span>}
        </div>
        <div className="images-conteiner">
          {/* imagenes */}
          <label htmlFor="images">Imagenes</label>
          <input
            className="form-images"
            type="file"
            multiple
            {...register("Imagenes")}
          />
        </div>
        <div className="notes-conteiner">
          {/* notas */}
          <label htmlFor="notes">Notas</label>
          <textarea className="form-notes" {...register("notes")} />
        </div>
        <button type="submit" className="save-recipe">
          Guardar
        </button>
      </form>
      {isModalOpen && (
        <SavedModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </section>
  );
};
