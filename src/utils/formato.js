// Ayudas para MOSTRAR los datos de una jornada (no cambian lo que se guarda).
// En la base de datos la fecha va como '2026-11-07', pero en pantalla queremos
// "Sáb 7 nov". Las usan la lista (P3), el detalle (P4) y JornadaCard.

const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

// '2026-11-07' -> 'Sáb 7 nov'
export function formatearFecha(fechaTexto) {
  // Trampa conocida: new Date('2026-11-07') interpreta la fecha a medianoche
  // en hora universal (UTC). En Medellín (5 horas menos) eso todavía es el día 6,
  // y la tarjeta mostraría un día menos. Por eso armamos la fecha a mano,
  // con año, mes y día, que JavaScript sí toma en la hora local.
  const [anio, mes, dia] = fechaTexto.split('-').map(Number);
  const fecha = new Date(anio, mes - 1, dia); // en JS los meses van de 0 a 11
  return `${DIAS[fecha.getDay()]} ${dia} ${MESES[mes - 1]}`;
}

// ('08:00', '11:00') -> '8:00 – 11:00'
export function formatearHorario(horaInicio, horaFin) {
  const quitarCero = (hora) => hora.replace(/^0/, '');
  return `${quitarCero(horaInicio)} – ${quitarCero(horaFin)}`;
}

// La fecha de hoy en el formato de los datos: 'AAAA-MM-DD', en la hora local.
// (toISOString() daría la fecha en hora universal: de noche en Colombia ya sería "mañana".)
export function fechaDeHoy() {
  const hoy = new Date();
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const dia = String(hoy.getDate()).padStart(2, '0');
  return `${hoy.getFullYear()}-${mes}-${dia}`;
}
