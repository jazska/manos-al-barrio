import './Footer.css';

// Los enlaces van en un array: si mañana se agrega uno, solo se añade aquí
const ENLACES = [
  { texto: 'Inicio', url: '/' },
  { texto: 'Jornadas', url: '/jornadas' },
  { texto: 'Publicar jornada', url: '/jornadas/nueva' },
];

function Footer() {
  const anio = new Date().getFullYear();   // el año se actualiza solo

  return (
    <footer className="footer">
      <div className="container footer__contenido">
        <div className="footer__marca">
          <a href="/" className="footer__logo">
            <span className="footer__circulo" aria-hidden="true"></span>
            Manos al Barrio
          </a>
          <p className="footer__texto">Proyecto académico · Medellín, {anio}</p>
        </div>

        <nav aria-label="Pie de página">
          <ul className="footer__enlaces">
            {ENLACES.map((enlace) => (
              <li key={enlace.url}>
                <a href={enlace.url} className="footer__enlace">{enlace.texto}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;