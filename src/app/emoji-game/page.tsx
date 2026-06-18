"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { useLanguage } from "@/context/LanguageContext";
import { type VariantKey } from "@/data/content";

/* ─── Game Section ─── */
function EmojiGame() {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  // Get questions from translations - force "normalne" variant
  const questions = (t("emojiGame.questions", "normalne") || []) as Array<{
    emoji: string;
    question: string;
    options: Array<{ text: string; correct: boolean }>;
  }>;

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(index);
    
    if (questions[currentQuestion].options[index].correct) {
      setScore(score + 1);
    }

    // Wait before moving to next question
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setGameFinished(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isPerfectScore = score === questions.length;

  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-yellow/10 to-white">
      <div className="max-w-3xl mx-auto">
        {!gameFinished ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-3xl md:text-6xl font-800 text-gray-900 mb-4">
                {t("emojiGame.quizHeading", "normalne")}
              </h1>
              <div className="inline-block bg-yellow/20 border-2 border-yellow rounded-2xl px-6 py-3">
                <p className="text-gray-900 font-700 text-lg">
                  {t("emojiGame.bannerText", "normalne")}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{t("emojiGame.questionLabel", "normalne")} {currentQuestion + 1}/{questions.length}</span>
                <span>{t("emojiGame.scoreLabel", "normalne")}: {score}/{questions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-yellow h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl border-4 border-yellow p-10 md:p-14 shadow-2xl">
              {/* Emoji Display */}
              <div className="text-center mb-8">
                <div className="text-6xl md:text-9xl mb-6 animate-scale-in">
                  {questions[currentQuestion].emoji}
                </div>
                <h2 className="font-display text-3xl font-700 text-gray-900">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              {/* Answer Options */}
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = option.correct;
                  const showFeedback = selectedAnswer !== null;

                  let buttonClass = "bg-gray-50 hover:bg-gray-100 border-gray-200";
                  
                  if (showFeedback) {
                    if (isSelected && isCorrect) {
                      buttonClass = "bg-green-100 border-green-500 scale-105";
                    } else if (isSelected && !isCorrect) {
                      buttonClass = "bg-red-100 border-red-500";
                    } else if (!isSelected && isCorrect) {
                      buttonClass = "bg-green-100 border-green-500";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-5 rounded-2xl border-2 font-600 text-lg text-left transition-all ${buttonClass} ${
                        selectedAnswer === null ? "hover:scale-102 cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-sm font-700">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option.text}</span>
                        {showFeedback && isCorrect && (
                          <span className="ml-auto text-green-600 text-2xl">✓</span>
                        )}
                        {showFeedback && isSelected && !isCorrect && (
                          <span className="ml-auto text-red-600 text-2xl">✗</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          /* Results Screen */
          <div className="bg-white rounded-3xl border-4 border-yellow p-10 md:p-16 shadow-2xl text-center">
            <div className="text-6xl md:text-8xl mb-6">
              {isPerfectScore ? "🎉" : score >= questions.length * 0.7 ? "😊" : "🤔"}
            </div>
            
            <h2 className="font-display text-2xl md:text-5xl font-800 text-gray-900 mb-6">
              {isPerfectScore ? t("emojiGame.results.perfect", "normalne") : score >= questions.length * 0.7 ? t("emojiGame.results.good", "normalne") : t("emojiGame.results.low", "normalne")}
            </h2>
            
            <p className="text-2xl text-gray-700 mb-8">
              {t("emojiGame.scoreLabel", "normalne")}: <span className="font-700 text-yellow">{score}/{questions.length}</span>
            </p>

            {/* Discount Code */}
            {isPerfectScore && (
              <div className="bg-yellow rounded-2xl p-8 mb-8 border-2 border-gray-900">
                <p className="text-sm text-gray-700 mb-2 font-600">
                  {t("emojiGame.results.perfectScoreText", "normalne")}
                </p>
                <p className="font-display text-2xl md:text-4xl font-900 text-gray-900 mb-2 tracking-wider">
                  EMOJI5
                </p>
                <p className="text-sm text-gray-600">
                  {t("emojiGame.results.discountText", "normalne")}
                </p>
              </div>
            )}

            {!isPerfectScore && score >= questions.length * 0.7 && (
              <div className="bg-gray-100 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 font-600">
                  {t("emojiGame.results.almostPerfect", "normalne")} <span className="text-yellow bg-gray-900 px-2 py-1 rounded font-700">5/5</span>{t("emojiGame.results.toGetCode", "normalne")}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {t("emojiGame.results.tryAgainHint", "normalne")}
                </p>
              </div>
            )}

            {score < questions.length * 0.7 && (
              <div className="bg-gray-100 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 font-600">
                  {t("emojiGame.results.dontGiveUp", "normalne")} <span className="text-yellow bg-gray-900 px-2 py-1 rounded font-700">5/5</span>{t("emojiGame.results.toGetDiscount", "normalne")}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {t("emojiGame.results.collectMore", "normalne")} {questions.length - score} {t("emojiGame.results.moreCorrect", "normalne")}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetGame}
                className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                {t("emojiGame.results.restartQuiz", "normalne")}
              </button>
              <Link
                href="/"
                className="bg-gray-900 hover:bg-gray-800 text-white font-700 px-8 py-4 rounded-full transition-all hover:scale-105 inline-block"
              >
                {t("emojiGame.results.exploreProducts", "normalne")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function GamePage() {
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
      <Navbar variant={variant} setVariant={setVariant} />
      <EmojiGame />
      <FAQSection faqs={faqs} forceNormale={true} />
      <ContactForm />
      <Footer />
    </main>
  );
}
