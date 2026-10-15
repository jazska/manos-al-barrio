import './PasoCard.css';

function PasoCard({ numero, titulo, descripcion }) {
  return (
    <div className="paso-card">
      <div className="paso-numero">{numero}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default PasoCard;