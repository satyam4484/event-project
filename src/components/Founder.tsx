import { useReveal } from '../hooks';
import { Quote } from 'lucide-react';

const badges = [
  { value: '600+', label: 'Weddings' },
  { value: '200+', label: 'Corporate Events' },
  { value: '10+', label: 'Countries' },
  { value: '11+', label: 'Industry Collaborations' },
  { value: '6+', label: 'Years of Experience' },
  { value: '', label: 'Global Event Professional' },
];

export default function Founder() {
  const { ref, visible } = useReveal();

  return (
    <section id="founder" ref={ref} className="relative bg-ink-975 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl lg:px-10">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Portrait */}
          <div className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-md lg:mx-0`}>
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold-300/30 via-gold-500/15 to-gold-700/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-gold-400/40 lux-shadow animate-pulse-glow" style={{ boxShadow: '0 0 0 1px rgba(212,167,60,0.15), 0 0 40px 0 rgba(212,167,60,0.18), 0 20px 60px -10px rgba(0,0,0,0.7)' }}>
              <img
                src="/images/founder/image.png"
                alt="Vikram Majithia — Founder & Managing Director, Team Vicky"
                className="aspect-[4/5] w-full object-cover object-top"
                style={{ filter: 'contrast(1.05) brightness(1.03) saturate(1.08)' }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-975/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full glass-dark px-6 py-2.5 shadow-xl">
              <p className="text-sm font-medium text-gold-200">Vikram Majithia</p>
              <p className="text-xs text-ink-100/50">Founder & Managing Director</p>
            </div>
          </div>

          {/* Content */}
          <div className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
              Meet Our Founder
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-50 md:text-5xl lg:text-6xl">
              Meet the Vision Behind <span className="gold-text font-medium">Team Vicky</span>
            </h2>

            <p className="mt-6 text-base font-light leading-relaxed text-ink-100/70">
              Vikram Majithia is the Founder and Managing Director of Team Vicky, leading a highly
              experienced event management team known for delivering exceptional weddings, corporate
              events, destination celebrations, luxury productions, logistics, hospitality, backstage
              operations, and show running.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-ink-100/70">
              Under his leadership, Team Vicky has successfully contributed to more than 600 weddings
              and 200 corporate events across India and multiple international destinations while
              collaborating with some of the most respected event companies in the industry. His
              vision is built on professionalism, creativity, teamwork, flawless execution, and
              delivering unforgettable experiences for every client.
            </p>

            {/* Quote */}
            <div className="mt-8 rounded-2xl glass p-6 lux-shadow">
              <Quote size={28} className="text-gold-400/40" />
              <p className="mt-3 font-serif text-xl font-light italic leading-relaxed text-ink-100/90 md:text-2xl">
                "Every successful event begins with a vision, grows through teamwork, and becomes
                unforgettable through flawless execution."
              </p>
              <p className="mt-3 text-sm font-medium text-gold-300">— Vikram Majithia</p>
            </div>

            {/* Badges */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center rounded-xl glass px-3 py-4 text-center transition-all duration-300 hover:border-gold-400/30 hover:bg-ink-850/50"
                >
                  {badge.value && (
                    <span className="font-serif text-2xl font-medium gold-text">{badge.value}</span>
                  )}
                  <span className="mt-1 text-xs font-medium text-ink-100/60">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
