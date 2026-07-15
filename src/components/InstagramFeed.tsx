import { useReveal } from '../hooks';
import { instagramPosts } from '../data';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export default function InstagramFeed() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative bg-ink-975 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Instagram Feed
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-50 md:text-5xl lg:text-6xl">
            Follow Our <span className="gold-text font-medium">Journey</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal ${visible ? 'is-visible' : ''} group relative aspect-square overflow-hidden rounded-xl`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <img
                src={post.image}
                alt="Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink-975/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram size={24} className="text-gold-300" />
                <div className="flex items-center gap-3 text-sm text-ink-100/80">
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="fill-gold-400 text-gold-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} mt-10 text-center`}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-8 py-3.5 text-sm font-medium text-gold-200 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950"
          >
            <Instagram size={16} />
            Follow Team Vicky
          </a>
        </div>
      </div>
    </section>
  );
}
