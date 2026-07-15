import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-wide gold-text">
            TEAM VICKY
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-100/80 transition-colors duration-300 hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919833303800"
            className="flex items-center gap-2 text-sm font-medium text-ink-100/80 transition-colors hover:text-gold-300"
          >
            <Phone size={15} />
            +91 98333 03800
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gold-400/60 px-5 py-2 text-sm font-medium text-gold-200 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950"
          >
            Book Your Event
          </a>
        </div>

        <button
          className="text-ink-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mt-3 rounded-2xl glass-dark p-6 shadow-xl">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-ink-100/90 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="tel:+919833303800"
              className="mt-5 flex items-center gap-2 text-sm text-ink-100/70"
            >
              <Phone size={15} /> +91 98333 03800
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
