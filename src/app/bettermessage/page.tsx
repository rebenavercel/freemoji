"use client";

import { useState } from "react";
import Image from "next/image";
import type React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

/* ─── Hero Section ─── */
function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] w-full max-w-sm md:max-w-lg mx-auto">
              <Image
                src="/media/hero-image.png"
                alt="BetterMessage Dashboard"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="font-display text-3xl md:text-6xl font-800 text-gray-900 mb-4 md:mb-6">
              {t("betterMessage.hero.heading")}
            </h1>
            <p className="text-lg md:text-2xl font-600 text-gray-800 mb-3 md:mb-4">
              {t("betterMessage.hero.subtitle")}
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              {t("betterMessage.hero.description")}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <button className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 text-lg px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg">
                {t("betterMessage.hero.cta")}
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-gray-500 text-sm">{t("betterMessage.hero.by")}</span>
              <Image
                src="/logo.svg"
                alt="freemoji"
                width={120}
                height={37}
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits Section ─── */
function BenefitsSection() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      title: t("betterMessage.benefits.title1"),
      description: t("betterMessage.benefits.desc1"),
    },
    {
      title: t("betterMessage.benefits.title2"),
      description: t("betterMessage.benefits.desc2"),
    },
    {
      title: t("betterMessage.benefits.title3"),
      description: t("betterMessage.benefits.desc3"),
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Chat Examples */}
          <div className="relative bg-yellow rounded-3xl p-8 lg:p-12 flex flex-col justify-center gap-8">
            {/* Chat 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <div className="text-sm text-gray-500 mb-2">
                Pamiętasz babcię Halinę?
                <br />
                Dzisiaj zmarła 😭😭😭{" "}
                <span className="text-xs text-gray-400">18:50</span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                  <div className="text-sm">
                    Kondolencje{" "}
                    <span className="text-xs opacity-80">18:50</span>
                  </div>
                </div>
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                  <div className="text-sm">
                    Nic nie wiedziałam 😭😭😭{" "}
                    <span className="text-xs opacity-80">18:55</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Wczoraj ją do szpitala zabrali a dzisiaj takie wieści 😭😭😭
              </div>
            </div>

            {/* Chat 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-start gap-3">
              <div className="bg-gray-200 rounded-2xl px-4 py-2">
                <div className="text-sm text-gray-800">
                  Wujek Marek zmarł
                  <br />
                  💀
                </div>
              </div>
              <div className="bg-gray-200 rounded-2xl px-4 py-2">
                <div className="text-sm text-gray-800">
                  Planujemy go skremować
                  <br />
                  🔥🔥💀💀
                </div>
              </div>
            </div>

            {/* Chat 3 - Dark mode */}
            <div className="bg-gray-900 rounded-2xl p-4 shadow-md">
              <div className="text-white text-sm mb-3">
                Dzisiaj umarł wujek Janek 🤣🤣🤣
                <br />
                🤣🤣🤣
              </div>
              <div className="bg-gray-700 text-white rounded-2xl px-4 py-2 inline-block mb-2">
                <div className="text-sm">Tato to nie są smutne emotki</div>
              </div>
              <div className="text-white text-sm">Jak to nie są</div>
            </div>
          </div>

          {/* Right: Benefits List */}
          <div className="flex flex-col gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-display text-3xl md:text-4xl font-700 text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing Section ─── */
