"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function CheckoutCancelPage() {
  const { variant, setVariant } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="bg-white rounded-3xl border-4 border-gray-200 p-10 md:p-16 shadow-xl text-center">
          <div className="text-8xl mb-6">😔</div>
          <h1 className="font-display text-4xl md:text-5xl font-800 text-gray-900 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Your payment was cancelled. No charges were made to your account.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-700 text-gray-900 mb-3">Need help?</h3>
            <p className="text-gray-600 mb-4">
              If you experienced any issues during checkout, please don't hesitate to contact us. We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-600"
            >
              Contact Support
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/bettermessage"
              className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 px-8 py-4 rounded-full transition-all hover:scale-105 inline-block"
            >
              Back to Products
            </Link>
            <Link
              href="/"
              className="bg-gray-900 hover:bg-gray-800 text-white font-700 px-8 py-4 rounded-full transition-all hover:scale-105 inline-block"
            >
              Homepage
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
