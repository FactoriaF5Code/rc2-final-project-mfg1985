import "./SavedModal.css";

export const SavedModal = ({ isOpen, onClose }) => {
  return (
    <div className="savedmodal-conteiner">
      <div className="savedmodal-body">
        <button className="savedclose-modal" onClick={onClose}>X</button>
        <p className="sms">Receta guardada correctamente</p>
      </div>
    </div>
  );
};
