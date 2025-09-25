const Footer = () => {
  return (
    <footer className="border-t border-neutral-300 bg-green-700">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* LOGO */}
        <div>
          <div className="mb-4">
            <img
              src="/images/logo.svg"
              alt="Logo Joyas de la Selva"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
            Descubre la belleza de la naturaleza con nuestras joyas únicas y artesanales.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-xs font-semibold text-gray-100 uppercase mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://facebook.com/joyasdelaselva"
                className="flex items-center gap-2 text-gray-200 hover:text-gray-400 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/1234567890"
                className="flex items-center gap-2 text-gray-200 hover:text-gray-400 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="#25D366"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.17 1.6 6.02L0 24l6.26-1.58A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22.05c-1.9 0-3.74-.5-5.36-1.45l-.38-.22-3.71.94.99-3.62-.25-.37A9.93 9.93 0 0 1 2.05 12c0-5.48 4.47-9.95 9.95-9.95 2.66 0 5.17 1.04 7.05 2.93a9.93 9.93 0 0 1 2.93 7.05c0 5.48-4.47 9.95-9.95 9.95zm4.7-7.3c-.26-.13-1.54-.76-1.78-.85-.24-.1-.42-.13-.6.13-.18.26-.7.85-.86 1.03-.16.18-.32.2-.58.07-.26-.13-1.1-.4-2.1-1.27-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.3.4-.45.13-.15.18-.26.27-.43.09-.18.04-.32-.02-.45-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.46h-.51c-.18 0-.45.07-.68.32-.23.26-.9.88-.9 2.15s.92 2.5 1.05 2.68c.13.18 1.8 2.74 4.35 3.84.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.54-.63 1.76-1.24.22-.6.22-1.12.15-1.23-.07-.11-.24-.18-.5-.3z" />
                </svg>
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:joyasdelaselva@example.com"
                className="flex items-center gap-2 text-gray-200 hover:text-gray-400 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="#EA4335"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713L.015 6.016 0 18c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V6.016l-12 6.697zM12 11L24 4H0l12 7z" />
                </svg>
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* EXTRA */}
        <div>
          <h4 className="text-xs font-semibold text-gray-100 uppercase mb-4">Sobre mí</h4>
          <p className="text-sm text-gray-200">Pablo Playa</p>
          <p className="text-sm text-gray-200 mt-2">El Soberbio, Misiones, Argentina</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-300 py-6 text-center text-xs text-gray-200">
        © 2025 Joyas de la Selva. Desarrollado por leontelletxea.
      </div>
    </footer>
  );
};

export default Footer;
