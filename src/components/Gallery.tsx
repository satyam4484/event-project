import { useState, useMemo, useCallback, useEffect } from 'react';
import { useReveal } from '../hooks';
import { gallery, galleryCategories } from '../data';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const { ref, visible } = useReveal();
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((p) => (p === null ? null : (p + 1) % filtered.length));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" ref={ref} className="relative bg-ink-950 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Featured Event Gallery
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Moments of <span className="gold-text font-medium">Excellence</span>
          </h2>
        </div>

        {/* Category filter */}
        <div className={`reveal ${visible ? 'is-visible' : ''} mt-8 flex flex-wrap justify-center gap-2 sm:mt-10`}>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gold-400 text-ink-950'
                  : 'glass text-ink-100/60 hover:text-gold-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry gallery */}
        <div className="mt-8 masonry sm:mt-12">
          {filtered.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={`reveal ${visible ? 'is-visible' : ''} masonry-item group relative cursor-pointer overflow-hidden rounded-2xl`}
              style={{ transitionDelay: `${(i % 6) * 0.06}s` }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-975 via-ink-975/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-gold-300/80">{item.category}</p>
                <h3 className="mt-1 font-serif text-xl font-medium text-ink-50">{item.title}</h3>
              </div>
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full glass-dark opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ZoomIn size={16} className="text-gold-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center lightbox-overlay animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full glass-dark text-ink-50 transition-colors hover:text-gold-300"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 md:left-8 flex h-12 w-12 items-center justify-center rounded-full glass-dark text-ink-50 transition-colors hover:text-gold-300"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 md:right-8 flex h-12 w-12 items-center justify-center rounded-full glass-dark text-ink-50 transition-colors hover:text-gold-300"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          <div className="relative max-h-[85vh] max-w-3xl px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-gold-300/80">
                {filtered[lightbox].category}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-medium text-ink-50">
                {filtered[lightbox].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
