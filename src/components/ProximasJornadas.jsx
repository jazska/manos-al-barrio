import JornadaCard from './JornadaCard';
import './ProximasJornadas.css';

function ProximasJornadas() {
  const jornadas = [
    {
      id: 1,
      categoria: 'Ambiental',
      fecha: 'Sáb 10 oct',
      titulo: 'Limpieza de la quebrada La Iguana',
      horario: '8:00 – 11:00',
      comuna: 'Comuna 7 · Robledo',
      cupo: 20
    },
    {
      id: 2,
      categoria: 'Animal',
      fecha: 'Dom 18 oct',
      titulo: 'Feria de adopción de mascotas',
      horario: '10:00 – 14:00',
      comuna: 'Comuna 11 · Laureles-Estadio',
      cupo: 12
    },
    {
      id: 3,
      categoria: 'Social',
      fecha: 'Sáb 24 oct',
      titulo: 'Entrega de mercados comunitarios',
      horario: '9:00 – 13:00',
      comuna: 'Comuna 1 · Popular',
      cupo: 15
    },
    {
      id: 4,
      categoria: 'Educativa',
      fecha: 'Mié 28 oct',
      titulo: 'Refuerzo escolar y lectura infantil',
      horario: '14:00 – 16:00',
      comuna: 'Comuna 3 · Manrique',
      cupo: 10
    },
    {
      id: 5,
      categoria: 'Cultural',
      fecha: 'Sáb 31 oct',
      titulo: 'Taller de pintura y muralismo',
      horario: '10:00 – 15:00',
      comuna: 'Comuna 13 · San Javier',
      cupo: 18
    },
    {
      id: 6,
      categoria: 'Deportiva',
      fecha: 'Dom 01 nov',
      titulo: 'Torneo relámpago de fútbol del barrio',
      horario: '8:00 – 12:00',
      comuna: 'Comuna 8 · Villa Hermosa',
      cupo: 30
    }
  ];

  return (
    <section className="proximas-jornadas">
      <div className="seccion-header">
        <div>
          <span className="subtitulo-seccion">PRÓXIMAS JORNADAS</span>
          <h2>Súmate esta semana</h2>
        </div>
        <a href="#" className="link-todas">Ver todas las jornadas →</a>
      </div>

      <div className="jornadas-grid">
        {jornadas.map((jornada) => (
          <JornadaCard
            key={jornada.id}
            categoria={jornada.categoria}
            fecha={jornada.fecha}
            titulo={jornada.titulo}
            horario={jornada.horario}
            comuna={jornada.comuna}
            cupo={jornada.cupo}
          />
        ))}
      </div>
    </section>
  );
}

export default ProximasJornadas;