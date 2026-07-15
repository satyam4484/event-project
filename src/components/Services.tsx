import { useReveal } from '../hooks';
import { services } from '../data';
import * as Icon from 'lucide-react';

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" ref={ref} className="relative bg-ink-975 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Premium Services
          </p>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl font-light leading-tight text-ink-50 md:text-5xl lg:text-6xl">
            Comprehensive Event Solutions for <span className="gold-text font-medium">Every Occasion</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => {
            const IconComp = (Icon as any)[service.icon] ?? Icon.Sparkles;
            return (
              <div
                key={service.title}
                className={`reveal ${visible ? 'is-visible' : ''} group rounded-2xl glass p-6 lux-shadow-hover`}
                style={{ transitionDelay: `${(i % 8) * 0.06}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/20 bg-ink-900/50 transition-all duration-300 group-hover:border-gold-400/40 group-hover:bg-gold-400/10">
                  <IconComp size={22} className="text-gold-300 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium text-ink-50">{service.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-ink-100/55">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
