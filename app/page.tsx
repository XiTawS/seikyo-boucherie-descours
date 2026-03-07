"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCMS } from "@/components/cms/CMSProvider";
import EditableText from "@/components/cms/EditableText";
import EditableImage from "@/components/cms/EditableImage";
import EditableButton from "@/components/cms/EditableButton";
import LightboxProvider, { useLightbox } from "@/components/Lightbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Pen, CreditCard, Truck, UtensilsCrossed, PartyPopper, Package, ExternalLink } from "lucide-react";

/* ─── Fade ─── */
function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ─── HERO — Image devanture + texte ─── */
function Hero() {
  const ref = useRef<HTMLInputElement>(null);
  const { isAdmin } = useCMS();

  return (
    <section className="relative h-[85vh] overflow-hidden">
      <EditableImage contentKey="home.hero.bg"
        defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772834539/boucherie-descours/hero.jpg"
        alt="Boucherie J. Descours" fill sizes="100vw" priority
        className="object-cover" hideButton inputRef={ref} />
      {isAdmin && (
        <button onClick={() => ref.current?.click()}
          className="absolute top-20 right-6 z-[50] bg-white/80 text-[var(--color-text)] p-2 rounded-full">
          <Pen className="w-4 h-4" />
        </button>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <EditableText contentKey="home.hero.label" defaultValue="Boucherie — Charcuterie — Traiteur" tag="p"
              className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3" />
            <EditableText contentKey="home.hero.title" defaultValue="J. Descours" tag="h1"
              className="font-display italic text-6xl md:text-8xl text-white leading-[0.9] mb-3" />
            <EditableText contentKey="home.hero.subtitle" defaultValue="Fabrication maison depuis Saint-Donat" tag="p"
              className="text-white/60 text-lg mb-6" />
            <div className="flex flex-wrap items-center gap-4">
              <EditableButton contentKeyText="home.hero.cta.text" contentKeyUrl="home.hero.cta.url"
                defaultText="Nous trouver" defaultUrl="#contact"
                className="bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500" />
              <a href="#relais-pickup" className="flex items-center gap-2.5 bg-white hover:bg-white/90 text-[#003DA5] px-5 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-lg">
                <img src="https://res.cloudinary.com/dxcudyuno/image/upload/v1772834738/logos/pickup-icon.png" alt="Pickup" className="w-6 h-6" />
                <span className="font-bold">Relais Pickup</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SAVOIR-FAIRE — texte centré + services ─── */
function SavoirFaire() {
  const services = [
    { icon: UtensilsCrossed, title: "Boucherie", desc: "Viandes sélectionnées, découpe artisanale" },
    { icon: UtensilsCrossed, title: "Charcuterie", desc: "Fabrication maison, recettes traditionnelles" },
    { icon: PartyPopper, title: "Traiteur", desc: "Buffets, réceptions, mariages" },
    { icon: Truck, title: "À emporter", desc: "Plats préparés, commandes sur mesure" },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Fade className="text-center mb-12">
          <EditableText contentKey="home.savoir.label" defaultValue="Notre savoir-faire" tag="p"
            className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.savoir.title" defaultValue="L'artisanat au coeur du métier" tag="h2"
            className="font-display text-3xl md:text-5xl text-[var(--color-text)] mb-6" />
          <EditableText contentKey="home.savoir.text"
            defaultValue="Depuis notre boutique au coeur de Saint-Donat-sur-l'Herbasse, nous perpétuons la tradition du bon artisan boucher. Viandes rigoureusement sélectionnées, charcuterie maison, et un service traiteur pour tous vos événements."
            tag="p" className="text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed" />
        </Fade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          {services.map((s, i) => (
            <Fade key={s.title} delay={i * 0.08} className="h-full">
              <div className="h-full text-center py-8 px-4 border border-[var(--color-red)]/10 hover:border-[var(--color-red)]/30 transition-colors group">
                <s.icon className="w-6 h-6 text-[var(--color-red)] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-[var(--color-text)] font-medium text-sm mb-1">{s.title}</h3>
                <p className="text-[var(--color-text-muted)] text-xs leading-relaxed">{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── IMAGE BREAK ─── */
function ImageBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isAdmin } = useCMS();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative h-[35vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.2]">
        <EditableImage contentKey="home.break.image"
          defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772834583/boucherie-descours/interieur.jpg"
          alt="Charcuterie maison" fill sizes="100vw" className="object-cover" hideButton inputRef={inputRef} />
      </motion.div>
      <div className="absolute inset-0 bg-[var(--color-bg-dark)]/40" />
      {isAdmin && (
        <button onClick={() => inputRef.current?.click()}
          className="absolute top-6 right-6 z-[50] bg-white/80 text-[var(--color-text)] p-2 rounded-full">
          <Pen className="w-4 h-4" />
        </button>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <EditableText contentKey="home.break.quote"
          defaultValue="Le goût de la tradition, la passion du fait maison."
          tag="p" className="font-display italic text-2xl md:text-4xl text-white text-center max-w-2xl px-8 leading-[1.3]" />
      </div>
    </section>
  );
}

/* ─── GALERIE — bento full width ─── */
function Gallery() {
  const { isAdmin } = useCMS();
  const { openLightbox } = useLightbox();

  const images = [
    { key: "p1", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772834581/boucherie-descours/charcuterie.jpg", bento: "col-span-2 row-span-2" },
    { key: "p2", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772834582/boucherie-descours/saucisses.jpg", bento: "col-span-1 row-span-1" },
    { key: "p3", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772834585/boucherie-descours/saucissons.jpg", bento: "col-span-1 row-span-1" },
    { key: "p4", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772834587/boucherie-descours/fromages.jpg", bento: "col-span-2 row-span-1" },
    { key: "p5", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772834592/boucherie-descours/traiteur.jpg", bento: "col-span-1 row-span-1" },
    { key: "p6", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772834583/boucherie-descours/interieur.jpg", bento: "col-span-1 row-span-1" },
    { key: "p7", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772834582/boucherie-descours/saucisses.jpg", bento: "col-span-1 row-span-1" },
    { key: "p8", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772834581/boucherie-descours/charcuterie.jpg", bento: "col-span-1 row-span-1" },
  ];
  const srcs = images.map(i => i.src);

  return (
    <section id="galerie" className="bg-[var(--color-bg-warm)]">
      <div className="px-6 md:px-12 py-14 text-center">
        <EditableText contentKey="home.gallery.label" defaultValue="Notre vitrine" tag="p"
          className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-3" />
        <EditableText contentKey="home.gallery.title" defaultValue="Nos produits" tag="h2"
          className="font-display text-3xl md:text-5xl text-[var(--color-text)]" />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-[180px_180px_180px] md:grid-rows-[260px_260px_260px]">
        {images.map((img) => (
          <div key={img.key} className={`relative overflow-hidden group cursor-pointer ${img.bento}`}
            onClick={() => !isAdmin && openLightbox(img.src, srcs)}>
            <EditableImage contentKey={`home.gallery.${img.key}`} defaultSrc={img.src} alt="Produit"
              fill sizes="(max-width:768px) 33vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-[var(--color-red-dark)]/0 group-hover:bg-[var(--color-red-dark)]/15 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── HORAIRES + INFOS ─── */
function Horaires() {
  const hours = [
    { day: "Lundi", time: "6h30–12h30 / 15h–19h30" },
    { day: "Mardi", time: "6h30–12h30 / 15h–19h30" },
    { day: "Mercredi", time: "Fermé" },
    { day: "Jeudi", time: "6h30–12h30 / 15h–19h30" },
    { day: "Vendredi", time: "6h30–19h30" },
    { day: "Samedi", time: "6h30–19h30" },
    { day: "Dimanche", time: "6h30–12h30" },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg-dark)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        <Fade>
          <EditableText contentKey="home.hours.label" defaultValue="Horaires" tag="p"
            className="text-[var(--color-gold)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.hours.title" defaultValue="Quand nous trouver" tag="h2"
            className="font-display text-3xl md:text-4xl text-white mb-8" />
          <div className="space-y-0">
            {hours.map((h) => (
              <div key={h.day} className={`flex justify-between py-2.5 border-b border-white/10 ${h.time === "Fermé" ? "opacity-40" : ""}`}>
                <span className="text-white/70 text-sm">{h.day}</span>
                <span className="text-white text-sm font-medium">{h.time}</span>
              </div>
            ))}
          </div>
        </Fade>

        <Fade delay={0.1}>
          <EditableText contentKey="home.services.label" defaultValue="Services" tag="p"
            className="text-[var(--color-gold)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.services.title" defaultValue="Ce que nous proposons" tag="h2"
            className="font-display text-3xl md:text-4xl text-white mb-8" />
          <div className="space-y-4">
            {[
              "Boucherie artisanale — viandes sélectionnées",
              "Charcuterie maison — fabrication traditionnelle",
              "Service traiteur — buffets, plateaux repas",
              "Réceptions et mariages — sur commande",
              "Plats à emporter — préparés chaque jour",
              "Accessible PMR — climatisation",
            ].map((s) => (
              <div key={s} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-red)] mt-2 flex-shrink-0" />
                <span className="text-white/60 text-sm">{s}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3">Paiement accepté</p>
            <p className="text-white/40 text-sm">CB, Sans contact, Apple Pay, Ticket Restaurant, Chèque, Espèces</p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── RELAIS PICKUP ─── */
function RelaisPickup() {
  return (
    <section id="relais-pickup" className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Fade className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src="https://res.cloudinary.com/dxcudyuno/image/upload/v1772834738/logos/pickup-icon.png" alt="Pickup" className="w-8 h-8" />
            <span className="text-[#003DA5] font-display text-xl">Pickup</span>
          </div>
          <EditableText contentKey="home.pickup.title" defaultValue="Point Relais Pickup" tag="h2"
            className="font-display text-3xl md:text-4xl text-[var(--color-text)]" />
        </Fade>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <Fade className="md:col-span-7">
            <div className="bg-white border border-[var(--color-gold)]/20 p-8">
              <EditableText contentKey="home.pickup.text"
                defaultValue="La Boucherie J. Descours est point Relais Pickup officiel. Récupérez et déposez vos colis directement chez nous, pendant les horaires d'ouverture."
                tag="p" className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6" />

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-[var(--color-bg-warm)] p-4">
                  <Package className="w-5 h-5 text-[var(--color-red)] flex-shrink-0" />
                  <div>
                    <p className="text-[var(--color-text)] text-sm font-medium">Retrait colis</p>
                    <p className="text-[var(--color-text-muted)] text-xs">Récupérez vos commandes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[var(--color-bg-warm)] p-4">
                  <Truck className="w-5 h-5 text-[var(--color-red)] flex-shrink-0" />
                  <div>
                    <p className="text-[var(--color-text)] text-sm font-medium">Dépôt colis</p>
                    <p className="text-[var(--color-text-muted)] text-xs">Renvoyez vos achats</p>
                  </div>
                </div>
              </div>

              <a href="https://localiser.laposte.fr/drome/st-donat-sur-l-herbasse/boucherie-j-descours-365419" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-red)] hover:text-[var(--color-red-dark)] text-xs tracking-[0.2em] uppercase font-medium transition-colors">
                Voir sur La Poste <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Fade>

          <Fade delay={0.1} className="md:col-span-5">
            <div className="bg-[var(--color-bg-dark)] p-8">
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Horaires retrait</p>
              <div className="space-y-3 text-sm">
                {[
                  { jour: "Lundi", h: "6h30–12h30 / 15h–19h" },
                  { jour: "Mardi", h: "6h30–12h30 / 15h–19h" },
                  { jour: "Mercredi", h: "6h–12h30" },
                  { jour: "Jeudi", h: "6h30–12h30 / 15h–19h" },
                  { jour: "Vendredi", h: "6h30–12h30 / 15h–19h" },
                ].map((d) => (
                  <div key={d.jour} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/50">{d.jour}</span>
                    <span className="text-white/80">{d.h}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-1">
                  <span className="text-white/30">Sam / Dim</span>
                  <span className="text-white/30">Fermé</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
        <Fade className="md:col-span-5">
          <EditableText contentKey="home.contact.label" defaultValue="Contact" tag="p"
            className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.contact.title" defaultValue="Passez nous voir" tag="h2"
            className="font-display text-3xl md:text-4xl text-[var(--color-text)] mb-8" />

          <div className="space-y-4 mb-8">
            {[
              { Icon: MapPin, key: "home.contact.address", def: "8 Av. Georges Bert, 26260 Saint-Donat-sur-l'Herbasse" },
              { Icon: Phone, key: "home.contact.phone", def: "04 75 02 88 25" },
              { Icon: Mail, key: "home.contact.email", def: "boucheriejdescours@orange.fr" },
            ].map(({ Icon, key, def }) => (
              <div key={key} className="flex items-start gap-3">
                <Icon className="w-4 h-4 text-[var(--color-red)]/60 mt-0.5 flex-shrink-0" />
                <EditableText contentKey={key} defaultValue={def} tag="p" className="text-[var(--color-text-muted)] text-sm" />
              </div>
            ))}
          </div>

          <EditableButton contentKeyText="home.contact.cta.text" contentKeyUrl="home.contact.cta.url"
            defaultText="Appeler la boucherie" defaultUrl="tel:0475028825"
            className="bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500" />
        </Fade>

        <Fade delay={0.15} className="md:col-span-7">
          <iframe
            src="https://maps.google.com/maps?q=Boucherie+Descours+8+Avenue+George+Bert+26260+Saint-Donat-sur-l%27Herbasse&output=embed&z=16"
            className="w-full h-[250px] md:h-full md:min-h-[300px] border-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </Fade>
      </div>
    </section>
  );
}

/* ─── MAIN ─── */
export default function Home() {
  const { loaded } = useCMS();

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[var(--color-bg-dark)] z-[99999] flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h1 className="font-display italic text-5xl text-white mb-4">J. Descours</h1>
          <div className="w-8 h-8 border border-[var(--color-gold)] border-t-transparent rounded-full animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <LightboxProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <SavoirFaire />
        <ImageBreak />
        <Gallery />
        <Horaires />
        <RelaisPickup />
        <Contact />
        <Footer />
      </main>
    </LightboxProvider>
  );
}