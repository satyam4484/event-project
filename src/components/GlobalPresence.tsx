import { useState } from 'react';
import { useReveal } from '../hooks';
import { countries } from '../data';


export default function GlobalPresence() {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative bg-ink-975 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Global Presence
          </p>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl font-light leading-tight text-ink-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Delivering Exceptional Events Across <span className="gold-text font-medium">Multiple Countries</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-light text-ink-100/60 sm:text-base">
            From intimate celebrations to large-scale luxury productions, Team Vicky has
            successfully delivered weddings, corporate events, logistics, hospitality, production
            management, and show running across India and several international destinations.
          </p>
        </div>

        {/* World Map */}
        <div className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto mt-10 sm:mt-16 max-w-4xl`}>
          <div className="relative aspect-[16/9] sm:aspect-[1009/666] overflow-hidden rounded-2xl glass p-2 sm:p-4">
            {/* Original Map Background */}
            <img
              src="/images/world-map.svg"
              alt="World Map"
              className="w-full h-full object-contain opacity-25 filter invert sepia saturate-200 hue-rotate-[15deg] brightness-75 contrast-125"
            />

            {/* Country dots */}
            {countries.map((country) => (
              <div
                key={country.name}
                className="map-dot absolute cursor-pointer"
                style={{
                  left: `${country.x}%`,
                  top: `${country.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setHovered(country.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-500 border border-ink-950"></span>
                </div>
                {hovered === country.name && (
                  <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg glass-dark px-3 py-1.5 text-xs font-medium text-gold-200 shadow-xl z-10">
                    {country.flag} {country.name}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Country list */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {countries.map((country) => (
              <span
                key={country.name}
                className="flex items-center gap-1.5 sm:gap-2 rounded-full glass px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-ink-100/70 transition-all duration-300 hover:border-gold-400/30 hover:text-gold-200"
              >
                <span className="text-sm sm:text-base">{country.flag}</span>
                {country.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
