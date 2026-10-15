import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>VOLUNTARIADO EN MEDELLÍN</h1>
      <h2>Ayuda en tu barrio, cuando puedas</h2>
      <p>Encuentra jornadas cerca de ti y revisa fecha, lugar y cupo antes de ir.</p>
      <div className="hero-botones">
        <button className="btn-primario">Ver jornadas</button>
        <button className="btn-secundario">Publicar una jornada</button>
      </div>
    </section>
  );
}
export default Hero;