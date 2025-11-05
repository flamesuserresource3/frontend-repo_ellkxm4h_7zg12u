import { useMemo, useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [openChat, setOpenChat] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', message: '' });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('Prise de contact — Projet de site web');
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite échanger au sujet de mon projet.\n\nNom: ${form.nom}\nEmail: ${form.email}\nMessage: ${form.message}\n\nMerci !`
    );
    return `mailto:contact@votremarque.com?subject=${subject}&body=${body}`;
  }, [form]);

  const phone = '+33 6 12 34 56 78';

  return (
    <section id="contact" className="relative scroll-mt-16 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Entrons en contact
          </h2>
          <p className="mt-4 text-slate-700">
            Choisissez le canal le plus pratique: formulaire, e-mail interactif, téléphone ou chat
            en direct. Réponse rapide et professionnelle.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800 backdrop-blur-md transition hover:bg-white"
            >
              <Mail className="h-4 w-4" /> contact@votremarque.com
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800 backdrop-blur-md transition hover:bg-white"
            >
              <Phone className="h-4 w-4" /> {phone}
            </a>
            <button
              onClick={() => setOpenChat((v) => !v)}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
            >
              <MessageCircle className="h-4 w-4" />
              {openChat ? 'Fermer le chat' : 'Ouvrir le chat'}
            </button>
          </div>
        </div>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 opacity-60 blur-2xl" />
          <div className="relative grid gap-4">
            <div>
              <label className="text-sm font-medium text-slate-800">Nom</label>
              <input
                type="text"
                value={form.nom}
                onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">E-mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                placeholder="Parlez-nous de votre projet"
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Envoyer le message
              </button>
              <span className="text-xs text-slate-500">
                Pas de compte requis • Réponse sous 24h
              </span>
            </div>
          </div>
        </motion.form>
      </div>

      {/* Chat flottant basique (démonstration) */}
      {openChat && <ChatWidget onClose={() => setOpenChat(false)} />}
    </section>
  );
}

function ChatWidget({ onClose }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Bonjour 👋 Comment puis-je vous aider ?' },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'you', text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    // Réponse automatique de démonstration
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: 'bot', text: "Merci ! Un membre de l'équipe vous répondra très vite." },
      ]);
    }, 700);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-6 right-6 z-40 w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center justify-between border-b border-slate-200 bg-white/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
            <MessageCircle className="h-4 w-4" />
          </span>
          <p className="text-sm font-semibold text-slate-900">Chat en direct</p>
        </div>
        <button onClick={onClose} className="text-xs font-medium text-slate-600 hover:text-slate-900">
          Fermer
        </button>
      </div>
      <div className="max-h-64 space-y-2 overflow-y-auto px-4 py-3">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={
              m.from === 'you'
                ? 'ml-auto max-w-[80%] rounded-xl bg-slate-900 px-3 py-2 text-xs text-white'
                : 'mr-auto max-w-[85%] rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-900'
            }
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-slate-200 bg-white/70 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Écrire un message..."
          className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none focus:border-slate-400"
        />
        <button
          onClick={send}
          className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
        >
          Envoyer
        </button>
      </div>
    </motion.div>
  );
}
