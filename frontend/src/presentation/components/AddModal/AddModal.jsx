import { Link } from "react-router-dom"
import "./AddModal.css"

export const AddModal = () => {
    return (
<>
<div className="modal-conteiner">
    <div className="modal-boby">
        <Link to=""><p>Añadir receta propia</p></Link>
        <button className="close-modal">Cerrar</button>
        
    </div>
</div>
</>
)
}