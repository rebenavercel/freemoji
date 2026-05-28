"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { useLanguage } from "@/context/LanguageContext";
import { type VariantKey } from "@/data/content";

const EMOJIS = ["😀", "😂", "🥹", "😍", "🤔", "😎", "🥳", "😤", "🤗", "😭"];

/* ─── Sticky Mobile CTA ─── */
function StickyCTA() {
  const [show, setShow] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-3">
      <a href="#contact" className="block w-full bg-yellow hover:bg-yellow-dark text-gray-900 font-600 text-center py-3 rounded-full transition-colors">
        {t("home.stickyCta")}
      </a>
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[60%] h-full bg-yellow rounded-bl-[120px] -z-10" />
      <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-yellow/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center min-h-[85vh]">
        <div className="animate-fade-up">
          <h1 className="font-display font-800 text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            {t("home.hero.headline1")}<br />
            {t("home.hero.headline2")}<br />
            <span className="relative inline-block">
              {t("home.hero.headline3")}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8c50-6 100-6 150-2s100 2 146-4" stroke="#FFD600" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
            {t("home.hero.subtitle")}
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-600 text-lg transition-all hover:scale-105 hover:shadow-xl">
            {t("home.hero.cta")}
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
            <p className="text-sm text-gray-500">{t("home.hero.socialProof")} <strong className="text-gray-700">500+ {t("home.hero.professionals")}</strong></p>
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
function Problem() {
  const { t } = useLanguage();
  const problems = [
    { icon: "😶" },
    { icon: "👁️" },
    { icon: "⚡" },
  ];
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-800 text-3xl md:text-5xl mb-4 leading-tight">
            {t("home.problem.heading")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{t("home.problem.desc")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 text-center hover:shadow-xl hover:border-yellow/30 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-5 bg-gray-900 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-yellow group-hover:scale-110 transition-all">
                {problems[i]?.icon || "⚠️"}
              </div>
              <h3 className="font-600 text-lg mb-3 text-gray-900">{t(`home.problem.bullets.${i}`)}</h3>
              <p className="text-gray-400 text-sm">{t(`home.problem.consequences.${i}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  const { t } = useLanguage();
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
          <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">{t("home.about.label")}</p>
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-12 leading-tight">
            {t("home.about.heading").split("freemoji").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>{part}<span className="text-yellow">freemoji</span></span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>
          <div className="space-y-10">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex gap-6">
                <span className="font-display font-800 text-5xl text-yellow/40 leading-none shrink-0">{t(`home.about.points.${i}.num`)}</span>
                <div>
                  <h3 className="font-600 text-lg mb-2">{t(`home.about.points.${i}.title`)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(`home.about.points.${i}.desc`)}</p>
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
function ForWhom() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const tabs = [
    { label: t("home.forWhom.tabs.0.label"), emoji: t("home.forWhom.tabs.0.emoji"), text: t("home.forWhom.tabs.0.text") },
    { label: t("home.forWhom.tabs.1.label"), emoji: t("home.forWhom.tabs.1.emoji"), text: t("home.forWhom.tabs.1.text") },
    { label: t("home.forWhom.tabs.2.label"), emoji: t("home.forWhom.tabs.2.emoji"), text: t("home.forWhom.tabs.2.text") },
    { label: t("home.forWhom.tabs.3.label"), emoji: t("home.forWhom.tabs.3.emoji"), text: t("home.forWhom.tabs.3.text") },
    { label: t("home.forWhom.tabs.4.label"), emoji: t("home.forWhom.tabs.4.emoji"), text: t("home.forWhom.tabs.4.text") },
  ];

  return (
    <section id="for-whom" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
            {t("home.forWhom.heading")}
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
function EmojiShowcase() {
  const { t } = useLanguage();
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
          {t("home.emojiShowcase.heading").split("emocji").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>{part}<span className="text-yellow">emocji</span></span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{t("home.emojiShowcase.subheading")}</p>
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
function DigitalComm() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/5 rounded-full blur-[80px]" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">{t("home.digitalComm.label")}</p>
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-6 leading-tight">{t("home.digitalComm.heading")}</h2>
          {[0, 1].map((i) => (
            <p key={i} className="text-gray-400 leading-relaxed mb-6">{t(`home.digitalComm.paragraphs.${i}`)}</p>
          ))}
          <div className="inline-flex items-center gap-3 bg-yellow/10 border border-yellow/20 rounded-2xl px-6 py-4">
            <span className="text-3xl">{"💡"}</span>
            <p className="text-sm text-yellow-light">{t("home.digitalComm.callout")}</p>
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
function Solution() {
  const { t } = useLanguage();
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
              <p className="text-gray-900/70 font-500 text-lg">{t("home.solution.desc")}</p>
            </div>
          </div>
        </div>
        {/* Right: benefits list */}
        <div>
          <h2 className="font-display font-800 text-3xl md:text-4xl mb-8 leading-tight">
            {t("home.solution.heading")}
          </h2>
          <div className="space-y-5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-yellow/20 transition-colors">
                  {t(`home.solution.benefits.${i}.emoji`)}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-2">{t(`home.solution.benefits.${i}.text`)}</p>
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
  const { t } = useLanguage();
  const steps = [
    { num: t("home.howItWorks.steps.0.num"), emoji: t("home.howItWorks.steps.0.emoji"), title: t("home.howItWorks.steps.0.title"), desc: t("home.howItWorks.steps.0.desc") },
    { num: t("home.howItWorks.steps.1.num"), emoji: t("home.howItWorks.steps.1.emoji"), title: t("home.howItWorks.steps.1.title"), desc: t("home.howItWorks.steps.1.desc") },
    { num: t("home.howItWorks.steps.2.num"), emoji: t("home.howItWorks.steps.2.emoji"), title: t("home.howItWorks.steps.2.title"), desc: t("home.howItWorks.steps.2.desc") },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">{t("home.howItWorks.label")}</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl">{t("home.howItWorks.heading")}</h2>
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
function WebinarPricing() {
  const { t } = useLanguage();
  return (
    <section id="offer" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
            {t("home.webinar.heading")}
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: webinar content (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-yellow/30 transition-colors">
                <span className="text-2xl shrink-0">{t(`home.webinar.bullets.${i}.emoji`)}</span>
                <p className="text-gray-600">{t(`home.webinar.bullets.${i}.text`)}</p>
              </div>
            ))}
            <div className="pt-4">
              <p className="text-gray-500 leading-relaxed mb-4">{t("home.webinarPromo.subtitle")}</p>
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
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow mt-0.5">{"✓"}</span>
                    <span className="text-gray-300">{t(`home.webinarPromo.bullets.${i}`)}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full bg-yellow hover:bg-yellow-dark text-gray-900 font-600 py-4 rounded-full transition-all hover:scale-105 text-lg">
                {t("home.webinar.cta")}
              </a>
              <p className="mt-3 text-gray-500 text-xs">(Nie zapomnij dodać emoji!)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page (new conversion-optimized order) ─── */
export default function Home() {
  const [variant, setVariant] = useState<VariantKey>("normalne");
  const { t } = useLanguage();
  
  // FAQ data - get from translations
  const faqQuestions = t("home.faq.questions") as Array<{ question: string; answer: string }>;
  const faqs = [
    { emoji: "🤔", ...faqQuestions[0] },
    { emoji: "👥", ...faqQuestions[1] },
    { emoji: "📚", ...faqQuestions[2] },
    { emoji: "💰", ...faqQuestions[3] },
    { emoji: "✨", ...faqQuestions[4] },
  ];

  return (
    <>
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      <StickyCTA />
      <main>
        <Hero />
        <Problem />
        <About />
        <ForWhom />
        <EmojiShowcase />
        <DigitalComm />
        <Solution />
        <HowItWorks />
        <WebinarPricing />
        <FAQSection faqs={faqs} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
