import PasoCard from './PasoCard';
import './ComoFunciona.css';

function ComoFunciona() {
  return (
    <section className="como-funciona">
      <h2>CÓMO FUNCIONA</h2>
      <h3>Tres pasos para sumarte</h3>
      
      <div className="pasos-container">
        {}
        <PasoCard 
          numero="1" 
          titulo="Encuentra una jornada" 
          descripcion="Filtra por tu comuna y por el tipo de actividad que te interesa." 
        />
        
        {}
        <PasoCard 
          numero="2" 
          titulo="Revisa fecha y cupo" 
          descripcion="Mira el horario, el punto de encuentro y cuántos cupos quedan." 
        />
        
        {}
        <PasoCard 
          numero="3" 
          titulo="Llega y ayuda" 
          descripcion="Preséntate en el punto de encuentro a la hora indicada y súmate al grupo." 
        />
      </div>
    </section>
  );
}

export default ComoFunciona;