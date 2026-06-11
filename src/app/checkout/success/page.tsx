"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CheckoutSuccessPage() {
  const { variant, setVariant } = useLanguage();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();
  
  // Generate order number once
  const orderNumber = useMemo(() => {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  }, []);

  useEffect(() => {
    // Clear cart after successful payment
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow/10 to-white">
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="bg-white rounded-3xl border-4 border-yellow p-10 md:p-16 shadow-2xl text-center">
          <div className="text-8xl mb-6">🎉</div>
          <h1 className="font-display text-4xl md:text-5xl font-800 text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Your payment was successful. We've sent a confirmation email with all the details.
          </p>
          
          <div className="bg-yellow/20 rounded-2xl p-6 mb-8">
            <p className="text-gray-800 font-600 mb-2">Order Number:</p>
            <p className="font-display text-3xl font-900 text-gray-900">
              #{orderNumber}
            </p>
            {sessionId && (
              <p className="text-sm text-gray-500 mt-2">
                Session ID: {sessionId.substring(0, 20)}...
              </p>
            )}
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-700 text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What's Next?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>You'll receive an email within 24 hours with instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>Complete your communication assessment via the link in your email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>Receive your personalized report within 48 hours</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 px-8 py-4 rounded-full transition-all hover:scale-105 inline-block"
            >
              Back to Homepage
            </Link>
            <Link
              href="/products/bettermessage"
              className="bg-gray-900 hover:bg-gray-800 text-white font-700 px-8 py-4 rounded-full transition-all hover:scale-105 inline-block"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
