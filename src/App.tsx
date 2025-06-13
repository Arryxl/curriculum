import Encabezado from './components/Encabezado';
import Acerca from './components/Acerca';
import Educacion from './components/Educacion';
import Habilidades from './components/Habilidades';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Referencias from './components/Referencias';

const App = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 bg-white shadow-lg">
      <Encabezado />
      <main className="px-5">
        <Acerca />
        <Educacion />
        <Habilidades />
        <Experiencia />
        <Proyectos />
        <Referencias />
      </main>
    </div>
  );
};

export default App;