function PricingSection() {
  const { addItem } = useCart();
  const { t } = useLanguage();
  const [addedPlan, setAddedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      variant: t("betterMessage.pricing.variant1.variant"),
      name: t("betterMessage.pricing.variant1.name"),
      price: t("betterMessage.pricing.variant1.price"),
      period: t("betterMessage.pricing.variant1.period"),
      description: t("betterMessage.pricing.variant1.description"),
      ctaText: t("betterMessage.pricing.variant1.cta"),
      highlighted: false,
    },
    {
      variant: t("betterMessage.pricing.variant2.variant"),
      name: t("betterMessage.pricing.variant2.name"),
      price: t("betterMessage.pricing.variant2.price"),
      period: t("betterMessage.pricing.variant2.period"),
      description: t("betterMessage.pricing.variant2.description"),
      ctaText: t("betterMessage.pricing.variant2.cta"),
      highlighted: true,
    },
    {
      variant: t("betterMessage.pricing.variant3.variant"),
      name: t("betterMessage.pricing.variant3.name"),
      price: t("betterMessage.pricing.variant3.price"),
      period: t("betterMessage.pricing.variant3.period"),
      description: t("betterMessage.pricing.variant3.description"),
      ctaText: t("betterMessage.pricing.variant3.cta"),
      highlighted: false,
    },
  ];

  const handleAddToCart = (plan: typeof pricingPlans[0]) => {
    const priceNum = parseFloat(plan.price.replace("$", ""));
    addItem({
      id: `plan-${plan.name.toLowerCase()}`,
      name: plan.name,
      price: priceNum,
      variant: plan.variant,
      description: plan.description,
    });
    setAddedPlan(plan.name);
    setTimeout(() => setAddedPlan(null), 2000);
  };

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display text-2xl md:text-6xl font-800 text-gray-900 mb-3 md:mb-4">
            {t("betterMessage.pricing.header")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("betterMessage.pricing.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl border-2 p-8 flex flex-col ${
                plan.highlighted
                  ? "border-yellow shadow-xl scale-105"
                  : "border-gray-200 shadow-lg"
              }`}
            >
              {/* Best Value Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow text-gray-900 px-6 py-2 rounded-full font-700 text-sm shadow-lg">
                  {t("betterMessage.pricing.bestChoice")}
                </div>
              )}

              {/* Variant Label */}
              <div className="text-gray-400 text-sm font-600 mb-2">
                {plan.variant}
              </div>

              {/* Plan Name */}
              <h3 className="font-display text-2xl md:text-4xl font-800 text-gray-900 mb-4 md:mb-6">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl md:text-6xl font-800 text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-lg">{plan.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-justify mb-8 flex-grow">
                {plan.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => handleAddToCart(plan)}
                disabled={addedPlan === plan.name}
                className={`w-full py-4 px-6 rounded-full font-700 text-sm transition-all ${
                  addedPlan === plan.name
                    ? "bg-green-500 text-white"
                    : "bg-yellow hover:bg-yellow-dark text-gray-900 hover:scale-105"
                }`}
              >
                {addedPlan === plan.name ? t("betterMessage.pricing.addedToCart") : `${plan.ctaText} 🛒`}
              </button>

              {/* Stripe Badge */}
              <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                <span>{t("betterMessage.pricing.securePayments")}</span>
                <svg
                  className="h-4"
                  viewBox="0 0 60 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 01-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 013.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 01-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 01-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 00-4.1-1.06c-.86 0-1.44.25-1.44.93 0 1.85 6.29.97 6.29 5.88z"
                    fill="#6772E5"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Emoji Warning Section ─── */
function EmojiWarningSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Large Emojis */}
        <div className="flex justify-center gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="text-6xl md:text-9xl animate-float">🤣</div>
          <div className="text-6xl md:text-9xl animate-float-delayed">😭</div>
          <div className="text-6xl md:text-9xl animate-float">😂</div>
          <div className="text-6xl md:text-9xl animate-float-delayed">🥺</div>
        </div>

        {/* Main Message */}
        <h2 className="font-display text-2xl md:text-5xl lg:text-6xl font-700 text-gray-900 mb-4 md:mb-6 leading-tight">
          {t("betterMessage.emojiWarning.title")} <span className="font-[900]" style={{ fontWeight: 900 }}>{t("betterMessage.emojiWarning.title2")}</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          {t("betterMessage.emojiWarning.description")}
        </p>
      </div>
    </section>
  );
}

/* ─── Video Section ─── */
function VideoSection() {
  const { t } = useLanguage();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 md:py-40 px-6 overflow-hidden">
        {/* Full screen background image */}
        <div className="absolute inset-0">
          <Image
            src="/tlo.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="font-display text-2xl md:text-6xl font-800 text-gray-900 mb-8 leading-tight">
                {t("betterMessage.video.title")}
                <br />
                {t("betterMessage.video.title2")}
              </h2>

              {/* Yellow badge */}
              <div className="bg-yellow inline-block px-8 py-4 rounded-2xl mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl md:text-4xl font-[900] text-gray-900" style={{ fontWeight: 900 }}>
                    {t("betterMessage.video.badge1")}
                  </span>
                  <div>
                    <p className="font-display text-lg font-700 text-gray-900">
                      {t("betterMessage.video.badge2")}
                      <br />
                      {t("betterMessage.video.badge3")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-700 text-lg transition-all border-4 border-gray-900 hover:border-yellow"
              >
                {t("betterMessage.video.cta")}
              </button>
            </div>

            {/* Right: Video Preview */}
            <div className="relative">
              {/* Video preview with play button */}
              <button
                onClick={() => setIsPopupOpen(true)}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl block w-full group"
              >
                <Image
                  src="/tlo.png"
                  alt="Video preview"
                  fill
                  className="object-cover"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-32 h-32 rounded-full bg-yellow flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <svg
                      className="w-16 h-16 text-gray-900 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Text overlay */}
                <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full">
                  <p className="text-sm font-600 text-gray-900">
                    {t("betterMessage.video.previewText")}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setIsPopupOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-yellow hover:bg-yellow-dark flex items-center justify-center transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Player - zastąp src swoim linkiem do wideo */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── PSST Section ─── */
function PSSTSection() {
  const { t } = useLanguage();
  const benefits = t("betterMessage.psst.benefits") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* PSST Header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-9xl font-[900] text-gray-900 mb-4" style={{ fontWeight: 900 }}>
            {t("betterMessage.psst.heading")}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            {t("betterMessage.psst.intro")}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Benefits List */}
          <div>
            <h3 className="font-display text-2xl md:text-5xl font-700 text-gray-900 mb-12">
              {t("betterMessage.psst.whyTitle")}
            </h3>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
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

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = t("betterMessage.testimonials.items") as Array<{
    emoji: string;
    quote: string;
    name: string;
    title: string;
  }>;

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
                {t("betterMessage.testimonials.title")}
              </h2>
              <p className="text-xl text-gray-600">
                {t("betterMessage.testimonials.subtitle")}
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
                {testimonials.map((_, index) => (
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

/* ─── Contact Form Section ─── */
function ContactFormSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Tutaj dodaj logikę wysyłania formularza
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Card Container */}
        <div className="bg-white rounded-3xl border-4 border-yellow p-10 md:p-16 shadow-xl">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-5xl font-800 text-gray-900 mb-3">
              {t("betterMessage.contact.heading")}
            </h2>
            <p className="text-gray-500 text-sm">{t("betterMessage.contact.reminder")}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Subject */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p className="flex flex-wrap items-center gap-2">
                <span>{t("betterMessage.contact.hello")}</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("betterMessage.contact.namePlaceholder")}
                  className="inline-block border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-1 min-w-[200px] bg-transparent transition-colors"
                  required
                />
                <span>{t("betterMessage.contact.andIHave")}</span>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t("betterMessage.contact.subjectPlaceholder")}
                  className="inline-block border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-1 min-w-[250px] bg-transparent transition-colors"
                  required
                />
                <span>,</span>
              </p>

              <p className="flex flex-wrap items-start gap-2">
                <span>{t("betterMessage.contact.namely")}</span>
              </p>

              {/* Message Area */}
              <div className="pl-4">
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("betterMessage.contact.messagePlaceholder")}
                  rows={4}
                  className="w-full border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-2 bg-transparent resize-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="text-lg text-gray-700 pt-4">
              <p className="flex flex-wrap items-center gap-2">
                <span>{t("betterMessage.contact.replyTo")}</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("betterMessage.contact.emailPlaceholder")}
                  className="inline-block border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-1 min-w-[280px] bg-transparent transition-colors"
                  required
                />
              </p>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-6">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-yellow focus:ring-yellow cursor-pointer"
                required
              />
              <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                {t("betterMessage.contact.consent")}
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t("betterMessage.contact.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function BetterMessagePage() {
  const { t } = useLanguage();
  
  // FAQ data - używamy tych samych pytań co na home page
  const faqQuestions = t("home.faq.questions") as Array<{ question: string; answer: string }>;
  const faqs = faqQuestions.map((faq, index) => ({
    emoji: ["🤔", "👥", "📚", "💰", "✨"][index % 5],
    ...faq
  }));
  
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PricingSection />
      <BenefitsSection />
      <FAQSection faqs={faqs} />
      <PSSTSection />
      <VideoSection />
      <EmojiWarningSection />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
