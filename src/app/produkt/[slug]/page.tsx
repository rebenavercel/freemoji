"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import { type VariantKey } from "@/data/content";
import { useCart } from "@/context/CartContext";

// Product data
const products = {
  "cool-communication": {
    emoji: "😎",
    name: "Cool Communication",
    title: "Czym jest cyfrowa komunikacja?",
    subtitle: "Profesjonalna komunikacja dla nowoczesnych zespołów",
    price: 89,
    description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć.",
    features: [
      "Analiza tonu i kontekstu wiadomości",
      "Rekomendacje w czasie rzeczywistym",
      "Raport miesięczny",
      "Wsparcie email",
    ],
  },
  "smart-communication": {
    emoji: "😏",
    name: "Smart Communication",
    title: "Czym jest cyfrowa komunikacja?",
    subtitle: "Inteligentna komunikacja dla wymagających",
    price: 129,
    description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć.",
    features: [
      "Wszystko z Cool Communication",
      "AI-powered analiza emocji",
      "Zaawansowane statystyki",
      "Wsparcie priorytetowe",
    ],
  },
  "fun-communication": {
    emoji: "🤣",
    name: "Fun Communication",
    title: "Czym jest cyfrowa komunikacja?",
    subtitle: "Komunikacja z humorem i stylem",
    price: 199,
    description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć.",
    features: [
      "Wszystko z Smart Communication",
      "Humor detection AI",
      "Custom emoji rekomendacje",
      "Team workshop (1x miesięcznie)",
    ],
  },
  "creative-communication": {
    emoji: "🤪",
    name: "Creative Communication",
    title: "Czym jest cyfrowa komunikacja?",
    subtitle: "Kreatywna komunikacja bez granic",
    price: 249,
    description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć.",
    features: [
      "Wszystko z Fun Communication",
      "Unlimited analiza wiadomości",
      "Dedykowany account manager",
      "Custom integracje",
    ],
  },
};

/* ─── Hero Section ─── */
function ProductHero({ product }: { product: typeof products[keyof typeof products] }) {
  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-yellow/10 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Emoji & Phone */}
          <div className="flex-1 w-full flex flex-col items-center">
            <div className="text-6xl md:text-9xl mb-8 animate-scale-in">{product.emoji}</div>
            
            {/* Phone mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-yellow/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl scale-110" />
              <div className="relative z-10 w-48 h-72 md:w-64 md:h-96 bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  <div className="text-6xl md:text-8xl rotate-12">🍌🍌</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="font-display text-3xl md:text-6xl font-800 text-gray-900 mb-6">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl font-600 text-gray-800 mb-4">
              {product.subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>
            
            {/* Price */}
            <div className="mb-8">
              <span className="font-display text-6xl font-900 text-gray-900">{product.price} zł</span>
              <span className="text-gray-600 text-lg ml-2">/ jednorazowo</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <button className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 text-lg px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg">
                Kup teraz
              </button>
              <a 
                href="#features"
                className="bg-gray-900 hover:bg-gray-800 text-white font-700 text-lg px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
              >
                Dowiedz się więcej
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features Section ─── */
function FeaturesSection({ product }: { product: typeof products[keyof typeof products] }) {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-800 text-gray-900 mb-4">
            Co otrzymujesz?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-yellow/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-yellow text-2xl">✓</span>
                <p className="text-gray-900 font-600 text-lg">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works Section ─── */
function HowItWorks() {
  const steps = [
    {
      num: "1",
      emoji: "📝",
      title: "Zapisz się",
      desc: "Wybierz plan i załóż konto w 2 minuty",
    },
    {
      num: "2",
      emoji: "🔗",
      title: "Podłącz komunikatory",
      desc: "Zintegruj swoje narzędzia komunikacji",
    },
    {
      num: "3",
      emoji: "📊",
      title: "Otrzymuj analizy",
      desc: "Uzyskaj natychmiastowy feedback i raporty",
    },
    {
      num: "4",
      emoji: "🚀",
      title: "Komunikuj lepiej",
      desc: "Stosuj rekomendacje i poprawiaj relacje",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
            Jak to działa?
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-20 h-20 mx-auto mb-5 bg-yellow rounded-2xl flex items-center justify-center text-4xl relative">
                {s.emoji}
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white rounded-full text-xs font-700 flex items-center justify-center">
                  {s.num}
                </span>
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

/* ─── Main Page ─── */
export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [variant, setVariant] = useState<VariantKey>("normalne");
  const { addItem } = useCart();

  const product = products[slug as keyof typeof products];

  // FAQ data
  const faqs = [
    { emoji: "🤔", question: "Czym dokładnie jest cyfrowa mowa ciała?", answer: "To sposób wyrażania emocji, intencji i tonu w komunikacji pisemnej — za pomocą emoji, interpunkcji, formatowania tekstu, czasu odpowiedzi i innych elementów, które zastępują mimikę i gesty w rozmowie twarzą w twarz." },
    { emoji: "👥", question: "Dla kogo jest freemoji?", answer: "Dla każdego, kto komunikuje się pisemnie w pracy lub życiu prywatnym. Szczególnie polecamy osobom z działów HR, sprzedaży, liderom zespołów, coachom i trenerom." },
    { emoji: "📚", question: "Jak wygląda szkolenie?", answer: "Oferujemy webinary na żywo, materiały edukacyjne do samodzielnej nauki, interaktywne ćwiczenia oraz mini gry, które pomagają zrozumieć kontekst emoji w komunikacji." },
    { emoji: "💰", question: "Ile kosztuje dostęp?", answer: "Dostęp do platformy zaczyna się od 199 zł. Szczegóły cennika znajdziesz w sekcji kontakt lub pisząc do nas na kontakt@freemoji.com." },
    { emoji: "✨", question: "Czy mogę przetestować platformę?", answer: "Tak! Zapisz się na bezpłatny webinar, aby poznać nasze podejście i zobaczyć fragment platformy w akcji." },
  ];

  if (!product) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-800 text-gray-900 mb-4">Produkt nie znaleziony</h1>
          <a href="/produkty" className="text-yellow hover:text-yellow-dark font-600">
            Wróć do listy produktów
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      <ProductHero product={product} />
      <FeaturesSection product={product} />
      <HowItWorks />
      <FAQSection faqs={faqs} />
      <ContactForm />
      <Footer />
    </main>
  );
}
