// Listas fijas que usan varias pantallas: el formulario (P5) para sus <select>,
// la lista (P3) para el filtro y JornadaCard para los colores.
// Si cada quien las escribe a mano, una tilde de diferencia ("Educativa" vs
// "Educativa ") basta para que el filtro deje de encontrar jornadas.
// Por eso viven en un solo lugar y todos las importan de aquí.

export const CATEGORIAS = [
  'Ambiental',
  'Animal',
  'Social',
  'Educativa',
  'Cultural',
  'Deportiva',
];

// Las 16 comunas de Medellín, con el mismo texto que ya muestra JornadaCard.
export const COMUNAS = [
  'Comuna 1 · Popular',
  'Comuna 2 · Santa Cruz',
  'Comuna 3 · Manrique',
  'Comuna 4 · Aranjuez',
  'Comuna 5 · Castilla',
  'Comuna 6 · Doce de Octubre',
  'Comuna 7 · Robledo',
  'Comuna 8 · Villa Hermosa',
  'Comuna 9 · Buenos Aires',
  'Comuna 10 · La Candelaria',
  'Comuna 11 · Laureles-Estadio',
  'Comuna 12 · La América',
  'Comuna 13 · San Javier',
  'Comuna 14 · El Poblado',
  'Comuna 15 · Guayabal',
  'Comuna 16 · Belén',
];
