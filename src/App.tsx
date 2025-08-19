import {
  CurrencyDollarIcon,
  BanknotesIcon,
  CubeIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';

export default function App() {
  const cotizaciones = [
    { moneda: 'USD', casa: 'oficial', nombre: 'Oficial', compra: 1275, venta: 1315, fechaActualizacion: '2025-08-18T15:03:00.000Z', change: 1.2 },
    { moneda: 'USD', casa: 'blue', nombre: 'Blue', compra: 1320, venta: 1340, fechaActualizacion: '2025-08-18T20:58:00.000Z', change: -0.8 },
    { moneda: 'USD', casa: 'bolsa', nombre: 'Bolsa', compra: 1295.5, venta: 1303.9, fechaActualizacion: '2025-08-18T20:58:00.000Z', change: 0.5 },
    { moneda: 'USD', casa: 'contadoconliqui', nombre: 'Contado con liquidación', compra: 1300.1, venta: 1303.7, fechaActualizacion: '2025-08-18T20:58:00.000Z', change: 0 },
    { moneda: 'USD', casa: 'mayorista', nombre: 'Mayorista', compra: 1284, venta: 1293, fechaActualizacion: '2025-08-18T15:21:00.000Z', change: 0.7 },
    { moneda: 'USD', casa: 'cripto', nombre: 'Cripto', compra: 1312.5, venta: 1316.84, fechaActualizacion: '2025-08-18T20:58:00.000Z', change: 2.1 },
    { moneda: 'USD', casa: 'tarjeta', nombre: 'Tarjeta', compra: 1657.5, venta: 1709.5, fechaActualizacion: '2025-08-18T15:03:00.000Z', change: -1.5 },
  ];

  const iconConfig: Record<string, { Icon: any; color: string }> = {
    oficial: { Icon: BanknotesIcon, color: 'text-emerald-400' },
    blue: { Icon: CurrencyDollarIcon, color: 'text-blue-400' },
    bolsa: { Icon: BuildingLibraryIcon, color: 'text-purple-400' },
    contadoconliqui: { Icon: CubeIcon, color: 'text-pink-400' },
    mayorista: { Icon: CurrencyDollarIcon, color: 'text-yellow-400' },
    cripto: { Icon: CubeIcon, color: 'text-rose-400' },
    tarjeta: { Icon: CreditCardIcon, color: 'text-orange-400' },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased flex flex-col">
      {/* NAVBAR */}
      <header className="w-full border-b border-gray-800 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <CubeIcon className="w-9 h-9 text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-500 bg-clip-text drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
            <span className="text-xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
              Dolar Reports
            </span>
          </div>

          {/* BOTON */}
          <button className="px-5 py-2 rounded-lg bg-black/90 border border-gray-700 hover:border-gray-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all text-sm font-medium">
            Suscribirme
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 max-w-7xl mx-auto px-8 py-12 flex flex-col items-center">
        {/* TITULO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
            Cotizaciones en tiempo real
          </h1>
          <p className="mt-3 text-gray-400 text-base md:text-lg">
            Sin anuncios, sin vueltas. Toda la información del dólar en un solo lugar.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
          {cotizaciones.map((c, idx) => {
            const { Icon, color } = iconConfig[c.casa] || {
              Icon: CurrencyDollarIcon,
              color: 'text-gray-400',
            };

            let badgeColor = 'bg-gray-800 text-gray-200 ring-gray-800';
            let displayValue = c.change.toFixed(2) + '%';
            if (c.change > 0) {
              badgeColor = 'bg-emerald-800 text-emerald-100 ring-emerald-800';
              displayValue = `+${displayValue}`;
            } else if (c.change < 0) {
              badgeColor = 'bg-rose-800 text-rose-100 ring-rose-800';
            }

            return (
              <article
                key={idx}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} bg-gray-800`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-gray-100">{c.nombre}</h2>
                      <div className="text-[11px] text-gray-500">
                        {new Date(c.fechaActualizacion).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Venta</span>
                    <span className="text-gray-200 font-medium">${c.venta.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Compra</span>
                    <div className="flex items-center gap-2">
                      <div className="text-white font-semibold">${c.compra.toLocaleString()}</div>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${badgeColor}`}>
                        {displayValue}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}