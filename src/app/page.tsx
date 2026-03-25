"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  content,
  variantLabels,
  type VariantKey,
  type SectionContent,
} from "@/data/content";

const EMOJIS = ["😀", "😂", "🥹", "😍", "🤔", "😎", "🥳", "😤", "🤗", "😭"];

/* ─── Navbar ─── */
function Navbar({
  variant,
  setVariant,
}: {
  variant: VariantKey;
  setVariant: (v: VariantKey) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <Image src="/logo.svg" alt="freemoji" width={160} height={49} className="h-8 w-auto" priority />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-500">
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as VariantKey)}
            className="bg-yellow/10 border border-yellow/30 rounded-full px-4 py-2 text-sm font-600 text-gray-700 focus:outline-none focus:border-yellow cursor-pointer"
          >
            {(Object.keys(variantLabels) as VariantKey[]).map((k) => (
              <option key={k} value={k}>{variantLabels[k]}</option>
            ))}
          </select>
          <a href="#about" className="hover:text-yellow transition-colors">O nas</a>
          <a href="#for-whom" className="hover:text-yellow transition-colors">Dla kogo</a>
          <a href="#offer" className="hover:text-yellow transition-colors">Oferta</a>
          <a href="#faq" className="hover:text-yellow transition-colors">FAQ</a>
          <a href="#contact" className="bg-yellow hover:bg-yellow-dark text-gray-900 px-5 py-2.5 rounded-full font-600 transition-colors">
            Kontakt
          </a>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as VariantKey)}
            className="bg-yellow/10 border border-yellow/30 rounded-full px-3 py-1.5 text-xs font-600 text-gray-700 focus:outline-none"
          >
            {(Object.keys(variantLabels) as VariantKey[]).map((k) => (
              <option key={k} value={k}>{variantLabels[k]}</option>
            ))}
          </select>
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-500">
          <a href="#about" onClick={() => setOpen(false)}>O nas</a>
          <a href="#for-whom" onClick={() => setOpen(false)}>Dla kogo</a>
          <a href="#offer" onClick={() => setOpen(false)}>Oferta</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-yellow text-gray-900 px-5 py-2.5 rounded-full font-600 text-center">Kontakt</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Sticky Mobile CTA ─── */
function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-3">
      <a href="#contact" className="block w-full bg-yellow hover:bg-yellow-dark text-gray-900 font-600 text-center py-3 rounded-full transition-colors">
        Zapisz się na webinar
      </a>
    </div>
  );
}

