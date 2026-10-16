import './JornadaCard.css';

function JornadaCard({ categoria, fecha, titulo, horario, comuna, cupo }) {
  const tagClass = categoria.toLowerCase() === 'ambiental' ? 'tag-ambiental' : 'tag-animal';

  return (
    <div className="jornada-card">
      <div className="jornada-card-header">
        <span className={`tag ${tagClass}`}>{categoria}</span>
        <span className="fecha">{fecha}</span>
      </div>

      <h4 className="jornada-titulo">{titulo}</h4>

      <div className="jornada-info">
        <p><strong>Horario</strong> {horario}</p>
        <p><strong>Comuna</strong> {comuna}</p>
      </div>

      <div className="jornada-card-footer">
        <span className="cupo">Cupo: {cupo} personas</span>
        <a href="#" className="link-detalle">Ver detalle →</a>
      </div>
    </div>
  );
}

export default JornadaCard;
