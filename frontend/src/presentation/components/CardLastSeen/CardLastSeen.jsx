 import "./CardLastSeen.css";
 import { Link } from 'react-router-dom';

export const CardLastSeen = () => {
    return (
<>
<div className="cardLastSeen">
   <Link to="/"><img className="imgLastSeen" src="" alt="" /></Link>
   <Link to="/"><h2>Titulo Receta</h2></Link>
    
</div>
</>
    );
};