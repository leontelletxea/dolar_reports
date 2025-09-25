import { useState, useEffect } from 'react';

const images = [
  '/images/carousel/carousel_1.jpg',
  '/images/carousel/carousel_2.jpg',
  '/images/carousel/carousel_3.jpg'
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Manejar navegación táctil para móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    // Prevenir scroll vertical durante swipe horizontal
    const distance = Math.abs((touchStart || 0) - e.targetTouches[0].clientX);
    if (distance > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      setShowSwipeHint(false); // Ocultar hint después del primer swipe
    }

    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPrevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Aumentado a 5 segundos para mejor experiencia móvil

    return () => clearInterval(interval);
  }, []);

  // Ocultar hint de swipe después de 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[calc(100vh-88px)]">
      {/* Carousel wrapper - Altura adaptativa según dispositivo */}
      <div 
        className="relative w-full h-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="block w-full h-full object-cover object-center"
                style={{
                  objectPosition: 'center center'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider indicators - Más visibles en móviles */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 sm:space-x-4 bottom-6 sm:bottom-8 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 border-2 ${
              index === currentIndex 
                ? 'bg-green-700 border-green-700 scale-110' 
                : 'bg-white/50 border-white/80 hover:bg-white hover:border-white'
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Hint de swipe para móviles */}
      {showSwipeHint && (
        <div className="absolute top-4 right-4 z-30 flex sm:hidden items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 animate-pulse">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12l-4-4h8l-4 4z" transform="rotate(-90 10 10)"/>
          </svg>
          <span className="text-white text-xs font-medium">Desliza</span>
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12l-4-4h8l-4 4z" transform="rotate(90 10 10)"/>
          </svg>
        </div>
      )}

      {/* Slider controls - Visibles en desktop */}
      <button
        type="button"
        className="absolute top-1/2 left-2 sm:left-4 z-30 hidden sm:flex items-center justify-center -translate-y-1/2 cursor-pointer group focus:outline-none"
        onClick={goToPrevSlide}
        aria-label="Imagen anterior"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 backdrop-blur-sm group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white transition-all duration-300">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-2 sm:right-4 z-30 hidden sm:flex items-center justify-center -translate-y-1/2 cursor-pointer group focus:outline-none"
        onClick={goToNextSlide}
        aria-label="Siguiente imagen"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 backdrop-blur-sm group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white transition-all duration-300">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
