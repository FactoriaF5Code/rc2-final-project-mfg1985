import { useState } from "react";
import { SavedModal } from "../SavedModal/SavedModal";
import "./NewRecipe.css";
import { useForm } from "react-hook-form";
import axios from "axios"; // Importar axios para peticiones HTTP

export const NewRecipe = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const onSubmit = async (data) => {
    try {
      
      const response = await axios.post("http://localhost:8080/newrecipe", data);
      console.log(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error al guardar la receta:", error);
    }
  };

  return (
    <section className="newrecipe-conteiner">
      <form className="form-newrecipe" onSubmit={handleSubmit(onSubmit)}>
        <div className="title-conteiner">
          {/* titulo */}
          <label className="label-titulo" htmlFor="titulo">Titulo</label>
          <input
            className="form-title"
            type="text" 
            {...register("titleRecipe", {
              required: true,
            })}
          />
          {errors.Titulo && <span>Titulo requerido</span>}
        </div>
        <div className="time-conteiner">
          {/* tiempo */}
          <label className="label-time" htmlFor="time">Tiempo</label>
          <input
            className="form-time"
            type="text"
            {...register("timeRecipe", {
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
            {...register("servings")}
          />
        </div>
        <div className="tags-conteiner">
          {/* etiquetas */}
          <label htmlFor="tags">Etiquetas</label>
          <input className="form-tags" type="text" {...register("tag")} />
        </div>
        <div className="dishtype-conteiner">
          {/* plato */}
          <label htmlFor="dish_type">Plato</label>
          <input className="form-dishtype" type="text" {...register("dishType")} />
        </div>
        <div className="collection-conteiner">
          {/* coleccion */}
          <label htmlFor="collection">Colección</label>
          <input
            className="form-collection"
            type="text"
            {...register("collection")}
          />
        </div>
        <div className="category-conteiner">
          {/* categoria */}
          <label htmlFor="category">Categoria</label>
          <input
            className="form-category"
            type="text"
            {...register("category")}
          />
        </div>
        <div className="ingredients-conteiner">
          {/* ingredientes */}
          <label htmlFor="ingredients">Ingredientes</label>
          <textarea
            className="form-ingredients"   
            {...register("ingredients", {
              required: true,
            })}
          />
          {errors.Ingredientes && <span>Ingredientes requerido</span>}
        </div>
        <div className="instructions-conteiner">
          {/* instruciones */}
          <label htmlFor="instructions">Paso a paso</label>
          <textarea
            className="form-instructions" 
            {...register("instructions", {
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
            
            {...register("Imagenes")}
          />
        </div>
        <div className="notes-conteiner">
          {/* notas */}
          <label htmlFor="notes">Notas</label>
          <textarea className="form-notes" {...register("note")} />
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