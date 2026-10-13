import './Hero.css';

// Las ventajas van en un array; el componente las recorre con map
const VENTAJAS = ['Sin costo', 'Por comuna', 'Cupos claros'];

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__contenido">
        {/* Columna izquierda: texto */}
        <div className="he3ro__texto">
          <p className="hero__eyebrow">Voluntariado en Medellín</p>

          <h1 className="hero__titulo">Ayuda en tu barrio, cuando puedas</h1>
          <br />

          <p className="hero__descripcion">
            Encuentra jornadas de voluntariado cerca de ti: limpiezas, siembras,
            refuerzo escolar y más. Revisa la fecha, el lugar y el cupo antes de ir.
          </p>
          <br />

          <div className="hero__botones">
            <a href="/jornadas" className="hero__boton hero__boton--primario">
              Ver jornadas
            </a>
            <a href="/jornadas/nueva" className="hero__boton hero__boton--secundario">
              Publicar una jornada
            </a>
          </div>
          <br />

          <ul className="hero__ventajas">
            {VENTAJAS.map((ventaja) => (
              <li key={ventaja}>{ventaja}</li>
            ))}
          </ul>
        </div>

        {/* Columna derecha: panel verde */}
        <div className="hero__ilustracion" aria-hidden="true">
          {/* Aquí irán 2 <JornadaCard />  */}
        </div>
      </div>
    </section>
  );
}

export default Hero;