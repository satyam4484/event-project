import { useState } from 'react';
import { useReveal } from '../hooks';
import { supabase } from '../supabase';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Zap } from 'lucide-react';

const eventTypes = [
  'Wedding', 'Destination Wedding', 'Corporate Event', 'Luxury Event',
  'Product Launch', 'Concert / Live Production', 'Award Show',
  'Exhibition', 'Brand Activation', 'Other',
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', event_type: '', event_date: '',
    event_location: '', guest_count: '', company: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name and email address.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    // Format WhatsApp message
    const whatsappMessage = `*New Event Enquiry - Team Vicky*
----------------------------------
👤 *Name:* ${form.name.trim()}
✉️ *Email:* ${form.email.trim()}
📞 *Phone:* ${form.phone.trim() || 'N/A'}
🏢 *Company:* ${form.company.trim() || 'N/A'}
🎉 *Event Type:* ${form.event_type || 'N/A'}
📅 *Date:* ${form.event_date || 'N/A'}
📍 *Location:* ${form.event_location.trim() || 'N/A'}
👥 *Guest Count:* ${form.guest_count.trim() || 'N/A'}
💰 *Budget:* ${form.budget.trim() || 'N/A'}

✉️ *Message:*
${form.message.trim() || 'No message provided.'}`;

    const whatsappUrl = `https://wa.me/919833303800?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      // Still write to Supabase database for record keeping if configured
      await supabase.from('enquiries').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        event_type: form.event_type || null,
        event_date: form.event_date || null,
        event_location: form.event_location.trim() || null,
        guest_count: form.guest_count.trim() || null,
        company: form.company.trim() || null,
        budget: form.budget.trim() || null,
        message: form.message.trim() || null,
      });
    } catch (err) {
      console.warn('Database logging skipped or failed:', err);
    }

    // Always open WhatsApp even if Supabase has issues (so user doesn't lose the booking)
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    setForm({
      name: '', email: '', phone: '', event_type: '', event_date: '',
      event_location: '', guest_count: '', company: '', budget: '', message: '',
    });
  };

  return (
    <section id="contact" ref={ref} className="relative bg-ink-950 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Let's Create Something <span className="gold-text font-medium">Extraordinary</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light text-ink-100/60 sm:text-base">
            Share your vision with us. We respond within one working day — often within hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact info + map */}
          <div className={`reveal ${visible ? 'is-visible' : ''} space-y-6`}>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <a href="tel:+919833303800" className="group flex min-w-0 items-center gap-4 rounded-2xl glass p-4 sm:p-5 lux-shadow-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-100/40">Phone</p>
                  <p className="font-medium text-ink-50">+91 98333 03800</p>
                </div>
              </a>

              <a
                href="https://wa.me/919833303800?text=Hi%20Team%20Vicky%2C%20I%27d%20like%20to%20enquire%20about%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-4 rounded-2xl glass p-4 sm:p-5 lux-shadow-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-100/40">WhatsApp</p>
                  <p className="font-medium text-ink-50">Chat with us</p>
                </div>
              </a>

              <a href="mailto:teamvicky488@gmail.com" className="group flex min-w-0 items-center gap-4 rounded-2xl glass p-4 sm:p-5 lux-shadow-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-ink-100/40">Email</p>
                  <p className="truncate font-medium text-ink-50">teamvicky488@gmail.com</p>
                </div>
              </a>

              <div className="flex min-w-0 items-center gap-4 rounded-2xl glass p-4 sm:p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 text-gold-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-100/40">Based in</p>
                  <p className="font-medium text-ink-50">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="overflow-hidden rounded-2xl glass p-2">
              <iframe
                title="Team Vicky Location — Mumbai, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609897726!2d72.71637694999999!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edaf%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="240"
                style={{ border: 0, borderRadius: '1rem' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick response */}
            <a
              href="https://wa.me/919833303800?text=Hi%20Team%20Vicky%2C%20I%27d%20like%20a%20quick%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gold-400/10 border border-gold-400/30 px-6 py-3.5 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950"
            >
              <Zap size={16} />
              Quick Response — Chat Now
            </a>
          </div>

          {/* Form */}
          <div className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="w-full rounded-3xl glass p-6 sm:p-8 md:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={56} className="text-gold-400" />
                  <h3 className="mt-6 font-serif text-2xl font-medium text-ink-50">Enquiry Received</h3>
                  <p className="mt-3 max-w-xs text-sm font-light text-ink-100/60">
                    Thank you for reaching out. Our team will respond within one working day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full border border-gold-400/40 px-6 py-2.5 text-sm font-medium text-gold-200 transition-colors hover:bg-gold-400 hover:text-ink-950"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} />
                    <Field label="Company" name="company" value={form.company} onChange={handleChange} />
                    <SelectField label="Event Type" name="event_type" value={form.event_type} onChange={handleChange} options={eventTypes} />
                    <Field label="Event Date" name="event_date" type="date" value={form.event_date} onChange={handleChange} />
                    <Field label="Location" name="event_location" value={form.event_location} onChange={handleChange} placeholder="City / Destination" />
                    <Field label="Guest Count" name="guest_count" value={form.guest_count} onChange={handleChange} placeholder="e.g. 500" />
                  </div>

                  <div className="mt-5">
                    <Field label="Budget Range" name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. ₹10L - ₹25L" />
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-100/50">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-ink-50 placeholder-ink-100/30 transition-colors focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="mt-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      <AlertCircle size={16} className="shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <>Send Enquiry <Send size={15} /></>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, value, onChange, type = 'text', required, placeholder,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-100/50">
        {label} {required && <span className="text-gold-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-ink-50 placeholder-ink-100/30 transition-colors focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
      />
    </div>
  );
}

function SelectField({
  label, name, value, onChange, options,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-100/50">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-ink-50 transition-colors focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
