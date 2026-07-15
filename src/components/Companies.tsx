import { useReveal } from '../hooks';
import { companies } from '../data';

export default function Companies() {
  const { ref, visible } = useReveal();

  // Duplicate for seamless marquee
  const marquee = [...companies, ...companies];

  return (
    <section ref={ref} className="relative bg-ink-950 px-4 py-10 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Industry Collaborations
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Companies We've <span className="gold-text font-medium">Worked With</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-light text-ink-100/60 sm:text-base">
            Our team has proudly collaborated with some of the most respected event and wedding
            management companies across India and internationally.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className={`reveal ${visible ? 'is-visible' : ''} relative mt-6 sm:mt-16 overflow-hidden`} style={{ transitionDelay: '0.2s' }}>
        <div className="marquee-track gap-4">
          {marquee.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex h-28 min-w-[280px] items-center justify-center rounded-2xl glass px-8 transition-all duration-300 hover:border-gold-400/30 hover:bg-ink-850/50"
            >
              <span className="font-serif text-xl font-medium text-ink-100/70 transition-colors duration-300 hover:text-gold-200">
                {company}
              </span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </section>
  );
}
