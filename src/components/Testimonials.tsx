import { useState, useEffect, useCallback } from 'react';
import { useReveal } from '../hooks';
import { testimonials } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section ref={ref} className="relative bg-ink-975 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Client Testimonials
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted by <span className="gold-text font-medium">Discerning Clients</span>
          </h2>
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} relative mt-10 sm:mt-16`} style={{ transitionDelay: '0.2s' }}>
          <Quote size={48} className="mx-auto text-gold-400/20" />

          <div className="relative mt-8 min-h-[320px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === active ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
                }`}
              >
                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="mx-auto mt-6 max-w-3xl text-center font-serif text-2xl font-light italic leading-relaxed text-ink-100/90 md:text-3xl">
                  "{t.text}"
                </p>

                <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/40 bg-ink-900/50 font-serif text-lg font-medium text-gold-200">
                    {t.initials}
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-ink-50">{t.name}</p>
                    <p className="mt-0.5 text-sm text-ink-100/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-100/60 transition-all hover:border-gold-400/50 hover:text-gold-300"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-gold-400' : 'w-1.5 bg-ink-700'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-100/60 transition-all hover:border-gold-400/50 hover:text-gold-300"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
