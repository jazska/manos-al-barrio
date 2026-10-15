import TipoCard from './TipoCard';
import './TiposJornada.css';

function TiposJornada() {
  return (
    <section className="tipos-jornada">
      <h2>TIPOS DE JORNADA</h2>
      <h3>¿Qué te gustaría hacer?</h3>
      <div className="tipos-grid">
        <TipoCard>Ambiental</TipoCard>
        <TipoCard>Animal</TipoCard>
        <TipoCard>Social</TipoCard>
        <TipoCard>Educativa</TipoCard>
        <TipoCard>Cultural</TipoCard>
        <TipoCard>Deportiva</TipoCard>
      </div>
    </section>
  );
}
export default TiposJornada;