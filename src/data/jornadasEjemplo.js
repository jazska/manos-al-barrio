// Datos de ejemplo para trabajar esta semana sin backend.
// Siguen exactamente el formato acordado de una jornada:
// { id, categoria, titulo, descripcion, comuna, lugar,
//   fecha: 'YYYY-MM-DD', horaInicio: 'HH:MM', horaFin: 'HH:MM', cupo }
//
// - id es texto ('1', no 1): la URL /jornadas/1 entrega el id como texto
//   (useParams), y MongoDB también usa ids de texto. Así no hay que convertir.
// - cupo es número: los <input> del formulario devuelven texto, así que
//   JornadaForm debe convertirlo con Number() antes de guardar.
// - Hay una jornada por categoría para poder probar los 6 colores.
//
// - Las fechas deben ser futuras: la lista solo muestra jornadas de hoy en adelante.
//
// Este archivo desaparece cuando conectemos el backend: los datos pasarán a MongoDB.

export const jornadasEjemplo = [
  {
    id: '1',
    categoria: 'Ambiental',
    titulo: 'Limpieza de la quebrada La Iguana',
    descripcion:
      'Recogemos residuos en la orilla de la quebrada y los separamos para reciclaje. Lleva ropa que se pueda ensuciar y botella de agua; los guantes y las bolsas los pone la organización.',
    comuna: 'Comuna 7 · Robledo',
    lugar: 'Parque lineal La Iguana',
    fecha: '2026-11-21',
    horaInicio: '08:00',
    horaFin: '11:00',
    cupo: 20,
  },
  {
    id: '2',
    categoria: 'Animal',
    titulo: 'Feria de adopción de mascotas',
    descripcion:
      'Ayuda a recibir a las familias, pasear a los perros durante la feria y llenar los formularios de adopción.',
    comuna: 'Comuna 11 · Laureles-Estadio',
    lugar: 'Parque de Laureles (primer parque)',
    fecha: '2026-11-22',
    horaInicio: '10:00',
    horaFin: '14:00',
    cupo: 12,
  },
  {
    id: '3',
    categoria: 'Social',
    titulo: 'Entrega de mercados comunitarios',
    descripcion:
      'Armamos y entregamos mercados a familias del barrio inscritas en la junta de acción comunal.',
    comuna: 'Comuna 1 · Popular',
    lugar: 'Sede de la Junta de Acción Comunal, barrio Santo Domingo',
    fecha: '2026-11-28',
    horaInicio: '09:00',
    horaFin: '13:00',
    cupo: 15,
  },
  {
    id: '4',
    categoria: 'Educativa',
    titulo: 'Refuerzo escolar y lectura infantil',
    descripcion:
      'Acompaña a niños y niñas de primaria con tareas de matemáticas y lectura en voz alta.',
    comuna: 'Comuna 3 · Manrique',
    lugar: 'Biblioteca comunitaria del barrio La Salle',
    fecha: '2026-12-02',
    horaInicio: '14:00',
    horaFin: '16:00',
    cupo: 10,
  },
  {
    id: '5',
    categoria: 'Cultural',
    titulo: 'Taller de pintura y muralismo',
    descripcion:
      'Pintamos un mural con jóvenes del sector. No necesitas experiencia: los artistas guían el diseño.',
    comuna: 'Comuna 13 · San Javier',
    lugar: 'Muro de la cancha del barrio Las Independencias',
    fecha: '2026-12-05',
    horaInicio: '10:00',
    horaFin: '15:00',
    cupo: 18,
  },
  {
    id: '6',
    categoria: 'Deportiva',
    titulo: 'Torneo relámpago de fútbol del barrio',
    descripcion:
      'Se necesitan personas para arbitrar, llevar la planilla de resultados y organizar los equipos infantiles.',
    comuna: 'Comuna 8 · Villa Hermosa',
    lugar: 'Cancha sintética de Villa Hermosa',
    fecha: '2026-12-06',
    horaInicio: '08:00',
    horaFin: '12:00',
    cupo: 30,
  },
];
