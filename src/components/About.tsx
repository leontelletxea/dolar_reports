export default function About() {
  return (
    <section className="w-full h-auto py-24 bg-yellow-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Images */}
        <div>
          <div className="relative flex justify-center min-h-80 md:min-h-96">
            {/* Primera imagen - principal */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-lg overflow-hidden transform rotate-2">
              <img
                src="/images/about/about_2.jpg"
                alt="Sobre Nosotros"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Segunda imagen - superpuesta, más visible en desktop */}
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-xl shadow-lg overflow-hidden transform -rotate-2 absolute top-6 left-6 md:top-12 md:left-12 opacity-90 md:opacity-100">
              <img
                src="/images/about/about_1.jpg"
                alt="Sobre Nosotros"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 italic text-center">
            Inspiración natural de Misiones<br />
            <span className="text-xs">— Diseño bioinspirado —</span>
          </p>
        </div>

        {/* Right Side: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-green-700 mb-4">Joyeria bioinspirada</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            En Joyas de la Selva, nos inspiramos en la riqueza natural de Misiones para
            crear piezas únicas que combinan elegancia y autenticidad. Cada joya es
            un reflejo de nuestra pasión por el diseño y el respeto por la naturaleza.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nuestro compromiso es ofrecer calidad excepcional y diseños exclusivos
            que conecten con la esencia de nuestra tierra y la belleza de quienes las
            llevan.
          </p>
        </div>
      </div>

      {/* Segunda sección - Materiales */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
        {/* Left Side: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-green-700 mb-4">¿Qué materiales utilizamos?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Principalmente trabajamos con alpaca, un metal noble que nos permite crear
            piezas duraderas y con un acabado excepcional. Su maleabilidad y resistencia
            lo convierten en el material ideal para nuestros diseños únicos.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Complementamos nuestras creaciones con piedras semipreciosas cuidadosamente
            seleccionadas, utilizadas tanto en el desarrollo de bombillas para mates
            como en nuestras joyas, aportando color, energía y la magia natural de la tierra.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex flex-col items-end">
          <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/about/about_1.jpg"
              alt="Materiales - Alpaca y Piedras"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 italic text-right max-w-xs">
            Alpaca y piedras semipreciosas<br />
            <span className="text-xs">— Materiales de origen natural —</span>
          </p>
        </div>
      </div>
    </section>
  );
}
