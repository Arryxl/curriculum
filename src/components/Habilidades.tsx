const Habilidades = () => {
  const habilidadesTecnicas = [
    "HTML", "CSS", "JavaScript", "MySQL", "Git", "Github", 
    "Bootstrap", "React.js", "Node.js", "Python", "Codestream"
  ];

  const habilidadesBlandas = [
    "Liderazgo", "Colaborador", "Trabajador", "Resolución de problemas",
    "Aprendizaje continuo", "Trabajo en equipo", "Versátil"
  ];

  return (
    <section className="mb-10">
      <h2 className="text-primary text-2xl font-bold border-b-2 border-gray-300 pb-3 mb-5">
        HABILIDADES TÉCNICAS
      </h2>
      <ul className="flex flex-wrap justify-center gap-3 list-none p-0 mb-8">
        {habilidadesTecnicas.map((habilidad, index) => (
          <li 
            key={index} 
            className="bg-skyblue text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            {habilidad}
          </li>
        ))}
      </ul>
      
      <h2 className="text-primary text-2xl font-bold border-b-2 border-gray-300 pb-3 mb-5">
        HABILIDADES BLANDAS
      </h2>
      <ul className="flex flex-wrap justify-center gap-3 list-none p-0">
        {habilidadesBlandas.map((habilidad, index) => (
          <li 
            key={index} 
            className="bg-skyblue text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            {habilidad}
          </li>
        ))}
      </ul>
    </section>
  );
};
  
export default Habilidades;