"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { content, contentEn, type VariantKey } from "@/data/content";

type Language = "pl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  variant: VariantKey;
  setVariant: (variant: VariantKey) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [variant, setVariant] = useState<VariantKey>("normalne");

  // Debug: Log content structure on mount
  useEffect(() => {
    console.log("📦 Content available:", {
      variants: Object.keys(content),
      normalne: content.normalne ? Object.keys(content.normalne) : "undefined",
      genz: content.genz ? Object.keys(content.genz) : "undefined"
    });
  }, []);

  // Load from localStorage after mount (client-side only)
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const savedVariant = localStorage.getItem("variant");
    
    console.log("🔵 LanguageContext: Loading from localStorage", { savedLanguage, savedVariant });
    
    if (savedLanguage === "en" || savedLanguage === "pl") {
      setLanguage(savedLanguage);
    }
    
    if (savedVariant === "normalne" || savedVariant === "genz" || savedVariant === "boomer" || savedVariant === "genalpha") {
      setVariant(savedVariant);
    }
    
    setMounted(true);
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      console.log("🟢 LanguageContext: Saving language to localStorage", language);
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  // Save variant to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      console.log("🟡 LanguageContext: Saving variant to localStorage", variant);
      localStorage.setItem("variant", variant);
    }
  }, [variant, mounted]);

  const t = useCallback((key: string): any => {
    const keys = key.split(".");
    
    // Helper function to get value from object, handling array indices
    const getValue = (obj: any, keys: string[]): any => {
      let value: any = obj;
      
      for (const k of keys) {
        if (value === undefined || value === null) {
          return undefined;
        }
        
        // Check if key ends with a number (e.g., "headline1")
        const match = k.match(/^(.+?)(\d+)$/);
        if (match) {
          const [, baseName, indexStr] = match;
          const index = parseInt(indexStr, 10) - 1; // Convert 1-based to 0-based
          
          // Try to access array element
          if (value && typeof value === "object" && baseName in value) {
            const arr = value[baseName];
            if (Array.isArray(arr) && index >= 0 && index < arr.length) {
              value = arr[index];
              continue;
            }
          }
        }
        
        // Regular object property access
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          return undefined;
        }
      }
      
      return value;
    };
    
    // Select content source based on language
    const contentSource = language === "pl" ? content : contentEn;
    
    // Remove "home." prefix if present for content lookup
    const contentKeys = key.startsWith("home.") ? key.substring(5).split(".") : keys;
    let value = getValue(contentSource[variant], contentKeys);
    
    // Debug log
    if (key.startsWith("home.hero.headline") || key.startsWith("hero.headline")) {
      console.log("🔍 t() called:", { 
        key, 
        contentKeys,
        variant, 
        language,
        value, 
        keys,
        contentKeysUsed: contentKeys
      });
    }
    
    // Fallback to translations if not found in content
    if (value === undefined) {
      value = getValue(translations[language], keys);
    }
    
    return value !== undefined ? value : key;
  }, [language, variant]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, variant, setVariant, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

