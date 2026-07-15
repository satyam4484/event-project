import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex h-12 w-12 items-center justify-center rounded-full glass-dark border border-gold-400/30 text-gold-300 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950 animate-fade-up"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <a
        href="tel:+919833303800"
        className="flex h-12 w-12 items-center justify-center rounded-full glass-dark border border-gold-400/30 text-gold-300 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950 animate-fade-up"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>
      <a
        href="https://wa.me/919833303800?text=Hi%20Team%20Vicky%2C%20I%27d%20like%20to%20enquire%20about%20an%20event."
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 animate-fade-up"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
