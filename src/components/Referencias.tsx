const Referencias = () => {
  const referenciasLaborales = [
    {
      name: "Luis Enrique Reyes Herrera",
      position: "Coordinador de desarrollo",
      phone: "312 816 9622",
      area: "Desarrollo Web"
    },
    {
      name: "Diego Alejandro Castañeda Londoño",
      position: "Desarrollador Full Stack",
      phone: "302 364 8842"
    },
    {
      name: "Jefferson Jose Jorge Monsalve",
      position: "Presidente de Club de Programación",
      phone: "321 607 8306"
    }
  ];

  const referenciasPersonales = [
    {
      name: "Jenny Carina Gamboa Duran",
      position: "Ingeniera de Sistemas",
      phone: "310 688 7125"
    }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-primary text-2xl font-bold border-b-2 border-gray-300 pb-3 mb-5">
        REFERENCIAS LABORALES
      </h2>
      <div className="flex flex-wrap justify-center gap-5 mb-8">
        {referenciasLaborales.map((ref, index) => (
          <div 
            key={index} 
            className="bg-skyblue text-white p-4 rounded-lg max-w-sm shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg mb-2">{ref.name}</h3>
            <p className="mb-1">{ref.position}</p>
            {ref.area && <p className="italic text-blue-100 mb-2">{ref.area}</p>}
            <p className="text-blue-100">📱 {ref.phone}</p>
          </div>
        ))}
      </div>

      <h2 className="text-primary text-2xl font-bold border-b-2 border-gray-300 pb-3 mb-5">
        REFERENCIAS PERSONALES
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {referenciasPersonales.map((ref, index) => (
          <div 
            key={index} 
            className="bg-skyblue text-white p-4 rounded-lg max-w-sm shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg mb-2">{ref.name}</h3>
            <p className="mb-2">{ref.position}</p>
            <p className="text-blue-100">📱 {ref.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
  
export default Referencias;