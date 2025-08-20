
const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 0 L24 12 L12 24 L0 12 Z" />
            </svg>
            <span className="text-lg font-semibold">Dolar Reports</span>
          </div>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
            Seguimiento del dólar en tiempo real con diseño minimalista, inspirado en el futuro.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-xs font-semibold text-neutral-400 uppercase mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://github.com/leontelletxea"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.513 11.513 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.624-5.48 5.922.43.37.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/leontelletxea"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="#0A66C2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.938v5.668h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.599 0 4.266 2.368 4.266 5.451v6.29zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.207 24 24 23.229 24 22.277V1.723C24 .771 23.207 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://cafecito.app/leontellechea"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                ☕ Invitame un café
              </a>
            </li>
          </ul>
        </div>

        {/* EXTRA */}
        <div>
          <h4 className="text-xs font-semibold text-neutral-400 uppercase mb-4">Sobre mí</h4>
          <p className="text-sm text-neutral-500">
            Desarrollado por <span className="text-neutral-300 font-medium">leontelletxea</span>.
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-600">
        Desarrollado con React + TailwindCSS.
      </div>
    </footer>
  );
};

export default Footer;
