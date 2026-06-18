"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-yellow-400 shadow-2xl border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
              {t("cookieBanner.title")}
            </h3>
            <p className="text-sm sm:text-base text-black leading-relaxed">
              {t("cookieBanner.message")}{" "}
              <a 
                href="/terms" 
                className="underline hover:opacity-70 font-semibold transition-opacity text-black"
              >
                {t("cookieBanner.learnMore")}
              </a>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={declineCookies}
              className="flex-1 sm:flex-none px-6 py-3 text-sm font-bold text-black bg-white rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 border-2 border-black"
            >
              {t("cookieBanner.decline")}
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none px-6 py-3 text-sm font-bold text-white bg-black rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              {t("cookieBanner.accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
