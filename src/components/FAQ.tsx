import { useState } from 'react';
import { useReveal } from '../hooks';
import { faqs } from '../data';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="relative bg-ink-950 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl lg:px-10">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            FAQ
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Frequently Asked <span className="gold-text font-medium">Questions</span>
          </h2>
          <p className="mt-6 text-sm font-light text-ink-100/60 sm:text-base">
            Have a question that isn't covered here? Reach us on WhatsApp at{' '}
            <a
              href="https://wa.me/919833303800"
              className="text-gold-300 underline-offset-4 hover:underline"
            >
              +91 98333 03800
            </a>
            .
          </p>
        </div>

        <div className="mt-10 space-y-3 sm:mt-16">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} overflow-hidden rounded-2xl glass transition-colors duration-300 hover:border-gold-400/20`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-6"
              >
                <span className="font-serif text-lg font-medium text-ink-50">{faq.q}</span>
                {openIndex === i ? (
                  <Minus size={20} className="shrink-0 text-gold-300" />
                ) : (
                  <Plus size={20} className="shrink-0 text-ink-100/40" />
                )}
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm font-light leading-relaxed text-ink-100/60 sm:px-6 sm:pb-6 sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
