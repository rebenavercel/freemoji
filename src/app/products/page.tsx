"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { type VariantKey } from "@/data/content";

/* ─── Hero Section with People ─── */
function ProductsHero() {
  const { t } = useLanguage();
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gray-50 py-12 md:py-20">
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
        style={{
          backgroundImage: `url("/noise.png")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Yellow accent blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow/20 rounded-full blur-[120px] animate-float-delayed" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="relative flex flex-col items-center justify-center text-center">
          {/* Text Content */}
          <div className="relative z-20 mb-6 animate-fade-up">
            <p className="text-sm md:text-base text-gray-600 mb-4 font-500 max-w-2xl mx-auto">
              {t("products.hero.subtitle", "normalne")}
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-900 text-gray-900 leading-tight tracking-tight mb-4">
              {t("products.hero.title1", "normalne")}
              <br />
              <span className="relative inline-block">
                {t("products.hero.title2", "normalne")}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none">
                  <path d="M2 8c60-6 120-6 180-2s120 2 175-4" stroke="#FFD600" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>

          {/* People Image - overlays the text */}
          <div className="relative z-10 w-full max-w-3xl md:max-w-5xl -mt-16 animate-scale-in">
            <div className="relative aspect-[2.2/1] w-full">
              <Image
                src="/people.png"
                alt="Ludzie z różnymi urządzeniami"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-30 mt-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a 
              href="#products" 
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-700 text-base transition-all hover:scale-105 hover:shadow-xl"
            >
              {t("products.hero.cta", "normalne")}
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="ml-1">
                <path d="M10 4v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Products List Section ─── */
function ProductsList() {
  const { t } = useLanguage();
  const products = [
    {
      emoji: "😎",
      fruit: "🍊🍊",
      title: t("products.list.betterMessage.title", "normalne"),
      description: t("products.list.betterMessage.description", "normalne"),
      price: "89",
      available: true,
      link: "/products/bettermessage",
    },
    // {
    //   emoji: "😏",
    //   fruit: "🍇🍇",
    //   title: t("products.list.smartComm.title"),
    //   description: t("products.list.smartComm.description"),
    //   price: "129",
    //   available: false,
    // },
    // {
    //   emoji: "🤣",
    //   fruit: "🍉🍉",
    //   title: t("products.list.funComm.title"),
    //   description: t("products.list.funComm.description"),
    //   price: "199",
    //   available: false,
    // },
    // {
    //   emoji: "🎯",
    //   fruit: "🍎🍎",
    //   title: t("products.list.directComm.title"),
    //   description: t("products.list.directComm.description"),
    //   price: "179",
    //   available: false,
    // },
  ];

  return (
    <section id="products" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {products.map((product, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
              !product.available ? "opacity-60" : ""
            }`}
          >
            {/* Left: Big Emoji */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="text-4xl md:text-9xl">{product.emoji}</div>
            </div>

            {/* Center: Phone with Bananas */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative">
                {/* Yellow blob background */}
                <div className="absolute inset-0 bg-yellow/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl scale-110" />
                
                {/* Phone mockup placeholder */}
                <div className="relative z-10 w-32 h-64 md:w-48 md:h-80 bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] flex items-center justify-center overflow-hidden">
                    {/* Fruit illustration */}
                    <div className="text-4xl md:text-7xl rotate-12">{product.fruit}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6">
              <h3 className="font-display text-2xl lg:text-3xl font-800 text-gray-900 mb-4">
                {product.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Buttons or Coming Soon */}
              {product.available ? (
                <div className="flex flex-wrap gap-3">
                  <a
                    href={product.link}
                    className="bg-yellow hover:bg-yellow-dark text-gray-900 px-8 py-4 rounded-full font-800 text-base transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t("products.seeProduct", "normalne")}
                  </a>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-full font-700 text-sm">
                  <span>{t("products.comingSoon", "normalne")}</span>
                  <span className="text-xs">({product.price} {t("products.currency", "normalne")})</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Product Variants / Pricing Tiers ─── */
function ProductVariants() {
  const { t } = useLanguage();
  const { addItem, setIsCartOpen, items } = useCart();
  
  const tiers = [
    {
      name: "Starter",
      description: "Perfect for individuals starting their communication journey",
      price: 29,
      period: "one-time",
      features: [
        "Basic communication style assessment",
        "Emotion detection in 5 sample messages",
        "Tone analysis report (PDF)",
        "Basic emoji recommendations",
        "Email support"
      ],
      highlighted: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      description: "Most popular for professionals who communicate daily",
      price: 79,
      period: "one-time",
      badge: "RECOMMENDED",
      features: [
        "Everything in Starter, plus:",
        "Advanced communication style assessment",
        "Emotion & context detection in 20 messages",
        "Detailed tone perception analysis",
        "Recipient type adaptation suggestions",
        "Custom emoji & expression recommendations",
        "Communication improvement roadmap",
        "Priority email & chat support",
        "30-day follow-up assessment"
      ],
      highlighted: true,
      cta: "Get Professional"
    },
    {
      name: "Team",
      description: "For teams that want to communicate better together",
      price: 199,
      period: "per team (up to 5 people)",
      features: [
        "Everything in Professional, plus:",
        "Team communication dynamics analysis",
        "Individual assessments for each member",
        "Team communication patterns report",
        "Cross-cultural communication insights",
        "1-hour video consultation with expert",
        "3-month progress tracking",
        "Dedicated support manager",
        "Custom workshop materials"
      ],
      highlighted: false,
      cta: "Get Team Plan"
    }
  ];

  const handleAddToCart = (tier: typeof tiers[0]) => {
    addItem({
      id: `bettermessage-${tier.name.toLowerCase()}`,
      name: tier.name,
      price: tier.price,
      variant: "BetterMessage",
      description: tier.description,
    });
    setIsCartOpen(true);
  };

  const isInCart = (tierName: string) => {
    return items.some((item) => item.id === `bettermessage-${tierName.toLowerCase()}`);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-900 text-gray-900 mb-4">
            Choose Your Communication Assessment
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Get insights into your communication style, understand how your messages are perceived, and learn to communicate better with everyone.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl p-8 transition-all ${
                tier.highlighted
                  ? "bg-gray-900 text-white shadow-2xl scale-105 border-4 border-yellow"
                  : "bg-white text-gray-900 shadow-lg hover:shadow-xl border-2 border-gray-100"
              }`}
            >
              {/* Badge for highlighted tier */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow text-gray-900 px-4 py-1 rounded-full text-xs font-800 tracking-wide">
                  {tier.badge}
                </div>
              )}

              {/* Tier Name */}
              <h3 className={`font-display text-2xl font-800 mb-2 ${tier.highlighted ? "text-white" : "text-gray-900"}`}>
                {tier.name}
              </h3>
              
              {/* Description */}
              <p className={`text-sm mb-6 ${tier.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`font-display text-5xl font-900 ${tier.highlighted ? "text-yellow" : "text-gray-900"}`}>
                    ${tier.price}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${tier.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {tier.period}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleAddToCart(tier)}
                className={`w-full py-4 rounded-full font-700 text-center transition-all hover:scale-105 mb-8 ${
                  tier.highlighted
                    ? "bg-yellow hover:bg-yellow-dark text-gray-900"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                } ${isInCart(tier.name) ? "opacity-75" : ""}`}
              >
                {isInCart(tier.name) ? "Added to Cart ✓" : tier.cta}
              </button>

              {/* Features List */}
              <ul className="space-y-3 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg 
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlighted ? "text-yellow" : "text-green-500"}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${tier.highlighted ? "text-gray-200" : "text-gray-700"} ${feature.includes("Everything in") ? "font-700" : ""}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All assessments are conducted by our AI-powered analysis system with human expert review. 
            <br className="hidden md:block" />
            Results delivered within 48 hours of submission.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function ProductsPage() {
  const { t, variant, setVariant } = useLanguage();

  // FAQ data - get from translations - force "normalne" variant
  const faqQuestions = t("home.faq.questions", "normalne") as Array<{ question: string; answer: string }>;
  const faqs = [
    { emoji: "🤔", ...faqQuestions[0] },
    { emoji: "👥", ...faqQuestions[1] },
    { emoji: "📚", ...faqQuestions[2] },
    { emoji: "💰", ...faqQuestions[3] },
    { emoji: "✨", ...faqQuestions[4] },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      <ProductsHero />
      <ProductsList />
      <ProductVariants />
      <FAQSection faqs={faqs} forceNormale={true} />
      <ContactForm />
      <Footer />
    </main>
  );
}
