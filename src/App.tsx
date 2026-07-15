import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Counters from './components/Counters';
import GlobalPresence from './components/GlobalPresence';
import Companies from './components/Companies';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import FAQ from './components/FAQ';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-975 text-ink-50">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Founder />
        <Counters />
        <GlobalPresence />
        <Companies />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Testimonials />
        <Awards />
        <FAQ />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
