"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

/* ─── Hero Section ─── */
function AboutHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-32 px-4 md:px-6 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/o-nas-hero-tlo.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title */}
          <div>
            <h1 className="font-display text-2xl md:text-5xl lg:text-6xl font-800 text-gray-900 leading-tight">
              {t("about.hero.title")}
            </h1>
          </div>

          {/* Right: List with icons */}
          <div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">👀</span>
                <p className="text-base md:text-lg text-gray-700">
                  <strong className="font-700">{t("about.hero.benefits.emotions")}</strong> – {t("about.hero.benefits.emotionsDesc")}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">🧠</span>
                <p className="text-base md:text-lg text-gray-700">
                  <strong className="font-700">{t("about.hero.benefits.intelligence")}</strong> – {t("about.hero.benefits.intelligenceDesc")}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">🗣️</span>
                <p className="text-base md:text-lg text-gray-700">
                  <strong className="font-700">{t("about.hero.benefits.meetings")}</strong> – {t("about.hero.benefits.meetingsDesc")}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">💬</span>
                <p className="text-base md:text-lg text-gray-700">
                  <strong className="font-700">{t("about.hero.benefits.confidence")}</strong> – {t("about.hero.benefits.confidenceDesc")}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">⚡</span>
                <p className="text-base md:text-lg text-gray-700">
                  <strong className="font-700">{t("about.hero.benefits.credibility")}</strong> – {t("about.hero.benefits.credibilityDesc")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Team Section ─── */
function TeamSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-yellow/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-5xl font-800 text-center mb-16">
          {t("about.team.title")}
        </h2>

        <div className="relative">
          {/* CEO Images - Mirrored */}
          <div className="flex items-end justify-center mb-12">
            <div className="relative w-full max-w-4xl">
              <div className="flex items-end justify-center">
                {/* Left person - normal */}
                <div className="flex-1 relative">
                  <Image
                    src="/jakub-left.png"
                    alt="Jakub Szlosek CEO"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                {/* Right person - mirrored */}
                <div className="flex-1 relative">
                  <Image
                    src="/jakub-left.png"
                    alt="Jakub Szlosek CEO"
                    width={400}
                    height={500}
                    className="w-full h-auto scale-x-[-1]"
                  />
                </div>
              </div>

              {/* Yellow button at bottom center */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                <a
                  href="/contact"
                  className="bg-yellow hover:bg-yellow-dark text-gray-900 px-8 py-3 rounded-full font-800 text-base shadow-xl hover:scale-105 transition-all inline-block whitespace-nowrap"
                >
                  {t("about.team.contactUs")}
                </a>
              </div>
            </div>
          </div>

          {/* Text boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Left box */}
            <div className="text-center">
              <div className="inline-block bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-600 text-sm mb-4">
                Jakub Szlosek, {t("about.team.ceo")}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Dis suspendisse nunc et. Dictum enim amet non justo eget vulputate ornare sollicitudin sed integer.
              </p>
            </div>

            {/* Right box */}
            <div className="text-center">
              <div className="inline-block bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-600 text-sm mb-4">
                Jakub Szlosek, {t("about.team.ceo")}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Dis suspendisse nunc et. Dictum enim amet non justo eget vulputate ornare sollicitudin sed integer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PSST Section ─── */
function PSSTSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* PSST Header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-9xl font-[900] text-gray-900 mb-4" style={{ fontWeight: 900 }}>
            {t("about.psst.heading")}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            {t("about.psst.intro")}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Benefits List */}
          <div>
            <h3 className="font-display text-2xl md:text-5xl font-700 text-gray-900 mb-12">
              {t("about.psst.whyTitle")}
            </h3>
            <div className="space-y-8">
              {t("about.psst.benefits").map((benefit: any, index: number) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 -mt-2">
                    <div className="bg-yellow px-4 py-2 rounded-lg">
                      <span className="font-display text-3xl md:text-5xl font-[900] text-gray-900" style={{ fontWeight: 900 }}>
                        {benefit.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-xl font-700 text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cool Emoji Character */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Yellow circle background */}
              <div className="absolute -inset-8 bg-yellow rounded-full -z-10"></div>
              
              {/* Person image */}
              <div className="relative">
                <Image
                  src="/person.png"
                  alt="Person"
                  width={400}
                  height={400}
                  className="object-contain"
                />
                
                {/* Emoji on head */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <Image
                    src="/emoji-17.png"
                    alt="Emoji"
                    width={360}
                    height={360}
                    className="object-contain animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Emoji Grid Section ─── */
function EmojiGridSection() {
  const { t } = useLanguage();
  const emojiRows = [
    ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃"],
    ["😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚"],
    ["🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏"],
    ["😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷"],
    ["🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯"],
    ["🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮"],
    ["😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢"],
    ["😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤"],
    ["😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹"],
    ["👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼"],
  ];

  return (
    <section className="py-20 px-6 bg-yellow">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-6xl font-800 text-gray-900 mb-12">
          {t("about.emojiGrid.heading")}
        </h2>

        {/* Emoji Grid */}
        <div className="grid grid-cols-10 gap-2 md:gap-4">
          {emojiRows.map((row, rowIndex) =>
            row.map((emoji, colIndex) => {
              const delay = (rowIndex * 10 + colIndex) * 0.02;
              const animationClass = [
                'animate-float',
                'animate-float-delayed',
                'animate-scale-in',
              ][Math.floor(Math.random() * 3)];
              
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`text-3xl md:text-5xl lg:text-6xl transition-transform hover:scale-125 cursor-pointer ${animationClass}`}
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  {emoji}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Section with Benefits List ─── */
function AboutFAQSection({ faqs }: { faqs: Array<{ emoji: string; question: string; answer: string }> }) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-yellow overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Benefits List */}
          <div>
            <h2 className="font-display text-2xl md:text-5xl font-800 text-gray-900 mb-8">
              {t("about.faq.heading")}
            </h2>
            <ul className="space-y-6">
              {t("about.faq.benefits").map((benefit: any, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{benefit.emoji}</span>
                  <p className="text-lg text-gray-900 font-600 pt-1">
                    {benefit.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: FAQ Items */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-gray-900 pb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{faq.emoji}</span>
                    <h3 className="font-display text-xl md:text-2xl font-700 text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-3xl transform transition-transform duration-300" style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ↓
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="mt-4 pl-11 pr-12 animate-fade-up">
                    <p className="text-gray-800 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = t("about.testimonials.list");

  const floatingEmojis = [
    { emoji: "😀", delay: "0s" },
    { emoji: "🎉", delay: "0.5s" },
    { emoji: "💬", delay: "1s" },
    { emoji: "✨", delay: "1.5s" },
    { emoji: "🚀", delay: "2s" },
    { emoji: "💯", delay: "2.5s" },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/tlo-opinie.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Testimonials Carousel */}
          <div className="lg:col-span-8">
            {/* Header */}
            <div className="mb-12">
              <h2 className="font-display text-2xl md:text-6xl font-800 text-gray-900 mb-4">
                {t("about.testimonials.heading")}
              </h2>
              <p className="text-xl text-gray-600">
                {t("about.testimonials.subtitle")}
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-gray-100 max-w-2xl">
                {/* Emoji */}
                <div className="text-4xl md:text-6xl mb-6">
                  {testimonials[currentIndex].emoji}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                  <span className="text-gray-400 text-2xl mr-1">"</span>
                  {testimonials[currentIndex].quote}
                  <span className="text-gray-400 text-2xl ml-1">"</span>
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-display font-700 text-xl text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-14 h-14 rounded-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-14 h-14 rounded-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2 mt-6">
                {Array.from({ length: testimonials.length }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-yellow"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Floating Emojis */}
          <div className="lg:col-span-4 relative h-96 hidden lg:block">
            {floatingEmojis.map((item, index) => (
              <div
                key={index}
                className="absolute text-4xl md:text-7xl animate-float opacity-80"
                style={{
                  top: `${(index * 15) % 80}%`,
                  left: `${(index * 25) % 60}%`,
                  animationDelay: item.delay,
                  animationDuration: `${3 + (index % 3)}s`,
                }}
              >
                <div
                  className="animate-spin-slow"
                  style={{
                    animationDelay: item.delay,
                    animationDuration: `${8 + (index % 4) * 2}s`,
                  }}
                >
                  {item.emoji}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function AboutPage() {
  const { t, variant, setVariant } = useLanguage();
  
  // FAQ data - używamy pytań z about page
  const faqs = t("about.faq.questions") as Array<{ emoji: string; question: string; answer: string }>;

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      <AboutHero />
      <TeamSection />
      <PSSTSection />
      <EmojiGridSection />
      <AboutFAQSection faqs={faqs} />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
