"use client";

import { useState } from "react";
import Image from "next/image";
import type React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { content, contentEn } from "@/data/content";

/* ─── Hero Section ─── */
function HeroSection() {
  const { language } = useLanguage();
  const { addItem, setIsCartOpen } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<'starter' | 'professional' | 'team'>('professional');
  const [hoveredVariant, setHoveredVariant] = useState<string | null>(null);

  const betterMessage = language === "pl" ? content.normalne.betterMessage : contentEn.normalne.betterMessage;
  const emptyVariant = {
    name: "",
    description: "",
    features: [] as string[],
    cta: ""
  };
  const variantData = betterMessage?.variants ?? {
    starter: emptyVariant,
    professional: emptyVariant,
    team: emptyVariant
  };

  const variants = {
    starter: {
      name: variantData.starter.name,
      price: 89,
      originalPrice: 178,
      features: variantData.starter.features,
      description: variantData.starter.description,
      recommended: false,
      billing: 'one-time',
      cta: variantData.starter.cta,
      priceNote: undefined
    },
    professional: {
      name: variantData.professional.name,
      price: 129,
      originalPrice: 258,
      features: Array.isArray(variantData.professional.features) ? variantData.professional.features : [],
      description: variantData.professional.description,
      recommended: true,
      billing: 'monthly',
      cta: variantData.professional.cta,
      priceNote: undefined
    },
    team: {
      name: variantData.team.name,
      price: 689,
      originalPrice: 1378,
      features: Array.isArray(variantData.team.features) ? variantData.team.features : [],
      description: variantData.team.description,
      recommended: false,
      priceNote: 'per team (up to 5 people)',
      billing: 'monthly',
      cta: variantData.team.cta
    }
  };

  const currentVariant = variants[selectedVariant];
  const discount = Math.round(((currentVariant.originalPrice - currentVariant.price) / currentVariant.originalPrice) * 100);
  
  const handleAddToCart = () => {
    const cartItem = {
      id: `bettermessage-${selectedVariant}`,
      name: `BetterMessage - ${currentVariant.name}`,
      price: currentVariant.price,
      variant: selectedVariant,
      description: currentVariant.description
    };
    
    addItem(cartItem);
    setIsCartOpen(true);
  };
  
  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Background Color Block - full height but narrower width */}
      <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gray-900 rounded-r-[60px] z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full max-w-sm md:max-w-lg mx-auto">
              <Image
                src="/productnobg.png"
                alt="BetterMessage Product"
                width={600}
                height={750}
                className="w-full h-auto drop-shadow-2xl relative z-20"
                priority
              />
            </div>
          </div>

          {/* Right: E-commerce Content */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-3xl border-2 border-gray-900 p-8 lg:p-10 shadow-2xl">
              {/* Product Title */}
              <h1 className="font-display text-3xl md:text-4xl font-900 text-gray-900 mb-2">
                {betterMessage.heroHeading}
              </h1>
              <p className="text-gray-600 mb-6">
                {betterMessage.heroSubtitle}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">(500+ reviews)</span>
              </div>

              {/* Variant Selection */}
              <div className="mb-6">
                <label className="block text-sm font-700 text-gray-900 mb-3">{betterMessage.choosePackage}</label>
                <div className="flex gap-3">
                  {Object.entries(variants).map(([key, variant]) => (
                    <div key={key} className="flex-1 relative">
                      {variant.recommended && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow px-3 py-1 rounded-full text-xs font-700 text-gray-900 whitespace-nowrap z-10">
                          RECOMMENDED
                        </div>
                      )}
                      <button 
                        onClick={() => setSelectedVariant(key as 'starter' | 'professional' | 'team')}
                        className={`w-full border-2 rounded-2xl p-4 text-center transition-all ${
                          selectedVariant === key 
                            ? 'border-yellow bg-yellow scale-105 shadow-lg' 
                            : 'border-gray-900 bg-white hover:bg-gray-50 hover:scale-105'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <div className={`font-700 ${selectedVariant === key ? 'text-gray-900' : 'text-gray-900'}`}>
                            {variant.name}
                          </div>
                          <div 
                            className="relative group cursor-help"
                            onMouseEnter={() => setHoveredVariant(key)}
                            onMouseLeave={() => setHoveredVariant(null)}
                          >
                            <svg className="w-4 h-4 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {hoveredVariant === key && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl z-50">
                                <div className="font-700 mb-2">{variant.description}</div>
                                <ul className="space-y-1 text-left">
                                  {variant.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-1">
                                      <span className="text-yellow shrink-0">✓</span>
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={`text-sm ${selectedVariant === key ? 'text-gray-900' : 'text-gray-600'}`}>
                          ${variant.price}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-900 text-gray-900">${currentVariant.price}</span>
                  {currentVariant.billing === 'monthly' && <span className="text-xl text-gray-600">/ month</span>}
                  <span className="text-lg text-gray-500 line-through">${currentVariant.originalPrice}</span>
                  <span className="bg-yellow px-3 py-1 rounded-full text-sm font-700">{discount}% OFF</span>
                </div>
                <p className="text-sm text-gray-600">
                  {currentVariant.billing === 'one-time' ? 'One-time payment' : 'Monthly subscription'}
                  {currentVariant.priceNote && ` • ${currentVariant.priceNote}`}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {currentVariant.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                onClick={handleAddToCart}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-700 text-lg py-5 rounded-full transition-all hover:scale-105 shadow-xl hover:shadow-2xl mb-4"
              >
                {currentVariant.cta} 🛒
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>30-day guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits Section ─── */
function BenefitsSection() {
  const { t, language } = useLanguage();
  
  // Get chatExamples from base content (not variant-specific)
  const chatExamples = language === "pl" 
    ? {
        chat1: {
          message1: "Pamiętasz babcię Halinę?",
          message2: "Dzisiaj zmarła 🤣🤣🤣",
          time1: "18:50",
          reply1: "Kondolencje",
          replyTime1: "18:50",
          reply2: "Nic nie wiedziałam 🤣🤣🤣",
          replyTime2: "18:55",
          message3: "Wczoraj ją do szpitala zabrali a dzisiaj takie wieści 🤣🤣🤣"
        },
        chat2: {
          message1: "Wujek Marek zmarł\n💀",
          message2: "Planujemy go skremować\n🔥🔥💀💀"
        },
        chat3: {
          message1: "Dzisiaj umarł wujek Janek 🤣🤣🤣\n🤣🤣🤣",
          reply1: "Tato to nie są smutne emotki",
          message2: "Jak to nie są"
        }
      }
    : {
        chat1: {
          message1: "Do you remember grandma Halina?",
          message2: "She passed away today 🤣🤣🤣",
          time1: "18:50",
          reply1: "My condolences",
          replyTime1: "18:50",
          reply2: "I had no idea 🤣🤣🤣",
          replyTime2: "18:55",
          message3: "They took her to the hospital yesterday and today we got this news 🤣🤣🤣"
        },
        chat2: {
          message1: "Uncle Mark passed away\n💀",
          message2: "We're planning to cremate him\n🔥🔥💀💀"
        },
        chat3: {
          message1: "Uncle John died today 🤣🤣🤣\n🤣🤣🤣",
          reply1: "Dad those aren't sad emojis",
          message2: "What do you mean they aren't"
        }
      };
  
  const benefits = [
    {
      title: t("betterMessage.benefits.title1", "normalne"),
      description: t("betterMessage.benefits.desc1", "normalne"),
    },
    {
      title: t("betterMessage.benefits.title2", "normalne"),
      description: t("betterMessage.benefits.desc2", "normalne"),
    },
    {
      title: t("betterMessage.benefits.title3", "normalne"),
      description: t("betterMessage.benefits.desc3", "normalne"),
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
                {chatExamples.chat1.message1}
                <br />
                {chatExamples.chat1.message2} {" "}
                <span className="text-xs text-gray-400">{chatExamples.chat1.time1}</span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                  <div className="text-sm">
                    {chatExamples.chat1.reply1}{" "}
                    <span className="text-xs opacity-80">{chatExamples.chat1.replyTime1}</span>
                  </div>
                </div>
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                  <div className="text-sm">
                    {chatExamples.chat1.reply2}{" "}
                    <span className="text-xs opacity-80">{chatExamples.chat1.replyTime2}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {chatExamples.chat1.message3}
              </div>
            </div>

            {/* Chat 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-start gap-3">
              <div className="bg-gray-200 rounded-2xl px-4 py-2">
                <div className="text-sm text-gray-800 whitespace-pre-line">
                  {chatExamples.chat2.message1}
                </div>
              </div>
              <div className="bg-gray-200 rounded-2xl px-4 py-2">
                <div className="text-sm text-gray-800 whitespace-pre-line">
                  {chatExamples.chat2.message2}
                </div>
              </div>
            </div>

            {/* Chat 3 - Dark mode */}
            <div className="bg-gray-900 rounded-2xl p-4 shadow-md">
              <div className="text-white text-sm mb-3 whitespace-pre-line">
                {chatExamples.chat3.message1}
              </div>
              <div className="bg-gray-700 text-white rounded-2xl px-4 py-2 inline-block mb-2">
                <div className="text-sm">{chatExamples.chat3.reply1}</div>
              </div>
              <div className="text-white text-sm">{chatExamples.chat3.message2}</div>
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
/* ─── Product Variants / Pricing Tiers ─── */
function ProductVariants() {
  const { addItem, setIsCartOpen, items } = useCart();
  const { language } = useLanguage();
  const betterMessage = language === "pl" ? content.normalne.betterMessage : contentEn.normalne.betterMessage;
  
  const emptyVariant = {
    name: "",
    description: "",
    features: [] as string[],
    cta: ""
  };
  const variantData = betterMessage?.variants ?? {
    starter: emptyVariant,
    professional: emptyVariant,
    team: emptyVariant
  };
  
  const tiers = [
    {
      name: variantData.starter.name,
      description: variantData.starter.description,
      price: 89,
      priceDisplay: "$89",
      period: "one-time",
      features: Array.isArray(variantData.starter.features) ? variantData.starter.features : [],
      highlighted: false,
      cta: variantData.starter.cta
    },
    {
      name: variantData.professional.name,
      description: variantData.professional.description,
      price: 129,
      priceDisplay: "$129",
      period: "monthly",
      badge: "RECOMMENDED",
      features: Array.isArray(variantData.professional.features) ? variantData.professional.features : [],
      highlighted: true,
      cta: variantData.professional.cta
    },
    {
      name: variantData.team.name,
      description: variantData.team.description,
      price: 689,
      priceDisplay: "$689",
      period: "monthly • per team (up to 5 people)",
      features: Array.isArray(variantData.team.features) ? variantData.team.features : [],
      highlighted: false,
      cta: variantData.team.cta
    }
  ];

  const handleAddToCart = (tier: typeof tiers[0]) => {
    addItem({
      id: `plan-${tier.name.toLowerCase()}`,
      name: tier.name,
      price: tier.price,
      variant: "BetterMessage",
      description: tier.description,
    });
    setIsCartOpen(true);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-900 text-gray-900 mb-4">
            {betterMessage.pricingHeading}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {betterMessage.pricingSubtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => {
            const isInCart = items.some(item => item.id === `plan-${tier.name.toLowerCase()}`);
            
            return (
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
                    {tier.priceDisplay}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${tier.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {tier.period}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleAddToCart(tier)}
                disabled={isInCart}
                className={`w-full py-4 rounded-full font-700 text-center transition-all mb-8 ${
                  isInCart
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : tier.highlighted
                    ? "bg-yellow hover:bg-yellow-dark text-gray-900 hover:scale-105"
                    : "bg-gray-900 hover:bg-gray-800 text-white hover:scale-105"
                }`}
              >
                {isInCart ? betterMessage.addedToCart : `${tier.cta} 🛒`}
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

              {/* Stripe Badge */}
              <div className={`mt-6 text-center text-xs flex items-center justify-center gap-2 ${tier.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                <span>Secure payments</span>
                <svg
                  className="h-3"
                  viewBox="0 0 60 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 01-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 013.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 01-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 01-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 00-4.1-1.06c-.86 0-1.44.25-1.44.93 0 1.85 6.29.97 6.29 5.88z"
                    fill={tier.highlighted ? "#9CA3AF" : "#6772E5"}
                  />
                </svg>
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            {betterMessage.assessmentsNote}
          </p>
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
          {t("betterMessage.emojiWarning.title", "normalne")} <span className="font-[900]" style={{ fontWeight: 900 }}>{t("betterMessage.emojiWarning.title2", "normalne")}</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          {t("betterMessage.emojiWarning.description", "normalne")}
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
                {t("betterMessage.video.title", "normalne")}
                <br />
                {t("betterMessage.video.title2", "normalne")}
              </h2>

              {/* Yellow badge */}
              <div className="bg-yellow inline-block px-8 py-4 rounded-2xl mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl md:text-4xl font-[900] text-gray-900" style={{ fontWeight: 900 }}>
                    {t("betterMessage.video.badge1", "normalne")}
                  </span>
                  <div>
                    <p className="font-display text-lg font-700 text-gray-900">
                      {t("betterMessage.video.badge2", "normalne")}
                      <br />
                      {t("betterMessage.video.badge3", "normalne")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-700 text-lg transition-all border-4 border-gray-900 hover:border-yellow"
              >
                {t("betterMessage.video.cta", "normalne")}
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
                    {t("betterMessage.video.previewText", "normalne")}
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
  const benefits = t("betterMessage.psst.benefits", "normalne") as Array<{
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
            {t("betterMessage.psst.heading", "normalne")}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            {t("betterMessage.psst.intro", "normalne")}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Benefits List */}
          <div>
            <h3 className="font-display text-2xl md:text-5xl font-700 text-gray-900 mb-12">
              {t("betterMessage.psst.whyTitle", "normalne")}
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

  const testimonials = t("betterMessage.testimonials.items", "normalne") as Array<{
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
                {t("betterMessage.testimonials.title", "normalne")}
              </h2>
              <p className="text-xl text-gray-600">
                {t("betterMessage.testimonials.subtitle", "normalne")}
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
              {t("betterMessage.contact.heading", "normalne")}
            </h2>
            <p className="text-gray-500 text-sm">{t("betterMessage.contact.reminder", "normalne")}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Subject */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p className="flex flex-wrap items-center gap-2">
                <span>{t("betterMessage.contact.hello", "normalne")}</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("betterMessage.contact.namePlaceholder", "normalne")}
                  className="inline-block border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-1 min-w-[200px] bg-transparent transition-colors"
                  required
                />
                <span>{t("betterMessage.contact.andIHave", "normalne")}</span>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t("betterMessage.contact.subjectPlaceholder", "normalne")}
                  className="inline-block border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-1 min-w-[250px] bg-transparent transition-colors"
                  required
                />
                <span>,</span>
              </p>

              <p className="flex flex-wrap items-start gap-2">
                <span>{t("betterMessage.contact.namely", "normalne")}</span>
              </p>

              {/* Message Area */}
              <div className="pl-4">
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("betterMessage.contact.messagePlaceholder", "normalne")}
                  rows={4}
                  className="w-full border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-2 bg-transparent resize-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="text-lg text-gray-700 pt-4">
              <p className="flex flex-wrap items-center gap-2">
                <span>{t("betterMessage.contact.replyTo", "normalne")}</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("betterMessage.contact.emailPlaceholder", "normalne")}
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
                {t("betterMessage.contact.consent", "normalne")}
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t("betterMessage.contact.submit", "normalne")}
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
  const { t, variant, setVariant } = useLanguage();
  
  // FAQ data - używamy tych samych pytań co na home page
  const faqQuestions = t("home.faq.questions", "normalne") as Array<{ question: string; answer: string }>;
  const faqs = faqQuestions.map((faq, index) => ({
    emoji: ["🤔", "👥", "📚", "💰", "✨"][index % 5],
    ...faq
  }));
  
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant={variant} setVariant={setVariant} />
      <HeroSection />
      <ProductVariants />
      <BenefitsSection />
      <FAQSection faqs={faqs} forceNormale={true} />
      <PSSTSection />
      <VideoSection />
      <EmojiWarningSection />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
