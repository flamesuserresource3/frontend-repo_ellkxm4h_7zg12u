import { motion } from 'framer-motion';
import { Palette, Type, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Palette cohérente',
    desc: "Couleurs reprises de votre carte pour une continuité visuelle parfaite.",
    icon: Palette,
  },
  {
    title: 'Typographie soignée',
    desc: "Choix de polices similaires pour préserver le ton et la personnalité.",
    icon: Type,
  },
  {
    title: "Identité fidèle",
    desc: "Composition, espacements et éléments graphiques alignés à votre design.",
    icon: Layers,
  },
  {
    title: 'Interactions subtiles',
    desc: 'Animations, survols et transitions qui valorisent votre marque.',
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Un site comme une extension de votre carte
          </h2>
          <p className="mt-4 text-slate-700">
            Moderne, épuré et mobile-first. Nous respectons votre charte tout en ajoutant
            une expérience fluide et engageante.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 opacity-60 blur-2xl" />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md shadow-slate-900/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
