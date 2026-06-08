"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  emoji: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-yellow overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Animated Emojis */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main thinking emoji in center */}
              <div className="text-[180px] leading-none z-10">🤔</div>
              
              {/* Orbiting emojis */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Orbital path visualization */}
                <div className="w-[400px] h-[400px] border-2 border-gray-900/10 rounded-full"></div>
                
                {/* Emoji 1 */}
                <div className="absolute text-6xl animate-orbit-1">
                  😳
                </div>
                
                {/* Emoji 2 */}
                <div className="absolute text-5xl animate-orbit-2">
                  🤗
                </div>
                
                {/* Emoji 3 */}
                <div className="absolute text-5xl animate-orbit-3">
                  🤓
                </div>
                
                {/* Emoji 4 */}
                <div className="absolute text-5xl animate-orbit-4">
                  😌
                </div>
              </div>
            </div>

            {/* Title on left side */}
            <div className="absolute top-8 left-0">
              <h2 className="font-display text-7xl font-800 text-gray-900 mb-2">
                {t("home.faq.title")}
              </h2>
              <p className="text-xl text-gray-800">
                {t("home.faq.subtitle")}
              </p>
              <div className="mt-4">
                <Image
                  src="/logo.svg"
                  alt="freemoji"
                  width={160}
                  height={49}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Right: FAQ Items */}
          <div className="flex flex-col gap-4">
            {/* Mobile title */}
            <div className="lg:hidden mb-8">
              <h2 className="font-display text-2xl md:text-4xl font-800 text-gray-900 mb-2">
                {t("home.faq.title")}
              </h2>
              <p className="text-base md:text-xl text-gray-800">
                {t("home.faq.subtitle")}
              </p>
              <div className="mt-4">
                <Image
                  src="/logo.svg"
                  alt="freemoji"
                  width={160}
                  height={49}
                  className="h-8 w-auto"
                />
              </div>
            </div>

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
