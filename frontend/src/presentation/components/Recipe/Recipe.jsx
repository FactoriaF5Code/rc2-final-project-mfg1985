import "./Recipe.css";
import galletaFrita from "../../assets/galletas-fritas-rellenas-de-flan.jpg";
import Reloj from "../../assets/reloj-de-pared-2.png"
import Plato from "../../assets/plato.png"

export const Recipe = () => {
  return (
    <div className="recipe-view-conteiner">
      <div className="view-conteiner">
        <h1 className="ti-receta">Titulo receta</h1>
        <div className="photo-conteiner">
          <img className="photo-receta" src={galletaFrita } alt="Foto receta" />
        </div>
        <p className="ing-receta">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          obcaecati eos odio quia 
          
          officia expedita voluptatibus minus fugit
          voluptatum laboriosam, amet hic doloremque. Porro, laborum magni ullam
          dolor ex earum.
        </p>
        <div className="etq-contein"><h2 className="etq-receta">#etiqueta</h2></div>
        <h2 className="ctg-receta">categoria</h2>
        <h2 className="plt-receta">Plato</h2>
        <h2 className="col-receta">Coleccion</h2>
        <div className="tiempo-receta">
          <img className="reloj" src={Reloj} alt="dibujo reloj" />
          <h2 className="tiempo">30min</h2>
        </div>
        <div className="raciones-receta">
          <img className="cubiertos" src={Plato} alt="dibujo reloj" />
          <h2 className="txt-cubierto">8/9</h2>
        </div>
        <p className="instr-receta">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          obcaecati eos odio quia officia expedita voluptatibus minus fugit
          voluptatum laboriosam, amet hic doloremque. Porro, laborum magni ullam
          dolor ex earum Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt obcaecati eos odio quia officia expedita voluptatibus minus
          fugit voluptatum laboriosam, amet hic doloremque. Porro, laborum magni
          ullam dolor ex earum.
        </p>
        <h2 className="notas-seccion">Notas</h2>
        <button className="edit-recipe">Editar</button>
      </div>
    </div>
  );
};
