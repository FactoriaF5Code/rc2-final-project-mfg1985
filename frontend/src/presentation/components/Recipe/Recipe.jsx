import "./Recipe.css"

export const Recipe = () => {
    return (
        <div className="recipe-view-conteiner">
            <h1 className="ti-receta">Titulo receta</h1>
            <img  className="photo-receta" src="#" alt="fFoto receta" />
            <p className="ing-receta">Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Sunt 
            obcaecati eos odio quia officia expedita 
            voluptatibus minus fugit voluptatum laboriosam, 
            amet hic doloremque. Porro,
             laborum magni ullam dolor ex earum.</p>
             <h2 className="etq-receta">#etiqueta</h2>
             <h2 className="ctg-receta">categoria</h2>
             <h2 className="plt-receta">Plato</h2>
             <h2 className="col-receta">Coleccion</h2>
            <div className="tiempo-receta">
                <img className="reloj" src="#" alt="dibujo reloj" />
                <p className="tiempo"></p>
             </div>
             <div className="raciones-receta">
                <img className="cubiertos" src="#" alt="dibujo reloj" />
            </div>
             <p className="instr-receta">Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Sunt 
            obcaecati eos odio quia officia expedita 
            voluptatibus minus fugit voluptatum laboriosam, 
            amet hic doloremque. Porro,
             laborum magni ullam dolor ex earum
             Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Sunt 
            obcaecati eos odio quia officia expedita 
            voluptatibus minus fugit voluptatum laboriosam, 
            amet hic doloremque. Porro,
             laborum magni ullam dolor ex earum.</p>
            <h2 className="notas-seccion">Notas</h2>
            <button  className="edit-recipe">Editar</button>
        </div>
    )
}
