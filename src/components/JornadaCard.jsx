import './JornadaCard.css';

// Tarjeta de una jornada . La usan la página de inicio
// tambien se usa en /jornadas.

function JornadaCard({ id, categoria, fecha, titulo, horario, comuna, lugar, cupo, className = '' }) {
  // 'Ambiental' -> 'jornada-card__badge--ambiental': cada categoría tiene su color en el CSS
  const claseBadge = `jornada-card__badge jornada-card__badge--${categoria.toLowerCase()}`;
  // ejm. 'Comuna 7 · Robledo' -> 'Comuna 7' 
  const comunaCorta = comuna.split(' · ')[0];

  return (
    <article className={`jornada-card ${className}`}>
      <div className="jornada-card__encabezado">
        <span className={claseBadge}>{categoria}</span>
        <span className="jornada-card__fecha">{fecha}</span>
      </div>

      <h3 className="jornada-card__titulo">{titulo}</h3>

      {/* Escritorio: una fila por dato. dl/dt/dd es la lista de "nombre: valor" de HTML */}
      <dl className="jornada-card__datos">
        <div className="jornada-card__fila">
          <dt>Horario</dt>
          <dd>{horario}</dd>
        </div>
        <div className="jornada-card__fila">
          <dt>Comuna</dt>
          <dd>{comuna}</dd>
        </div>
        {lugar && (
          <div className="jornada-card__fila">
            <dt>Lugar</dt>
            <dd>{lugar}</dd>
          </div>
        )}
      </dl>

      {/* Celular: los mismos datos en una sola línea (el CSS muestra una u otra) */}
      <p className="jornada-card__resumen">{horario} · {comunaCorta}</p>

      <div className="jornada-card__pie">
        <span className="jornada-card__cupo">Cupo: {cupo} personas</span>
        <a href={id ? `/jornadas/${id}` : '#'} className="jornada-card__enlace">Ver detalle →</a>
      </div>
    </article>
  );
}

export default JornadaCard;
