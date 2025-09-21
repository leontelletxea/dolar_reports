import GreenButton from "./GreenButton";

const Navbar = () => {
  return (
    <header className="w-full bg-gray-100 text-gray-800 border-b border-neutral-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Logo Joyas de la Selva"
            className="h-12 w-12 object-contain"
          />
          <span className="font-bold text-2xl text-green-700">Joyas de la Selva</span>
        </div>


        {/* OPCIONES */}
        <div className="flex items-center gap-10">
          <a href="#" className="text-green-700 hover:text-green-600">Sobre nosotros</a>
          <a href="#" className="text-green-700 hover:text-green-600">Galeria</a>
          <GreenButton>Contacto</GreenButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
