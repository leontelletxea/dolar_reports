export default function About() {
  return (
    <section className="w-full h-auto py-16 bg-green-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Images */}
        <div className="relative flex justify-center">
          <div className="w-96 h-96 rounded-xl shadow-lg overflow-hidden transform rotate-2">
            <img
              src="/public/images/about/about_2.jpg"
              alt="Sobre Nosotros"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-80 h-80 rounded-xl shadow-lg overflow-hidden transform -rotate-2 absolute top-12 left-12">
            <img
              src="/public/images/about/about_1.jpg"
              alt="Sobre Nosotros"
              className="w-full h-full object-cover"
            />
          </div>
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
    </section>
  );
}
