import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 1));
    }, 25);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2014773/pexels-photo-2014773.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury wedding and corporate event"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-975/80 via-ink-975/60 to-ink-975" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-975/70 via-transparent to-ink-975/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-2 py-16 text-center sm:px-6">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-gold-300 animate-fade-in sm:mb-6">
          Luxury International Event Management
        </p>

        <h1 className="font-serif text-4xl font-light leading-[1.1] text-ink-50 sm:text-5xl md:text-7xl lg:text-8xl animate-fade-up">
          Creating Extraordinary
          <br />
          <span className="gold-text font-medium italic">Experiences Worldwide</span>
        </h1>

        <p className="mt-5 text-sm font-medium tracking-wide text-gold-200/90 sm:text-base md:text-lg animate-fade-up" style={{ animationDelay: '0.15s' }}>
          600+ Weddings &nbsp;•&nbsp; 200+ Corporate Events &nbsp;•&nbsp; Global Event Professionals
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-sm font-light leading-relaxed text-ink-100/70 sm:text-base md:text-lg animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Team Vicky is a trusted event management company delivering exceptional weddings,
          destination weddings, luxury celebrations, corporate events, logistics, production,
          hospitality, show running, backstage operations, and on-ground execution across India
          and international destinations. Every event is executed with precision, creativity,
          professionalism, and attention to detail.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-500/30"
          >
            Book Your Event
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-ink-100/30 px-8 py-3.5 text-sm font-medium text-ink-50 transition-all duration-300 hover:border-gold-300 hover:text-gold-200"
          >
            Explore Our Journey
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink-100/30 px-8 py-3.5 text-sm font-medium text-ink-50 transition-all duration-300 hover:border-gold-300 hover:text-gold-200"
          >
            <Phone size={15} />
            Contact Us
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#founder"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-300/80 underline-offset-4 transition-colors hover:text-gold-200 hover:underline"
          >
            <MessageCircle size={15} />
            Meet Our Founder
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:bottom-8">
        <span className="text-xs uppercase tracking-[0.3em] text-ink-100/40">Scroll</span>
        <ChevronDown size={20} className="animate-bounce text-gold-300/60" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink-100/10">
        <div
          className="h-full bg-gold-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
