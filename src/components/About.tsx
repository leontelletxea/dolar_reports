export default function About() {
  return (
    <section id="about" className="w-full h-auto">
      {/* Primera sección */}
      <div className="w-full h-auto py-24 bg-yellow-50 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
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
            <h2 className="text-5xl font-extrabold text-green-700 mb-4">Más de 20 años creando joyas únicas</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Durante más de dos décadas, en Joyas de la Selva hemos perfeccionado el arte de
              diseñar piezas que combinan elegancia, autenticidad y una profunda conexión
              con la naturaleza. Cada joya cuenta una historia y refleja nuestra pasión
              por el diseño y el respeto por el entorno natural.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro compromiso es ofrecer calidad excepcional y diseños exclusivos
              que celebren la belleza de quienes las llevan, mientras honramos la
              riqueza cultural y natural de nuestra tierra.
            </p>
          </div>
        </div>
      </div>

      {/* Segunda sección - Materiales */}
      <div className="w-full h-auto py-24 bg-green-50 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-green-700 text-center mb-8">¿Qué materiales utilizamos?</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-16">
            En Joyas de la Selva, seleccionamos cuidadosamente los materiales que utilizamos
            para garantizar la calidad y autenticidad de nuestras piezas. Cada elemento
            cuenta una historia y refleja nuestra conexión con la naturaleza y la cultura local.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Material 1 */}
            <div className="flex flex-col items-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/images/about/materials_1.jpg"
                  alt="Alpaca y Plata"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4 italic text-center">
                Piedras semipreciosas<br />
                <span className="text-xs">— dijes e incrustaciones —</span>
              </p>
            </div>

            {/* Material 2 */}
            <div className="flex flex-col items-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/images/about/materials_2.jpg"
                  alt="Piedras Semipreciosas"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4 italic text-center">
                Plata 925<br />
                <span className="text-xs">— anillos y joyas —</span>
              </p>
            </div>

            {/* Material 3 */}
            <div className="flex flex-col items-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/images/about/materials_3.jpg"
                  alt="Calabazas"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4 italic text-center">
                Alpaca<br />
                <span className="text-xs">— bombillas —</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
