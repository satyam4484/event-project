import { useReveal } from '../hooks';
import { processSteps } from '../data';

export default function Process() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative bg-ink-975 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Our Event Process
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-50 sm:text-4xl md:text-5xl lg:text-6xl">
            From Vision to <span className="gold-text font-medium">Celebration</span>
          </h2>
        </div>

        <div className="relative mt-10 sm:mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line md:left-1/2 md:-translate-x-1/2" />

          {processSteps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal ${visible ? 'is-visible' : ''} relative mb-12 flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Dot */}
              <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold-400/40 bg-ink-975 font-serif text-sm font-medium text-gold-300 md:left-1/2">
                {step.num}
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="rounded-2xl glass p-6 lux-shadow-hover">
                  <h3 className="font-serif text-2xl font-medium text-ink-50">{step.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-ink-100/60">{step.desc}</p>
                </div>
              </div>

              {/* Spacer for other half */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
