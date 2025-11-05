import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="scroll-smooth antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-slate-600 md:flex-row md:px-6">
          <p>
            © {new Date().getFullYear()} Votre Marque — Identité digitale soignée.
          </p>
          <p className="opacity-80">
            Palette, typographie et style alignés à votre carte de visite.
          </p>
        </div>
      </footer>
    </div>
  );
}
