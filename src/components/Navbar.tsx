import BlackButton from "./BlackButton";
import WhiteButton from "./WhiteButton";

const Navbar = () => {
  return (
    <header className="w-full bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 0 L24 12 L12 24 L0 12 Z" />
          </svg>
          <span className="font-semibold text-white">Dolar Reports</span>
        </div>

        {/* BOTONES */}
        <div className="flex items-center gap-3">
          <BlackButton>Información</BlackButton>
          <WhiteButton>Suscribirme</WhiteButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
