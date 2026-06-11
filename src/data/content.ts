export type VariantKey = "normalne" | "genz" | "boomer" | "genalpha" | "millennials";

export interface HeroContent {
  headline: string[];
  subtitle: string;
  cta: string;
  ctaSub: string;
}

export interface AboutPoint {
  num: string;
  title: string;
  desc: string;
}

export interface AboutContent {
  label: string;
  heading: string;
  points: AboutPoint[];
}

export interface EmojiShowcaseContent {
  heading: string;
  subheading: string;
}

export interface DigitalCommContent {
  label: string;
  heading: string;
  paragraphs: string[];
  callout: string;
}

export interface ProblemContent {
  heading: string;
  desc: string;
  bullets: string[];
  extra?: string;
}

export interface SolutionContent {
  heading: string;
  desc: string;
  benefits: { emoji: string; text: string }[];
}

export interface WebinarContent {
  heading: string;
  desc: string;
  bullets: { emoji: string; text: string }[];
  cta: string;
}

export interface WebinarPromoContent {
  heading: string;
  subtitle: string;
  bullets: string[];
  cta1: string;
  cta2: string;
}

export interface ForWhomContent {
  heading: string;
  bullets: string[];
}

export interface BetterMessageContent {
  heroHeading: string;
  heroSubtitle: string;
  heroCta: string;
  pricingHeading: string;
  videoHeading: string;
  videoSubtitle: string;
  emojiWarningHeading: string;
  testimonialsHeading: string;
  contactHeading: string;
  contactPlaceholder1: string;
  contactPlaceholder2: string;
  contactPlaceholder3: string;
  contactSubmit: string;
}

export interface EmojiGameContent {
  bannerText: string;
  quizHeading: string;
  questionLabel: string;
  scoreLabel: string;
  checkAnswer: string;
  nextQuestion: string;
  correctFeedback: string;
  incorrectFeedback: string;
  perfectScoreHeading: string;
  perfectScoreText: string;
  tryAgain: string;
  backToHome: string;
}

export interface ProductsContent {
  hero: {
    subtitle: string;
    title1: string;
    title2: string;
    cta: string;
  };
  comingSoon: string;
  currency: string;
  seeProduct: string;
  list: {
    betterMessage: {
      title: string;
      description: string;
    };
  };
}

