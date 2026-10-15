import './LlamadoAccion.css';

function LlamadoAccion() {
  return (
    <section className="llamado-accion">
      <p>¿Haces servicio social o lideras una organización?</p>
      <p>Encuentra jornadas para sumar horas o publica la de tu barrio.</p>
      <div className="accion-botones">
        <button className="btn-primario">Ver jornadas</button>
        <button className="btn-secundario">Publicar una jornada</button>
      </div>
    </section>
  );
}
export default LlamadoAccion;