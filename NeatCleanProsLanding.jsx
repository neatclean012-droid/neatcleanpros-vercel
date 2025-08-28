import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Sparkles, Home, Building2, MoveRight, CheckCircle2, ShieldCheck, Star, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function NeatCleanProsLanding() {
  const features = [
    { icon: <Sparkles className="w-5 h-5" />, title: "Residential & Commercial", desc: "Homes, apartments, offices and retail." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Insured & Reliable", desc: "Confiables, asegurados y con experiencia desde 2019." },
    { icon: <Clock className="w-5 h-5" />, title: "Flexible Scheduling", desc: "One-time, weekly, bi-weekly o mensual." },
  ];

  const faqs = [
    {
      q: "¿Incluyen lavandería?",
      a: "Incluimos únicamente ropa de cama y toallas en servicios profundos. Lavado de ropa personal tiene costo adicional bajo solicitud.",
    },
    {
      q: "¿Qué áreas cubren?",
      a: "Jesup y hasta 40 millas alrededor (Waycross, Brunswick, Hinesville, Pooler, Richmond Hill).",
    },
    {
      q: "¿Llevan sus propios suministros?",
      a: "Sí, llevamos equipo y productos premium. Si prefieres productos específicos, podemos utilizarlos.",
    },
    {
      q: "¿Cómo reservo?",
      a: "Haz clic en ‘Book now’, envía un WhatsApp o llama al número en la parte superior.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Top Bar */}
      <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/PROS.png" alt="NeatClean Pros Logo" className="w-10 h-10" />
            <div className="leading-tight">
              <p className="font-semibold">NeatClean Pros LLC</p>
              <p className="text-xs text-slate-500">Jesup, GA • Est. 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+19122026006" className="hidden sm:flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl bg-emerald-600 text-white shadow hover:bg-emerald-700 transition">
              <Phone className="w-4 h-4" /> Call now
            </a>
            <a href="https://wa.me/19122026006" className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl bg-green-600 text-white shadow hover:bg-green-700 transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="#book" className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl bg-black text-white shadow hover:bg-slate-900 transition">
              <Calendar className="w-4 h-4" /> Book now
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-amber-100 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800">
              "We Clean, You Relax" <br/> <span className="text-emerald-600">Premium Cleaning Services</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Dos dueños comprometidos, con experiencia desde 2019 y constituidos como LLC el 25 de marzo de 2025. Nuestro compromiso es calidad, confianza y resultados impecables.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700">
                <Calendar className="w-4 h-4" /> Reserva tu limpieza <MoveRight className="w-4 h-4" />
              </a>
              <a href="tel:+19122026006" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white font-semibold hover:border-slate-400">
                <Phone className="w-4 h-4" /> Llamar ahora
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border bg-white">
              <img
                alt="Founders NeatClean Pros"
                src="/foto_neatclean.JPG"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-emerald-700">Nuestra Misión</h2>
            <p className="mt-2 text-slate-600">Ofrecer servicios de limpieza premium que generen confianza, bienestar y tranquilidad en cada hogar y negocio dentro de nuestra comunidad.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-emerald-700">Nuestra Visión</h2>
            <p className="mt-2 text-slate-600">Ser la empresa de limpieza de referencia en el sureste de Georgia, destacando por excelencia, profesionalismo y compromiso humano.</p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx_auto px-4">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2"><MapPin className="w-6 h-6 text-emerald-600"/>Zonas de servicio</h2>
            <p className="text-slate-600 mt-2">Jesup y hasta 40 millas alrededor: Waycross, Brunswick, Hinesville, Pooler, Richmond Hill.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify_between font-medium">
                  <span>{f.q}</span>
                  <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border bg-slate-50 text-slate-500 group-open:rotate-45 transition"><span className="text-xl leading-none">+</span></span>
                </summary>
                <p className="mt-3 text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="book" className="py-12 sm:py-16 bg-emerald-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold">Agenda tu limpieza</h2>
              <p className="mt-2 text-emerald-50">Cuéntanos tamaño de la propiedad, número de baños, mascotas y fecha deseada.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+19122026006" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-emerald-700 font-semibold"><Phone className="w-4 h-4"/> Llamar</a>
                <a href="mailto:neatclean012@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/30 text-white font-semibold"><Mail className="w-4 h-4"/> Enviar correo</a>
                <a href="https://wa.me/19122026006" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/30 text-white font-semibold"><MessageCircle className="w-4 h-4"/> WhatsApp</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <form className="grid gap-4">
                <div>
                  <label className="text-sm font-medium">Nombre</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Tu nombre" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Teléfono</label>
                    <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="(xxx) xxx-xxxx" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Tipo de servicio</label>
                  <select className="mt-1 w-full rounded-xl border px-3 py-2">
                    <option>Standard Clean</option>
                    <option>Deep Clean</option>
                    <option>Move In/Out</option>
                    <option>Comercial</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Mensaje</label>
                  <textarea className="mt-1 w-full rounded-xl border px-3 py-2" rows={4} placeholder="Metros/cuadrados, baños, mascotas, fecha sugerida..." />
                </div>
                <button type="button" className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
                  Enviar solicitud
                </button>
                <p className="text-xs text-slate-500">Al enviar aceptas nuestros términos y política de privacidad.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-4 text-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} NeatClean Pros LLC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Términos</a>
              <a href="#" className="hover:text-white">Privacidad</a>
              <a href="mailto:neatclean012@gmail.com" className="hover:text-white">neatclean012@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
