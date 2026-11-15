import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComoFunciona from './components/ComoFunciona';
import TiposJornada from './components/TiposJornada';
import ProximasJornadas from './components/ProximasJornadas';
import LlamadoAccion from './components/LlamadoAccion';
import Footer from './components/Footer';
import JornadasPage from './pages/JornadasPage';

function App() {
  // TEMPORAL, mientras instalamos react-router-dom:
  // elegimos la página mirando la URL "a mano". window.location.pathname es la
  // parte de la URL después del dominio: '/' en el inicio, '/jornadas' en la lista.
  // Los <a href> de la Navbar recargan la página, así que este valor se vuelve
  // a leer en cada clic. Esto es justo lo que el router hará por nosotros.
  const ruta = window.location.pathname;

  return (
    <div className="app-container">
      <Navbar />

      {ruta === '/jornadas' ? (
        <JornadasPage />
      ) : (
        <>
          <Hero />
          <ComoFunciona />
          <TiposJornada />
          <ProximasJornadas />
          <LlamadoAccion />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
