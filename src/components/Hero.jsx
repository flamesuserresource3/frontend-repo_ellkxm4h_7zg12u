import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-4 py-24 md:px-6">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="pointer-events-auto inline-flex items-center rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-md">
            Identité numérique • Fintech • Design glassmorphique
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Votre carte de visite devient un site web élégant
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
            Nous prolongeons fidèlement les codes visuels de votre carte: palette, typographie, et
            style minimaliste. Une présence en ligne moderne, fluide et professionnelle.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
            >
              Demander un devis
            </a>
            <a
              href="mailto:contact@votremarque.com?subject=Projet%20de%20site%20web&body=Bonjour,%20j'aimerais%20parler%20de%20mon%20projet."
              className="rounded-lg border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur-md transition hover:bg-white"
            >
              Écrire un e-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