const translations = {
  pl: {
    nav: {
      home: "Strona główna",
      about: "O nas",
      products: "Produkty",
      blog: "Blog",
      game: "🎮 Gra Emoji",
      contact: "Kontakt",
      language: "Język"
    },
    home: {
      hero: {
        headline1: "Dziś piszemy",
        headline2: "do siebie częściej,",
        headline3: "niż rozmawiamy",
        subtitle: "Wiadomości, e-maile, komunikatory i spotkania online stały się codziennością. Warto jednak pamiętać, że również słowo pisane ma swój ton i emocje.",
        cta: "Zapisz się na webinar",
        socialProof: "Dołącz do",
        professionals: "profesjonalistów"
      },
      stickyCta: "Zapisz się na webinar",
      problem: {
        heading: "Nie widzisz emocji? Tracisz połowę komunikatu.",
        desc: "W komunikacji zdalnej brakuje wielu sygnałów obecnych w rozmowie bezpośredniej – kontaktu wzrokowego, gestów czy mikroekspresji twarzy. W efekcie łatwo przeoczyć emocje rozmówcy, opór klienta czy niepewność współpracownika.",
        bullets: [
          "nieporozumień",
          "błędnych decyzji",
          "pogorszenia relacji zawodowych"
        ],
        consequences: [
          "Nie strać zaufania zespołu i autorytetu.",
          "Nie zauważasz oporu klientów.",
          "Przez co podejmujesz błędne decyzje."
        ]
      },
      about: {
        label: "Zatem,",
        heading: "czym jest freemoji?",
        points: [
          {
            num: "01.",
            title: "Pierwsza w Polsce platforma edukacyjna poświęcona cyfrowej mowie ciała",
            desc: "freemoji to pierwsza w Polsce platforma edukacyjna poświęcona cyfrowej mowie ciała – czyli emocjom, tonowi i znaczeniom ukrytym w komunikacji internetowej. System edukacji od wielu lat uczy nas glównie komunikacji bezpośredniej. Tymczasem współczesne życie zawodowe i prywatne w dużej mierze przeniosło się do internetu."
          },
          {
            num: "02.",
            title: "Łączymy pokolenia",
            desc: "Internet stworzył nowe standardy komunikacji, które dla wielu osób mogą być nieintuicyjne. Jednocześnie młodsze pokolenia wychowały się w świecie wiadomości tekstowych, skrótów i emoji. Naszym celem jest zbudowanie mostu między pokoleniami."
          },
          {
            num: "03.",
            title: "Emocje w komunikacji online",
            desc: "W rozmowie twarzą w twarz widzimy mimikę, gesty i słyszymy ton głosu. W komunikacji internetowej te elementy często znikają. Dlatego coraz większą rolę odgrywają takie elementy jak: sposób formułowania wiadomości, interpunkcja, emoji i skróty."
          },
          {
            num: "04.",
            title: "Zrozum rozmówcę zanim naciśnie wyślij",
            desc: "W świecie komunikacji cyfrowej nawet drobne elementy mogą mieć znaczenie. Zjawiska takie jak ghosting, hejt czy sposób zakończenia zdania potrafią wpływać na to, jak odbieramy wiadomość. W praktyce oznacza to, że każdy znak i każde słowo mogą zmieniać ton wypowiedzi."
          }
        ]
      },
      forWhom: {
        heading: "Dla kogo jest ten webinar?",
        tabs: [
          { label: "HR", emoji: "👔", text: "Rekruterzy i specjaliści HR codziennie komunikują się pisemnie z kandydatami. Ton wiadomości wpływa na doświadczenie rekrutacyjne i wizerunek firmy. Nauczymy jak pisać z empatią." },
          { label: "Sprzedawcy", emoji: "🤝", text: "W sprzedaży relacja to klucz. Wiadomości pozbawione emocji mogą zniechęcić klienta. Pokażemy jak budować ciepły, profesjonalny ton w komunikacji pisemnej." },
          { label: "Liderzy", emoji: "🎯", text: "Liderzy zarządzający zdalnymi zespołami muszą umieć motywować i wspierać bez kontaktu twarzą w twarz. Cyfrowa mowa ciała to niezbędne narzędzie." },
          { label: "Coachowie", emoji: "💬", text: "Coachowie i terapeuci prowadzący sesje online potrzebują umiejętności wyrażania empatii i zrozumienia w formie pisemnej. To zupełnie inny zestaw kompetencji." },
          { label: "Trenerzy", emoji: "📚", text: "Trenerzy i edukatorzy mogą wzbogacić swoje programy szkoleniowe o moduł cyfrowej komunikacji — kompetencję przyszłości." }
        ]
      },
      emojiShowcase: {
        heading: "Wszystko zaczyna się od emocji",
        subheading: "Emoji to nowy język emocji. Poznaj jak ich używać, aby lepiej się porozumiewać."
      },
      digitalComm: {
        label: "Nowa rzeczywistość",
        heading: "Emocje w komunikacji online",
        paragraphs: [
          "W rozmowie twarzą w twarz widzimy mimikę, gesty i słyszymy ton głosu. W komunikacji internetowej te elementy często znikają.",
          "Dlatego coraz większą rolę odgrywają takie elementy jak: sposób formułowania wiadomości, interpunkcja, emoji i skróty."
        ],
        callout: "W świecie komunikacji cyfrowej nawet drobne elementy mogą mieć znaczenie."
      },
      solution: {
        heading: "Co zyskujesz z freemoji?",
        desc: "Naucz się rozpoznawać emocje w komunikacji online",
        benefits: [
          { emoji: "😊", text: "Lepiej zrozumiesz intencje rozmówców w wiadomościach tekstowych" },
          { emoji: "💬", text: "Nauczysz się wyrażać emocje w sposób czytelny i profesjonalny" },
          { emoji: "🤝", text: "Zbudujesz silniejsze relacje z zespołem i klientami" },
          { emoji: "🎯", text: "Unikniesz kosztownych nieporozumień w biznesie" }
        ]
      },
      howItWorks: {
        label: "Jak to działa?",
        heading: "3 proste kroki",
        steps: [
          { num: "1", emoji: "📝", title: "Zapisz się na webinar", desc: "Wybierz termin i zarezerwuj miejsce w 30 sekund." },
          { num: "2", emoji: "💡", title: "Poznaj cyfrową mowę ciała", desc: "Na webinarze dowiesz się jak rozpoznawać i wyrażać emocje online." },
          { num: "3", emoji: "🚀", title: "Stosuj w praktyce", desc: "Zacznij świadomie komunikować się w mailach, czatach i na spotkaniach." }
        ]
      },
      webinar: {
        heading: "Zapisz się na webinar",
        bullets: [
          { emoji: "📚", text: "Poznasz podstawy cyfrowej mowy ciała" },
          { emoji: "🎯", text: "Dowiesz się jak unikać nieporozumień w komunikacji online" },
          { emoji: "💡", text: "Otrzymasz praktyczne wskazówki do codziennej pracy" },
          { emoji: "🤝", text: "Zbudujesz lepsze relacje z zespołem i klientami" }
        ],
        cta: "Zapisz się na webinar"
      },
      webinarPromo: {
        subtitle: "Dołącz do naszej społeczności i odkryj nowy wymiar komunikacji online.",
        bullets: [
          "Dostęp do platformy edukacyjnej",
          "Materiały do samodzielnej nauki",
          "Interaktywne ćwiczenia",
          "Certyfikat ukończenia"
        ]
      },
      faq: {
        title: "FAQ",
        subtitle: "Najczęściej zadawane pytania",
        questions: [
          {
            question: "Czym dokładnie jest cyfrowa mowa ciała?",
            answer: "To sposób wyrażania emocji, intencji i tonu w komunikacji pisemnej — za pomocą emoji, interpunkcji, formatowania tekstu, czasu odpowiedzi i innych elementów, które zastępują mimikę i gesty w rozmowie twarzą w twarz."
          },
          {
            question: "Dla kogo jest freemoji?",
            answer: "Dla każdego, kto komunikuje się pisemnie w pracy lub życiu prywatnym. Szczególnie polecamy osobom z działów HR, sprzedaży, liderom zespołów, coachom i trenerom."
          },
          {
            question: "Jak wygląda szkolenie?",
            answer: "Oferujemy webinary na żywo, materiały edukacyjne do samodzielnej nauki, interaktywne ćwiczenia oraz mini gry, które pomagają zrozumieć kontekst emoji w komunikacji."
          },
          {
            question: "Ile kosztuje dostęp?",
            answer: "Dostęp do platformy zaczyna się od 199 zł. Szczegóły cennika znajdziesz w sekcji kontakt lub pisząc do nas na kontakt@freemoji.com."
          },
          {
            question: "Czy mogę przetestować platformę?",
            answer: "Tak! Zapisz się na bezpłatny webinar, aby poznać nasze podejście i zobaczyć fragment platformy w akcji."
          }
        ]
      }
    },
    products: {
      hero: {
        subtitle: "Odkryj komunikację na nowo. Zobaczysz ile zmienia odpowiednia mowa ciała w internecie.",
        title1: "ZOBACZ WSZYSTKIE",
        title2: "PRODUKTY",
        cta: "Poznaj produkty"
      },
      comingSoon: "Wkrótce",
      currency: "zł",
      seeProduct: "Zobacz produkt →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć."
        },
        smartComm: {
          title: "Smart Communication",
          description: "Inteligentna analiza emocji i kontekstu w komunikacji zespołowej. Zaawansowane statystyki i AI-powered rekomendacje dla wymagających profesjonalistów."
        },
        funComm: {
          title: "Fun Communication",
          description: "Komunikacja z humorem i stylem. Humor detection AI, custom emoji rekomendacje i miesięczne warsztaty dla zespołów, które chcą komunikować się z lekkością."
        },
        directComm: {
          title: "Direct Communication",
          description: "Precyzyjna i bezpośrednia komunikacja dla liderów. Narzędzia do jasnego przekazywania intencji i budowania autorytetu w zespole."
        }
      }
    },
    betterMessage: {
      hero: {
        heading: "Better Message",
        subtitle: "Popraw jakość komunikacji cyfrowej",
        description: "Popraw jakość cyfrowych rozmów pomiędzy Tobą a kontrahentami. Zwiększ płynność komunikacji i popraw sprawność konwersacji za pomocą trafnych wiadomości.",
        cta: "WYBIERZ WARIANT",
        by: "By"
      },
      benefits: {
        title1: "Komunikuj świadomie.",
        desc1: "Zrozum prawdziwy wydźwięk swoich wiadomości zanim je wyślesz. Analizujemy ton, kontekst i emocje w twoich rozmowach biznesowych, pomagając unikać niefortunnych sformułowań i budować profesjonalne relacje z klientami.",
        title2: "Wyrażaj emocje.",
        desc2: "Naucz się skutecznie przekazywać intencje i emocje w cyfrowej komunikacji. Dowiedz się, które emoji są odpowiednie w kontekście biznesowym, a które mogą być źle odebrane przez twoich rozmówców.",
        title3: "Uniknij nieporozumień.",
        desc3: "Przykłady pokazują, jak łatwo o wpadkę. Niewłaściwe emoji mogą całkowicie zmienić wydźwięk wiadomości. Pomagamy ci rozpoznawać ryzykowne sytuacje i dobierać odpowiednie środki wyrazu w komunikacji z klientami."
      },
      pricing: {
        header: "Wybierz plan dla siebie 💼",
        subtitle: "Analiza komunikacji biznesowej dostosowana do Twoich potrzeb. Dodaj do koszyka i zapłać bezpiecznie.",
        bestChoice: "⭐ Najlepszy wybór",
        addedToCart: "✓ Dodano do koszyka!",
        securePayments: "Bezpieczne płatności z",
        variant1: {
          variant: "WARIANT 1",
          name: "Personal",
          price: "$89",
          period: "/ jednorazowo",
          description: "Przeanalizujemy dla Ciebie konwersacje z klientem lub rozmówcą. Ułatwimy Ci kontakt oraz przygotujemy analizę rozmowy i powtórnie. Ci jak komunikacja dzieki czemu przepływ informacji będzie bardziej efektywny. Narzędzia dla Ciebie i Twojego rozmówcy.",
          cta: "WYBIERZ WARIANT 1"
        },
        variant2: {
          variant: "WARIANT 2",
          name: "Business",
          price: "$129",
          period: "/ miesięcznie",
          description: "Przeanalizujemy dla Twojej firmy konwersację najlepszą z Twoimi klientami. Będziemy na bieżąco monitorować jakość i skuteczność prowadzonych rozmów oraz zajmiemy się aktualizacją analizą prowadzonych rozmów wraz z przygotowaniem planu co możesz zmienić w sposobie komunikacji aby poprawiać swoją biznes rozmowy dawały skuteczne rezultaty biznesowe.",
          cta: "WYBIERZ WARIANT 2"
        },
        variant3: {
          variant: "WARIANT 3",
          name: "Enterprise",
          price: "$689",
          period: "/ miesięcznie",
          description: "Przeanalizujemy konwersację ze wszystkich komunikatorów, których używasz do kontaktu z klientem. Dokonamy odpowiednie narzędzia dla Twojego zespołu i przeprowadzimy indywidualną konsultację z Cyfrową Mową Ciała, a zmierzcha podniesiemy jakość komunikacji biznesowej w Twojej firmie.",
          cta: "WYBIERZ WARIANT 3"
        }
      },
      emojiWarning: {
        title: "Łzy nie zawsze są spowodowane smutkiem.",
        title2: "Emoji to też nie rada na wszystko.",
        description: "Współczesna komunikacja wymaga świadomości kontekstu. To samo emoji może wyrażać radość, smutek lub ironię – wszystko zależy od sytuacji. BetterMessage pomaga rozpoznać, kiedy Twoja wiadomość może być źle zrozumiana i sugeruje lepsze sposoby wyrażenia intencji."
      },
      video: {
        title: "Uniknij nieporozumień.",
        title2: "Zobacz wideo.",
        badge1: "#!?.",
        badge2: "Interpunkcja w erze",
        badge3: "komunikatorów.",
        cta: "Kliknij i zobacz jak to wygląda w praktyce :)",
        previewText: "Co robicie, dzieci?"
      },
      psst: {
        heading: "PSST...",
        intro: "Warto obejrzeć wideo, poza ciekawą treścią na nagraniu usłyszysz jak brzmi kod rabatowy. Zastawialiśmy go w nagraniu abyś odebrał swój ebook taniej znając już podstawy cyfrowej interpunkcji.",
        whyTitle: "Dlaczego warto?",
        benefits: [
          {
            number: "01.",
            title: "Naucz się rozpoznawać sygnały emocjonalne online",
            description: "Zrozum, jak odbiorcy interpretują Twoje wiadomości. Dowiedz się, które sformułowania mogą być odebrane negatywnie i jak je poprawić, aby budować lepsze relacje biznesowe."
          },
          {
            number: "02.",
            title: "Zwiększ efektywność zespołu",
            description: "Lepsze zrozumienie prowadzi do szybszej współpracy. Zredukuj ilość wyjaśnień i powtórzeń dzięki precyzyjnej komunikacji dostosowanej do odbiorcy."
          },
          {
            number: "03.",
            title: "Unikaj kosztownych wpadek",
            description: "Jedno źle odebrane emoji może zepsuć relację z ważnym klientem. Nasz system ostrzega przed potencjalnymi nieporozumieniami zanim wyślesz wiadomość."
          },
          {
            number: "04.",
            title: "Buduj profesjonalny wizerunek",
            description: "Spójna i świadoma komunikacja w całej firmie przekłada się na lepszy odbiór marki. Stwórz standardy komunikacji, które wzmocnią Twój profesjonalizm."
          }
        ]
      },
      testimonials: {
        title: "Opinie",
        subtitle: "Zobacz co mówią o Nas Nasi klienci",
        items: [
          {
            emoji: "🥰",
            quote: "BetterMessage całkowicie zmienił sposób, w jaki komunikuję się z moim zespołem. Wcześniej miałem problem z interpretacją tonu wiadomości. Teraz rozumiem kontekst i unikam nieporozumień.",
            name: "Karol Chrapkiewicz",
            title: "Re Bena Gesta"
          },
          {
            emoji: "😊",
            quote: "Jako HR Manager codziennie wysyłam dziesiątki wiadomości do kandydatów. BetterMessage pomógł mi zbudować cieplejszy, bardziej profesjonalny ton komunikacji, co przełożyło się na lepszy employer branding.",
            name: "Anna Kowalska",
            title: "HR Manager, TechCorp"
          },
          {
            emoji: "🎯",
            quote: "W sprzedaży relacja to wszystko. Dzięki BetterMessage nauczyłem się wyrażać empatię w wiadomościach tekstowych, co znacząco poprawiło konwersję i zadowolenie klientów.",
            name: "Marcin Nowak",
            title: "Sales Director, SalesPro"
          },
          {
            emoji: "💡",
            quote: "Jako coach prowadzę sesje online i korespondencję mailową. BetterMessage pokazał mi, jak ważny jest kontekst w komunikacji pisemnej. To kompletnie zmieniło moją praktykę.",
            name: "Joanna Wiśniewska",
            title: "Business Coach"
          }
        ]
      },
      contact: {
        heading: "Pytania? Wrzucaj",
        reminder: "(Nie zapomnij dodać emoji!)",
        hello: "Cześć, nazywam się",
        namePlaceholder: "Imię",
        andIHave: "i mam pytanie w temacie",
        subjectPlaceholder: "o co chodzi",
        namely: "mianowicie:",
        messagePlaceholder: "Twój message",
        replyTo: "Odpowiedź chciałbym otrzymać na mojego maila:",
        emailPlaceholder: "Twój adres email*",
        consent: "Zapoznałem się z Regulaminem strony i Polityką prywatności",
        submit: "Wyślij"
      }
    },
    emojiGame: {
      quizHeading: "Quiz: Znasz emoji?",
      bannerText: "🏆 5/5 = kod na 5% rabatu!",
      questionLabel: "Pytanie",
      scoreLabel: "Wynik",
      questions: [
        {
          emoji: "😅",
          question: "To emoji (sweat smile) w kontekście komunikacji online najczęściej oznacza:",
          options: [
            { text: "Gdy coś jest bardzo śmieszne", correct: false },
            { text: "W niezręcznej sytuacji lub z ulgą po stresie", correct: true },
            { text: "Gdy jesteśmy zmęczeni", correct: false },
            { text: "Gdy jesteśmy zdenerwowani", correct: false }
          ]
        },
        {
          emoji: "🙃",
          question: "Co oznacza to emoji w kontekście komunikacji online?",
          options: [
            { text: "Szczerą radość", correct: false },
            { text: "Ironię, sarkasm lub pasywną agresję", correct: true },
            { text: "Zawstydzenie", correct: false },
            { text: "Zaskoczenie", correct: false }
          ]
        },
        {
          emoji: "💀",
          question: "W młodzieżowym slangu internetowym to emoji oznacza:",
          options: [
            { text: "Strach lub zagrożenie", correct: false },
            { text: "Śmiertelne znudzenie", correct: false },
            { text: "Ekstremalną zabawę, 'umieram ze śmiechu'", correct: true },
            { text: "Smutek i żałobę", correct: false }
          ]
        },
        {
          emoji: "👁️👄👁️",
          question: "Ta kombinacja emoji w komunikacji online najczęściej wyraża:",
          options: [
            { text: "Aprobatę i podziw", correct: false },
            { text: "Niepokoją obserwację lub dyskomfort", correct: true },
            { text: "Zaskoczenie pozytywne", correct: false },
            { text: "Neutralność", correct: false }
          ]
        },
        {
          emoji: "🥺",
          question: "To emoji ('pleading face') w profesjonalnej komunikacji może być odebrane jako:",
          options: [
            { text: "Profesjonalna prośba", correct: false },
            { text: "Manipulacyjne, infantylne lub nieprofesjonalne", correct: true },
            { text: "Znak szacunku", correct: false },
            { text: "Neutralne potwierdzenie", correct: false }
          ]
        }
      ],
      results: {
        perfect: "Gratulacje! 🎉",
        perfectDesc: "Jesteś mistrzem emoji! Znasz się na cyfrowej komunikacji jak mało kto.",
        perfectScoreText: "Twój kod rabatowy:",
        good: "Świetna robota! 😊",
        goodDesc: "Masz solidną wiedzę o emoji. Jeszcze kilka szczegółów i będziesz ekspertem!",
        almostPerfect: "Prawie idealnie! Potrzebujesz",
        toGetCode: ", aby zdobyć kod rabatowy 🎁",
        tryAgainHint: "Spróbuj jeszcze raz - pytania są losowe!",
        medium: "Nieźle! 🤔",
        mediumDesc: "Znasz podstawy, ale jest jeszcze sporo do nauczenia. Dołącz do nas na webinar!",
        dontGiveUp: "Nie poddawaj się! Potrzebujesz",
        toGetDiscount: ", aby zdobyć kod na 5% rabatu 💪",
        collectMore: "Zbierz",
        moreCorrect: "więcej prawidłowych odpowiedzi!",
        low: "Hmm... 😅",
        lowDesc: "Wygląda na to, że emoji to dla Ciebie nowy świat. Idealny moment, żeby zacząć naukę!",
        finalScore: "Twój wynik:",
        outOf: "na",
        restartQuiz: "Spróbuj ponownie",
        exploreProducts: "Wróć do strony głównej",
        discountText: "5% rabatu na wszystkie produkty BetterMessage"
      }
    },
    productPage: {
      products: {
        coolComm: {
          name: "Cool Communication",
          title: "Czym jest cyfrowa komunikacja?",
          subtitle: "Profesjonalna komunikacja dla nowoczesnych zespołów",
          description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć.",
          features: [
            "Analiza tonu i kontekstu wiadomości",
            "Rekomendacje w czasie rzeczywistym",
            "Raport miesięczny",
            "Wsparcie email"
          ]
        },
        smartComm: {
          name: "Smart Communication",
          title: "Czym jest cyfrowa komunikacja?",
          subtitle: "Inteligentna komunikacja dla wymagających",
          description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć.",
          features: [
            "Wszystko z Cool Communication",
            "AI-powered analiza emocji",
            "Zaawansowane statystyki",
            "Wsparcie priorytetowe"
          ]
        },
        funComm: {
          name: "Fun Communication",
          title: "Czym jest cyfrowa komunikacja?",
          subtitle: "Komunikacja z humorem i stylem",
          description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć.",
          features: [
            "Wszystko z Smart Communication",
            "Humor detection AI",
            "Custom emoji rekomendacje",
            "Team workshop (1x miesięcznie)"
          ]
        },
        creativeComm: {
          name: "Creative Communication",
          title: "Czym jest cyfrowa komunikacja?",
          subtitle: "Kreatywna komunikacja bez granic",
          description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomości, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć.",
          features: [
            "Wszystko z Fun Communication",
            "Unlimited analiza wiadomości",
            "Dedykowany account manager",
            "Custom integracje"
          ]
        }
      },
      addToCart: "Dodaj do koszyka",
      learnMore: "Dowiedz się więcej"
    },
    cart: {
      title: "Koszyk",
      empty: "Koszyk jest pusty",
      emptyDesc: "Dodaj produkty, aby kontynuować",
      total: "Suma:",
      checkout: "Przejdź do płatności 💳",
      continueShopping: "Kontynuuj zakupy",
      remove: "Usuń",
      close: "Zamknij"
    },
    blog: {
      hero: {
        title: "Blog freemoji",
        subtitle: "Odkryj świat cyfrowej mowy ciała. Dowiedz się, jak skutecznie komunikować emocje w erze tekstów i emoji.",
        cta: "Zobacz nasze produkty"
      },
      search: "Szukaj...",
      latestArticles: "Najnowsze artykuły",
      categories: "Kategorie",
      tags: "Tagi",
      readMore: "DOWIEDZ SIĘ WIĘCEJ →",
      noResults: "Nie znaleziono artykułów spełniających kryteria wyszukiwania.",
      clearFilters: "Wyczyść filtry",
      activeFilters: "Aktywne filtry:",
      clearAll: "Wyczyść wszystkie",
      articles: [
        {
          date: "15 GRUDZIEŃ 2025",
          title: "Jak skutecznie komunikować się z klientami przy transakcjach nieruchomości online? Cyfrowa mowa ciała w sektorze nieruchomości.",
          excerpt: "W dobie cyfrowej komunikacji, prowadzenie transakcji nieruchomości wymaga nowych umiejętności. Dowiedz się, jak wykorzystać emoji i cyfrową mowę ciała do budowania zaufania z klientami online. Poznaj sprawdzone strategie komunikacji, które zwiększą Twoją skuteczność w sprzedaży...",
          category: "Nieruchomości",
          tag: "komunikacja",
          categories: ["Nieruchomości", "Prawo"],
          tags: ["komunikacja", "sprzedaż", "emoji"]
        },
        {
          date: "10 GRUDZIEŃ 2025",
          title: "Emoji w komunikacji biznesowej - profesjonalizm czy przesada?",
          excerpt: "Czy emoji mają miejsce w profesjonalnej komunikacji? Jak balansować między autentycznością a profesjonalizmem? Poznaj zasady używania emoji w różnych kontekstach biznesowych i dowiedz się, kiedy ich użycie jest wskazane, a kiedy lepiej zachować formalizm...",
          category: "Komunikacja",
          tag: "poradnik",
          categories: ["Komunikacja", "Biznes"],
          tags: ["emoji", "biznes", "poradnik"]
        },
        {
          date: "5 GRUDZIEŃ 2025",
          title: "Jak różne pokolenia używają emoji? Gen Z vs Millenials vs Boomerzy",
          excerpt: "Każde pokolenie ma swój unikalny sposób komunikacji cyfrowej. Poznaj różnice w używaniu emoji między pokoleniami i dowiedz się, jak dostosować komunikację do swojej grupy docelowej. Zrozumienie tych różnic jest kluczem do skutecznej komunikacji międzypokoleniowej...",
          category: "Trendy",
          tag: "społeczeństwo",
          categories: ["Trendy", "Społeczeństwo"],
          tags: ["pokolenia", "emoji", "komunikacja"]
        }
      ],
      categoryList: [
        "Komunikacja",
        "Nieruchomości",
        "Biznes",
        "Trendy",
        "Społeczeństwo",
        "Prawo",
        "Poradniki",
        "Inne"
      ],
      tagList: [
        "komunikacja",
        "emoji",
        "biznes",
        "sprzedaż",
        "poradnik",
        "pokolenia",
        "społeczeństwo",
        "nieruchomości"
      ]
    },
    about: {
      hero: {
        title: "Zyskaj nową przewagę w komunikacji zdalnej.",
        benefits: {
          emotions: "Lepsze odczytywanie emocji",
          emotionsDesc: "rozpoznawaj ukryte emocje u rozmówców",
          intelligence: "Inteligencja emocjonalna 2.0",
          intelligenceDesc: "rozwijaj empatię w środowisku cyfrowym",
          meetings: "Skuteczniejsze spotkania",
          meetingsDesc: "lepsze decyzje, mniej nieporozumień",
          confidence: "Pewność w rozmowie",
          confidenceDesc: "mniej stresu w negocjacjach i prezentacjach online",
          credibility: "Wiarygodność lidera",
          credibilityDesc: "buduj autorytet i zaufanie w zespole"
        }
      },
      team: {
        title: "Poznajmy się lepiej!",
        ceo: "CEO",
        contactUs: "Napisz do nas!"
      },
      psst: {
        heading: "PSST...",
        intro: "Warto obejrzeć wideo, poza ciekawą treścią na nagraniu usłyszysz jak brzmi kod rabatowy. Zastawialiśmy go w nagraniu abyś odebrał swój ebook taniej znając już podstawy cyfrowej interpunkcji.",
        whyTitle: "Dlaczego warto?",
        benefits: [
          {
            number: "01.",
            title: "Naucz się rozpoznawać sygnały emocjonalne online",
            description: "Zrozum, jak odbiorcy interpretują Twoje wiadomości. Dowiedz się, które sformułowania mogą być odebrane negatywnie i jak je poprawić, aby budować lepsze relacje biznesowe."
          },
          {
            number: "02.",
            title: "Zwiększ efektywność zespołu",
            description: "Lepsze zrozumienie prowadzi do szybszej współpracy. Zredukuj ilość wyjaśnień i powtórzeń dzięki precyzyjnej komunikacji dostosowanej do odbiorcy."
          },
          {
            number: "03.",
            title: "Unikaj kosztownych wpadek",
            description: "Jedno źle odebrane emoji może zepsuć relację z ważnym klientem. Nasz system ostrzega przed potencjalnymi nieporozumieniami zanim wyślesz wiadomość."
          },
          {
            number: "04.",
            title: "Buduj profesjonalny wizerunek",
            description: "Spójna i świadoma komunikacja w całej firmie przekłada się na lepszy odbiór marki. Stwórz standardy komunikacji, które wzmocnią Twój profesjonalizm."
          }
        ]
      },
      emojiGrid: {
        heading: "Znasz podstawy?"
      },
      faq: {
        heading: "W czym freemoji może Ci pomóc?",
        benefits: [
          { emoji: "👀", title: "Lepsze odczytywanie emocji – rozpoznawaj ukryte emocje u rozmówców" },
          { emoji: "🧠", title: "Inteligencja emocjonalna 2.0 – rozwijaj empatię w środowisku cyfrowym" },
          { emoji: "🗣️", title: "Skuteczniejsze spotkania – lepsze decyzje, mniej nieporozumień" },
          { emoji: "💬", title: "Pewność w rozmowie – mniej stresu w negocjacjach i prezentacjach online" },
          { emoji: "⚡", title: "Wiarygodność lidera – buduj autorytet i zaufanie w zespole" }
        ],
        questions: [
          {
            emoji: "🤔",
            question: "Czym dokładnie jest cyfrowa mowa ciała?",
            answer: "To sposób wyrażania emocji, intencji i tonu w komunikacji pisemnej — za pomocą emoji, interpunkcji, formatowania tekstu, czasu odpowiedzi i innych elementów, które zastępują mimikę i gesty w rozmowie twarzą w twarz."
          },
          {
            emoji: "👥",
            question: "Dla kogo jest freemoji?",
            answer: "Dla każdego, kto komunikuje się pisemnie w pracy lub życiu prywatnym. Szczególnie polecamy osobom z działów HR, sprzedaży, liderom zespołów, coachom i trenerom."
          },
          {
            emoji: "📚",
            question: "Jak wygląda szkolenie?",
            answer: "Oferujemy webinary na żywo, materiały edukacyjne do samodzielnej nauki, interaktywne ćwiczenia oraz mini gry, które pomagają zrozumieć kontekst emoji w komunikacji."
          },
          {
            emoji: "💰",
            question: "Ile kosztuje dostęp?",
            answer: "Dostęp do platformy zaczyna się od 199 zł. Szczegóły cennika znajdziesz w sekcji kontakt lub pisząc do nas na kontakt@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "Czy mogę przetestować platformę?",
            answer: "Tak! Zapisz się na bezpłatny webinar, aby poznać nasze podejście i zobaczyć fragment platformy w akcji."
          }
        ]
      },
      testimonials: {
        heading: "Opinie",
        subtitle: "Zobacz co mówią o Nas Nasi klienci",
        list: [
          {
            emoji: "🥰",
            quote: "BetterMessage całkowicie zmienił sposób, w jaki komunikuję się z moim zespołem. Wcześniej miałem problem z interpretacją tonu wiadomości. Teraz rozumiem kontekst i unikam nieporozumień.",
            name: "Karol Chrapkiewicz",
            title: "Re Bena Gesta"
          },
          {
            emoji: "😊",
            quote: "Jako HR Manager codziennie wysyłam dziesiątki wiadomości do kandydatów. BetterMessage pomógł mi zbudować cieplejszy, bardziej profesjonalny ton komunikacji, co przełożyło się na lepszy employer branding.",
            name: "Anna Kowalska",
            title: "HR Manager, TechCorp"
          },
          {
            emoji: "🎯",
            quote: "W sprzedaży relacja to wszystko. Dzięki BetterMessage nauczyłem się wyrażać empatię w wiadomościach tekstowych, co znacząco poprawiło konwersję i zadowolenie klientów.",
            name: "Marcin Nowak",
            title: "Sales Director, SalesPro"
          },
          {
            emoji: "💡",
            quote: "Jako coach prowadzę sesje online i korespondencję mailową. BetterMessage pokazał mi, jak ważny jest kontekst w komunikacji pisemnej. To kompletnie zmieniło moją praktykę.",
            name: "Joanna Wiśniewska",
            title: "Business Coach"
          }
        ]
      }
    },
    contact: {
      title: "Kontakt",
      heading: "Masz pytanie? Napisz do nas!",
      emojiReminder: "(Nie zapomnij dodać emoji!)",
      formText: {
        hello: "Cześć, nazywam się",
        namePlaceholder: "Twoje imię*",
        andIHave: "i mam pytanie w temacie",
        subjectPlaceholder: "Temat pytania*",
        namely: "mianowicie:",
        messagePlaceholder: "Opisz swoje pytanie lub wiadomość*",
        replyTo: "Odpowiedź chciałbym otrzymać na mojego maila:",
        emailPlaceholder: "Twój adres email*",
        consent: "Zapoznałem się z Regulaminem strony i Polityką prywatności",
        submit: "Wyślij wiadomość"
      },
      name: "Imię i nazwisko",
      email: "Email",
      message: "Wiadomość",
      send: "Wyślij",
      placeholder: {
        name: "Jan Kowalski",
        email: "jan@example.com",
        message: "Twoja wiadomość..."
      }
    },
    footer: {
      privacy: "Polityka Prywatności",
      terms: "Regulamin",
      contact: "Kontakt",
      rights: "Wszystkie prawa zastrzeżone"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      blog: "Blog",
      game: "🎮 Emoji Game",
      contact: "Contact",
      language: "Language"
    },
    home: {
      hero: {
        headline1: "Today we write",
        headline2: "to each other more often",
        headline3: "than we talk",
        subtitle: "Messages, emails, messengers, and online meetings have become everyday life. However, it's worth remembering that written words also have their tone and emotions.",
        cta: "Sign up for webinar",
        socialProof: "Join",
        professionals: "professionals"
      },
      stickyCta: "Sign up for webinar",
      problem: {
        heading: "Don't see emotions? You're losing half the message.",
        desc: "Remote communication lacks many signals present in face-to-face conversation – eye contact, gestures, or micro-expressions. As a result, it's easy to miss your conversation partner's emotions, client resistance, or coworker uncertainty.",
        bullets: [
          "misunderstandings",
          "wrong decisions",
          "deterioration of professional relationships"
        ],
        consequences: [
          "Don't lose team trust and authority.",
          "You don't notice client resistance.",
          "Leading to wrong decisions."
        ]
      },
      about: {
        label: "So,",
        heading: "what is freemoji?",
        points: [
          {
            num: "01.",
            title: "Poland's first educational platform dedicated to digital body language",
            desc: "freemoji is Poland's first educational platform dedicated to digital body language – emotions, tone, and meanings hidden in online communication. The education system has taught us mainly direct communication for many years. Meanwhile, modern professional and private life has largely moved to the internet."
          },
          {
            num: "02.",
            title: "Connecting generations",
            desc: "The internet has created new communication standards that may be unintuitive for many people. At the same time, younger generations grew up in a world of text messages, abbreviations, and emojis. Our goal is to build a bridge between generations."
          },
          {
            num: "03.",
            title: "Emotions in online communication",
            desc: "In face-to-face conversation, we see facial expressions, gestures, and hear the tone of voice. In online communication, these elements often disappear. That's why elements such as: message formulation, punctuation, emojis, and abbreviations play an increasingly important role."
          },
          {
            num: "04.",
            title: "Understand your conversation partner before they hit send",
            desc: "In digital communication, even small elements can matter. Phenomena such as ghosting, hate, or sentence endings can affect how we receive a message. In practice, this means that every sign and every word can change the tone of expression."
          }
        ]
      },
      forWhom: {
        heading: "Who is this webinar for?",
        tabs: [
          { label: "HR", emoji: "👔", text: "Recruiters and HR specialists communicate in writing with candidates every day. Message tone affects recruitment experience and company image. We'll teach you how to write with empathy." },
          { label: "Sales", emoji: "🤝", text: "In sales, relationships are key. Messages devoid of emotion can discourage clients. We'll show you how to build a warm, professional tone in written communication." },
          { label: "Leaders", emoji: "🎯", text: "Leaders managing remote teams must be able to motivate and support without face-to-face contact. Digital body language is an essential tool." },
          { label: "Coaches", emoji: "💬", text: "Coaches and therapists conducting online sessions need skills to express empathy and understanding in written form. It's a completely different skill set." },
          { label: "Trainers", emoji: "📚", text: "Trainers and educators can enrich their training programs with a digital communication module – a competency of the future." }
        ]
      },
      emojiShowcase: {
        heading: "Everything starts with emotions",
        subheading: "Emojis are a new language of emotions. Learn how to use them to communicate better."
      },
      digitalComm: {
        label: "New reality",
        heading: "Emotions in online communication",
        paragraphs: [
          "In face-to-face conversation, we see facial expressions, gestures, and hear the tone of voice. In online communication, these elements often disappear.",
          "That's why elements such as message formulation, punctuation, emojis, and abbreviations play an increasingly important role."
        ],
        callout: "In digital communication, even small elements can matter."
      },
      solution: {
        heading: "What do you gain from freemoji?",
        desc: "Learn to recognize emotions in online communication",
        benefits: [
          { emoji: "😊", text: "You'll better understand conversation partners' intentions in text messages" },
          { emoji: "💬", text: "You'll learn to express emotions in a clear and professional way" },
          { emoji: "🤝", text: "You'll build stronger relationships with your team and clients" },
          { emoji: "🎯", text: "You'll avoid costly business misunderstandings" }
        ]
      },
      howItWorks: {
        label: "How does it work?",
        heading: "3 simple steps",
        steps: [
          { num: "1", emoji: "📝", title: "Sign up for webinar", desc: "Choose a date and reserve your spot in 30 seconds." },
          { num: "2", emoji: "💡", title: "Learn digital body language", desc: "At the webinar, you'll learn how to recognize and express emotions online." },
          { num: "3", emoji: "🚀", title: "Apply in practice", desc: "Start communicating consciously in emails, chats, and meetings." }
        ]
      },
      webinar: {
        heading: "Sign up for webinar",
        bullets: [
          { emoji: "📚", text: "Learn the basics of digital body language" },
          { emoji: "🎯", text: "Learn how to avoid misunderstandings in online communication" },
          { emoji: "💡", text: "Get practical tips for everyday work" },
          { emoji: "🤝", text: "Build better relationships with your team and clients" }
        ],
        cta: "Sign up for webinar"
      },
      webinarPromo: {
        subtitle: "Join our community and discover a new dimension of online communication.",
        bullets: [
          "Access to educational platform",
          "Self-study materials",
          "Interactive exercises",
          "Completion certificate"
        ]
      },
      faq: {
        title: "FAQ",
        subtitle: "Frequently asked questions",
        questions: [
          {
            question: "What exactly is digital body language?",
            answer: "It's a way of expressing emotions, intentions, and tone in written communication — using emojis, punctuation, text formatting, response time, and other elements that replace facial expressions and gestures in face-to-face conversation."
          },
          {
            question: "Who is freemoji for?",
            answer: "For anyone who communicates in writing at work or in private life. We especially recommend it for people in HR, sales, team leaders, coaches, and trainers."
          },
          {
            question: "What does the training look like?",
            answer: "We offer live webinars, self-study educational materials, interactive exercises, and mini games that help you understand the context of emojis in communication."
          },
          {
            question: "How much does access cost?",
            answer: "Platform access starts at 199 PLN. You can find pricing details in the contact section or by writing to us at kontakt@freemoji.com."
          },
          {
            question: "Can I test the platform?",
            answer: "Yes! Sign up for a free webinar to learn about our approach and see a preview of the platform in action."
          }
        ]
      }
    },
    products: {
      hero: {
        subtitle: "Discover communication anew. See how much the right body language on the internet changes.",
        title1: "SEE ALL",
        title2: "PRODUCTS",
        cta: "Explore products"
      },
      comingSoon: "Coming soon",
      currency: "PLN",
      seeProduct: "See product →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emotions, context, tone perception in your detailed messages that can be better tailored to the recipient type. Create proper communication. We don't need to see each other live to understand well."
        },
        smartComm: {
          title: "Smart Communication",
          description: "Intelligent emotion and context analysis in team communication. Advanced statistics and AI-powered recommendations for demanding professionals."
        },
        funComm: {
          title: "Fun Communication",
          description: "Communication with humor and style. Humor detection AI, custom emoji recommendations, and monthly workshops for teams that want to communicate with ease."
        },
        directComm: {
          title: "Direct Communication",
          description: "Precise and direct communication for leaders. Tools for clearly conveying intentions and building authority in the team."
        }
      }
    },
    betterMessage: {
      hero: {
        heading: "Better Message",
        subtitle: "Improve digital communication quality",
        description: "Improve the quality of digital conversations between you and contractors. Increase communication fluency and improve conversation efficiency through accurate messages.",
        cta: "CHOOSE VARIANT",
        by: "By"
      },
      benefits: {
        title1: "Communicate consciously.",
        desc1: "Understand the true tone of your messages before you send them. We analyze tone, context, and emotions in your business conversations, helping avoid unfortunate phrasings and build professional relationships with clients.",
        title2: "Express emotions.",
        desc2: "Learn to effectively convey intentions and emotions in digital communication. Find out which emojis are appropriate in a business context and which might be misunderstood by your conversation partners.",
        title3: "Avoid misunderstandings.",
        desc3: "Examples show how easy it is to make a mistake. Inappropriate emojis can completely change the tone of a message. We help you recognize risky situations and choose appropriate means of expression in client communication."
      },
      pricing: {
        header: "Choose a plan for yourself 💼",
        subtitle: "Business communication analysis tailored to your needs. Add to cart and pay securely.",
        bestChoice: "⭐ Best choice",
        addedToCart: "✓ Added to cart!",
        securePayments: "Secure payments with",
        variant1: {
          variant: "VARIANT 1",
          name: "Personal",
          price: "$89",
          period: "/ one-time",
          description: "We'll analyze conversations with your client or conversation partner for you. We'll make contact easier and prepare a conversation analysis again. You how communication thanks to which information flow will be more efficient. Tools for you and your conversation partner.",
          cta: "CHOOSE VARIANT 1"
        },
        variant2: {
          variant: "VARIANT 2",
          name: "Business",
          price: "$129",
          period: "/ monthly",
          description: "We'll analyze the best conversation for your company with your clients. We'll monitor the quality and effectiveness of conversations on an ongoing basis and take care of updating the analysis of conversations along with preparing a plan of what you can change in your communication method to improve your business conversations to give effective business results.",
          cta: "CHOOSE VARIANT 2"
        },
        variant3: {
          variant: "VARIANT 3",
          name: "Enterprise",
          price: "$689",
          period: "/ monthly",
          description: "We'll analyze conversation from all messengers you use to contact clients. We'll make appropriate tools for your team and conduct individual consultation with Digital Body Language, and dusk we'll raise the quality of business communication in your company.",
          cta: "CHOOSE VARIANT 3"
        }
      },
      emojiWarning: {
        title: "Tears are not always caused by sadness.",
        title2: "Emojis aren't a solution for everything either.",
        description: "Modern communication requires context awareness. The same emoji can express joy, sadness, or irony – it all depends on the situation. BetterMessage helps you recognize when your message might be misunderstood and suggests better ways to express your intentions."
      },
      video: {
        title: "Avoid misunderstandings.",
        title2: "Watch the video.",
        badge1: "#!?.",
        badge2: "Punctuation in the era",
        badge3: "of messengers.",
        cta: "Click and see how it works in practice :)",
        previewText: "What are you doing, kids?"
      },
      psst: {
        heading: "PSST...",
        intro: "It's worth watching the video - besides the interesting content in the recording, you'll hear what the discount code sounds like. We embedded it in the recording so you can get your ebook cheaper while already knowing the basics of digital punctuation.",
        whyTitle: "Why is it worth it?",
        benefits: [
          {
            number: "01.",
            title: "Learn to recognize emotional signals online",
            description: "Understand how recipients interpret your messages. Learn which phrasings might be received negatively and how to improve them to build better business relationships."
          },
          {
            number: "02.",
            title: "Increase team efficiency",
            description: "Better understanding leads to faster collaboration. Reduce the amount of explanations and repetitions through precise communication tailored to the recipient."
          },
          {
            number: "03.",
            title: "Avoid costly mistakes",
            description: "One misunderstood emoji can ruin a relationship with an important client. Our system warns you about potential misunderstandings before you send a message."
          },
          {
            number: "04.",
            title: "Build a professional image",
            description: "Consistent and conscious communication throughout the company translates into better brand perception. Create communication standards that will strengthen your professionalism."
          }
        ]
      },
      testimonials: {
        title: "Opinie",
        subtitle: "Zobacz co mówią o Nas Nasi klienci",
        items: [
          {
            emoji: "🥰",
            quote: "BetterMessage całkowicie zmienił sposób, w jaki komunikuję się z moim zespołem. Wcześniej miałem problem z interpretacją tonu wiadomości. Teraz rozumiem kontekst i unikam nieporozumień.",
            name: "Karol Chrapkiewicz",
            title: "Re Bena Gesta"
          },
          {
            emoji: "😊",
            quote: "Jako HR Manager codziennie wysyłam dziesiątki wiadomości do kandydatów. BetterMessage pomógł mi zbudować cieplejszy, bardziej profesjonalny ton komunikacji, co przełożyło się na lepszy employer branding.",
            name: "Anna Kowalska",
            title: "HR Manager, TechCorp"
          },
          {
            emoji: "🎯",
            quote: "W sprzedaży relacja to wszystko. Dzięki BetterMessage nauczyłem się wyrażać empatię w wiadomościach tekstowych, co znacząco poprawiło konwersję i zadowolenie klientów.",
            name: "Marcin Nowak",
            title: "Sales Director, SalesPro"
          },
          {
            emoji: "💡",
            quote: "Jako coach prowadzę sesje online i korespondencję mailową. BetterMessage pokazał mi, jak ważny jest kontekst w komunikacji pisemnej. To kompletnie zmieniło moją praktykę.",
            name: "Joanna Wiśniewska",
            title: "Business Coach"
          }
        ]
      },
      contact: {
        heading: "Questions? Ask away",
        reminder: "(Don't forget to add emojis!)",
        hello: "Hi, my name is",
        namePlaceholder: "Name",
        andIHave: "and I have a question about",
        subjectPlaceholder: "what's it about",
        namely: "namely:",
        messagePlaceholder: "Your message",
        replyTo: "I would like to receive a reply to my email:",
        emailPlaceholder: "Your email address*",
        consent: "I have read the Terms and Conditions and Privacy Policy",
        submit: "Send"
      }
    },
    emojiGame: {
      quizHeading: "Quiz: Do you know emoji?",
      bannerText: "🏆 5/5 = 5% discount code!",
      questionLabel: "Question",
      scoreLabel: "Score",
      questions: [
        {
          emoji: "😅",
          question: "This emoji (sweat smile) in online communication most often means:",
          options: [
            { text: "When something is very funny", correct: false },
            { text: "In an awkward situation or with relief after stress", correct: true },
            { text: "When we are tired", correct: false },
            { text: "When we are annoyed", correct: false }
          ]
        },
        {
          emoji: "🙃",
          question: "What does this emoji mean in online communication?",
          options: [
            { text: "Genuine joy", correct: false },
            { text: "Irony, sarcasm, or passive aggression", correct: true },
            { text: "Embarrassment", correct: false },
            { text: "Surprise", correct: false }
          ]
        },
        {
          emoji: "💀",
          question: "In internet youth slang, this emoji means:",
          options: [
            { text: "Fear or threat", correct: false },
            { text: "Deadly boredom", correct: false },
            { text: "Extreme fun, 'dying of laughter'", correct: true },
            { text: "Sadness and mourning", correct: false }
          ]
        },
        {
          emoji: "👁️👄👁️",
          question: "This emoji combination in online communication most often expresses:",
          options: [
            { text: "Approval and admiration", correct: false },
            { text: "Disturbing observation or discomfort", correct: true },
            { text: "Positive surprise", correct: false },
            { text: "Neutrality", correct: false }
          ]
        },
        {
          emoji: "🥺",
          question: "This emoji ('pleading face') in professional communication can be perceived as:",
          options: [
            { text: "Professional request", correct: false },
            { text: "Manipulative, infantile, or unprofessional", correct: true },
            { text: "Sign of respect", correct: false },
            { text: "Neutral confirmation", correct: false }
          ]
        }
      ],
      results: {
        perfect: "Congratulations! 🎉",
        perfectDesc: "You're an emoji master! You know digital communication like few others.",
        perfectScoreText: "Your discount code:",
        good: "Great job! 😊",
        goodDesc: "You have solid emoji knowledge. Just a few more details and you'll be an expert!",
        almostPerfect: "Almost perfect! You need",
        toGetCode: "to get the discount code 🎁",
        tryAgainHint: "Try again - questions are random!",
        medium: "Not bad! 🤔",
        mediumDesc: "You know the basics, but there's still a lot to learn. Join us at the webinar!",
        dontGiveUp: "Don't give up! You need",
        toGetDiscount: "to get 5% discount code 💪",
        collectMore: "Collect",
        moreCorrect: "more correct answers!",
        low: "Hmm... 😅",
        lowDesc: "Looks like emojis are a new world for you. Perfect time to start learning!",
        finalScore: "Your score:",
        outOf: "out of",
        restartQuiz: "Try again",
        exploreProducts: "Back to home",
        discountText: "5% discount on all BetterMessage products"
      }
    },
    productPage: {
      products: {
        coolComm: {
          name: "Cool Communication",
          title: "What is digital communication?",
          subtitle: "Professional communication for modern teams",
          description: "Emotions, context, tone perception in your detailed messages that can be better tailored to the recipient type. Create proper communication. We don't need to see each other live to understand well.",
          features: [
            "Message tone and context analysis",
            "Real-time recommendations",
            "Monthly report",
            "Email support"
          ]
        },
        smartComm: {
          name: "Smart Communication",
          title: "What is digital communication?",
          subtitle: "Intelligent communication for the demanding",
          description: "Emotions, context, tone perception in your detailed messages that can be better tailored to the recipient type. Create proper communication. We don't need to see each other live to understand well.",
          features: [
            "Everything from Cool Communication",
            "AI-powered emotion analysis",
            "Advanced statistics",
            "Priority support"
          ]
        },
        funComm: {
          name: "Fun Communication",
          title: "What is digital communication?",
          subtitle: "Communication with humor and style",
          description: "Emotions, context, tone perception in your detailed messages that can be better tailored to the recipient type. Create proper communication. We don't need to see each other live to understand well.",
          features: [
            "Everything from Smart Communication",
            "Humor detection AI",
            "Custom emoji recommendations",
            "Team workshop (1x monthly)"
          ]
        },
        creativeComm: {
          name: "Creative Communication",
          title: "What is digital communication?",
          subtitle: "Creative communication without boundaries",
          description: "Emotions, context, tone perception in your detailed messages that can be better tailored to the recipient type. Create proper communication. We don't need to see each other live to understand well.",
          features: [
            "Everything from Fun Communication",
            "Unlimited message analysis",
            "Dedicated account manager",
            "Custom integrations"
          ]
        }
      },
      addToCart: "Add to cart",
      learnMore: "Learn more"
    },
    cart: {
      title: "Cart",
      empty: "Cart is empty",
      emptyDesc: "Add products to continue",
      total: "Total:",
      checkout: "Proceed to payment 💳",
      continueShopping: "Continue shopping",
      remove: "Remove",
      close: "Close"
    },
    blog: {
      hero: {
        title: "freemoji Blog",
        subtitle: "Discover the world of digital body language. Learn how to effectively communicate emotions in the era of texts and emojis.",
        cta: "See our products"
      },
      search: "Search...",
      latestArticles: "Latest articles",
      categories: "Categories",
      tags: "Tags",
      readMore: "LEARN MORE →",
      noResults: "No articles found matching your criteria.",
      clearFilters: "Clear filters",
      activeFilters: "Active filters:",
      clearAll: "Clear all",
      articles: [
        {
          date: "DECEMBER 15, 2025",
          title: "How to effectively communicate with clients during online real estate transactions? Digital body language in the real estate sector.",
          excerpt: "In the era of digital communication, conducting real estate transactions requires new skills. Learn how to use emojis and digital body language to build trust with online clients. Discover proven communication strategies that will increase your sales effectiveness...",
          category: "Real Estate",
          tag: "communication",
          categories: ["Real Estate", "Law"],
          tags: ["communication", "sales", "emoji"]
        },
        {
          date: "DECEMBER 10, 2025",
          title: "Emojis in business communication - professionalism or exaggeration?",
          excerpt: "Do emojis have a place in professional communication? How to balance between authenticity and professionalism? Learn the rules of using emojis in various business contexts and find out when their use is recommended and when it's better to maintain formality...",
          category: "Communication",
          tag: "guide",
          categories: ["Communication", "Business"],
          tags: ["emoji", "business", "guide"]
        },
        {
          date: "DECEMBER 5, 2025",
          title: "How different generations use emojis? Gen Z vs Millennials vs Boomers",
          excerpt: "Each generation has its own unique way of digital communication. Learn the differences in emoji usage between generations and find out how to adapt communication to your target group. Understanding these differences is key to effective intergenerational communication...",
          category: "Trends",
          tag: "society",
          categories: ["Trends", "Society"],
          tags: ["generations", "emoji", "communication"]
        }
      ],
      categoryList: [
        "Communication",
        "Real Estate",
        "Business",
        "Trends",
        "Society",
        "Law",
        "Guides",
        "Other"
      ],
      tagList: [
        "communication",
        "emoji",
        "business",
        "sales",
        "guide",
        "generations",
        "society",
        "real-estate"
      ]
    },
    about: {
      hero: {
        title: "Gain a new advantage in remote communication.",
        benefits: {
          emotions: "Better emotion reading",
          emotionsDesc: "recognize hidden emotions in conversation partners",
          intelligence: "Emotional intelligence 2.0",
          intelligenceDesc: "develop empathy in digital environment",
          meetings: "More effective meetings",
          meetingsDesc: "better decisions, fewer misunderstandings",
          confidence: "Confidence in conversation",
          confidenceDesc: "less stress in negotiations and online presentations",
          credibility: "Leader credibility",
          credibilityDesc: "build authority and trust in your team"
        }
      },
      team: {
        title: "Let's get to know each other better!",
        ceo: "CEO",
        contactUs: "Contact us!"
      },
      psst: {
        heading: "PSST...",
        intro: "It's worth watching the video - besides interesting content, you'll hear what the discount code sounds like. We placed it in the video so you can get your ebook cheaper while already knowing the basics of digital punctuation.",
        whyTitle: "Why is it worth it?",
        benefits: [
          {
            number: "01.",
            title: "Learn to recognize emotional signals online",
            description: "Understand how recipients interpret your messages. Learn which phrases may be received negatively and how to improve them to build better business relationships."
          },
          {
            number: "02.",
            title: "Increase team effectiveness",
            description: "Better understanding leads to faster collaboration. Reduce the amount of explanations and repetitions through precise communication tailored to the recipient."
          },
          {
            number: "03.",
            title: "Avoid costly mistakes",
            description: "One misunderstood emoji can ruin a relationship with an important client. Our system warns against potential misunderstandings before you send a message."
          },
          {
            number: "04.",
            title: "Build a professional image",
            description: "Consistent and conscious communication throughout the company translates to better brand perception. Create communication standards that strengthen your professionalism."
          }
        ]
      },
      emojiGrid: {
        heading: "Do you know the basics?"
      },
      faq: {
        heading: "How can freemoji help you?",
        benefits: [
          { emoji: "👀", title: "Better emotion reading – recognize hidden emotions in conversation partners" },
          { emoji: "🧠", title: "Emotional intelligence 2.0 – develop empathy in digital environment" },
          { emoji: "🗣️", title: "More effective meetings – better decisions, fewer misunderstandings" },
          { emoji: "💬", title: "Confidence in conversation – less stress in negotiations and online presentations" },
          { emoji: "⚡", title: "Leader credibility – build authority and trust in your team" }
        ],
        questions: [
          {
            emoji: "🤔",
            question: "What is digital body language?",
            answer: "Digital body language is how we express emotions, intentions, and tone in written communication - through emojis, punctuation, text formatting, response time, and other elements that replace facial expressions and gestures in face-to-face conversations."
          },
          {
            emoji: "👥",
            question: "Who is freemoji for?",
            answer: "For anyone who communicates in writing at work or in personal life. We especially recommend it for HR professionals, salespeople, team leaders, coaches, and trainers."
          },
          {
            emoji: "📚",
            question: "What does the training look like?",
            answer: "We offer live webinars, self-study educational materials, interactive exercises, and mini games that help understand the context of emojis in communication."
          },
          {
            emoji: "💰",
            question: "How much does access cost?",
            answer: "Platform access starts at 199 PLN. You can find pricing details in the contact section or by writing to us at kontakt@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "Can I test the platform?",
            answer: "Yes! Sign up for a free webinar to learn about our approach and see a preview of the platform in action."
          }
        ]
      },
      testimonials: {
        heading: "Testimonials",
        subtitle: "See what our clients say about us",
        list: [
          {
            emoji: "🥰",
            quote: "BetterMessage completely changed the way I communicate with my team. I used to struggle with interpreting message tone. Now I understand the context and avoid misunderstandings.",
            name: "Karol Chrapkiewicz",
            title: "Re Bena Gesta"
          },
          {
            emoji: "😊",
            quote: "As an HR Manager, I send dozens of messages to candidates daily. BetterMessage helped me build a warmer, more professional communication tone, which improved our employer branding.",
            name: "Anna Kowalska",
            title: "HR Manager, TechCorp"
          },
          {
            emoji: "🎯",
            quote: "In sales, relationships are everything. Thanks to BetterMessage, I learned to express empathy in text messages, which significantly improved conversion and customer satisfaction.",
            name: "Marcin Nowak",
            title: "Sales Director, SalesPro"
          },
          {
            emoji: "💡",
            quote: "As a coach conducting online sessions and email correspondence, BetterMessage showed me how important context is in written communication. It completely changed my practice.",
            name: "Joanna Wiśniewska",
            title: "Business Coach"
          }
        ]
      }
    },
    contact: {
      title: "Contact",
      heading: "Have a question? Write to us!",
      emojiReminder: "(Don't forget to add emojis!)",
      formText: {
        hello: "Hi, my name is",
        namePlaceholder: "Your name*",
        andIHave: "and I have a question regarding",
        subjectPlaceholder: "Question subject*",
        namely: "namely:",
        messagePlaceholder: "Describe your question or message*",
        replyTo: "I would like to receive a reply to my email:",
        emailPlaceholder: "Your email address*",
        consent: "I have read the Terms and Conditions and Privacy Policy",
        submit: "Send message"
      },
      name: "Full name",
      email: "Email",
      message: "Message",
      send: "Send",
      placeholder: {
        name: "John Doe",
        email: "john@example.com",
        message: "Your message..."
      }
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      contact: "Contact",
      rights: "All rights reserved"
    }
  }
};
