// P3 · Lista de jornadas (/jornadas) · Responsable: A (Jon)
// Diseño: Figma "UI · Hito 1" → P3 Lista, P3 Lista vacía y Móvil P3.
//
// La pantalla tiene 3 partes, en este orden:
//   1. ESTADO (useState): lo que la pantalla tiene que recordar.
//   2. EFECTO (useEffect): pedir las jornadas a api.js cuando la pantalla aparece.
//   3. CÁLCULOS: lo que se deduce del estado (ordenar, filtrar, contar).
//      No se guardan en otro useState: se calculan de nuevo en cada dibujo.
import { useEffect, useState } from 'react';
import JornadaCard from '../components/JornadaCard';
import { obtenerJornadas } from '../services/api';
import { COMUNAS } from '../data/opciones';
import { formatearFecha, formatearHorario, fechaDeHoy } from '../utils/formato';
import './JornadasPage.css';

function JornadasPage() {
  // ---------- 1. Estado ----------
  const [jornadas, setJornadas] = useState([]);   // las jornadas próximas que llegan de api.js
  const [cargando, setCargando] = useState(true); // true mientras esperamos la respuesta
  const [error, setError] = useState('');         // mensaje si algo falla ('' = sin error)
  const [comuna, setComuna] = useState('');       // comuna elegida en el filtro ('' = todas)

  // ---------- 2. Efecto ----------
  // El [] del final significa: "corre esto una sola vez, cuando la pantalla aparece".
  useEffect(() => {
    // useEffect no acepta una función async directamente, por eso creamos una
    // adentro y la llamamos enseguida.
    async function cargarJornadas() {
      try {
        const datos = await obtenerJornadas(); // espera ~300 ms (luego, el backend)
        // La lista es de jornadas PRÓXIMAS: dejamos las de hoy en adelante.
        // Las fechas son texto 'AAAA-MM-DD', así que se comparan como texto.
        const hoy = fechaDeHoy();
        setJornadas(datos.filter((jornada) => jornada.fecha >= hoy));
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false); // pase lo que pase, ya no estamos cargando
      }
    }
    cargarJornadas();
  }, []);

  // ---------- 3. Cálculos ----------
  // Ordenadas por fecha y hora: las más cercanas primero.
  // [...jornadas] hace una copia para no tocar el estado.
  const ordenadas = [...jornadas].sort(
    (a, b) => a.fecha.localeCompare(b.fecha) || a.horaInicio.localeCompare(b.horaInicio)
  );
  const visibles = comuna === '' ? ordenadas : ordenadas.filter((j) => j.comuna === comuna);

  // "6 jornadas próximas" / "1 jornada próxima"
  const textoConteo = visibles.length === 1
    ? '1 jornada próxima'
    : `${visibles.length} jornadas próximas`;

  // Qué mostrar debajo del encabezado según el momento:
  let contenido;

  if (cargando) {
    contenido = <p className="lista-jornadas__mensaje">Cargando jornadas…</p>;
  } else if (error) {
    contenido = (
      <p className="lista-jornadas__mensaje lista-jornadas__mensaje--error" role="alert">
        {error}
      </p>
    );
  } else if (visibles.length === 0) {
    // Estado vacío (Figma: P3 Lista vacía). Sirve para dos casos:
    // la comuna elegida no tiene jornadas, o todavía no hay ninguna publicada.
    contenido = (
      <>
        <p className="lista-jornadas__conteo">
          {comuna === '' ? '0 jornadas próximas' : `0 jornadas próximas en ${comuna}`}
        </p>
        <div className="lista-jornadas__vacio">
          <span className="lista-jornadas__vacio-circulo" aria-hidden="true"></span>
          <h2 className="lista-jornadas__vacio-titulo">
            {comuna === ''
              ? 'Todavía no hay jornadas publicadas'
              : 'Todavía no hay jornadas en esta comuna'}
          </h2>
          <p className="lista-jornadas__vacio-texto">
            {comuna === ''
              ? 'Publica la primera jornada de tu barrio.'
              : 'Prueba con una comuna vecina o publica la primera jornada de tu barrio.'}
          </p>
          <div className="lista-jornadas__vacio-botones">
            {comuna !== '' && (
              <button type="button" className="boton boton--secundario" onClick={() => setComuna('')}>
                Ver todas las comunas
              </button>
            )}
            <a href="/jornadas/nueva" className="boton boton--primario">Publicar jornada</a>
          </div>
        </div>
      </>
    );
  } else {
    contenido = (
      <>
        <p className="lista-jornadas__conteo">
          {comuna === '' ? (
            // ", ordenadas por fecha" solo se muestra en pantallas grandes (ver el CSS)
            <>{textoConteo}<span className="lista-jornadas__conteo-extra">, ordenadas por fecha</span></>
          ) : (
            `${textoConteo} en ${comuna}`
          )}
        </p>
        <div className="lista-jornadas__grid">
          {visibles.map((jornada) => (
            // JornadaCard espera la fecha y el horario ya escritos para mostrar.
            <JornadaCard
              key={jornada.id}
              id={jornada.id}
              categoria={jornada.categoria}
              fecha={formatearFecha(jornada.fecha)}
              titulo={jornada.titulo}
              horario={formatearHorario(jornada.horaInicio, jornada.horaFin)}
              comuna={jornada.comuna}
              lugar={jornada.lugar}
              cupo={jornada.cupo}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <section className="container lista-jornadas">
      <div className="lista-jornadas__cabecera">
        <header className="lista-jornadas__encabezado">
          <h1 className="lista-jornadas__titulo">Jornadas de voluntariado</h1>
          <p className="lista-jornadas__subtitulo">
            Encuentra jornadas cerca de ti y súmate con tu barrio.
          </p>
        </header>

        <div className="lista-jornadas__filtro">
          {/* htmlFor (en JSX) es el "for" del <label> en HTML */}
          <label htmlFor="filtro-comuna">Filtrar por comuna</label>
          {/* Select controlado: React guarda el valor y lo actualiza en cada cambio */}
          <select
            id="filtro-comuna"
            value={comuna}
            onChange={(evento) => setComuna(evento.target.value)}
          >
            <option value="">Todas las comunas</option>
            {COMUNAS.map((nombre) => (
              <option key={nombre} value={nombre}>{nombre}</option>
            ))}
          </select>
        </div>
      </div>

      {contenido}
    </section>
  );
}

export default JornadasPage;
