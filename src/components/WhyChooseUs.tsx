import { useReveal } from '../hooks';
import { whyChooseUs } from '../data';
import * as Icon from 'lucide-react';

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();

  return (
    <section id="why" ref={ref} className="relative bg-ink-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Why Choose Us
          </p>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl font-light leading-tight text-ink-50 md:text-5xl lg:text-6xl">
            Why Choose <span className="gold-text font-medium">Team Vicky</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyChooseUs.map((item, i) => {
            const IconComp = (Icon as any)[item.icon] ?? Icon.CheckCircle2;
            return (
              <div
                key={item.title}
                className={`reveal ${visible ? 'is-visible' : ''} group rounded-2xl glass p-6 lux-shadow-hover`}
                style={{ transitionDelay: `${(i % 5) * 0.08}s` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-400/20 bg-ink-900/50 transition-all duration-300 group-hover:border-gold-400/40">
                  <IconComp size={18} className="text-gold-300" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-ink-50">{item.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-ink-100/55">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
