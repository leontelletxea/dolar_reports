import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Card = ({ cotizacion, iconConfig }: any) => {
  const { Icon, color } = iconConfig[cotizacion.casa] || {
    Icon: CurrencyDollarIcon,
    color: 'text-white/80',
  };

  const formattedDate = new Date(cotizacion.fechaActualizacion).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
  }).replace('-', ' ');

  const formattedTime = new Date(cotizacion.fechaActualizacion).toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <article
      className="relative bg-gray-900/30 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 shadow-md hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition-transform hover:-translate-y-1"
    >
      {/* VARIACION en esquina superior derecha */}
      <div
        className={`absolute top-6 right-6 text-[11px] font-medium ${
          cotizacion.change > 0
            ? 'text-emerald-400'
            : cotizacion.change < 0
            ? 'text-rose-400'
            : 'text-white/60'
        }`}
        hidden={true}
      >
        {cotizacion.change > 0
          ? `▲ ${cotizacion.change.toFixed(1)}%`
          : cotizacion.change < 0
          ? `▼ ${Math.abs(cotizacion.change).toFixed(1)}%`
          : '-0.0%'}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-white/10`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white/90">{cotizacion.nombre}</h2>
            <div className="text-[11px] text-white/50">
              {formattedDate} {formattedTime}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between text-white/60">
          <span>Venta</span>
          <span className="font-mono text-white font-semibold">
            ${cotizacion.venta.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60">Compra</span>
          <div className="text-white font-mono font-semibold">
            ${cotizacion.compra.toFixed(2)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
