const Educacion = () => {
  const formacionAcademica = [
    {
      year: "2024 - Actualidad",
      titulo: "Análisis y desarrollo de Software",
      institucion: "Servicio Nacional de Aprendizaje (SENA)"
    },
    {
      year: "2020 - 2021",
      titulo: "Desarrollo Frontend",
      institucion: "Academia PLATZI"
    }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-primary text-2xl font-bold border-b-2 border-gray-300 pb-3 mb-5">
        EDUCACIÓN
      </h2>
      <div className="flex flex-col gap-5">
        {formacionAcademica.map((edu, index) => (
          <div key={index} className="flex gap-5 md:flex-row flex-col">
            <div className="font-bold min-w-fit text-lg">
              {edu.year}
            </div>
            <div className="flex-1">
              <h3 className="text-secondary text-xl font-semibold mb-1">
                {edu.titulo}
              </h3>
              <p className="text-gray-700 text-lg">
                {edu.institucion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
  
export default Educacion;