export interface AboutPageContent {
  hero: {
    title: string;
    benefits: {
      emotions: string;
      emotionsDesc: string;
      intelligence: string;
      intelligenceDesc: string;
      meetings: string;
      meetingsDesc: string;
      confidence: string;
      confidenceDesc: string;
      credibility: string;
      credibilityDesc: string;
    };
  };
  team: {
    title: string;
    ceo: string;
    contactUs: string;
  };
  psst: {
    heading: string;
    intro: string;
    whyTitle: string;
    benefits: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  emojiGrid: {
    heading: string;
  };
  faq: {
    heading: string;
    benefits: { emoji: string; title: string }[];
    questions: {
      emoji: string;
      question: string;
      answer: string;
    }[];
  };
}

export interface SectionContent {
  hero: HeroContent;
  about: AboutContent;
  emojiShowcase: EmojiShowcaseContent;
  digitalComm: DigitalCommContent;
  problem: ProblemContent;
  solution: SolutionContent;
  webinar: WebinarContent;
  webinarPromo: WebinarPromoContent;
  forWhom: ForWhomContent;
  betterMessage: BetterMessageContent;
  emojiGame: EmojiGameContent;
  products: ProductsContent;
  aboutPage: AboutPageContent;
}

export const content: Record<VariantKey, SectionContent> = {
  normalne: {
    hero: {
      headline: ["Dzis\u0301 piszemy", "wie\u0328cej niz\u0307", "mo\u0301wimy"],
      subtitle: "A przeciez\u0307 s\u0142owo pisane, tez\u0307 ma g\u0142os.",
      cta: "Zobacz produkty! :)",
      ctaSub: "Dowiedz sie\u0328 wie\u0328cej o cyfrowej mowie cia\u0142a.",
    },
    about: {
      label: "Zatem,",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Pierwsza w Polsce platforma edukacyjna z cyfrowej mowy cia\u0142a",
          desc: "System edukacji dzia\u0142a tak samo od prawie dwustu lat. Nie zosta\u0142a jeszcze wprowadzona z\u0307adna wie\u0328ksza reforma, maja\u0328ca na celu edukowac\u0301 ludzi w sposo\u0301b adekwatny do wspo\u0301\u0142czesnych standardo\u0301w komunikacji. Jestes\u0301my odpowiedzia\u0328 na te braki.",
        },
        {
          num: "02.",
          title: "\u0141a\u0328cznik pomie\u0328dzy pokoleniami.",
          desc: "Chcemy aby osoby wychowane przed rewolucja\u0328 internetowa\u0328 nie odbiega\u0142y komunikacyjnie od standardo\u0301w narzuconych przez znacznie m\u0142odsze osoby. Wierzymy, z\u0307e w ten sposo\u0301b pokaz\u0307emy, z\u0307e moz\u0307liwe jest prze\u0142amanie bariery komunikacyjnej.",
        },
        {
          num: "03.",
          title: "Unikamy nieporozumien\u0301 po przez niew\u0142as\u0301ciwa\u0328 ekspozycje\u0328 emocjonalna\u0328.",
          desc: "Porozumiewanie sie\u0328 z pomoca\u0328 emotikono\u0301w i skro\u0301to\u0301w potrafi wyrazic\u0301 nasze komunikaty w sposo\u0301b emocjonalny, tylko gdy potrafimy uz\u0307ywac\u0301 ich prawid\u0142owo.",
        },
        {
          num: "04.",
          title: "Odczytaj rozmo\u0301wce\u0328 zanim nacis\u0301nie 'enter'.",
          desc: "Czym jest ghosting, hejt, i kropka na kon\u0301cu zdania? Chcemy wyjas\u0301nic\u0301, z\u0307e kaz\u0307dy znak ma znaczenie. Kaz\u0307de napisane s\u0142owo na klawiaturze niczym nie ro\u0301z\u0307ni sie\u0328 od wypowiedzi.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Wszystko kre\u0328ci sie\u0328 woko\u0301\u0142 emocji",
      subheading: "Co uz\u0307ytkownicy traca\u0328, nie rozumiejac\u0328 emocji w komunikacji cyfrowej? Jak okazac\u0301 sympatie\u0328, zaniepokojenie lub gniew w sposo\u0301b zrozumia\u0142y i odpowiadaja\u0328cy naszemu odczuci?",
    },
    digitalComm: {
      label: "Wiedza",
      heading: "Czym jest cyfrowa komunikacja?",
      paragraphs: [
        "Cyfrowa komunikacja to po prostu sposo\u0301b porozumiewania sie\u0328 przez internet \u2013 w wiadomos\u0301ciach, mailach, komunikatorach czy mediach spo\u0142ecznos\u0301ciowych. Poniewaz\u0307 nie widzimy wtedy mimiki ani gesto\u0301w drugiej osoby, waz\u0307na\u0328 role\u0328 zaczynaja\u0328 odgrywac\u0301 emoji i inne elementy tzw. cyfrowej mowy cia\u0142a, kto\u0301re pomagaja\u0328 pokazac\u0301 emocje i w\u0142as\u0301ciwy ton wypowiedzi.",
      ],
      callout: "\u0141zy nie zawsze sa\u0328 spowodowane smutkiem. Emoji to tez\u0307 nie rada na wszystko.",
    },
    problem: {
      heading: "Nie widzisz emocji? Tracisz po\u0142owe\u0328 komunikatu.",
      desc: "Cyfrowa komunikacja to sposo\u0301b porozumiewania sie\u0328 przez internet \u2013 w wiadomos\u0301ciach, mailach, komunikatorach czy mediach spo\u0142ecznos\u0301ciowych. Gdy nie widzimy mimiki ani gesto\u0301w rozmo\u0301wcy, \u0142atwo zgubic\u0301 emocje i w\u0142as\u0301ciwy ton wypowiedzi.",
      bullets: [
        "Emocje w komunikacji zdalnej sa\u0328 cze\u0328sto niedostrzegalne.",
        "Brak kontaktu wzrokowego, mikroekspresji, gesto\u0301w.",
        "Efektem sa\u0328: nieporozumienia, b\u0142e\u0328dne interpretacje, utracone relacje.",
      ],
    },
    solution: {
      heading: "Freemoji jest rozwiazaniem Twojego problemu",
      desc: "Odczytuj emocje z ekranu. Ucz sie cyfrowej empatii.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "Lepsze odczytywanie emocji \u2013 rozpoznawaj ukryte emocje u rozmo\u0301wco\u0301w" },
        { emoji: "\uD83E\uDDE0", text: "Inteligencja emocjonalna 2.0 \u2013 rozwijaj empatie\u0328 w s\u0301rodowisku cyfrowym" },
        { emoji: "\uD83D\uDCC8", text: "Skuteczniejsze spotkania \u2013 lepsze decyzje, mniej nieporozumien\u0301" },
        { emoji: "\uD83D\uDE0C", text: "Pewnos\u0301c\u0301 w rozmowie \u2013 mniej stresu w negocjacjach i prezentacjach online" },
        { emoji: "\uD83D\uDC51", text: "Wiarygodnos\u0301c\u0301 lidera \u2013 buduj autorytet i zaufanie w zespole" },
      ],
    },
    webinar: {
      heading: "Co obejmuje produkt?",
      desc: "",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "Poznaj podstawy netykiety oraz zrozum podstawowe poje\u0328cia z cyfrowej komunikacji" },
        { emoji: "\uD83E\uDDE0", text: "Zrozum internetowa\u0328 interpunkcje\u0328 i wyraz\u0307anie emocji online" },
        { emoji: "\uD83D\uDCC8", text: "Znacza\u0328cy wzrost jakos\u0301ci spotkan\u0301 i relacji biurowych" },
        { emoji: "\uD83D\uDE0C", text: "Uz\u0307ywanie klarownych komunikato\u0301w, kto\u0301re pozwola\u0328 Cie\u0328 lepiej zrozumiec\u0301" },
        { emoji: "\uD83D\uDC51", text: "Dowiesz sie\u0328 jak prze\u0142amac\u0301 mie\u0328dzypokoleniowa\u0328 bariere\u0328 komunikacyjna\u0328" },
      ],
      cta: "Zobacz produkt",
    },
    webinarPromo: {
      heading: "Podstawy cyfrowej mowy cia\u0142a na spotkaniach online",
      subtitle: "Jak nie byc\u0301 boomerem w rozmowie z Gen Z i jak nie byc\u0301 cringowym w rozmowie z bommerami",
      bullets: [
        "Dowiedz sie\u0328 jak zrozumiec\u0301 cyfrowa\u0328 mowe\u0328 Gen Z",
        "Naucz sie\u0328 wyraz\u0307ania emocji poprzez wiadomos\u0301ci",
        "Zrozum cyfrowy s\u0301wiat i panuja\u0328ce w nim zasady komunikacji",
      ],
      cta1: "Zmien\u0301 swoja\u0328 mowe\u0328 cia\u0142a juz\u0307 dzis\u0301",
      cta2: "Dowiedz sie\u0328 wie\u0328cej",
    },
    forWhom: {
      heading: "Dla kogo dzia\u0142amy?",
      bullets: [
        "Osoby pracuja\u0328ce w s\u0301rodowisku online",
        "Prowadza\u0328cy spotkania zdalne",
        "Zarza\u0328dzaja\u0328cy zespo\u0142ami",
        "Kaz\u0307dy, kto chce lepiej rozumiec\u0301 komunikacje\u0328 w internecie",
      ],
    },
    betterMessage: {
      heroHeading: "Komunikacja to wie\u0328cej niz\u0307 s\u0142owa",
      heroSubtitle: "Odkryj moc cyfrowej mowy cia\u0142a i rozwijaj s\u0301wiadome relacje w komunikacji online.",
      heroCta: "Rozpocznij szkolenie",
      pricingHeading: "Wybierz plan dla siebie",
      videoHeading: "Zobacz jak dzia\u0142a freemoji",
      videoSubtitle: "Kr\u00f3tkie wprowadzenie do cyfrowej mowy cia\u0142a",
      emojiWarningHeading: "\u0141zy **nie zawsze** sa\u0328 spowodowane smutkiem. Emoji to tez\u0307 **nie rada na wszystko.**",
      testimonialsHeading: "Co mo\u0301wia\u0328 nasi uczestnicy?",
      contactHeading: "Masz pytania? Napisz do nas",
      contactPlaceholder1: "Imie\u0328 i nazwisko",
      contactPlaceholder2: "temat",
      contactPlaceholder3: "tres\u0301c\u0301 wiadomos\u0301ci",
      contactSubmit: "Wys\u0142ij wiadomos\u0301c\u0301",
    },
    emojiGame: {
      bannerText: "\uD83C\uDFC6 Zdobadz\u0307 5/5 i odbierz kod na 5% rabatu!",
      quizHeading: "Quiz: Czy znasz znaczenie emoji?",
      questionLabel: "Pytanie",
      scoreLabel: "Wynik",
      checkAnswer: "Sprawd\u017A odpowied\u017A",
      nextQuestion: "Naste\u0328pne pytanie",
      correctFeedback: "Prawid\u0142owo!",
      incorrectFeedback: "Niestety, to nie jest prawid\u0142owa odpowied\u017A",
      perfectScoreHeading: "Gratulacje! \uD83C\uDF89",
      perfectScoreText: "Tw\u00f3j kod rabatowy:",
      tryAgain: "Spr\u00f3buj ponownie",
      backToHome: "Wr\u00f3\u0107 na stron\u0119 g\u0142\u00f3wn\u0105",
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
          description: "Emocje, kontekst, odbiór tonu w swoich szczegółowych wiadomościach, które można lepiej dopasować do typu odbiorcy. Stwórz właściwą komunikację. Nie musimy widzieć się na żywo, żeby dobrze zrozumieć."
        }
      }
    },
    aboutPage: {
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
            answer: "Oferujemy produkty edukacyjne, materiały do samodzielnej nauki, interaktywne ćwiczenia oraz mini gry, które pomagają zrozumieć kontekst emoji w komunikacji."
          },
          {
            emoji: "💰",
            question: "Ile kosztuje dostęp?",
            answer: "Dostęp do platformy zaczyna się od 199 zł. Szczegóły cennika znajdziesz w sekcji kontakt lub pisząc do nas na kontakt@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "Czy mogę przetestować platformę?",
            answer: "Tak! Zobacz nasze produkty, aby poznać nasze podejście i zobaczyć fragment platformy w akcji."
          }
        ]
      }
    },
  },

  genz: {
    hero: {
      headline: ["Plot twist:", "Piszesz wie\u0328cej", "niz\u0307 mo\u0301wisz"],
      subtitle: "A Twoje wiadomos\u0301ci tez\u0307 maja\u0328 vibe, aure\u0328 i emocje.",
      cta: "Check produkty \uD83D\uDD25",
      ctaSub: "Jes\u0301li ich nie pokaz\u0307esz\u2026 Twoja wiadomos\u0301c\u0301 brzmi jak NPC dialog z tutoriala.",
    },
    about: {
      label: "Ok, ale",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Platforma, kto\u0301ra uczy cyfrowej mowy cia\u0142a.",
          desc: "Czyli jak pisac\u0301 w internecie tak, z\u0307eby ludzie czuli Two\u0301j vibe, a nie zastanawiali sie\u0328 czy jestes\u0301 z\u0142y, sarkastyczny, czy po prostu suchy jak mail z HR.",
        },
        {
          num: "02.",
          title: "\u0141a\u0328czymy pokolenia \uD83E\uDD1D",
          desc: "Internet zrobi\u0142 ma\u0142y chaos komunikacyjny. Z jednej strony ludzie z ery maili i telefono\u0301w, z drugiej \u2014 ludzie z ery memo\u0301w, emoji i TikToka. Czasem rozmowa mie\u0328dzy nimi to cringe level 100.",
        },
        {
          num: "03.",
          title: "Emoji = emocje",
          desc: "W internecie emocje pokazujesz przez: emoji, styl pisania, interpunkcje\u0328, tempo odpowiedzi. Jedno emoji moz\u0307e zmieni\u0107 ca\u0142y vibe wiadomos\u0301ci. Poro\u0301wnaj: 'ok' vs 'ok \uD83D\uDE42' \u2014 ta sama wiadomos\u0301c\u0301, totalnie inna aura.",
        },
        {
          num: "04.",
          title: "Czytaj rozmo\u0301wce\u0328 zanim kliknie enter",
          desc: "Internet ma swoje zjawiska: ghosting, hejt, pasywna agresja w wiadomos\u0301ciach, legendarna\u0328 kropke\u0328 na kon\u0301cu zdania. Kaz\u0307dy znak ma znaczenie.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Wszystko kre\u0328ci sie\u0328 woko\u0301\u0142 emocji",
      subheading: "Jes\u0301li nie ogarniasz emocji w komunikacji online: wiadomos\u0301ci sa\u0328 z\u0301le rozumiane, rozmowy robia\u0328 sie\u0328 niezre\u0328czne, relacje sie\u0328 psuja\u0328. Czyli klasyczny komunikacyjny chaos.",
    },
    digitalComm: {
      label: "Real talk",
      heading: "Komunikacja online = komunikacja IRL",
      paragraphs: [
        "Przed ekranem komunikujemy sie\u0328 dzis\u0301 prawie tyle samo co na z\u0307ywo. Tylko zamiast gesto\u0301w, mimiki i tonu g\u0142osu mamy: emoji, interpunkcje\u0328, tempo odpowiedzi i styl pisania.",
        "To jest w\u0142as\u0301nie cyfrowa mowa cia\u0142a.",
      ],
      callout: "Dlatego uczymy jak: okazac\u0301 sympatie\u0328, pokazac\u0301 zaniepokojenie, wyrazic\u0301 z\u0142os\u0301c\u0301, albo zachowac\u0301 profesjonalny ton \u2014 bez robienia cringe.",
    },
    problem: {
      heading: "Nie widzisz emocji? Tracisz po\u0142owe\u0328 komunikatu.",
      desc: "W komunikacji online nie mamy kontaktu wzrokowego, mikroekspresji ani gesto\u0301w.",
      bullets: [
        "Wiadomos\u0301ci sa\u0328 z\u0301le rozumiane",
        "Rozmowy robia\u0328 sie\u0328 niezre\u0328czne",
        "Relacje sie\u0328 psuja\u0328",
      ],
      extra: "Czasem nawet nie widzisz, z\u0307e klient lub wspo\u0301\u0142pracownik ma opo\u0301r.",
    },
    solution: {
      heading: "Freemoji rozwiazuje ten problem",
      desc: "Uczymy, jak odczytywac\u0301 emocje z ekranu i rozwijac\u0301 cyfrowa\u0328 empatie\u0328.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "lepsze rozpoznawanie emocji rozmo\u0301wco\u0301w" },
        { emoji: "\uD83E\uDDE0", text: "inteligencje\u0328 emocjonalna\u0328 w s\u0301wiecie online" },
        { emoji: "\uD83D\uDCC8", text: "skuteczniejsze spotkania i decyzje" },
        { emoji: "\uD83D\uDE0C", text: "wie\u0328ksza\u0328 pewnos\u0301c\u0301 w rozmowach" },
        { emoji: "\uD83D\uDC51", text: "silniejszy autorytet lidera" },
      ],
    },
    webinar: {
      heading: "Co obejmuje produkt?",
      desc: "",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "podstawy netykiety i cyfrowej komunikacji" },
        { emoji: "\uD83E\uDDE0", text: "znaczenie interpunkcji i emocji w wiadomos\u0301ciach" },
        { emoji: "\uD83D\uDCC8", text: "lepsza\u0328 jakos\u0301c\u0301 spotkan\u0301 i relacji w pracy" },
        { emoji: "\uD83D\uDE0C", text: "jasne i zrozumia\u0142e komunikaty" },
        { emoji: "\uD83D\uDC51", text: "prze\u0142amanie bariery komunikacyjnej mie\u0328dzy pokoleniami" },
      ],
      cta: "Zobacz produkt",
    },
    webinarPromo: {
      heading: "Podstawy cyfrowej mowy cia\u0142a",
      subtitle: "Jak nie miec\u0301 boomer vibe w rozmowie z Gen Z i jak nie byc\u0301 cringe w rozmowie z boomerami.",
      bullets: [
        "jak rozumiec\u0301 cyfrowa\u0328 mowe\u0328 Gen Z",
        "jak pokazywac\u0301 emocje w wiadomos\u0301ciach",
        "jak dzia\u0142a komunikacja w internecie",
      ],
      cta1: "Zmien\u0301 swoja\u0328 cyfrowa\u0328 mowe\u0328 cia\u0142a juz\u0307 dzis\u0301",
      cta2: "Dowiedz sie\u0328 wie\u0328cej",
    },
    forWhom: {
      heading: "Dla kogo to jest?",
      bullets: [
        "Kaz\u0307dy kto pracuje online",
        "Kaz\u0307dy kto pisze duz\u0307o wiadomos\u0301ci",
        "Kaz\u0307dy kto prowadzi spotkania zdalne",
        "Albo po prostu chce lepiej ogarniac\u0301 komunikacje\u0328 w internecie",
      ],
    },
    betterMessage: {
      heroHeading: "Komunikacja to vibe, nie tylko s\u0142owa",
      heroSubtitle: "Naucz sie\u0328 czytac\u0301 emocje przez ekran i buduj normalne relacje online.",
      heroCta: "Wbijaj na szkolenie \uD83D\uDD25",
      pricingHeading: "Wybierz sw\u00f3j plan",
      videoHeading: "Zobacz jak to dzia\u0142a",
      videoSubtitle: "Quick intro do cyfrowej mowy cia\u0142a",
      emojiWarningHeading: "\u0141zy **nie zawsze** = smutek. Emoji to tez\u0307 **nie fix na wszystko.**",
      testimonialsHeading: "Co m\u00f3wia\u0328 uczestnicy?",
      contactHeading: "Pytania? Wrzucaj",
      contactPlaceholder1: "Imie\u0328",
      contactPlaceholder2: "o co chodzi",
      contactPlaceholder3: "Tw\u00f3j message",
      contactSubmit: "Wy\u015blij",
    },
    emojiGame: {
      bannerText: "\uD83C\uDFC6 5/5 = kod na 5% rabatu!",
      quizHeading: "Quiz: Znasz emoji?",
      questionLabel: "Pytanie",
      scoreLabel: "Score",
      checkAnswer: "Check",
      nextQuestion: "Dalej",
      correctFeedback: "Git! \uD83D\uDCAF",
      incorrectFeedback: "Nie tym razem",
      perfectScoreHeading: "GG! \uD83C\uDF89",
      perfectScoreText: "Tw\u00f3j kod:",
      tryAgain: "Jeszcze raz",
      backToHome: "Wr\u00f3\u0107 na home",
    },
    products: {
      hero: {
        subtitle: "Odkryj komunikacj\u0119 na nowo. Zobaczysz jak du\u017co zmienia odpowiedni vibe w wiadomo\u015bciach.",
        title1: "ZOBACZ WSZYSTKIE",
        title2: "PRODUKTY",
        cta: "Czekaj produkty"
      },
      comingSoon: "Wkr\u00f3tce",
      currency: "z\u0142",
      seeProduct: "Zobacz produkt \u2192",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emocje, kontekst i vibe w Twoich wiadomo\u015bciach. Dostosuj styl do rozm\u00f3wcy i unikaj cringe. Pisz tak \u017ceby ludzie czuli Tw\u00f3j mood bez zostawiania na renderze."
        }
      }
    },
    aboutPage: {
      hero: {
        title: "Zyskaj now\u0105 przewag\u0119 w remote communication.",
        benefits: {
          emotions: "Lepsze odczytywanie emocji",
          emotionsDesc: "rozpoznawaj ukryte emocje u rozm\u00f3wc\u00f3w",
          intelligence: "Emotional intelligence 2.0",
          intelligenceDesc: "rozwijaj empati\u0119 w \u015brodowisku cyfrowym",
          meetings: "Skuteczniejsze spotkania",
          meetingsDesc: "lepsze decyzje, mniej miscommów",
          confidence: "Pewno\u015b\u0107 w rozmowie",
          confidenceDesc: "mniej stresu w negocjacjach i prezentacjach online",
          credibility: "Wiarygodno\u015b\u0107 lidera",
          credibilityDesc: "buduj autorytet i zaufanie w zespole"
        }
      },
      team: {
        title: "Poznajmy si\u0119 lepiej!",
        ceo: "CEO",
        contactUs: "Wrzucaj message!"
      },
      psst: {
        heading: "PSST...",
        intro: "Warto obaczy\u0107 wideo, poza ciekaw\u0105 tre\u015bci\u0105 us\u0142yszysz jak brzmi kod rabatowy. Zastawiaj\u0105 go w nagraniu \u017ceby\u015b odebra\u0142 sw\u00f3j ebook taniej znaj\u0105c ju\u017c podstawy cyfrowej interpunkcji.",
        whyTitle: "Dlaczego warto?",
        benefits: [
          {
            number: "01.",
            title: "Naucz si\u0119 rozpoznawa\u0107 sygna\u0142y emocjonalne online",
            description: "Zrozum, jak odbiorcy interpretuj\u0105 Twoje wiadomo\u015bci. Dowiedz si\u0119, kt\u00f3re sformu\u0142owania mog\u0105 by\u0107 odebrane negatywnie i jak je poprawi\u0107, \u017ceby budowa\u0107 lepsze relacje biznesowe bez cringe."
          },
          {
            number: "02.",
            title: "Zwi\u0119ksz efektywno\u015b\u0107 zespo\u0142u",
            description: "Lepsze zrozumienie prowadzi do szybszej wsp\u00f3\u0142pracy. Zredukuj ilo\u015b\u0107 wyja\u015bnie\u0144 i powt\u00f3rze\u0144 dzi\u0119ki precyzyjnej komunikacji dostosowanej do odbiorcy."
          },
          {
            number: "03.",
            title: "Unikaj kosztownych wpadek",
            description: "Jedno \u017ale odebrane emoji mo\u017ce zepsuc relacj\u0119 z wa\u017cnym klientem. Nasz system ostrzega przed potencjalnymi nieporozumieniami zanim wy\u015blesz wiadomo\u015b\u0107."
          },
          {
            number: "04.",
            title: "Buduj profesjonalny wizerunek",
            description: "Sp\u00f3jna i \u015bwiadoma komunikacja w ca\u0142ej firmie przek\u0142ada si\u0119 na lepszy odbi\u00f3r marki. Stw\u00f3rz standardy komunikacji, kt\u00f3re wzmocni\u0105 Tw\u00f3j profesjonalizm."
          }
        ]
      },
      emojiGrid: {
        heading: "Znasz podstawy?"
      },
      faq: {
        heading: "W czym freemoji mo\u017ce Ci pom\u00f3c?",
        benefits: [
          { emoji: "\uD83D\uDC40", title: "Lepsze odczytywanie emocji \u2013 rozpoznawaj ukryte emocje u rozm\u00f3wc\u00f3w" },
          { emoji: "\uD83E\uDDE0", title: "Emotional intelligence 2.0 \u2013 rozwijaj empati\u0119 w \u015brodowisku cyfrowym" },
          { emoji: "\uD83D\uDDE3\uFE0F", title: "Skuteczniejsze spotkania \u2013 lepsze decyzje, mniej miscomm\u00f3w" },
          { emoji: "\uD83D\uDCAC", title: "Pewno\u015b\u0107 w rozmowie \u2013 mniej stresu w negocjacjach i prezentacjach online" },
          { emoji: "\u26A1", title: "Wiarygodno\u015b\u0107 lidera \u2013 buduj autorytet i zaufanie w zespole" }
        ],
        questions: [
          {
            emoji: "\uD83E\uDD14",
            question: "Czym dok\u0142adnie jest cyfrowa mowa cia\u0142a?",
            answer: "To spos\u00f3b wyra\u017cania emocji, intencji i tonu w komunikacji pisemnej \u2014 za pomoc\u0105 emoji, interpunkcji, formatowania tekstu, czasu odpowiedzi i innych element\u00f3w, kt\u00f3re zast\u0119puj\u0105 mimik\u0119 i gesty w rozmowie twarza w twarz."
          },
          {
            emoji: "\uD83D\uDC65",
            question: "Dla kogo jest freemoji?",
            answer: "Dla ka\u017cdego, kto komunikuje si\u0119 pisemnie w pracy lub \u017cyciu prywatnym. Szczeg\u00f3lnie polecamy osobom z dzia\u0142\u00f3w HR, sprzeda\u017cy, liderom zespo\u0142\u00f3w, coachom i trenerom."
          },
          {
            emoji: "\uD83D\uDCDA",
            question: "Jak wygl\u0105da szkolenie?",
            answer: "Oferujemy produkt edukacyjny z materia\u0142ami do samodzielnej nauki, interaktywnymi \u0107wiczeniami oraz mini grami, kt\u00f3re pomagaj\u0105 zrozumie\u0107 kontekst emoji w komunikacji."
          },
          {
            emoji: "\uD83D\uDCB0",
            question: "Ile kosztuje dost\u0119p?",
            answer: "Dost\u0119p do platformy zaczyna si\u0119 od 199 z\u0142. Szczeg\u00f3\u0142y cennika znajdziesz w sekcji kontakt lub pisz\u0105c do nas na kontakt@freemoji.com."
          },
          {
            emoji: "\uD83C\uDFAF",
            question: "Czy mog\u0119 przetestowa\u0107 platform\u0119?",
            answer: "Tak! Kup produkt, \u017ceby pozna\u0107 nasze podej\u015bcie i zobaczy\u0107 platform\u0119 w akcji."
          }
        ]
      }
    },
  },

  boomer: {
    hero: {
      headline: ["Dzis\u0301 piszemy", "do siebie cze\u0328s\u0301ciej,", "niz\u0307 rozmawiamy"],
      subtitle: "Wiadomos\u0301ci, e-maile, komunikatory i spotkania online sta\u0142y sie\u0328 codziennos\u0301cia\u0328. Warto jednak pamie\u0328tac\u0301, z\u0307e ro\u0301wniez\u0307 s\u0142owo pisane ma swo\u0301j ton i emocje.",
      cta: "Kup produkt",
      ctaSub: "Dowiedz sie\u0328 wie\u0328cej o cyfrowej mowie cia\u0142a.",
    },
    about: {
      label: "Zatem,",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Pierwsza w Polsce platforma edukacyjna pos\u0301wie\u0328cona cyfrowej mowie cia\u0142a",
          desc: "freemoji to pierwsza w Polsce platforma edukacyjna pos\u0301wie\u0328cona cyfrowej mowie cia\u0142a \u2013 czyli emocjom, tonowi i znaczeniom ukrytym w komunikacji internetowej. System edukacji od wielu lat uczy nas glo\u0301wnie komunikacji bezpos\u0301redniej. Tymczasem wspo\u0301\u0142czesne z\u0307ycie zawodowe i prywatne w duz\u0307ej mierze przenios\u0142o sie\u0328 do internetu.",
        },
        {
          num: "02.",
          title: "\u0141a\u0328czymy pokolenia",
          desc: "Internet stworzy\u0142 nowe standardy komunikacji, kto\u0301re dla wielu oso\u0301b moga\u0328 byc\u0301 nieintuicyjne. Jednoczes\u0301nie m\u0142odsze pokolenia wychowa\u0142y sie\u0328 w s\u0301wiecie wiadomos\u0301ci tekstowych, skro\u0301to\u0301w i emoji. Naszym celem jest zbudowanie mostu mie\u0328dzy pokoleniami.",
        },
        {
          num: "03.",
          title: "Emocje w komunikacji online",
          desc: "W rozmowie twarza\u0328 w twarz widzimy mimike\u0328, gesty i s\u0142yszymy ton g\u0142osu. W komunikacji internetowej te elementy cze\u0328sto znikaja\u0328. Dlatego coraz wie\u0328ksza\u0328 role\u0328 odgrywaja\u0328 takie elementy jak: sposo\u0301b formu\u0142owania wiadomos\u0301ci, interpunkcja, emoji i skro\u0301ty.",
        },
        {
          num: "04.",
          title: "Zrozum rozmo\u0301wce\u0328 zanim nacis\u0301nie wys\u0301lij",
          desc: "W s\u0301wiecie komunikacji cyfrowej nawet drobne elementy moga\u0328 miec\u0301 znaczenie. Zjawiska takie jak ghosting, hejt czy sposo\u0301b zakon\u0301czenia zdania potrafia\u0328 wp\u0142ywac\u0301 na to, jak odbieramy wiadomos\u0301c\u0301. W praktyce oznacza to, z\u0307e kaz\u0307dy znak i kaz\u0307de s\u0142owo moga\u0328 zmieniac\u0301 ton wypowiedzi.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Wszystko zaczyna sie\u0328 od emocji",
      subheading: "Brak zrozumienia emocji w komunikacji cyfrowej moz\u0307e prowadzic\u0301 do: nieporozumien\u0301, b\u0142e\u0328dnych interpretacji, utraty zaufania, napie\u0328c\u0301 w relacjach zawodowych.",
    },
    digitalComm: {
      label: "Wiedza",
      heading: "Czym jest cyfrowa komunikacja?",
      paragraphs: [
        "Cyfrowa komunikacja to sposo\u0301b porozumiewania sie\u0328 za pomoca\u0328 internetu \u2013 w wiadomos\u0301ciach, e-mailach, komunikatorach czy mediach spo\u0142ecznos\u0301ciowych. Poniewaz\u0307 nie widzimy wtedy mimiki ani gesto\u0301w rozmo\u0301wcy, duz\u0307e znaczenie maja\u0328 elementy takie jak styl pisania, interpunkcja czy emoji, kto\u0301re pomagaja\u0328 wyrazic\u0301 emocje i w\u0142as\u0301ciwy ton wypowiedzi.",
      ],
      callout: "Dlatego warto nauczyc\u0301 sie\u0328, jak w sposo\u0301b jasny i zrozumia\u0142y wyraz\u0307ac\u0301 emocje w wiadomos\u0301ciach oraz jak odczytywac\u0301 intencje rozmo\u0301wco\u0301w.",
    },
    problem: {
      heading: "Nie widzisz emocji? Tracisz po\u0142owe\u0328 komunikatu.",
      desc: "W komunikacji zdalnej brakuje wielu sygna\u0142o\u0301w obecnych w rozmowie bezpos\u0301redniej \u2013 kontaktu wzrokowego, gesto\u0301w czy mikroekspresji twarzy. W efekcie \u0142atwo przeoczyc\u0301 emocje rozmo\u0301wcy, opo\u0301r klienta czy niepewnos\u0301c\u0301 wspo\u0301\u0142pracownika.",
      bullets: [
        "nieporozumien\u0301",
        "b\u0142e\u0328dnych decyzji",
        "pogorszenia relacji zawodowych",
      ],
    },
    solution: {
      heading: "Fremoji \u2013 rozwiazanie dla komunikacji cyfrowej",
      desc: "Naszym celem jest nauczyc\u0301 uczestniko\u0301w, jak odczytywac\u0301 emocje w komunikacji online i s\u0301wiadomie budowac\u0301 przekaz.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "lepsze rozumienie emocji rozmo\u0301wco\u0301w" },
        { emoji: "\uD83E\uDDE0", text: "rozwo\u0301j inteligencji emocjonalnej w komunikacji cyfrowej" },
        { emoji: "\uD83D\uDCC8", text: "skuteczniejsze spotkania i rozmowy biznesowe" },
        { emoji: "\uD83D\uDE0C", text: "wie\u0328ksza\u0328 pewnos\u0301c\u0301 w komunikacji online" },
        { emoji: "\uD83D\uDC51", text: "silniejszy autorytet w zespole" },
      ],
    },
    webinar: {
      heading: "Co obejmuje produkt?",
      desc: "W produkcie znajdziesz:",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "poznasz podstawy netykiety i komunikacji cyfrowej" },
        { emoji: "\uD83E\uDDE0", text: "zrozumiesz znaczenie interpunkcji i emocji w wiadomos\u0301ciach" },
        { emoji: "\uD83D\uDCC8", text: "dowiesz sie\u0328, jak poprawic\u0301 jakos\u0301c\u0301 spotkan\u0301 online" },
        { emoji: "\uD83D\uDE0C", text: "nauczysz sie\u0328 tworzyc\u0301 jasne i zrozumia\u0142e komunikaty" },
        { emoji: "\uD83D\uDC51", text: "poznasz sposoby prze\u0142amywania barier komunikacyjnych mie\u0328dzy pokoleniami" },
      ],
      cta: "Kup produkt",
    },
    webinarPromo: {
      heading: "Podstawy cyfrowej mowy cia\u0142a na spotkaniach online",
      subtitle: "Jak nie byc\u0301 boomerem dla Gen Z i jak nie byc\u0301 cringowym dla boomero\u0301w.",
      bullets: [
        "jak rozumiec\u0301 komunikacje\u0328 m\u0142odszych pokolen\u0301",
        "jak wyraz\u0307ac\u0301 emocje w wiadomos\u0301ciach tekstowych",
        "jakie zasady obowia\u0328zuja\u0328 w komunikacji internetowej",
      ],
      cta1: "Zmien\u0301 swoja\u0328 mowe\u0328 cia\u0142a juz\u0307 dzis\u0301",
      cta2: "Dowiedz sie\u0328 wie\u0328cej",
    },
    forWhom: {
      heading: "Dla kogo jest ten produkt?",
      bullets: [
        "Osoby pracuja\u0328ce w s\u0301rodowisku online",
        "Prowadza\u0328cy spotkania zdalne",
        "Zarza\u0328dzaja\u0328cy zespo\u0142ami",
        "Osoby, kto\u0301re chca\u0328 lepiej rozumiec\u0301 komunikacje\u0328 w internecie",
      ],
    },
    betterMessage: {
      heroHeading: "Komunikacja to wie\u0328cej niz\u0307 s\u0142owa",
      heroSubtitle: "Rozwijaj s\u0301wiadome relacje w komunikacji online poprzez zrozumienie cyfrowej mowy cia\u0142a.",
      heroCta: "Zapisz sie\u0328 na szkolenie",
      pricingHeading: "Wybierz odpowiedni plan",
      videoHeading: "Poznaj freemoji",
      videoSubtitle: "Wprowadzenie do cyfrowej mowy cia\u0142a",
      emojiWarningHeading: "\u0141zy **nie zawsze** sa\u0328 spowodowane smutkiem. Emoji to tez\u0307 **nie rada na wszystko.**",
      testimonialsHeading: "Opinie uczestnik\u00f3w",
      contactHeading: "Masz pytania? Skontaktuj sie\u0328 z nami",
      contactPlaceholder1: "Imie\u0328 i nazwisko",
      contactPlaceholder2: "temat zapytania",
      contactPlaceholder3: "tres\u0301c\u0301 wiadomos\u0301ci",
      contactSubmit: "Wys\u0142ij zapytanie",
    },
    emojiGame: {
      bannerText: "\uD83C\uDFC6 Uzyskaj wynik 5/5 i otrzymaj kod rabatowy na 5%!",
      quizHeading: "Quiz: Czy rozumiesz znaczenie emoji?",
      questionLabel: "Pytanie",
      scoreLabel: "Wynik",
      checkAnswer: "Sprawd\u017A odpowied\u017A",
      nextQuestion: "Naste\u0328pne pytanie",
      correctFeedback: "Prawid\u0142owo!",
      incorrectFeedback: "Niestety, odpowied\u017A jest nieprawid\u0142owa",
      perfectScoreHeading: "Gratulacje! \uD83C\uDF89",
      perfectScoreText: "Tw\u00f3j kod rabatowy:",
      tryAgain: "Spr\u00f3buj ponownie",
      backToHome: "Powr\u00f3t na stron\u0119 g\u0142\u00f3wn\u0105",
    },
    products: {
      hero: {
        subtitle: "Odkryj na nowo sztuk\u0119 komunikacji. Zobacz, jak wiele zmienia odpowiednia mowa cia\u0142a w \u015brodowisku internetowym.",
        title1: "ZAPOZNAJ SI\u0118 ZE WSZYSTKIMI",
        title2: "PRODUKTAMI",
        cta: "Poznaj ofert\u0119"
      },
      comingSoon: "Wkr\u00f3tce",
      currency: "z\u0142",
      seeProduct: "Szczeg\u00f3\u0142y produktu \u2192",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emocje, kontekst oraz odpowiedni ton w Pana/Pani szczeg\u00f3\u0142owych wiadomo\u015bciach, kt\u00f3re mo\u017cna dopasowa\u0107 do typu odbiorcy. Stw\u00f3rz w\u0142a\u015bciw\u0105 komunikacj\u0119. Nie potrzebujemy spotka\u0144 osobistych, aby si\u0119 dobrze zrozumie\u0107."
        }
      }
    },
    aboutPage: {
      hero: {
        title: "Zyskaj now\u0105 przewag\u0119 w komunikacji zdalnej.",
        benefits: {
          emotions: "Lepsze odczytywanie emocji",
          emotionsDesc: "rozpoznawaj ukryte emocje u rozm\u00f3wc\u00f3w",
          intelligence: "Inteligencja emocjonalna 2.0",
          intelligenceDesc: "rozwijaj empati\u0119 w \u015brodowisku cyfrowym",
          meetings: "Skuteczniejsze spotkania",
          meetingsDesc: "lepsze decyzje, mniej nieporozumie\u0144",
          confidence: "Pewno\u015b\u0107 w rozmowie",
          confidenceDesc: "mniej stresu w negocjacjach i prezentacjach online",
          credibility: "Wiarygodno\u015b\u0107 lidera",
          credibilityDesc: "buduj autorytet i zaufanie w zespole"
        }
      },
      team: {
        title: "Poznajmy si\u0119 lepiej!",
        ceo: "Dyrektor Generalny",
        contactUs: "Skontaktuj si\u0119 z nami!"
      },
      psst: {
        heading: "INFORMACJA...",
        intro: "Zalecamy obejrzenie materia\u0142u wideo. Poza warto\u015bciow\u0105 tre\u015bci\u0105 us\u0142ysz\u0105 Pa\u0144stwo kod rabatowy, kt\u00f3ry zosta\u0142 umieszczony w nagraniu w celu umo\u017cliwienia zakupu ebooka w promocyjnej cenie przy jednoczesnym zapoznaniu si\u0119 z podstawami cyfrowej interpunkcji.",
        whyTitle: "Dlaczego warto skorzysta\u0107?",
        benefits: [
          {
            number: "01.",
            title: "Nauka rozpoznawania sygna\u0142\u00f3w emocjonalnych w komunikacji online",
            description: "Zrozumienie sposobu interpretacji Pa\u0144stwa wiadomo\u015bci przez odbiorc\u00f3w. Poznanie sformu\u0142owa\u0144 mog\u0105cych by\u0107 odebranymi negatywnie oraz metod ich poprawy w celu budowania lepszych relacji biznesowych."
          },
          {
            number: "02.",
            title: "Zwi\u0119kszenie efektywno\u015bci zespo\u0142u",
            description: "Lepsze porozumienie prowadzi do sprawniejszej wsp\u00f3\u0142pracy. Redukcja liczby wyja\u015bnie\u0144 i powt\u00f3rze\u0144 dzi\u0119ki precyzyjnej komunikacji dostosowanej do odbiorcy."
          },
          {
            number: "03.",
            title: "Unikanie kosztownych nieporozumie\u0144",
            description: "Jedna nieprawid\u0142owo odebrana emotikona mo\u017ce wp\u0142yn\u0105\u0107 negatywnie na relacje z wa\u017cnym klientem. Nasz system ostrzega przed potencjalnymi niejasnościami przed wys\u0142aniem wiadomo\u015bci."
          },
          {
            number: "04.",
            title: "Budowanie profesjonalnego wizerunku",
            description: "Sp\u00f3jna i \u015bwiadoma komunikacja w ca\u0142ej organizacji przek\u0142ada si\u0119 na lepszy odbi\u00f3r marki. Tworzenie standard\u00f3w komunikacji wzmacniaj\u0105cych profesjonalizm."
          }
        ]
      },
      emojiGrid: {
        heading: "Czy zna Pan/Pani podstawy?"
      },
      faq: {
        heading: "W czym freemoji mo\u017ce Panu/Pani pom\u00f3c?",
        benefits: [
          { emoji: "\uD83D\uDC40", title: "Lepsze rozumienie emocji \u2013 rozpoznawanie ukrytych emocji u rozm\u00f3wc\u00f3w" },
          { emoji: "\uD83E\uDDE0", title: "Inteligencja emocjonalna 2.0 \u2013 rozwijanie empatii w \u015brodowisku cyfrowym" },
          { emoji: "\uD83D\uDDE3\uFE0F", title: "Skuteczniejsze spotkania \u2013 lepsze decyzje, mniej nieporozumie\u0144" },
          { emoji: "\uD83D\uDCAC", title: "Pewno\u015b\u0107 w rozmowie \u2013 mniej stresu w negocjacjach i prezentacjach online" },
          { emoji: "\u26A1", title: "Wiarygodno\u015b\u0107 lidera \u2013 budowanie autorytetu i zaufania w zespole" }
        ],
        questions: [
          {
            emoji: "\uD83E\uDD14",
            question: "Czym dok\u0142adnie jest cyfrowa mowa cia\u0142a?",
            answer: "To spos\u00f3b wyra\u017cania emocji, intencji i tonu w komunikacji pisemnej \u2014 za pomoc\u0105 emotikon, interpunkcji, formatowania tekstu, czasu odpowiedzi i innych element\u00f3w, kt\u00f3re zast\u0119puj\u0105 mimik\u0119 i gesty w rozmowie bezpo\u015bredniej."
          },
          {
            emoji: "\uD83D\uDC65",
            question: "Dla kogo przeznaczona jest platforma freemoji?",
            answer: "Dla ka\u017cdej osoby komunikuj\u0105cej si\u0119 pisemnie w pracy lub \u017cyciu prywatnym. Szczeg\u00f3lnie zalecamy osobom z dzia\u0142\u00f3w HR, sprzeda\u017cy, liderom zespo\u0142\u00f3w, coachom oraz trenerom."
          },
          {
            emoji: "\uD83D\uDCDA",
            question: "Jak przebiega szkolenie?",
            answer: "Oferujemy produkt edukacyjny z materia\u0142ami do samodzielnej nauki, interaktywnymi \u0107wiczeniami oraz mini grami pomagaj\u0105cymi zrozumie\u0107 kontekst emotikon w komunikacji."
          },
          {
            emoji: "\uD83D\uDCB0",
            question: "Jaki jest koszt dost\u0119pu?",
            answer: "Dost\u0119p do platformy zaczyna si\u0119 od kwoty 199 z\u0142. Szczeg\u00f3\u0142y cennika dost\u0119pne s\u0105 w sekcji kontakt lub po napisaniu na adres kontakt@freemoji.com."
          },
          {
            emoji: "\uD83C\uDFAF",
            question: "Czy istnieje mo\u017cliwo\u015b\u0107 przetestowania platformy?",
            answer: "Tak! Zapraszamy do kupienia produktu w celu zapoznania si\u0119 z naszym podej\u015bciem oraz zobaczenia platformy w dzia\u0142aniu."
          }
        ]
      }
    },
  },

  genalpha: {
    hero: {
      headline: ["Yo, piszesz", "wi\u0119cej ni\u017C", "gadasz"],
      subtitle: "A Twoje wiadomo\u015Bci maj\u0105 zero rizzu. No cap.",
      cta: "Zobacz produkty \uD83D\uDD25",
      ctaSub: "Bo pisanie jak bot to biggest L ever.",
    },
    about: {
      label: "Wait, co?",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Skill tree do komunikacji online \uD83C\uDFAE",
          desc: "freemoji to platforma, kt\u00F3ra uczy jak pisa\u0107 w necie \u017Ceby ludzie czuli Tw\u00F3j vibe. Szko\u0142a uczy pisa\u0107 wypracowania od 200 lat. Ale Ty \u017Cyjesz na Discordzie, TikToku i Snapie. Nikt Ci nie powiedzia\u0142 jak tam pisa\u0107 \u017Ceby nie brzmie\u0107 jak NPC.",
        },
        {
          num: "02.",
          title: "Bridgujemy pokolenia \uD83C\uDF09",
          desc: "Twoi rodzice pisz\u0105 'Dzi\u0119kuj\u0119.' z kropk\u0105 i my\u015Blisz \u017Ce s\u0105 mad. A oni my\u015Bl\u0105 \u017Ce Tw\u00F3j brak odpowiedzi = ignorowanie. Nikt nikogo nie ogarnia. freemoji to fix na ten mi\u0119dzypokoleniowy bug.",
        },
        {
          num: "03.",
          title: "Emoji to nie dekoracja, to skill \uD83E\uDDE0",
          desc: "W necie emocje = emoji + styl pisania + tempo odpowiedzi. Jedno emoji zmienia ca\u0142y mood. 'ok' vs 'ok \uD83D\uDE42' \u2014 same s\u0142owo, diff world. Kto tego nie czai, ten jest cooked.",
        },
        {
          num: "04.",
          title: "Czytaj ludzi zanim klikn\u0105 send \uD83D\uDC41\uFE0F",
          desc: "Ghosting, hejt, passive-aggressive kropki, zostawianie na renderze \u2014 ka\u017Cdy move w czacie ma znaczenie. Pisanie w necie to pvp komunikacyjne. Lepiej mie\u0107 dobry build.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Emocje to ca\u0142y gameplay",
      subheading: "Jak nie czaisz emocji online to masz perma problem: miscomm, drama, trust issues, awkward rozmowy. Uczymy jak ogarnia\u0107 sympati\u0119, z\u0142o\u015B\u0107, zaniepokojenie i profesjonalny ton \u2014 bez bycia cringe. Fr fr.",
    },
    digitalComm: {
      label: "No cap",
      heading: "Cyfrowa komunikacja = jak m\u00F3wisz ale przez ekran",
      paragraphs: [
        "DM-y, Snap, Discord, TikTok komentarze, maile (tak, te te\u017C). Nie widzisz twarzy drugiej osoby. Dlatego emoji, interpunkcja i styl pisania to Tw\u00F3j digital vibe check. To jest cyfrowa mowa cia\u0142a.",
      ],
      callout: "'ok' vs 'ok \uD83D\uDE42' \u2014 same message, totalnie inna aura. Je\u015Bli tego nie czujesz \u2014 czas na upgrade.",
    },
    problem: {
      heading: "Nie czytasz emocji? Tracisz po\u0142ow\u0119 przekazu.",
      desc: "Online nie masz kontaktu wzrokowego, gest\u00F3w ani tonu g\u0142osu. Wszystko leci przez tekst.",
      bullets: [
        "b\u0142\u0119dne interpretacje = drama",
        "napi\u0119cia w ka\u017Cdej rozmowie",
        "trust issues z ka\u017Cdym",
        "bad takes i gorsze decyzje",
      ],
    },
    solution: {
      heading: "freemoji = upgrade do komunikacji",
      desc: "Dajemy Ci skill do czytania ludzi przez ekran. Level up gwarantowany.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "czytanie emocji rozm\u00F3wc\u00F3w jak open book" },
        { emoji: "\uD83E\uDDE0", text: "emotional intelligence ale w wersji online" },
        { emoji: "\uD83D\uDCC8", text: "lepsze spotkania, mniej awkward silence" },
        { emoji: "\uD83D\uDE0C", text: "pewno\u015B\u0107 w ka\u017Cdym czacie i callu" },
        { emoji: "\uD83D\uDC51", text: "sigma-level autorytet w zespole" },
      ],
    },
    webinar: {
      heading: "Co dostaniesz w produkcie?",
      desc: "Solid loot:",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "podstawy netykiety \u2014 \u017Ceby nie by\u0107 tym cringe typem w czacie" },
        { emoji: "\uD83E\uDDE0", text: "jak dzia\u0142aj\u0105 emocje w wiadomo\u015Bciach (interpunkcja hits different)" },
        { emoji: "\uD83D\uDCC8", text: "jak robi\u0107 spotkania online kt\u00F3re nie s\u0105 L" },
        { emoji: "\uD83D\uDE0C", text: "jasne komunikaty \u2014 zero miscommunication" },
        { emoji: "\uD83D\uDC51", text: "jak gada\u0107 z boomerami i Gen Z bez cringe'u" },
      ],
      cta: "Check produkty \uD83C\uDFAE",
    },
    webinarPromo: {
      heading: "Cyfrowa mowa cia\u0142a \u2014 starter pack",
      subtitle: "Jak nie by\u0107 sus w rozmowie z doros\u0142ymi i jak nie by\u0107 cringe dla swoich.",
      bullets: [
        "jak czyta\u0107 vibe rozm\u00F3wcy z samego tekstu",
        "jak pisa\u0107 \u017Ceby ludzie czuli Tw\u00F3j mood",
        "jak ogarnia\u0107 komunikacj\u0119 mi\u0119dzy pokoleniami",
      ],
      cta1: "Zobacz produkty",
      cta2: "Wi\u0119cej info",
    },
    forWhom: {
      heading: "Dla kogo to jest?",
      bullets: [
        "Ka\u017Cdy kto \u017Cyje online (czyli basically wszyscy)",
        "Ka\u017Cdy kto pisze wi\u0119cej ni\u017C m\u00F3wi",
        "Ka\u017Cdy kto chce mie\u0107 rizz w komunikacji",
        "I ka\u017Cdy kto ma do\u015B\u0107 bycia \u017Ale rozumianym w czacie",
      ],
    },
    betterMessage: {
      heroHeading: "Komunikacja = wi\u0119cej ni\u017C words",
      heroSubtitle: "Level up swoj\u0105 cyfrowa\u0328 mowe\u0328 cia\u0142a i buduj proper relacje online. No cap.",
      heroCta: "Join szkolenie \uD83D\uDD25",
      pricingHeading: "Wybierz sw\u00f3j plan",
      videoHeading: "Zobacz jak to leci",
      videoSubtitle: "Quick intro do cyfrowej mowy cia\u0142a",
      emojiWarningHeading: "\u0141zy **nie zawsze** = crying. Emoji to **nie cheat code.**",
      testimonialsHeading: "Co gadaj\u0105 uczestnicy?",
      contactHeading: "Pytania? Drop message",
      contactPlaceholder1: "Imi\u0119",
      contactPlaceholder2: "o co pytasz",
      contactPlaceholder3: "Tw\u00f3j vibe",
      contactSubmit: "Send",
    },
    emojiGame: {
      bannerText: "\uD83C\uDFC6 5/5 = kod na 5% off!",
      quizHeading: "Quiz: Czaisz emoji?",
      questionLabel: "Quest",
      scoreLabel: "Score",
      checkAnswer: "Check",
      nextQuestion: "Next",
      correctFeedback: "W! \uD83D\uDD25",
      incorrectFeedback: "L tym razem",
      perfectScoreHeading: "Gigachad! \uD83C\uDF89",
      perfectScoreText: "Tw\u00f3j kod:",
      tryAgain: "Retry",
      backToHome: "Back to home",
    },
    products: {
      hero: {
        subtitle: "Odkryj komunikację na nowo. Zobacz jak dużo zmienia proper vibe w czacie.",
        title1: "WSZYSTKIE",
        title2: "PRODUKTY",
        cta: "Check produkty"
      },
      comingSoon: "Wkrótce",
      currency: "zł",
      seeProduct: "Zobacz produkt →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emocje, kontekst, vibe w Twoich msgs które możesz dopasować do rozmówcy. Napisz proper message. Nie musisz się widzieć IRL żeby się dogadać fr fr."
        }
      }
    },
    aboutPage: {
      hero: {
        title: "Zdobądź nowy skill w remote comm.",
        benefits: {
          emotions: "Lepsze czytanie emocji",
          emotionsDesc: "wyłap hidden emocje u innych",
          intelligence: "Emotional IQ 2.0",
          intelligenceDesc: "leveluj empati\u0119 w digital world",
          meetings: "Skuteczniejsze spotkania",
          meetingsDesc: "lepsze decyzje, zero miscommunication",
          confidence: "Pewno\u015b\u0107 w czacie",
          confidenceDesc: "mniej stresu w negocjach i prezentacjach online",
          credibility: "Credibility lidera",
          credibilityDesc: "buduj autorytet i trust w squadzie"
        }
      },
      team: {
        title: "Poznajmy si\u0119 lepiej!",
        ceo: "CEO",
        contactUs: "Drop msg!"
      },
      psst: {
        heading: "PSST...",
        intro: "Warto obaczy\u0107 vid, poza ciekaw\u0105 content us\u0142yszysz jak brzmi kod rabatowy. Zaszyliśmy go w nagraniu \u017ceby\u015b odebra\u0142 sw\u00f3j ebook taniej znaj\u0105c ju\u017c podstawy digital punctuation.",
        whyTitle: "Dlaczego warto?",
        benefits: [
          {
            number: "01.",
            title: "Naucz si\u0119 czyta\u0107 emotional signals online",
            description: "Zrozum jak ludzie interpretuj\u0105 Twoje msgs. Dowiedz si\u0119 kt\u00f3re words mog\u0105 by\u0107 odebrane jako L i jak je poprawi\u0107 \u017ceby budowa\u0107 proper relacje biznesowe."
          },
          {
            number: "02.",
            title: "Leveluj efekt squad",
            description: "Lepsze zrozumienie = szybsza wsp\u00f3\u0142praca. Zredukuj ilo\u015b\u0107 wyja\u015bnie\u0144 i powtórek dzi\u0119ki precise communication dostosowanej do recipient."
          },
          {
            number: "03.",
            title: "Unikaj kosztownych fails",
            description: "Jeden \u017ale odebrany emoji mo\u017ce zrujnowa\u0107 relacje z wa\u017cnym clientem. Nasz system ostrzega przed potential miscommunication zanim wy\u015blesz msg."
          },
          {
            number: "04.",
            title: "Buduj professional image",
            description: "Sp\u00f3jna i \u015bwiadoma komunikacja w ca\u0142ej firmie = lepszy brand perception. Stw\u00f3rz communication standards kt\u00f3re wzmocni\u0105 Tw\u00f3j professionalism."
          }
        ]
      },
      emojiGrid: {
        heading: "Czaisz podstawy?"
      },
      faq: {
        heading: "W czym freemoji mo\u017ce Ci pom\u00f3c?",
        benefits: [
          { emoji: "\uD83D\uDC40", title: "Lepsze czytanie emotions \u2013 wyłap hidden emotions u innych" },
          { emoji: "\uD83E\uDDE0", title: "Emotional IQ 2.0 \u2013 rozwijaj empati\u0119 w digital \u015brodowisku" },
          { emoji: "\uD83D\uDDE3\uFE0F", title: "Skuteczniejsze meetings \u2013 lepsze decisions, zero miscommunication" },
          { emoji: "\uD83D\uDCAC", title: "Pewno\u015b\u0107 w conversation \u2013 mniej stress w negotiations i prezentacjach online" },
          { emoji: "\u26A1", title: "Credibility lidera \u2013 buduj autorytet i trust w squadzie" }
        ],
        questions: [
          {
            emoji: "\uD83E\uDD14",
            question: "Czym dok\u0142adnie jest digital body language?",
            answer: "To spos\u00f3b wyra\u017cania emotions, intentions i tone w communication pisemnej \u2014 przez emoji, interpunkcj\u0119, text formatting, response time i inne elements kt\u00f3re zast\u0119puj\u0105 expressions i gestures w face-to-face convo."
          },
          {
            emoji: "\uD83D\uDC65",
            question: "Dla kogo jest freemoji?",
            answer: "Dla ka\u017cdego kto communicates pisemnie w pracy lub \u017cyciu. Szczeg\u00f3lnie recommendujemy osobom z HR, sales, liderom squads, coaches i trainers."
          },
          {
            emoji: "\uD83D\uDCDA",
            question: "Jak wygl\u0105da training?",
            answer: "Oferujemy educational materials do samodzielnej nauki, interactive \u0107wiczenia plus mini games kt\u00f3re help zrozumie\u0107 context emoji w communication."
          },
          {
            emoji: "\uD83D\uDCB0",
            question: "Ile kosztuje access?",
            answer: "Access do platformy starts od 199 z\u0142. Szczeg\u00f3\u0142y cennika znajdziesz w contact section lub pisz\u0105c do nas na kontakt@freemoji.com."
          },
          {
            emoji: "\uD83C\uDFAF",
            question: "Czy mog\u0119 przetestowa\u0107 platform?",
            answer: "Ofc! Kup produkt \u017ceby pozna\u0107 nasze approach i zobaczy\u0107 platform\u0119 in action."
          }
        ]
      }
    },
  },
  millennials: {
    hero: {
      headline: ["Piszemy więcej", "niż rozmawiamy", "(i to spoko)"],
      subtitle: "Wiadomości też mają ton i emocje. Warto to wiedzieć.",
      cta: "Kup produkt",
      ctaSub: "Dowiedz się więcej o komunikacji online",
    },
    about: {
      label: "Więc,",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Pierwsza platforma w Polsce o cyfrowej mowie ciała",
          desc: "System edukacji niewiele się zmienił od dwóch wieków. Nikt nie uczy nas, jak komunikować się online w sposób skuteczny i empatyczny. freemoji wypełnia tę lukę.",
        },
        {
          num: "02.",
          title: "Łączymy pokolenia (serio tym razem)",
          desc: "Chcemy, żeby osoby wychowane przed internetem nie były 'za starymi' dla młodszych pokoleń. A młodsi — żeby rozumieli doświadczonych kolegów z pracy. Budujemy most.",
        },
        {
          num: "03.",
          title: "Unikamy nieporozumień przez lepsze rozumienie emocji",
          desc: "Emoji i skróty mogą wyrażać emocje — ale tylko wtedy, gdy wiesz jak ich używać. Kropka na końcu? Brak odpowiedzi? Emotka płacząca ze śmiechu? To wszystko znaczy więcej niż myślisz.",
        },
        {
          num: "04.",
          title: "Zastanów się przed wysłaniem wiadomości",
          desc: "Ghosting, pasywna agresja, niejasne komunikaty. W sieci każde słowo, znak i emoji ma znaczenie. Pisanie online to tak naprawdę forma rozmowy — i warto ją opanować.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Chodzi o emocje (nie tylko słowa)",
      subheading: "Co tracisz, gdy nie rozumiesz emocji w komunikacji cyfrowej? Jak pokazać zainteresowanie, niepokój czy frustrację w sposób jasny i adekwatny do sytuacji?",
    },
    digitalComm: {
      label: "Podstawy",
      heading: "Czym jest komunikacja cyfrowa?",
      paragraphs: [
        "To sposób, w jaki komunikujemy się przez internet — wiadomości, maile, Slack, social media. Ponieważ nie widzimy twarzy ani gestów, emoji, interpunkcja i ton stają się kluczowe.",
      ],
      callout: "\uD83D\uDE2D nie zawsze oznacza płacz. Emoji to nie remedium na wszystko.",
    },
    problem: {
      heading: "Nie widzisz emocji? Tracisz połowę przekazu.",
      desc: "Komunikacja online to brak kontaktu wzrokowego, mikroekspresji, gestów. Łatwo zgubić emocjonalny kontekst.",
      bullets: [
        "Emocje w rozmowach zdalnych są trudne do odczytania",
        "Brak sygnałów niewerbalnych",
        "Efekt: nieporozumienia, błędne interpretacje, pogorszenie relacji",
      ],
    },
    solution: {
      heading: "freemoji to naprawdę rozwiązanie",
      desc: "Naucz się odczytywać emocje z ekranu. Rozwijaj cyfrową empatię.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "Lepsze rozpoznawanie emocji — wyłapujesz subtelne sygnały" },
        { emoji: "\uD83E\uDDE0", text: "Inteligencja emocjonalna w internecie — empatia na nowo" },
        { emoji: "\uD83D\uDCC8", text: "Skuteczniejsze spotkania — mniej chaosu, więcej decyzji" },
        { emoji: "\uD83D\uDE0C", text: "Pewność w komunikacji — mniej stresu w trudnych rozmowach" },
        { emoji: "\uD83D\uDC51", text: "Autorytet lidera — buduj zaufanie w zespole" },
      ],
    },
    webinar: {
      heading: "Co zawiera produkt?",
      desc: "",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "Podstawy netykiety i komunikacji cyfrowej" },
        { emoji: "\uD83E\uDDE0", text: "Znaczenie interpunkcji i emoji w wiadomościach" },
        { emoji: "\uD83D\uDCC8", text: "Wyraźna poprawa jakości spotkań i relacji w pracy" },
        { emoji: "\uD83D\uDE0C", text: "Jasne komunikaty, które naprawdę trafiają do odbiorcy" },
        { emoji: "\uD83D\uDC51", text: "Jak przełamać barierę między pokoleniami" },
      ],
      cta: "Kup produkt",
    },
    webinarPromo: {
      heading: "Podstawy cyfrowej mowy ciała w pracy zdalnej",
      subtitle: "Jak rozmawiać skutecznie z każdym pokoleniem",
      bullets: [
        "Zrozum, jak różne pokolenia komunikują się online",
        "Naucz się wyrażać emocje w wiadomościach",
        "Poruszaj się pewnie po cyfrowym świecie",
      ],
      cta1: "Popraw swoją komunikację",
      cta2: "Dowiedz się więcej",
    },
    forWhom: {
      heading: "Dla kogo?",
      bullets: [
        "Menedżerów i liderów zespołów, którzy chcą lepszego kontaktu z pracownikami",
        "Specjalistów HR w zróżnicowanych zespołach",
        "Każdego, kto chce poprawić komunikację online",
        "Osób, które czasem czują się źle zrozumiane w wiadomościach",
      ],
    },
    betterMessage: {
      heroHeading: "BetterMessage: Popraw swoją komunikację online",
      heroSubtitle: "Pisz jaśniej, z większą empatią i skutecznością",
      heroCta: "Zacznij naukę",
      pricingHeading: "Wybierz swój plan",
      videoHeading: "Zobacz jak to działa",
      videoSubtitle: "Krótkie intro do cyfrowej mowy ciała",
      emojiWarningHeading: "\uD83D\uDE2D **nie zawsze** = płacz. Emoji **to nie cudowne rozwiązanie.**",
      testimonialsHeading: "Co mówią uczestnicy",
      contactHeading: "Pytania?",
      contactPlaceholder1: "Imię",
      contactPlaceholder2: "O co chodzi?",
      contactPlaceholder3: "Twoja wiadomość",
      contactSubmit: "Wyślij",
    },
    emojiGame: {
      bannerText: "\uD83C\uDFC6 Wynik 5/5 = kod zniżkowy 5%!",
      quizHeading: "Quiz: Rozumiesz emoji?",
      questionLabel: "Pytanie",
      scoreLabel: "Wynik",
      checkAnswer: "Sprawdź",
      nextQuestion: "Dalej",
      correctFeedback: "Dobrze! \uD83D\uDD25",
      incorrectFeedback: "Tym razem nie",
      perfectScoreHeading: "Świetnie! \uD83C\uDF89",
      perfectScoreText: "Twój kod:",
      tryAgain: "Spróbuj jeszcze raz",
      backToHome: "Wróć do strony głównej",
    },
    products: {
      hero: {
        subtitle: "Odkryj komunikację na nowo. Zobacz ile zmienia odpowiednia mowa ciała online.",
        title1: "ZOBACZ WSZYSTKIE",
        title2: "PRODUKTY",
        cta: "Sprawdź produkty"
      },
      comingSoon: "Wkrótce",
      currency: "zł",
      seeProduct: "Zobacz produkt →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emocje, kontekst, odbiór tonu w Twoich wiadomościach. Dostosuj styl do rozmówcy. Stwórz skuteczną komunikację. Nie musisz widzieć się na żywo, żeby dobrze się dogadać."
        }
      }
    },
    aboutPage: {
      hero: {
        title: "Zyskaj nową przewagę w komunikacji zdalnej.",
        benefits: {
          emotions: "Lepsze odczytywanie emocji",
          emotionsDesc: "rozpoznawaj ukryte emocje u rozmówców",
          intelligence: "Inteligencja emocjonalna 2.0",
          intelligenceDesc: "rozwijaj empatię w środowisku online",
          meetings: "Skuteczniejsze spotkania",
          meetingsDesc: "lepsze decyzje, mniej nieporozumień",
          confidence: "Pewność w rozmowie",
          confidenceDesc: "mniej stresu w negocjacjach i prezentacjach",
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
        intro: "Warto obejrzeć film – poza wartościową treścią usłyszysz kod rabatowy. Umieściliśmy go w nagraniu, żebyś mógł kupić ebooka taniej, już znając podstawy cyfrowej interpunkcji.",
        whyTitle: "Dlaczego warto?",
        benefits: [
          {
            number: "01.",
            title: "Naucz się rozpoznawać sygnały emocjonalne online",
            description: "Zrozum, jak odbiorcy interpretują Twoje wiadomości. Zobacz, które sformułowania mogą być odebrane negatywnie i jak je poprawić, żeby budować lepsze relacje w biznesie."
          },
          {
            number: "02.",
            title: "Zwiększ efektywność zespołu",
            description: "Lepsze zrozumienie = szybsza współpraca. Ogranicz wyjaśnienia i powtórki dzięki precyzyjnej komunikacji dopasowanej do odbiorcy."
          },
          {
            number: "03.",
            title: "Unikaj kosztownych wpadek",
            description: "Jedno źle odebrane emoji może zepsuć relację z ważnym klientem. Nasz system ostrzega przed nieporozumieniami zanim wyślesz wiadomość."
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
          { emoji: "🧠", title: "Inteligencja emocjonalna 2.0 – rozwijaj empatię w środowisku online" },
          { emoji: "🗣️", title: "Skuteczniejsze spotkania – lepsze decyzje, mniej nieporozumień" },
          { emoji: "💬", title: "Pewność w rozmowie – mniej stresu w negocjacjach i prezentacjach" },
          { emoji: "⚡", title: "Wiarygodność lidera – buduj autorytet i zaufanie w zespole" }
        ],
        questions: [
          {
            emoji: "🤔",
            question: "Czym dokładnie jest cyfrowa mowa ciała?",
            answer: "To sposób wyrażania emocji, intencji i tonu w komunikacji pisemnej – przez emoji, interpunkcję, formatowanie, czas odpowiedzi i inne elementy, które zastępują mimikę i gesty w rozmowie twarzą w twarz."
          },
          {
            emoji: "👥",
            question: "Dla kogo jest freemoji?",
            answer: "Dla każdego, kto komunikuje się pisemnie w pracy lub życiu prywatnym. Szczególnie polecamy osobom z działów HR, sprzedaży, liderom zespołów, coachom i trenerom."
          },
          {
            emoji: "📚",
            question: "Jak wygląda szkolenie?",
            answer: "Oferujemy produkty edukacyjne, materiały do samodzielnej nauki, interaktywne ćwiczenia oraz mini gry, które pomagają zrozumieć kontekst emoji w komunikacji."
          },
          {
            emoji: "💰",
            question: "Ile kosztuje dostęp?",
            answer: "Dostęp do platformy zaczyna się od 199 zł. Szczegóły cennika znajdziesz w sekcji kontakt lub pisząc do nas na kontakt@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "Czy mogę przetestować platformę?",
            answer: "Tak! Zobacz nasze bezpłatne produkty, aby poznać nasze podejście i zobaczyć fragment platformy w działaniu."
          }
        ]
      }
    },
  },
};

