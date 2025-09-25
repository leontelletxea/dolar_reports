import { useState } from "react";
import type { MouseEvent } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Opciones del menú dinámicas
  const menuOptions = [
    { label: "Inicio", href: "#" },
    { label: "Sobre nosotros", href: "#about" },
    { label: "Galería", href: "/galeria" },
  ];

  return (
    <header className="w-full bg-green-700 text-gray-100 border-b border-neutral-300 shadow-md">
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="Logo Joyas de la Selva"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </div>

          {/* OPCIONES DESKTOP */}
          <div className="hidden md:flex items-center gap-10">
            {menuOptions.map((option, index) => (
              <a 
                key={index}
                href={option.href} 
                onClick={(e) => option.href.startsWith("#") && handleSmoothScroll(e, option.href.substring(1))}
                className="hover:text-gray-300 transition-colors"
              >
                {option.label}
              </a>
            ))}
            <Button>
              <a
                href="https://wa.me/+5493755516019"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </Button>
          </div>

          {/* BOTON MENU HAMBURGUESA */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1 p-2 rounded"
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* MENU MOBILE */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col gap-4 py-4 border-t border-green-600">
            {menuOptions.map((option, index) => (
              <a 
                key={index}
                href={option.href} 
                onClick={(e) => option.href.startsWith("#") && handleSmoothScroll(e, option.href.substring(1))}
                className="text-white hover:text-gray-300 transition-colors py-2 px-4 rounded hover:bg-green-600"
              >
                {option.label}
              </a>
            ))}
            <div className="px-4">
              <Button>
                <a
                  href="https://wa.me/+5493755516019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Contacto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
