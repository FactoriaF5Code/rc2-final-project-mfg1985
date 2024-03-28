import { Link } from "react-router-dom"
import "./AddModal.css"


export const AddModal = ({ isOpen, onClose }) => {

    return (
<>
<div className="modal-conteiner" style={{display: isOpen ? "grid" : "none"}}>
    <div className="modal-boby">
        <Link to=""><p>Añadir receta propia</p></Link>
        <button className="close-modal" onClick={onClose}>Cerrar</button>
        
    </div>
</div>
</>
)
}