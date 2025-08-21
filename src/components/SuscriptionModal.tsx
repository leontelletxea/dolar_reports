import { useState, useEffect } from 'react';
import WhiteButton from './WhiteButton';

interface SuscriptionModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuscriptionModal({ open, onClose }: SuscriptionModalProps) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Estados para animación
  const [show, setShow] = useState(open);
  const [animate, setAnimate] = useState('');

  useEffect(() => {
    if (open) {
      setShow(true);
      setAnimate('animate-modal-in');
    } else if (show) {
      setAnimate('animate-modal-out');
      const timeout = setTimeout(() => setShow(false), 550); 
      return () => clearTimeout(timeout);
    }
  }, [open]);

  // Limpia los campos cuando el modal termina de ocultarse
  useEffect(() => {
    if (!show) {
      setNombre('');
      setApellido('');
      setEmail('');
      setEnviado(false);
    }
  }, [show]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className={`relative bg-black border border-zinc-800 rounded-xl shadow-2xl p-8 w-full max-w-md transition-all duration-200 ${animate}`}>
        <button
          className="absolute top-4 right-4 text-zinc-500 hover:text-white text-xl p-1 rounded transition-colors"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <h2 className="text-2xl font-semibold mb-2 text-white text-center tracking-tight">Suscribite</h2>
        <p className="text-zinc-400 mb-6 text-center text-base">
          Completá el formulario y empeza a recibir las cotizaciones diarias del dólar a tu email.
        </p>
        {enviado ? (
          <div className="text-green-400 text-center font-medium py-8">
            ¡Gracias por suscribirte!
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-2 focus:outline-none focus:border-white transition-colors"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Apellido"
              className="bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-2 focus:outline-none focus:border-white transition-colors"
              value={apellido}
              onChange={e => setApellido(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-2 focus:outline-none focus:border-white transition-colors"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <WhiteButton
                type="submit"
                className="mt-4 h-10"
            >
              Suscribirme
            </WhiteButton>
          </form>
        )}
      </div>
    </div>
  );
}