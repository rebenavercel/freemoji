"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { VariantKey } from "@/data/content";
import { getVariantLabels } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  variant?: VariantKey;
  setVariant?: (v: VariantKey) => void;
  showLanguageSelector?: boolean;
}

export default function Navbar({ variant, setVariant, showLanguageSelector = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (key: VariantKey) => {
    console.log("🚀 Navbar: Changing variant from", variant, "to", key);
    if (setVariant) {
      setVariant(key);
      setLanguageDropdownOpen(false);
    }
  };
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="freemoji" width={160} height={49} className="h-8 w-auto" priority />
          </Link>
          <div className="flex items-center gap-4">
            {/* Language Switcher PL/EN - HIDDEN */}
            {/* <div className="hidden md:flex items-center gap-2" suppressHydrationWarning>
              <span className="text-sm text-gray-600">{t("nav.language")}:</span>
              <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setLanguage("pl")}
                  className={`px-3 py-1 text-xs font-600 rounded-full transition-all ${
                    language === "pl"
                      ? "bg-yellow text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  PL
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 text-xs font-600 rounded-full transition-all ${
                    language === "en"
                      ? "bg-yellow text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  EN
                </button>
              </div>
            </div> */}
            
            {/* Variant Language Selector */}
            {showLanguageSelector && variant && setVariant && (
              <div className="hidden md:flex items-center gap-2 relative" ref={dropdownRef}>
                <span className="text-sm text-gray-600">{language === "pl" ? "Styl:" : "Style:"}</span>
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="bg-transparent border-none text-sm font-600 text-gray-900 focus:outline-none cursor-pointer flex items-center gap-1 hover:text-yellow transition-colors"
                  suppressHydrationWarning
                >
                  {getVariantLabels(language)[variant]}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Custom Dropdown */}
                {languageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white border-2 border-gray-900 rounded-2xl shadow-2xl overflow-hidden min-w-[200px] animate-scale-in">
                    {(Object.keys(getVariantLabels(language)) as VariantKey[]).map((k) => (
                      <button
                        key={k}
                        onClick={() => handleLanguageChange(k)}
                        className={`w-full text-left px-4 py-3 text-sm font-600 transition-colors ${
                          k === variant 
                            ? 'bg-yellow text-gray-900' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {getVariantLabels(language)[k]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            {/* Hamburger Button */}
            <button 
              className="relative z-[60] p-2 group" 
              onClick={() => setOpen(!open)} 
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ease-out ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ease-out ${open ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ease-out ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-yellow via-yellow-light to-white transition-all duration-700 ${open ? 'scale-100' : 'scale-95'}`}></div>
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          {/* Menu Links */}
          <div className="flex flex-col gap-2 w-full max-w-md">
            <Link 
              href="/" 
              onClick={() => setOpen(false)} 
              className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-900 rounded-2xl px-8 py-6 text-center font-display text-2xl font-700 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: open ? '100ms' : '0ms' }}
            >
              <span className="relative z-10">{t("nav.home")}</span>
            </Link>
            <Link 
              href="/about" 
              onClick={() => setOpen(false)} 
              className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-900 rounded-2xl px-8 py-6 text-center font-display text-2xl font-700 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: open ? '150ms' : '0ms' }}
            >
              <span className="relative z-10">{t("nav.about")}</span>
            </Link>
            <Link 
              href="/products" 
              onClick={() => setOpen(false)} 
              className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-900 rounded-2xl px-8 py-6 text-center font-display text-2xl font-700 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: open ? '200ms' : '0ms' }}
            >
              <span className="relative z-10">{t("nav.products")}</span>
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setOpen(false)} 
              className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-900 rounded-2xl px-8 py-6 text-center font-display text-2xl font-700 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: open ? '250ms' : '0ms' }}
            >
              <span className="relative z-10">{t("nav.blog")}</span>
            </Link>
            <Link 
              href="/emoji-game" 
              onClick={() => setOpen(false)} 
              className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-900 rounded-2xl px-8 py-6 text-center font-display text-2xl font-700 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: open ? '300ms' : '0ms' }}
            >
              <span className="relative z-10">{t("nav.game")}</span>
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)} 
              className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-900 rounded-2xl px-8 py-6 text-center font-display text-2xl font-700 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: open ? '350ms' : '0ms' }}
            >
              <span className="relative z-10">{t("nav.contact")}</span>
            </Link>
            
            {/* Language Switcher Mobile - HIDDEN */}
            {/* <div 
              className={`flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-gray-900 rounded-2xl px-8 py-6 transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: open ? '400ms' : '0ms' }}
            >
              <span className="text-sm font-600 text-gray-700">{t("nav.language")}:</span>
              <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setLanguage("pl")}
                  className={`px-4 py-2 text-sm font-600 rounded-full transition-all ${
                    language === "pl"
                      ? "bg-yellow text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  PL
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 text-sm font-600 rounded-full transition-all ${
                    language === "en"
                      ? "bg-yellow text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  EN
                </button>
              </div>
            </div> */}
          </div>

          {/* Decorative Emojis */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${open ? 'opacity-20' : 'opacity-0'}`}>
            <span className="absolute top-20 left-10 text-6xl animate-float">😀</span>
            <span className="absolute top-40 right-16 text-5xl animate-float-delayed">🎉</span>
            <span className="absolute bottom-32 left-20 text-7xl animate-float">💬</span>
            <span className="absolute bottom-20 right-10 text-6xl animate-float-delayed">✨</span>
          </div>
        </div>
      </div>
    </>
  );
}
