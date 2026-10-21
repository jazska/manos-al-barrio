import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar__contenido" aria-label="Principal">
        <a href="/" className="navbar__logo">
          <span className="navbar__marca" aria-hidden="true"></span>
          Manos al Barrio
        </a>

        <div className="navbar__enlaces">
          <a href="/" className="navbar__enlace navbar__enlace--activo">Inicio</a>
          <a href="/jornadas" className="navbar__enlace">Jornadas</a>
          <a href="/jornadas/nueva" className="navbar__boton">Publicar jornada</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;