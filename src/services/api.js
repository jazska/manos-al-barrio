// =====================================================================
// api.js · el ÚNICO lugar donde la app pide o guarda jornadas.
//
// Esta semana los datos viven en memoria (en la variable `jornadas`).
// Cuando tengamos el backend, solo cambia el INTERIOR de estas 5 funciones
// (pasan a usar fetch). Los componentes no se tocan, porque ellos solo
// llaman, por ejemplo, `await obtenerJornadas()` y no saben de dónde salen
// los datos.
//
// Reglas para usarlas (iguales ahora y con el backend):
//   1. Todas son async: siempre se llaman con `await`, dentro de una
//      función async (en un useEffect o en el onSubmit del formulario).
//   2. Si algo sale mal (por ejemplo, el id no existe), LANZAN un error.
//      Envuelvan la llamada en try/catch y muestren error.message.
//
// Ejemplo en una página:
//   useEffect(() => {
//     async function cargar() {
//       try {
//         const datos = await obtenerJornadas();
//         setJornadas(datos);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setCargando(false);
//       }
//     }
//     cargar();
//   }, []);
//
// Ojo: como es memoria, al recargar la página (F5) todo vuelve a los datos
// de ejemplo. Es normal esta semana. Un <a href> también recarga la página;
// cuando llegue react-router-dom navegaremos con <Link>, que no recarga.
// =====================================================================

import { jornadasEjemplo } from '../data/jornadasEjemplo';

// Nuestra "base de datos" de mentiras: una copia de los datos de ejemplo.
let jornadas = jornadasEjemplo.map((jornada) => ({ ...jornada }));

// Simula lo que tarda un servidor en responder (300 milisegundos).
// Sirve para que cada pantalla programe desde ya su estado "Cargando…",
// que con el backend real sí se va a ver.
const RETRASO_MS = 300;
function esperar() {
  return new Promise((resolve) => setTimeout(resolve, RETRASO_MS));
}

// Devolvemos copias ({ ...jornada }) para que ningún componente pueda
// modificar la "base de datos" por accidente: el único camino para cambiar
// datos son las funciones de este archivo, igual que con un servidor.

/** Lista de todas las jornadas (P3 Lista). */
export async function obtenerJornadas() {
  await esperar();
  return jornadas.map((jornada) => ({ ...jornada }));
}

/** Una jornada por su id (P4 Detalle y P5 Editar). Lanza error si no existe. */
export async function obtenerJornada(id) {
  await esperar();
  const jornada = jornadas.find((j) => j.id === String(id));
  if (!jornada) {
    throw new Error('No encontramos esa jornada.');
  }
  return { ...jornada };
}

/** Crea una jornada nueva (P5 Crear). Devuelve la jornada ya con su id. */
export async function crearJornada(datos) {
  await esperar();
  // El id lo pone "el servidor", no el formulario (MongoDB hará lo mismo).
  const nueva = { ...datos, id: String(Date.now()) };
  jornadas.push(nueva);
  return { ...nueva };
}

/** Cambia los datos de una jornada (P5 Editar). Devuelve la jornada actualizada. */
export async function actualizarJornada(id, datos) {
  await esperar();
  const indice = jornadas.findIndex((j) => j.id === String(id));
  if (indice === -1) {
    throw new Error('No encontramos esa jornada para actualizarla.');
  }
  // Mezcla lo que había con lo nuevo; el id nunca cambia.
  jornadas[indice] = { ...jornadas[indice], ...datos, id: jornadas[indice].id };
  return { ...jornadas[indice] };
}

/** Borra una jornada (P4 Eliminar). No devuelve nada. */
export async function eliminarJornada(id) {
  await esperar();
  const existe = jornadas.some((j) => j.id === String(id));
  if (!existe) {
    throw new Error('No encontramos esa jornada para eliminarla.');
  }
  jornadas = jornadas.filter((j) => j.id !== String(id));
}

// ---------------------------------------------------------------------
// Así se verá obtenerJornadas cuando conectemos Express (semana del 26 oct).
// Las otras cuatro siguen el mismo patrón, cambiando la URL y el método.
//
// const API_URL = import.meta.env.VITE_API_URL; // va en el archivo .env
//
// export async function obtenerJornadas() {
//   const respuesta = await fetch(`${API_URL}/api/jornadas`);
//   if (!respuesta.ok) throw new Error('No pudimos cargar las jornadas.');
//   return respuesta.json();
// }
// ---------------------------------------------------------------------
