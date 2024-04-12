import { useNavigate } from "react-router-dom"
import "./AddModal.css"


export const AddModal = ({ isOpen, onClose }) => {

    const navigate = useNavigate();

    const goTo = (path) => {
        onClose();
        navigate(path);
    }

    return (
        <>
            <div className="modal-conteiner" style={{ display: isOpen ? "grid" : "none" }}>
                <div className="modal-boby">
                    <p className="titulo-menu" onClick={ () => goTo("/newrecipe")}>Añadir receta propia</p>
                    <p className="titulo-menu" onClick={ () => goTo("/importrecipe")}>Importar receta</p>
                    <button className="close-modal" onClick={onClose}>Cerrar</button>

                </div>
            </div>
        </>
    )
}