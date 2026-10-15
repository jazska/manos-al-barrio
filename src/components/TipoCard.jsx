import { useState } from 'react';
import './TipoCard.css';

function TipoCard({ children }) {
  const [activo, setActivo] = useState(false);

  return (
    <div 
      className={`tipo-card ${activo ? 'activo' : ''}`} 
      onClick={() => setActivo(!activo)}
    >
      {children}
    </div>
  );
}
export default TipoCard;