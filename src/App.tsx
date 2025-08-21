import './App.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import SuscriptionModal from './components/SuscriptionModal';
import {
  CurrencyDollarIcon,
  BanknotesIcon,
  CubeIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  CircleStackIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function App() {
  const [cotizaciones, setCotizaciones] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const iconConfig = {
    oficial: { Icon: BanknotesIcon, color: 'text-white/80' },
    blue: { Icon: CurrencyDollarIcon, color: 'text-white/80' },
    bolsa: { Icon: ArrowTrendingUpIcon, color: 'text-white/80' },
    contadoconliqui: { Icon: CubeIcon, color: 'text-white/80' },
    mayorista: { Icon: BuildingLibraryIcon, color: 'text-white/80' },
    cripto: { Icon: CircleStackIcon, color: 'text-white/80' },
    tarjeta: { Icon: CreditCardIcon, color: 'text-white/80' },
  };

  useEffect(() => {
    fetch('https://dolarapi.com/v1/dolares')
      .then((response) => response.json())
      .then((data) => {
        setCotizaciones(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased flex flex-col">
    <Navbar 
      onSuscribeClick={() => setModalOpen(true)} 
    />

    <main className="flex-1 max-w-7xl mx-auto px-8 py-12 flex flex-col items-center">
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-white animate-fade-down"
          style={{ animationDelay: '0.1s' }}
        >
          Reportes diarios del dólar
        </h1>
        <p
          className="mt-3 text-gray-400 text-base md:text-lg animate-fade-down"
          style={{ animationDelay: '0.25s' }}
        >
          Sin anuncios, sin vueltas, tus reportes siempre al día.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-center">
        {cotizaciones.map((c, idx) => (
          <div
            key={idx}
            className="h-45 animate-domino"
            style={{ animationDelay: `${0.3 + idx * 0.12}s` }}
          >
            <Card cotizacion={c} iconConfig={iconConfig} />
          </div>
        ))}
      </div>
    </main>

      <Footer />

      <SuscriptionModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}