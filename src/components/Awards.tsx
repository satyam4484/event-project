import { useReveal } from '../hooks';
import { awards } from '../data';
import * as Icon from 'lucide-react';

export default function Awards() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative bg-ink-975 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Awards & Achievements
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-50 md:text-5xl lg:text-6xl">
            Milestones of <span className="gold-text font-medium">Excellence</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {awards.map((award, i) => {
            const IconComp = (Icon as any)[award.icon] ?? Icon.Award;
            return (
              <div
                key={award.label}
                className={`reveal ${visible ? 'is-visible' : ''} group flex flex-col items-center rounded-2xl glass p-6 text-center lux-shadow-hover`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/20 bg-ink-900/50 transition-all duration-300 group-hover:border-gold-400/40">
                  <IconComp size={24} className="text-gold-300" />
                </div>
                <span className="mt-4 font-serif text-2xl font-medium gold-text">{award.value}</span>
                <span className="mt-1 text-xs font-medium text-ink-100/60">{award.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
