import { useReveal } from '../hooks';
import { team } from '../data';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Team() {
  const { ref, visible } = useReveal();

  return (
    <section id="team" ref={ref} className="relative bg-ink-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Meet Our Team
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-50 md:text-5xl lg:text-6xl">
            The People Behind <span className="gold-text font-medium">Every Event</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light text-ink-100/60">
            A senior leadership team backed by a trained crew network of 60+ professionals across
            India and the GCC.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`reveal ${visible ? 'is-visible' : ''} group overflow-hidden rounded-2xl glass lux-shadow-hover`}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-975 via-ink-975/20 to-transparent" />
                {/* Social links */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full glass-dark text-ink-100/70 transition-colors hover:text-gold-300" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full glass-dark text-ink-100/70 transition-colors hover:text-gold-300" aria-label="Twitter">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full glass-dark text-ink-100/70 transition-colors hover:text-gold-300" aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medium text-ink-50">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold-300/80">{member.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-ink-700 px-3 py-1 text-xs font-medium text-ink-100/60">
                    {member.experience}
                  </span>
                  <span className="rounded-full border border-ink-700 px-3 py-1 text-xs font-medium text-ink-100/60">
                    {member.responsibilities}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
