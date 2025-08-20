import './App.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import {
  CurrencyDollarIcon,
  BanknotesIcon,
  CubeIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function App() {
  const [cotizaciones, setCotizaciones] = useState<any[]>([]);

  const iconConfig = {
    oficial: { Icon: BanknotesIcon, color: 'text-white/80' },
    blue: { Icon: CurrencyDollarIcon, color: 'text-white/80' },
    bolsa: { Icon: BuildingLibraryIcon, color: 'text-white/80' },
    contadoconliqui: { Icon: CubeIcon, color: 'text-white/80' },
    mayorista: { Icon: CurrencyDollarIcon, color: 'text-white/80' },
    cripto: { Icon: CubeIcon, color: 'text-white/80' },
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
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-12 flex flex-col items-center">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Reportes diarios del dólar
          </h1>
          <p className="mt-3 text-gray-400 text-base md:text-lg">
            Sin anuncios, sin vueltas, tus reportes siempre al día.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
          {cotizaciones.map((c, idx) => (
            <div
              key={idx}
              className="animate-bounce-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Card cotizacion={c} iconConfig={iconConfig} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}