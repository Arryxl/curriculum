import foto from '../assets/foto.jpg';

const Encabezado = () => {
  return (
    <header className="text-center py-8 border-b-2 border-gray-300 mb-8 bg-skyblue rounded-lg text-white">
      <div className="flex justify-center mb-5">
        <div className="w-36   bg-white flex items-center justify-center text-skyblue text-4xl font-bold border-4 border-white">
          <img src={foto} alt="" />
        </div>
      </div>
      <h1 className="text-white text-4xl font-bold mb-2">Juan Reyes</h1>
      <h2 className="text-white text-2xl mb-4">Frontend Developer</h2>
      <div className="mt-4 space-y-1">
        <p className="text-white">Ibagué, Tolima, Colombia</p>
        <p className="text-white">+57 313 829 2765</p>
        <p className="text-white">juanreyval99@gmail.com</p>
        <p className="text-white">juan_sreyesv@soy.sena.edu.co</p>
        <p className="text-white">linkedin.com/in/juansreyes/</p>
        <p className="text-white">github.com/Arryxl</p>
      </div>
    </header>
  );
};

export default Encabezado;