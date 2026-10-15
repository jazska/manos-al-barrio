import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComoFunciona from './components/ComoFunciona';
import TiposJornada from './components/TiposJornada';
import ProximasJornadas from './components/ProximasJornadas';
import LlamadoAccion from './components/LlamadoAccion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <ComoFunciona />
      <TiposJornada />
      <ProximasJornadas />
      <LlamadoAccion />
      <Footer />
    </div>
  );
}

export default App;