/* ─── Hero ─── */
function Hero({ c }: { c: SectionContent }) {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[60%] h-full bg-yellow rounded-bl-[120px] -z-10" />
      <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-yellow/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center min-h-[85vh]">
        <div className="animate-fade-up">
          <h1 className="font-display font-800 text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            {c.hero.headline.map((line, i) =>
              i === c.hero.headline.length - 1 ? (
                <span key={i}>
                  <span className="relative inline-block">
                    {line}
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 8c50-6 100-6 150-2s100 2 146-4" stroke="#FFD600" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                  .
                </span>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
            {c.hero.subtitle}
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-600 text-lg transition-all hover:scale-105 hover:shadow-xl">
            {c.hero.cta}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          {/* Social proof */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["👨‍💼", "👩‍💻", "👨‍🏫", "👩‍💼"].map((e, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-yellow/20 border-2 border-white flex items-center justify-center text-sm">{e}</div>
              ))}
            </div>
            <p className="text-sm text-gray-500">Dołącz do <strong className="text-gray-700">500+ profesjonalistów</strong></p>
          </div>
        </div>
        <div className="relative flex justify-center animate-scale-in">
          <span className="absolute -top-6 right-8 text-5xl animate-float">{"😀"}</span>
          <span className="absolute top-1/4 -right-4 text-4xl animate-float-delayed">{"😍"}</span>
          <span className="absolute bottom-12 right-0 text-6xl animate-float stagger-2">{"🤗"}</span>
          <span className="absolute top-1/3 -left-4 text-3xl animate-float-delayed stagger-3">{"😎"}</span>
          <span className="absolute -bottom-2 left-12 text-4xl animate-float stagger-4">{"🥳"}</span>
          <Image src="/media/hero-image.png" alt="Hero illustration with emojis" width={615} height={640} className="w-72 md:w-96 h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

/* ─── Problem (moved up, redesigned 3-col with consequences) ─── */
function Problem({ c }: { c: SectionContent }) {
  const problems = [
    { icon: "😶", consequence: "Nie strać zaufania zespołu i autorytetu." },
    { icon: "👁️", consequence: "Nie zauważasz oporu klientów." },
    { icon: "⚡", consequence: "Przez co podejmujesz błędne decyzje." },
  ];
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-800 text-3xl md:text-5xl mb-4 leading-tight">
            {c.problem.heading}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{c.problem.desc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {c.problem.bullets.slice(0, 3).map((b, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 text-center hover:shadow-xl hover:border-yellow/30 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-5 bg-gray-900 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-yellow group-hover:scale-110 transition-all">
                {problems[i]?.icon || "⚠️"}
              </div>
              <h3 className="font-600 text-lg mb-3 text-gray-900">{b}</h3>
              <p className="text-gray-400 text-sm">{problems[i]?.consequence}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About({ c }: { c: SectionContent }) {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-yellow/30 to-yellow/10 overflow-hidden flex items-end justify-center">
            <span className="text-[8rem] mb-8">{"👩‍💼"}</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow rounded-2xl -z-10" />
        </div>
        <div>
          <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">{c.about.label}</p>
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-12 leading-tight">
            {c.about.heading.split("freemoji").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>{part}<span className="text-yellow">freemoji</span></span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>
          <div className="space-y-10">
            {c.about.points.map((p) => (
              <div key={p.num} className="flex gap-6">
                <span className="font-display font-800 text-5xl text-yellow/40 leading-none shrink-0">{p.num}</span>
                <div>
                  <h3 className="font-600 text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ForWhom — uses content variant for heading + bullets ─── */
function ForWhom({ c }: { c: SectionContent }) {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: "HR", emoji: "👔", text: "Rekruterzy i specjaliści HR codziennie komunikują się pisemnie z kandydatami. Ton wiadomości wpływa na doświadczenie rekrutacyjne i wizerunek firmy. Nauczymy jak pisać z empatią." },
    { label: "Sprzedawcy", emoji: "🤝", text: "W sprzedaży relacja to klucz. Wiadomości pozbawione emocji mogą zniechęcić klienta. Pokażemy jak budować ciepły, profesjonalny ton w komunikacji pisemnej." },
    { label: "Liderzy", emoji: "🎯", text: "Liderzy zarządzający zdalnymi zespołami muszą umieć motywować i wspierać bez kontaktu twarzą w twarz. Cyfrowa mowa ciała to niezbędne narzędzie." },
    { label: "Coachowie", emoji: "💬", text: "Coachowie i terapeuci prowadzący sesje online potrzebują umiejętności wyrażania empatii i zrozumienia w formie pisemnej. To zupełnie inny zestaw kompetencji." },
    { label: "Trenerzy", emoji: "📚", text: "Trenerzy i edukatorzy mogą wzbogacić swoje programy szkoleniowe o moduł cyfrowej komunikacji — kompetencję przyszłości." },
  ];

  return (
    <section id="for-whom" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
            {c.forWhom.heading}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-600 text-sm transition-all ${
                active === i
                  ? "bg-yellow text-gray-900 shadow-lg shadow-yellow/30 scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 p-10 md:p-14 shadow-sm">
          <div className="flex items-start gap-6">
            <span className="text-6xl shrink-0">{tabs[active].emoji}</span>
            <div>
              <h3 className="font-display font-700 text-2xl mb-4">{tabs[active].label}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{tabs[active].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Emoji showcase ─── */
function EmojiShowcase({ c }: { c: SectionContent }) {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
          {c.emojiShowcase.heading.split("emocji").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>{part}<span className="text-yellow">emocji</span></span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{c.emojiShowcase.subheading}</p>
      </div>
      <div className="flex gap-6 mb-6 whitespace-nowrap overflow-hidden">
        {[...EMOJIS, ...EMOJIS].map((e, i) => (
          <div key={`a${i}`} className="w-20 h-20 md:w-28 md:h-28 bg-gray-50 rounded-2xl shadow-sm flex items-center justify-center text-4xl md:text-5xl shrink-0 hover:scale-110 hover:shadow-lg transition-all cursor-default">{e}</div>
        ))}
      </div>
      <div className="flex gap-6 whitespace-nowrap overflow-hidden">
        {[...EMOJIS.slice().reverse(), ...EMOJIS.slice().reverse()].map((e, i) => (
          <div key={`b${i}`} className="w-20 h-20 md:w-28 md:h-28 bg-gray-50 rounded-2xl shadow-sm flex items-center justify-center text-4xl md:text-5xl shrink-0 hover:scale-110 hover:shadow-lg transition-all cursor-default">{e}</div>
        ))}
      </div>
    </section>
  );
}

/* ─── Digital Communication (dark section) ─── */
function DigitalComm({ c }: { c: SectionContent }) {
  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/5 rounded-full blur-[80px]" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">{c.digitalComm.label}</p>
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-6 leading-tight">{c.digitalComm.heading}</h2>
          {c.digitalComm.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-400 leading-relaxed mb-6">{p}</p>
          ))}
          <div className="inline-flex items-center gap-3 bg-yellow/10 border border-yellow/20 rounded-2xl px-6 py-4">
            <span className="text-3xl">{"💡"}</span>
            <p className="text-sm text-yellow-light">{c.digitalComm.callout}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {["🧑‍💻", "👩‍🏫", "🧑‍🤝‍🧑", "📱"].map((emoji, i) => (
            <div key={i} className="aspect-square rounded-3xl bg-gray-800 flex items-center justify-center text-6xl hover:bg-gray-700 transition-colors">{emoji}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Solution (redesigned: 2-col with benefits list) ─── */
function Solution({ c }: { c: SectionContent }) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: visual */}
        <div className="relative">
          <div className="bg-yellow rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.08]">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="absolute text-5xl select-none" style={{ left: `${(i * 8.7) % 100}%`, top: `${(i * 9.3) % 100}%`, transform: `rotate(${(i * 23) % 40 - 20}deg)` }}>
                  {EMOJIS[i % EMOJIS.length]}
                </span>
              ))}
            </div>
            <div className="relative z-10 text-center">
              <Image src="/logo.svg" alt="freemoji" width={200} height={61} className="mx-auto mb-6 h-12 w-auto" />
              <p className="text-gray-900/70 font-500 text-lg">{c.solution.desc}</p>
            </div>
          </div>
        </div>
        {/* Right: benefits list */}
        <div>
          <h2 className="font-display font-800 text-3xl md:text-4xl mb-8 leading-tight">
            {c.solution.heading}
          </h2>
          <div className="space-y-5">
            {c.solution.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-yellow/20 transition-colors">
                  {b.emoji}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-2">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How it works (NEW - 3 steps) ─── */
function HowItWorks() {
  const steps = [
    { num: "1", emoji: "📝", title: "Zapisz się na webinar", desc: "Wybierz termin i zarezerwuj miejsce w 30 sekund." },
    { num: "2", emoji: "💡", title: "Poznaj cyfrową mowę ciała", desc: "Na webinarze dowiesz się jak rozpoznawać i wyrażać emocje online." },
    { num: "3", emoji: "🚀", title: "Stosuj w praktyce", desc: "Zacznij świadomie komunikować się w mailach, czatach i na spotkaniach." },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">Jak to działa?</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl">3 proste kroki</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-20 h-20 mx-auto mb-5 bg-yellow rounded-2xl flex items-center justify-center text-4xl relative">
                {s.emoji}
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white rounded-full text-xs font-700 flex items-center justify-center">{s.num}</span>
              </div>
              <h3 className="font-display font-700 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Webinar + Pricing (combined) ─── */
function WebinarPricing({ c }: { c: SectionContent }) {
  return (
    <section id="offer" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
            {c.webinar.heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: webinar content (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            {c.webinar.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-yellow/30 transition-colors">
                <span className="text-2xl shrink-0">{b.emoji}</span>
                <p className="text-gray-600">{b.text}</p>
              </div>
            ))}
            <div className="pt-4">
              <p className="text-gray-500 leading-relaxed mb-4">{c.webinarPromo.subtitle}</p>
            </div>
          </div>
          {/* Right: pricing card (2 cols) */}
          <div className="md:col-span-2">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-10 text-white text-center sticky top-24">
              <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-4">Webinar</p>
              <div className="bg-yellow rounded-2xl p-6 mb-6">
                <p className="text-gray-900/60 text-xs mb-1">Dostęp do platformy od</p>
                <p className="font-display font-800 text-5xl text-gray-900">199<span className="text-2xl">,00 zł</span></p>
              </div>
              <ul className="text-left space-y-3 mb-8 text-sm">
                {c.webinarPromo.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow mt-0.5">{"✓"}</span>
                    <span className="text-gray-300">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full bg-yellow hover:bg-yellow-dark text-gray-900 font-600 py-4 rounded-full transition-all hover:scale-105 text-lg">
                {c.webinar.cta}
              </a>
              <p className="mt-3 text-gray-500 text-xs">(Nie zapomnij dodać emoji!)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: "Czym dokładnie jest cyfrowa mowa ciała?", a: "To sposób wyrażania emocji, intencji i tonu w komunikacji pisemnej — za pomocą emoji, interpunkcji, formatowania tekstu, czasu odpowiedzi i innych elementów, które zastępują mimikę i gesty w rozmowie twarzą w twarz." },
    { q: "Dla kogo jest freemoji?", a: "Dla każdego, kto komunikuje się pisemnie w pracy lub życiu prywatnym. Szczególnie polecamy osobom z działów HR, sprzedaży, liderom zespołów, coachom i trenerom." },
    { q: "Jak wygląda szkolenie?", a: "Oferujemy webinary na żywo, materiały edukacyjne do samodzielnej nauki, interaktywne ćwiczenia oraz mini gry, które pomagają zrozumieć kontekst emoji w komunikacji." },
    { q: "Ile kosztuje dostęp?", a: "Dostęp do platformy zaczyna się od 199 zł. Szczegóły cennika znajdziesz w sekcji kontakt lub pisząc do nas na kontakt@freemoji.com." },
    { q: "Czy mogę przetestować platformę?", a: "Tak! Zapisz się na bezpłatny webinar, aby poznać nasze podejście i zobaczyć fragment platformy w akcji." },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">Często zadawane pytania</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left p-6 flex items-center justify-between gap-4 font-600 hover:bg-gray-50 transition-colors">
                {f.q}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`}>
                  <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openIdx === i && <div className="px-6 pb-6 text-gray-500 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-display font-800 text-4xl mb-4">Masz <span className="text-yellow">pytanie</span>?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">Napisz do nas — odpowiadamy szybko i z emoji!</p>
            <a href="mailto:kontakt@freemoji.com" className="text-yellow hover:text-yellow-light text-lg font-600 transition-colors">kontakt@freemoji.com</a>
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Imię" className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow transition-colors" />
            <input type="email" placeholder="Email" className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow transition-colors" />
            <textarea placeholder="Wiadomość" rows={4} className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow transition-colors resize-none" />
            <button className="bg-yellow hover:bg-yellow-dark text-gray-900 font-600 px-8 py-3.5 rounded-xl transition-colors self-start">Wyślij wiadomość</button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logo.svg" alt="freemoji" width={120} height={37} className="h-6 w-auto brightness-0 invert" />
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} freemoji. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            {["Instagram", "LinkedIn", "Facebook"].map((s) => (
              <a key={s} href="#" className="text-gray-500 hover:text-yellow text-sm transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page (new conversion-optimized order) ─── */
export default function Home() {
  const [variant, setVariant] = useState<VariantKey>("normalne");
  const c = content[variant];

  return (
    <>
      <Navbar variant={variant} setVariant={setVariant} />
      <StickyCTA />
      <main>
        <Hero c={c} />
        <Problem c={c} />
        <About c={c} />
        <ForWhom c={c} />
        <EmojiShowcase c={c} />
        <DigitalComm c={c} />
        <Solution c={c} />
        <HowItWorks />
        <WebinarPricing c={c} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
