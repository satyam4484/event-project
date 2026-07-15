import { useReveal, useCountUp } from '../hooks';
import { counters } from '../data';
import * as Icon from 'lucide-react';

export default function Counters() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative bg-ink-950 py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-975 via-ink-950 to-ink-975" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Our Experience
          </p>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl font-light leading-tight text-ink-50 md:text-5xl lg:text-6xl">
            A Track Record of <span className="gold-text font-medium">Excellence</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {counters.map((counter, i) => {
            const IconComp = (Icon as any)[counter.icon] ?? Icon.Star;
            return (
              <div
                key={counter.label}
                className={`reveal ${visible ? 'is-visible' : ''} group rounded-2xl glass p-6 text-center lux-shadow-hover`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/20 bg-ink-900/50 transition-colors duration-300 group-hover:border-gold-400/40">
                  <IconComp size={24} className="text-gold-300" />
                </div>
                <CounterValue target={counter.value} suffix={counter.suffix} start={visible} />
                <p className="mt-2 text-sm font-medium text-ink-100/60">{counter.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CounterValue({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const count = useCountUp(target, 2000, start);
  return (
    <div className="font-serif text-4xl font-light gold-text md:text-5xl">
      {count}
      <span className="text-2xl">{suffix}</span>
    </div>
  );
}
