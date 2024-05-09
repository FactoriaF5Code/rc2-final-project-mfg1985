
import { useState } from "react";
import { SavedModal } from "../SavedModal/SavedModal";
import "./ImportRecipe.css";
import { useForm } from "react-hook-form";

export const ImportRecipe = () => {
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
  const [url, setUrl] = useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <section className="import-recipe-conteiner">
      <form  className="form-import" onSubmit={handleSubmit(onSubmit)} >
        <div className="import-url-conteiner">
           {/* url */}
         <label htmlFor="import-url">URL</label>
          <input
            className="import-form-url"
            type="url"
            {...register("Url", {
              required: true,
            })}
            onChange={handleUrlChange}
          />
          {errors.Url && <span>URL requerido</span>}
        </div>
        {/*Vista previa */}
        <div className="import-previa-conteiner">
          <iframe className="previa" src={url} frameborder="0"></iframe>
        </div>
        <div className="import-title-conteiner">
          {/* titulo */}
          <label htmlFor="import-titulo">Titulo</label>
          <input
            className="import-form-title"
            type="text"
            {...register("Titulo", {
              required: true,
            })}
          />
          {errors.Titulo && <span>Titulo requerido</span>}
        </div>
        <div className="import-time-conteiner">
          {/* tiempo */}
          <label htmlFor="import-time">Tiempo</label>
          <input
            className="import-form-time"
            type="text"
            {...register("Tiempo", {
              required: true,
            })}
          />
          {errors.Tiempo && <span>Tiempo requerido</span>}
        </div>
        <div className="import-servings-conteiner">
          {/* Raciones */}
          <label htmlFor="import-servings">Raciones</label>
          <input
            className="import-form-servings"
            type="text"
            {...register("Raciones")}
          />
        </div>
        <div className="import-tags-conteiner">
          {/* etiquetas */}
          <label htmlFor="import-tags">Etiquetas</label>
          <input className="import-form-tags" type="text" {...register("Etiquetas")} />
        </div>
        <div className="import-dishtype-conteiner">
          {/* plato */}
          <label htmlFor="import-dishtype">Plato</label>
          <input className="import-form-dishtype" type="text" {...register("Plato")} />
        </div>
        <div className="import-collection-conteiner">
          {/* coleccion */}
          <label htmlFor="import-collection">Colección</label>
          <input
            className="import-form-collection"
            type="text"
            {...register("Coleccion")}
          />
        </div>
        <div className="import-category-conteiner">
          {/* categoria */}
          <label htmlFor="import-category">Categoria</label>
          <input
            className="import-form-category"
            type="text"
            {...register("Categoria")}
          />
        </div>
        <div className="import-notes-conteiner">
          {/* notas */}
          <label htmlFor="import-notes">Notas</label>
          <textarea className="import-form-notes" {...register("notes")} />
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
