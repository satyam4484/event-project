import { Phone, MessageCircle, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Founder', href: '#founder' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Wedding Planning', 'Destination Weddings', 'Corporate Events',
  'Luxury Events', 'Event Logistics', 'Production Management',
  'Show Running', 'Hospitality Management',
];

const countryList = [
  'India', 'UAE', 'Singapore', 'Bahrain', 'Thailand',
  'Vietnam', 'Oman', 'Sri Lanka', 'Belgium', 'Turkey',
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-975 border-t border-ink-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-semibold gold-text">TEAM VICKY</h3>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-ink-100/50">
              Team Vicky is committed to delivering world-class wedding and corporate event
              experiences through professionalism, creativity, precision, and flawless execution.
              From intimate celebrations to grand international productions, we transform every
              vision into an unforgettable reality.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/_teamvicky?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-100/60 transition-colors hover:border-gold-400/50 hover:text-gold-300" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold-300/60">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-light text-ink-100/60 transition-colors hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold-300/60">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm font-light text-ink-100/60 transition-colors hover:text-gold-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries + Contact */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold-300/60">Countries</p>
            <div className="flex flex-wrap gap-2">
              {countryList.map((c) => (
                <span key={c} className="rounded-full border border-ink-700 px-3 py-1 text-xs font-light text-ink-100/50">
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <a href="tel:+919833303800" className="flex items-center gap-2 text-sm text-ink-100/60 transition-colors hover:text-gold-300">
                <Phone size={14} className="text-gold-400/50" /> +91 98333 03800
              </a>
              <a href="https://wa.me/919833303800" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink-100/60 transition-colors hover:text-gold-300">
                <MessageCircle size={14} className="text-gold-400/50" /> WhatsApp
              </a>
              <a href="mailto:teamvicky488@gmail.com" className="flex items-center gap-2 text-sm text-ink-100/60 transition-colors hover:text-gold-300">
                <Mail size={14} className="text-gold-400/50" /> teamvicky488@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-ink-100/60">
                <MapPin size={14} className="text-gold-400/50" /> Mumbai, India
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 section-divider" />

        {/* Legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs font-light text-ink-100/30">
            © {new Date().getFullYear()} Team Vicky. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-light text-ink-100/30 transition-colors hover:text-gold-300">Privacy Policy</a>
            <a href="#" className="text-xs font-light text-ink-100/30 transition-colors hover:text-gold-300">Terms & Conditions</a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-all hover:bg-gold-400 hover:text-ink-950"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