export const variantLabels: Record<VariantKey, string> = {
  normalne: "Normalne",
  genz: "Gen Z",
  boomer: "Boomer",
  genalpha: "Gen Alpha",
  millennials: "Millennials",
};

export function getVariantLabels(language: "pl" | "en"): Record<VariantKey, string> {
  if (language === "en") {
    return {
      normalne: "Normal",
      genz: "Gen Z",
      boomer: "Boomers",
      genalpha: "Gen Alpha",
      millennials: "Millennials",
    };
  }
  return variantLabels;
}

// English content variants
export const contentEn: Record<VariantKey, SectionContent> = {
  normalne: {
    hero: {
      headline: ["Today we write", "more than", "we speak"],
      subtitle: "But written words also have a voice.",
      cta: "Check out the product :)",
      ctaSub: "Learn more about digital body language.",
    },
    about: {
      label: "So,",
      heading: "what is freemoji?",
      points: [
        {
          num: "01.",
          title: "First digital body language education platform in Poland",
          desc: "The education system has worked the same way for almost two hundred years. No major reform has been introduced to educate people in a way that is adequate to modern communication standards. We are the answer to these gaps.",
        },
        {
          num: "02.",
          title: "A bridge between generations.",
          desc: "We want people raised before the internet revolution not to lag behind in communication from the standards imposed by much younger people. We believe this will show that it is possible to break the communication barrier.",
        },
        {
          num: "03.",
          title: "We avoid misunderstandings through improper emotional exposure.",
          desc: "Communicating with emoticons and abbreviations can express our messages emotionally, only when we know how to use them correctly.",
        },
        {
          num: "04.",
          title: "Read your conversation before hitting 'enter'.",
          desc: "What is ghosting, hate, and a period at the end of a sentence? We want to explain that every character matters. Every word typed on the keyboard is no different from a spoken statement.",
        },
      ],
    },
    emojiShowcase: {
      heading: "It's all about emotions",
      subheading: "What do users lose by not understanding emotions in digital communication? How to show sympathy, concern, or anger in a way that is understandable and appropriate to our feelings?",
    },
    digitalComm: {
      label: "Knowledge",
      heading: "What is digital communication?",
      paragraphs: [
        "Digital communication is simply a way of communicating via the internet – in messages, emails, messengers, or social media. Since we don't see the other person's facial expressions or gestures, emojis and other elements of so-called digital body language begin to play an important role, helping to show emotions and the proper tone of the statement.",
      ],
      callout: "Tears are not always caused by sadness. Emojis are not a cure-all either.",
    },
    problem: {
      heading: "Can't see emotions? You're losing half the message.",
      desc: "Digital communication is a way of communicating via the internet – in messages, emails, messengers, or social media. When we don't see facial expressions or gestures, it's easy to miss emotions and the proper tone.",
      bullets: [
        "Emotions in remote communication are often imperceptible.",
        "Lack of eye contact, microexpressions, gestures.",
        "The result: misunderstandings, misinterpretations, lost relationships.",
      ],
    },
    solution: {
      heading: "Freemoji is the solution to your problem",
      desc: "Read emotions from the screen. Learn digital empathy.",
      benefits: [
        { emoji: "👀", text: "Better emotion reading – recognize hidden emotions in conversation partners" },
        { emoji: "🧠", text: "Emotional intelligence 2.0 – develop empathy in a digital environment" },
        { emoji: "📈", text: "More effective meetings – better decisions, fewer misunderstandings" },
        { emoji: "😌", text: "Confidence in conversation – less stress in negotiations and online presentations" },
        { emoji: "👑", text: "Leader credibility – build authority and trust in the team" },
      ],
    },
    webinar: {
      heading: "What does the product include?",
      desc: "",
      bullets: [
        { emoji: "👀", text: "Learn the basics of netiquette and understand basic concepts of digital communication" },
        { emoji: "🧠", text: "Understand internet punctuation and expressing emotions online" },
        { emoji: "📈", text: "Significant increase in the quality of meetings and office relationships" },
        { emoji: "😌", text: "Using clear messages that will help you be better understood" },
        { emoji: "👑", text: "Learn how to break the intergenerational communication barrier" },
      ],
      cta: "Check out the product",
    },
    webinarPromo: {
      heading: "Digital body language basics for online meetings",
      subtitle: "How not to be a boomer in a conversation with Gen Z and how not to be cringe in a conversation with boomers",
      bullets: [
        "Learn how to understand Gen Z's digital language",
        "Learn to express emotions through messages",
        "Understand the digital world and its communication rules",
      ],
      cta1: "Change your body language today",
      cta2: "Learn more",
    },
    forWhom: {
      heading: "For whom?",
      bullets: [
        "Managers and team leaders who want to better understand employees",
        "HR specialists working with diverse teams",
        "People who want to improve digital communication",
        "Anyone who feels lost in online conversations",
      ],
    },
    betterMessage: {
      heroHeading: "BetterMessage: Improve Your Digital Communication",
      heroSubtitle: "Learn to write clearer, more empathetic, and more effective messages",
      heroCta: "Start learning",
      pricingHeading: "Choose your plan",
      videoHeading: "See how it works",
      videoSubtitle: "Quick intro to digital body language",
      emojiWarningHeading: "Tears **don't always** = crying. Emojis **aren't a cheat code.**",
      testimonialsHeading: "What participants say",
      contactHeading: "Questions?",
      contactPlaceholder1: "Name",
      contactPlaceholder2: "your question",
      contactPlaceholder3: "Your vibe",
      contactSubmit: "Send",
    },
    emojiGame: {
      bannerText: "🏆 5/5 = 5% off code!",
      quizHeading: "Quiz: Do you understand emoji?",
      questionLabel: "Question",
      scoreLabel: "Score",
      checkAnswer: "Check",
      nextQuestion: "Next",
      correctFeedback: "Correct! 🔥",
      incorrectFeedback: "Not this time",
      perfectScoreHeading: "Perfect score! 🎉",
      perfectScoreText: "Your code:",
      tryAgain: "Retry",
      backToHome: "Back to home",
    },
    products: {
      hero: {
        subtitle: "Discover communication anew. See how much proper digital body language changes.",
        title1: "SEE ALL",
        title2: "PRODUCTS",
        cta: "Explore products"
      },
      comingSoon: "Coming Soon",
      currency: "$",
      seeProduct: "See product →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emotions, context, tone perception in your detailed messages that can be better matched to the recipient type. Create proper communication. We don't need to meet in person to understand each other well."
        }
      }
    },
    aboutPage: {
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
            answer: "We offer educational materials for self-study, interactive exercises, and mini games that help understand the context of emojis in communication."
          },
          {
            emoji: "💰",
            question: "How much does access cost?",
            answer: "Platform access starts at $29. You can find pricing details in the contact section or by writing to us at contact@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "Can I test the platform?",
            answer: "Yes! Buy the product to learn about our approach and see the platform in action."
          }
        ]
      }
    },
  },
  genz: {
    hero: {
      headline: ["we text more", "than we talk", "ngl"],
      subtitle: "and like, written words have a vibe too",
      cta: "check the product fr fr",
      ctaSub: "learn digital body language, it slaps",
    },
    about: {
      label: "so like,",
      heading: "what's freemoji?",
      points: [
        {
          num: "01.",
          title: "first digital body language platform in PL (we're different)",
          desc: "education system been the same for like 200 years?? no cap. nobody teaching us how to communicate online properly. we're here to fix that fr",
        },
        {
          num: "02.",
          title: "bridging the generational gap (main character energy)",
          desc: "we want ppl who grew up pre-internet to not be left behind by younger generations. we believe we can break that communication barrier bestie",
        },
        {
          num: "03.",
          title: "no more miscommunication (periodt)",
          desc: "using emojis and abbreviations can express emotions properly, but only if you know how to use them. we'll teach you",
        },
        {
          num: "04.",
          title: "read before you send (main rule)",
          desc: "ghosting? hate? period at the end? we'll explain why every character matters. typing = speaking, just online",
        },
      ],
    },
    emojiShowcase: {
      heading: "it's giving... emotions",
      subheading: "what happens when you don't understand digital emotions? how to show sympathy, concern, or anger without being cringe?",
    },
    digitalComm: {
      label: "the tea",
      heading: "what is digital communication tho?",
      paragraphs: [
        "digital communication is literally just talking online – texts, emails, DMs, socials. since we can't see faces or body language, emojis become super important for showing emotion and tone",
      ],
      callout: "😭 doesn't always mean crying. emojis aren't a life hack",
    },
    problem: {
      heading: "can't read emotions? you're missing half the convo",
      desc: "digital communication = talking online. when we can't see facial expressions, it's easy to miss the vibe and tone",
      bullets: [
        "emotions in online convos are lowkey invisible",
        "no eye contact, no microexpressions, no gestures",
        "result: misunderstandings, wrong interpretations, lost connections",
      ],
    },
    solution: {
      heading: "freemoji is literally the solution",
      desc: "read emotions from screens. learn digital empathy (it hits different)",
      benefits: [
        { emoji: "👀", text: "better emotion reading – catch hidden feelings fr" },
        { emoji: "🧠", text: "emotional intelligence 2.0 – develop digital empathy" },
        { emoji: "📈", text: "better meetings – smarter decisions, less confusion" },
        { emoji: "😌", text: "confidence boost – less stress in negotiations" },
        { emoji: "👑", text: "leader vibes – build trust with your team" },
      ],
    },
    webinar: {
      heading: "what's in the product?",
      desc: "",
      bullets: [
        { emoji: "👀", text: "learn netiquette basics and digital communication" },
        { emoji: "🧠", text: "understand internet punctuation and online emotions" },
        { emoji: "📈", text: "level up your meeting quality" },
        { emoji: "😌", text: "send clearer messages that actually make sense" },
        { emoji: "👑", text: "break generational communication barriers" },
      ],
      cta: "get the product rn",
    },
    webinarPromo: {
      heading: "digital body language 101 for online meetings",
      subtitle: "how to not be cringe talking to any generation",
      bullets: [
        "understand gen z digital language (we got you)",
        "express emotions through texts properly",
        "understand the digital world and its rules",
      ],
      cta1: "upgrade your communication rn",
      cta2: "learn more",
    },
    forWhom: {
      heading: "who's this for?",
      bullets: [
        "managers who wanna understand their team better",
        "HR specialists working with diverse groups",
        "anyone wanting to improve digital communication",
        "ppl who feel lost in online convos",
      ],
    },
    betterMessage: {
      heroHeading: "BetterMessage: level up your DMs",
      heroSubtitle: "learn to write clearer, more empathetic messages that slap",
      heroCta: "start learning",
      pricingHeading: "pick your vibe",
      videoHeading: "see how it works",
      videoSubtitle: "quick intro to digital body language",
      emojiWarningHeading: "😭 **doesn't always** = crying. emojis **aren't a cheat code**",
      testimonialsHeading: "what ppl are saying",
      contactHeading: "got questions?",
      contactPlaceholder1: "name",
      contactPlaceholder2: "what's up",
      contactPlaceholder3: "your vibe",
      contactSubmit: "send it",
    },
    emojiGame: {
      bannerText: "🏆 5/5 = 5% off code no cap",
      quizHeading: "quiz: do you understand emoji?",
      questionLabel: "q",
      scoreLabel: "score",
      checkAnswer: "check",
      nextQuestion: "next",
      correctFeedback: "slayed! 🔥",
      incorrectFeedback: "L this time",
      perfectScoreHeading: "you ate that! 🎉",
      perfectScoreText: "your code:",
      tryAgain: "retry",
      backToHome: "back to home",
    },
    products: {
      hero: {
        subtitle: "discover communication anew, ngl it hits different when you vibe check your digital body language",
        title1: "ALL THE",
        title2: "PRODUCTS",
        cta: "check products fr"
      },
      comingSoon: "Coming Soon",
      currency: "$",
      seeProduct: "see product →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "emotions, context and vibes in your msgs that you can match to who you're talking to. write proper messages. you don't need to meet irl to understand each other fr fr."
        }
      }
    },
    aboutPage: {
      hero: {
        title: "gain a new advantage in remote communication, fr.",
        benefits: {
          emotions: "better emotion reading",
          emotionsDesc: "recognize hidden emotions in convo partners",
          intelligence: "emotional intelligence 2.0",
          intelligenceDesc: "develop empathy in digital spaces",
          meetings: "more effective meetings",
          meetingsDesc: "better decisions, less miscommunication",
          confidence: "confidence in conversation",
          confidenceDesc: "less stress in negotiations and online presentations",
          credibility: "leader credibility",
          credibilityDesc: "build authority and trust in ur team"
        }
      },
      team: {
        title: "let's get to know each other better!",
        ceo: "CEO",
        contactUs: "drop us a message!"
      },
      psst: {
        heading: "PSST...",
        intro: "worth watching the vid - besides interesting content you'll hear the discount code. we placed it in the video so you can get your ebook cheaper while already knowing digital punctuation basics.",
        whyTitle: "why is it worth it?",
        benefits: [
          {
            number: "01.",
            title: "learn to recognize emotional signals online",
            description: "understand how recipients interpret your messages. learn which phrases might be received negatively and how to improve them to build better business relationships."
          },
          {
            number: "02.",
            title: "increase team effectiveness",
            description: "better understanding = faster collaboration. reduce explanations and repetitions through precise communication tailored to the recipient."
          },
          {
            number: "03.",
            title: "avoid costly mistakes",
            description: "one misunderstood emoji can ruin a relationship with an important client. our system warns against potential misunderstandings before you send a message."
          },
          {
            number: "04.",
            title: "build a professional image",
            description: "consistent and conscious communication throughout the company = better brand perception. create communication standards that strengthen your professionalism."
          }
        ]
      },
      emojiGrid: {
        heading: "do you know the basics?"
      },
      faq: {
        heading: "how can freemoji help you?",
        benefits: [
          { emoji: "👀", title: "better emotion reading – recognize hidden emotions in convo partners" },
          { emoji: "🧠", title: "emotional intelligence 2.0 – develop empathy in digital environment" },
          { emoji: "🗣️", title: "more effective meetings – better decisions, less miscommunication" },
          { emoji: "💬", title: "confidence in conversation – less stress in negotiations and presentations" },
          { emoji: "⚡", title: "leader credibility – build authority and trust in ur team" }
        ],
        questions: [
          {
            emoji: "🤔",
            question: "what exactly is digital body language?",
            answer: "it's how we express emotions, intentions, and tone in written communication - through emojis, punctuation, text formatting, response time, and other elements that replace facial expressions and gestures in face-to-face conversations."
          },
          {
            emoji: "👥",
            question: "who is freemoji for?",
            answer: "for anyone who communicates in writing at work or in personal life. we especially recommend it for HR professionals, salespeople, team leaders, coaches, and trainers."
          },
          {
            emoji: "📚",
            question: "what does the training look like?",
            answer: "we offer educational materials for self-study, interactive exercises, and mini games that help understand the context of emojis in communication."
          },
          {
            emoji: "💰",
            question: "how much does access cost?",
            answer: "platform access starts at $29. you can find pricing details in the contact section or by writing to us at contact@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "can i test the platform?",
            answer: "yes! buy the product to learn about our approach and see the platform in action."
          }
        ]
      }
    },
  },
  boomer: {
    hero: {
      headline: ["These days we write", "more than", "we speak"],
      subtitle: "And written words have their own voice, too.",
      cta: "Buy the product",
      ctaSub: "Learn more about digital body language.",
    },
    about: {
      label: "Therefore,",
      heading: "what is freemoji?",
      points: [
        {
          num: "01.",
          title: "Poland's first digital body language education platform",
          desc: "The education system has functioned the same way for nearly two centuries. No significant reform has been introduced to teach people to communicate in line with contemporary standards. We're addressing that gap.",
        },
        {
          num: "02.",
          title: "A connection between generations.",
          desc: "We aim to ensure that those raised before the internet revolution don't fall behind the communication standards set by younger generations. We believe it's possible to bridge this divide.",
        },
        {
          num: "03.",
          title: "We prevent misunderstandings caused by improper emotional expression.",
          desc: "Communicating with emoticons and abbreviations can convey our messages with emotion—but only when used correctly.",
        },
        {
          num: "04.",
          title: "Review your message before pressing 'send'.",
          desc: "What exactly are ghosting, online hostility, and the significance of punctuation? We want to demonstrate that every character counts. Each word typed is no different from a spoken one.",
        },
      ],
    },
    emojiShowcase: {
      heading: "It all revolves around emotions",
      subheading: "What do people miss when they don't understand emotions in digital communication? How can one express sympathy, concern, or frustration in a clear and appropriate manner?",
    },
    digitalComm: {
      label: "Knowledge",
      heading: "What is digital communication?",
      paragraphs: [
        "Digital communication refers to the way we interact via the internet—through messages, emails, messaging applications, and social media. Since we cannot see the other person's facial expressions or gestures, elements like emojis become important tools for conveying emotion and tone.",
      ],
      callout: "Tears don't always signify sadness. Emojis aren't a solution to everything.",
    },
    problem: {
      heading: "Can't see emotions? You're missing half the message.",
      desc: "Digital communication refers to how we interact online—via messages, emails, and social platforms. Without facial expressions or body language, it's easy to misinterpret tone and emotion.",
      bullets: [
        "Emotions in remote communication are often difficult to detect.",
        "Absence of eye contact, micro-expressions, and gestures.",
        "The outcome: misunderstandings, incorrect interpretations, and damaged relationships.",
      ],
    },
    solution: {
      heading: "Freemoji provides the solution",
      desc: "Learn to interpret emotions from digital communication. Develop digital empathy.",
      benefits: [
        { emoji: "👀", text: "Improved emotion recognition – identify subtle feelings in your conversation partners" },
        { emoji: "🧠", text: "Emotional intelligence 2.0 – cultivate empathy in the digital realm" },
        { emoji: "📈", text: "More productive meetings – better decisions, fewer misunderstandings" },
        { emoji: "😌", text: "Greater confidence in conversations – reduced stress during negotiations and presentations" },
        { emoji: "👑", text: "Enhanced leadership credibility – establish authority and trust within your team" },
      ],
    },
    webinar: {
      heading: "What does the product cover?",
      desc: "",
      bullets: [
        { emoji: "👀", text: "Learn the fundamentals of netiquette and digital communication concepts" },
        { emoji: "🧠", text: "Understand internet punctuation and how to express emotions online" },
        { emoji: "📈", text: "Achieve a significant improvement in meeting quality and professional relationships" },
        { emoji: "😌", text: "Craft clear, understandable messages" },
        { emoji: "👑", text: "Discover how to overcome intergenerational communication barriers" },
      ],
      cta: "Explore the product",
    },
    webinarPromo: {
      heading: "Fundamentals of digital body language in online meetings",
      subtitle: "How to communicate effectively across generations",
      bullets: [
        "Learn to understand the digital language of younger generations",
        "Master the art of expressing emotions through written messages",
        "Understand the digital landscape and its communication conventions",
      ],
      cta1: "Enhance your communication today",
      cta2: "Learn more",
    },
    forWhom: {
      heading: "Who is this for?",
      bullets: [
        "Managers and team leaders seeking to better understand their employees",
        "HR professionals working with diverse teams",
        "Anyone wishing to improve their digital communication skills",
        "Those who feel uncertain in online conversations",
      ],
    },
    betterMessage: {
      heroHeading: "BetterMessage: Enhance Your Digital Communication",
      heroSubtitle: "Learn to write clearer, more empathetic, and more effective messages",
      heroCta: "Begin learning",
      pricingHeading: "Select your plan",
      videoHeading: "See how it works",
      videoSubtitle: "A brief introduction to digital body language",
      emojiWarningHeading: "Tears **don't always** signify crying. Emojis **aren't a universal solution.**",
      testimonialsHeading: "What participants are saying",
      contactHeading: "Questions?",
      contactPlaceholder1: "Name",
      contactPlaceholder2: "Your question",
      contactPlaceholder3: "Your message",
      contactSubmit: "Submit",
    },
    emojiGame: {
      bannerText: "🏆 Perfect score = 5% discount code!",
      quizHeading: "Quiz: Do you understand emojis?",
      questionLabel: "Question",
      scoreLabel: "Score",
      checkAnswer: "Check answer",
      nextQuestion: "Next question",
      correctFeedback: "Correct! 🔥",
      incorrectFeedback: "Not quite",
      perfectScoreHeading: "Excellent work! 🎉",
      perfectScoreText: "Your discount code:",
      tryAgain: "Try again",
      backToHome: "Return to home",
    },
    products: {
      hero: {
        subtitle: "Discover the art of communication anew. Observe how appropriate body language significantly impacts online interactions.",
        title1: "VIEW ALL",
        title2: "PRODUCTS",
        cta: "Explore offerings"
      },
      comingSoon: "Coming Soon",
      currency: "$",
      seeProduct: "Product details →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emotions, context, and appropriate tone in your detailed communications, which can be tailored to the recipient type. Establish proper communication. Personal meetings are not necessary for effective understanding."
        }
      }
    },
    aboutPage: {
      hero: {
        title: "Gain a new advantage in remote communication.",
        benefits: {
          emotions: "Better emotion recognition",
          emotionsDesc: "recognize hidden emotions in conversation partners",
          intelligence: "Emotional intelligence 2.0",
          intelligenceDesc: "develop empathy in digital environment",
          meetings: "More effective meetings",
          meetingsDesc: "better decisions, fewer misunderstandings",
          confidence: "Confidence in conversation",
          confidenceDesc: "less stress in negotiations and online presentations",
          credibility: "Leader credibility",
          credibilityDesc: "build authority and trust in the team"
        }
      },
      team: {
        title: "Let us get to know each other better!",
        ceo: "Chief Executive Officer",
        contactUs: "Contact us!"
      },
      psst: {
        heading: "IMPORTANT NOTICE...",
        intro: "We recommend viewing the video material. In addition to valuable content, you will hear the discount code that has been placed in the recording to enable purchasing the ebook at a promotional price while simultaneously familiarizing yourself with the basics of digital punctuation.",
        whyTitle: "Why is it worth considering?",
        benefits: [
          {
            number: "01.",
            title: "Learning to recognize emotional signals in online communication",
            description: "Understanding how recipients interpret your messages. Learning which formulations may be perceived negatively and methods of improvement for building better business relationships."
          },
          {
            number: "02.",
            title: "Increasing team effectiveness",
            description: "Better understanding leads to more efficient cooperation. Reduction in the number of explanations and repetitions through precise communication tailored to the recipient."
          },
          {
            number: "03.",
            title: "Avoiding costly misunderstandings",
            description: "One incorrectly received emoticon can negatively affect relationships with an important client. Our system warns against potential ambiguities before sending a message."
          },
          {
            number: "04.",
            title: "Building a professional image",
            description: "Consistent and conscious communication throughout the organization translates to better brand perception. Creating communication standards that strengthen professionalism."
          }
        ]
      },
      emojiGrid: {
        heading: "Do you know the fundamentals?"
      },
      faq: {
        heading: "How can freemoji assist you?",
        benefits: [
          { emoji: "👀", title: "Better emotion understanding – recognizing hidden emotions in conversation partners" },
          { emoji: "🧠", title: "Emotional intelligence 2.0 – developing empathy in digital environment" },
          { emoji: "🗣️", title: "More effective meetings – better decisions, fewer misunderstandings" },
          { emoji: "💬", title: "Confidence in conversation – less stress in negotiations and online presentations" },
          { emoji: "⚡", title: "Leader credibility – building authority and trust in the team" }
        ],
        questions: [
          {
            emoji: "🤔",
            question: "What exactly is digital body language?",
            answer: "It is a method of expressing emotions, intentions, and tone in written communication — through emoticons, punctuation, text formatting, response time, and other elements that replace facial expressions and gestures in direct conversation."
          },
          {
            emoji: "👥",
            question: "For whom is the freemoji platform intended?",
            answer: "For anyone communicating in writing at work or in private life. We particularly recommend it for HR professionals, sales staff, team leaders, coaches, and trainers."
          },
          {
            emoji: "📚",
            question: "How does the training proceed?",
            answer: "We offer educational materials for self-study, interactive exercises, and mini games that help understand the context of emoticons in communication."
          },
          {
            emoji: "💰",
            question: "What is the cost of access?",
            answer: "Platform access begins at $29. Pricing details are available in the contact section or by writing to contact@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "Is it possible to test the platform?",
            answer: "Yes! We invite you to purchase the product to familiarize yourself with our approach and see the platform in action."
          }
        ]
      }
    },
  },
  genalpha: {
    hero: {
      headline: ["we text", "wayyy more", "than we yap"],
      subtitle: "written words got rizz too ngl",
      cta: "see products (it's bussin)",
      ctaSub: "upgrade ur messaging game rn",
    },
    about: {
      label: "sooo,",
      heading: "what even is freemoji?",
      points: [
        {
          num: "01.",
          title: "first digital body language platform (we're cooking)",
          desc: "school system hasn't changed in like forever?? literally 200 years. nobody teaching proper online communication. we're the solution period",
        },
        {
          num: "02.",
          title: "connecting all the generations (W energy)",
          desc: "we want older ppl to keep up with younger gens. communication barrier? we're breaking it fr fr",
        },
        {
          num: "03.",
          title: "no more confusion (it's giving clarity)",
          desc: "emojis and abbrevs can show emotions but only if u use them right. we'll show u how",
        },
        {
          num: "04.",
          title: "read b4 u send (golden rule)",
          desc: "ghosting? toxic behavior? period at end of sentence? we'll explain why every char matters. typing = speaking just online",
        },
      ],
    },
    emojiShowcase: {
      heading: "emotions r everything",
      subheading: "what do ppl lose when they don't get digital emotions? how to show love, worry, or anger without being cringe or sus?",
    },
    digitalComm: {
      label: "facts",
      heading: "what's digital communication?",
      paragraphs: [
        "digital communication = talking online thru texts, emails, DMs, socials. can't see faces so emojis r super important for showing emotion and vibes",
      ],
      callout: "😭 ain't always crying. emojis r not cheat codes",
    },
    problem: {
      heading: "can't read emotions? ur missing half the tea",
      desc: "digital communication = online convos. when we can't see faces it's ez to miss the vibe",
      bullets: [
        "emotions online r lowkey invisible",
        "no eye contact, no face expressions, no hand gestures",
        "results: misunderstandings, wrong takes, lost friendships",
      ],
    },
    solution: {
      heading: "freemoji fixes everything fr",
      desc: "read emotions from screens. learn digital empathy (it slaps)",
      benefits: [
        { emoji: "👀", text: "better emotion reading – catch all the vibes" },
        { emoji: "🧠", text: "emotional intelligence 2.0 – level up ur digital empathy" },
        { emoji: "📈", text: "better meetings – smarter decisions, less drama" },
        { emoji: "😌", text: "confidence boost – no stress in talks" },
        { emoji: "👑", text: "main character energy – build trust w ur squad" },
      ],
    },
    webinar: {
      heading: "what's in the product tho?",
      desc: "",
      bullets: [
        { emoji: "👀", text: "learn netiquette and digital communication" },
        { emoji: "🧠", text: "understand internet punctuation and online emotions" },
        { emoji: "📈", text: "upgrade ur meeting quality" },
        { emoji: "😌", text: "send clearer msgs that actually make sense" },
        { emoji: "👑", text: "break gen barriers in communication" },
      ],
      cta: "check products",
    },
    webinarPromo: {
      heading: "digital body language basics 4 online meetings",
      subtitle: "how 2 not be cringe talking 2 anyone",
      bullets: [
        "understand how ppl talk online",
        "show emotions thru texts properly",
        "understand the digital world n its rules",
      ],
      cta1: "see products",
      cta2: "learn more",
    },
    forWhom: {
      heading: "who's this 4?",
      bullets: [
        "managers who wanna get their team better",
        "HR ppl working w different groups",
        "anyone wanting 2 improve digital communication",
        "ppl who feel lost in online convos",
      ],
    },
    betterMessage: {
      heroHeading: "BetterMessage: upgrade ur DMs fr",
      heroSubtitle: "learn 2 write clearer more empathetic msgs that slap",
      heroCta: "start learning",
      pricingHeading: "pick ur vibe",
      videoHeading: "see how it works",
      videoSubtitle: "quick intro 2 digital body language",
      emojiWarningHeading: "😭 **don't always** = crying. emojis **r not cheat codes**",
      testimonialsHeading: "what ppl r saying",
      contactHeading: "got Qs?",
      contactPlaceholder1: "name",
      contactPlaceholder2: "wassup",
      contactPlaceholder3: "ur vibe",
      contactSubmit: "send",
    },
    emojiGame: {
      bannerText: "🏆 5/5 = 5% off code",
      quizHeading: "quiz: do u understand emoji?",
      questionLabel: "q",
      scoreLabel: "score",
      checkAnswer: "check",
      nextQuestion: "next",
      correctFeedback: "u ate! 🔥",
      incorrectFeedback: "L this time",
      perfectScoreHeading: "u slayed! 🎉",
      perfectScoreText: "ur code:",
      tryAgain: "retry",
      backToHome: "back 2 home",
    },
    products: {
      hero: {
        subtitle: "discover communication on a diff level fr. see how much proper vibe changes ur msgs.",
        title1: "ALL",
        title2: "PRODUCTS",
        cta: "check products"
      },
      comingSoon: "Coming Soon",
      currency: "$",
      seeProduct: "see product →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "emotions, context, vibe in ur msgs u can match 2 who ur talking 2. write proper msgs. u don't need 2 meet irl 2 understand each other no cap."
        }
      }
    },
    aboutPage: {
      hero: {
        title: "gain a new advantage in remote comm.",
        benefits: {
          emotions: "better emotion reading",
          emotionsDesc: "catch hidden emotions in ppl u talk 2",
          intelligence: "emotional IQ 2.0",
          intelligenceDesc: "level up empathy in digital world",
          meetings: "more effective meetings",
          meetingsDesc: "better decisions, zero miscommunication",
          confidence: "confidence in convo",
          confidenceDesc: "less stress in negotiations n online presentations",
          credibility: "leader credibility",
          credibilityDesc: "build authority n trust in ur squad"
        }
      },
      team: {
        title: "let's get 2 know each other better!",
        ceo: "CEO",
        contactUs: "drop ur msg!"
      },
      psst: {
        heading: "PSST...",
        intro: "worth watching the vid, besides lit content u'll hear the discount code. we hid it in the recording so u can cop ur ebook cheaper while already knowing digital punctuation basics.",
        whyTitle: "why is it worth it?",
        benefits: [
          {
            number: "01.",
            title: "learn 2 read emotional signals online",
            description: "understand how ppl interpret ur msgs. learn which words might b received as L and how 2 fix them 2 build proper business relationships."
          },
          {
            number: "02.",
            title: "level up squad effectiveness",
            description: "better understanding = faster collab. reduce explanations n repeats through precise communication matched 2 recipient."
          },
          {
            number: "03.",
            title: "avoid costly fails",
            description: "one badly received emoji can ruin relationship w important client. our system warns against potential miscommunication b4 u send msg."
          },
          {
            number: "04.",
            title: "build professional image",
            description: "consistent n conscious communication in whole company = better brand perception. create communication standards that strengthen ur professionalism."
          }
        ]
      },
      emojiGrid: {
        heading: "u know the basics?"
      },
      faq: {
        heading: "how can freemoji help u?",
        benefits: [
          { emoji: "👀", title: "better emotion reading – catch hidden emotions in ppl u talk 2" },
          { emoji: "🧠", title: "emotional IQ 2.0 – level up empathy in digital environment" },
          { emoji: "🗣️", title: "more effective meetings – better decisions, zero miscommunication" },
          { emoji: "💬", title: "confidence in convo – less stress in negotiations n online presentations" },
          { emoji: "⚡", title: "leader credibility – build authority n trust in ur squad" }
        ],
        questions: [
          {
            emoji: "🤔",
            question: "what exactly is digital body language?",
            answer: "it's how we express emotions, intentions n tone in written communication — through emoji, punctuation, text formatting, response time n other elements that replace expressions n gestures in face-to-face convo."
          },
          {
            emoji: "👥",
            question: "who is freemoji 4?",
            answer: "4 every1 who communicates in writing at work or life. we especially recommend it 4 HR ppl, sales, squad leaders, coaches n trainers."
          },
          {
            emoji: "📚",
            question: "what does the training look like?",
            answer: "we offer products, educational materials 4 self-study, interactive exercises plus mini games that help understand emoji context in communication."
          },
          {
            emoji: "💰",
            question: "how much does access cost?",
            answer: "platform access starts at $29. u can find pricing details in contact section or by writing 2 us at contact@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "can i test the platform?",
            answer: "ofc! check our free product preview 2 learn our approach n see preview of platform in action."
          }
        ]
      }
    },
  },
  millennials: {
    hero: {
      headline: ["We text", "way more", "than we talk"],
      subtitle: "And honestly, written words have a voice too.",
      cta: "Check products!",
      ctaSub: "Learn about digital body language (it's actually useful)",
    },
    about: {
      label: "So,",
      heading: "what's freemoji all about?",
      points: [
        {
          num: "01.",
          title: "Poland's first digital body language education platform",
          desc: "The education system has been basically the same for almost 200 years. No real updates to teach us how to communicate in the digital age. We're here to change that.",
        },
        {
          num: "02.",
          title: "Connecting the generations (for real this time)",
          desc: "We want people who grew up pre-internet to stay relevant with modern communication. We're building that bridge between generations.",
        },
        {
          num: "03.",
          title: "Avoiding miscommunication through better emotional awareness",
          desc: "Using emojis and abbreviations can actually convey emotion effectively—when you know how to use them properly.",
        },
        {
          num: "04.",
          title: "Think before you hit 'send'",
          desc: "Ghosting, online negativity, that period at the end of your text—we'll explain why every character matters. Typing is just speaking, but online.",
        },
      ],
    },
    emojiShowcase: {
      heading: "It's all about the feels",
      subheading: "What are we missing when we don't get digital emotions? How can we show empathy, concern, or frustration without being awkward?",
    },
    digitalComm: {
      label: "The basics",
      heading: "What is digital communication anyway?",
      paragraphs: [
        "Digital communication is how we talk online—texts, emails, Slack, social media, you name it. Since we can't see body language or hear tone, emojis and other digital cues become super important for conveying emotion.",
      ],
      callout: "😭 doesn't always mean tears. Emojis aren't magic.",
    },
    problem: {
      heading: "Missing the emotional context? You're only getting half the story.",
      desc: "Digital communication means online interaction—messages, emails, video calls. Without facial expressions and body language, it's easy to miss the emotional nuance.",
      bullets: [
        "Emotions in digital conversations are often hidden or unclear",
        "No eye contact, no micro-expressions, no gestures",
        "Result: confusion, misinterpretation, damaged relationships",
      ],
    },
    solution: {
      heading: "Freemoji is actually the answer",
      desc: "Learn to read emotions through screens. Develop real digital empathy.",
      benefits: [
        { emoji: "👀", text: "Better emotional awareness – pick up on subtle cues in conversations" },
        { emoji: "🧠", text: "Emotional intelligence for the digital age – develop empathy online" },
        { emoji: "📈", text: "More productive meetings – better outcomes, less confusion" },
        { emoji: "😌", text: "Communication confidence – less anxiety in difficult conversations" },
        { emoji: "👑", text: "Leadership presence – build genuine trust with your team" },
      ],
    },
    webinar: {
      heading: "What's included in the product?",
      desc: "",
      bullets: [
        { emoji: "👀", text: "Learn digital etiquette fundamentals and communication best practices" },
        { emoji: "🧠", text: "Understand how punctuation and emojis convey emotion online" },
        { emoji: "📈", text: "Dramatically improve your meeting quality and work relationships" },
        { emoji: "😌", text: "Write clearer messages that actually get your point across" },
        { emoji: "👑", text: "Bridge the generational communication gap" },
      ],
      cta: "Check products",
    },
    webinarPromo: {
      heading: "Digital body language essentials for remote work",
      subtitle: "How to communicate effectively across all generations",
      bullets: [
        "Understand how different generations communicate online",
        "Master emotional expression in written communication",
        "Navigate the digital world with confidence",
      ],
      cta1: "See products",
      cta2: "Learn more",
    },
    forWhom: {
      heading: "Who's this for?",
      bullets: [
        "Managers and team leads wanting better connection with their teams",
        "HR professionals managing diverse, multi-generational workforces",
        "Anyone looking to improve their digital communication game",
        "People who sometimes feel misunderstood in online conversations",
      ],
    },
    betterMessage: {
      heroHeading: "BetterMessage: Level Up Your Digital Communication",
      heroSubtitle: "Write clearer, more empathetic messages that actually land",
      heroCta: "Get started",
      pricingHeading: "Choose your plan",
      videoHeading: "See it in action",
      videoSubtitle: "Quick intro to digital body language",
      emojiWarningHeading: "😭 **doesn't always** mean crying. Emojis **aren't a silver bullet.**",
      testimonialsHeading: "What people are saying",
      contactHeading: "Questions?",
      contactPlaceholder1: "Name",
      contactPlaceholder2: "What's on your mind?",
      contactPlaceholder3: "Your message",
      contactSubmit: "Send",
    },
    emojiGame: {
      bannerText: "🏆 Perfect score = 5% off!",
      quizHeading: "Quiz: Do you really understand emojis?",
      questionLabel: "Question",
      scoreLabel: "Score",
      checkAnswer: "Check",
      nextQuestion: "Next",
      correctFeedback: "Nice! 🔥",
      incorrectFeedback: "Not quite",
      perfectScoreHeading: "You crushed it! 🎉",
      perfectScoreText: "Your code:",
      tryAgain: "Try again",
      backToHome: "Back to home",
    },
    products: {
      hero: {
        subtitle: "Discover communication anew. See how much proper digital body language changes things.",
        title1: "SEE ALL",
        title2: "PRODUCTS",
        cta: "Check products"
      },
      comingSoon: "Coming Soon",
      currency: "$",
      seeProduct: "See product →",
      list: {
        betterMessage: {
          title: "Better Message",
          description: "Emotions, context, tone perception in your messages. Match your style to who you're talking to. Create effective communication. You don't need to meet in person to understand each other well."
        }
      }
    },
    aboutPage: {
      hero: {
        title: "Gain a new advantage in remote communication.",
        benefits: {
          emotions: "Better emotion reading",
          emotionsDesc: "recognize hidden emotions in conversation partners",
          intelligence: "Emotional intelligence 2.0",
          intelligenceDesc: "develop empathy in online environment",
          meetings: "More effective meetings",
          meetingsDesc: "better decisions, fewer misunderstandings",
          confidence: "Confidence in conversation",
          confidenceDesc: "less stress in negotiations and presentations",
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
        intro: "Worth watching the video – besides valuable content, you'll hear the discount code. We placed it in the recording so you can buy the ebook cheaper while already knowing digital punctuation basics.",
        whyTitle: "Why is it worth it?",
        benefits: [
          {
            number: "01.",
            title: "Learn to recognize emotional signals online",
            description: "Understand how recipients interpret your messages. See which formulations might be received negatively and how to improve them to build better business relationships."
          },
          {
            number: "02.",
            title: "Increase team effectiveness",
            description: "Better understanding = faster collaboration. Limit explanations and repetitions through precise communication tailored to the recipient."
          },
          {
            number: "03.",
            title: "Avoid costly mistakes",
            description: "One misunderstood emoji can ruin a relationship with an important client. Our system warns against misunderstandings before you send a message."
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
          { emoji: "🧠", title: "Emotional intelligence 2.0 – develop empathy in online environment" },
          { emoji: "🗣️", title: "More effective meetings – better decisions, fewer misunderstandings" },
          { emoji: "💬", title: "Confidence in conversation – less stress in negotiations and presentations" },
          { emoji: "⚡", title: "Leader credibility – build authority and trust in your team" }
        ],
        questions: [
          {
            emoji: "🤔",
            question: "What exactly is digital body language?",
            answer: "It's a way of expressing emotions, intentions, and tone in written communication – through emoji, punctuation, formatting, response time, and other elements that replace facial expressions and gestures in face-to-face conversation."
          },
          {
            emoji: "👥",
            question: "Who is freemoji for?",
            answer: "For anyone who communicates in writing at work or in personal life. We especially recommend it for HR professionals, salespeople, team leaders, coaches, and trainers."
          },
          {
            emoji: "📚",
            question: "What does the training look like?",
            answer: "We offer products, self-study materials, interactive exercises, and mini games that help understand emoji context in communication."
          },
          {
            emoji: "💰",
            question: "How much does access cost?",
            answer: "Platform access starts at $29. You can find pricing details in the contact section or by writing to us at contact@freemoji.com."
          },
          {
            emoji: "🎯",
            question: "Can I test the platform?",
            answer: "Yes! Check our free product preview to learn about our approach and see a preview of the platform in action."
          }
        ]
      }
    },
  },
};
