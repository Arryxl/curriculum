const Experiencia = () => {
  const experienciaLaboral = [
    {
      id: 1,
      empresa: "Centro Educativo Nueva Visión",
      cargo: "Instructor",
      period: "Enero 2022 - Junio 2023",
      funciones: [
        "Con más de 40 estudiantes certificados, tengo experiencia para instruir a personas interesadas en adquirir conocimientos básicos y fundamentos necesarios en el mundo del desarrollo web.",
        "Capaz de diseñar planes de estudio efectivos y dinámicos para el aprendiz."
      ]
    },
    {
      id: 2,
      empresa: "Freelancer",
      cargo: "Desarrollo Frontend",
      period: "Mayo 2021 - Diciembre 2021",
      funciones: [
        "Mis funciones como frontend son diseñar una plantilla lo suficientemente moderna tanto para mi cliente como para sus clientes.",
        "Uso HTML, CSS y Bootstrap para desarrollarlo, con tal de ayudar a mis clientes a lograr sus objetivos tecnológicos de manera efectiva y eficiente."
      ]
    }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-primary text-2xl font-bold border-b-2 border-gray-300 pb-3 mb-5">
        EXPERIENCIA LABORAL
      </h2>
      <div className="flex flex-col gap-8">
        {experienciaLaboral.map(exp => (
          <div 
            key={exp.id} 
            className="bg-skyblue text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-2">{exp.empresa}</h3>
            <p className="italic text-blue-100 mb-4 text-lg">
              {exp.cargo} | {exp.period}
            </p>
            <h4 className="font-semibold text-lg mb-3">Funciones:</h4>
            <ul className="list-disc list-inside space-y-2">
              {exp.funciones.map((func, index) => (
                <li key={index} className="leading-relaxed">{func}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
  
export default Experiencia;