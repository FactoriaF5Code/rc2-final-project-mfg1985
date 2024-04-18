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
                    <ul>
                        <li className="titulo-menu" onClick={ () => goTo("/newrecipe")}>Añadir receta propia</li>
                        <li className="titulo-menu" onClick={ () => goTo("/importrecipe")}>Importar receta</li>
                    </ul>
                    <button className="close-modal" onClick={onClose}>Cerrar</button>

                </div>
            </div>
        </>
    )
}