"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const { t } = useLanguage();
  const { items, removeItem, total, itemCount, isCartOpen, setIsCartOpen } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to create checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-yellow hover:bg-yellow-dark text-gray-900 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 border-2 border-gray-900"
        aria-label="Koszyk"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {itemCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-700">
            {itemCount}
          </div>
        )}
      </button>

      {/* Cart Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-yellow">
            <h2 className="font-display text-3xl font-800 text-gray-900">
              {t("cart.title")} 🛒
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center transition-colors"
              aria-label={t("cart.close")}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-8xl mb-4">🛍️</div>
                <p className="text-xl font-600 text-gray-900 mb-2">
                  {t("cart.empty")}
                </p>
                <p className="text-gray-600">
                  {t("cart.emptyDesc")}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 font-600 mb-1">
                          {item.variant}
                        </div>
                        <h3 className="font-display text-xl font-700 text-gray-900">
                          {item.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label={t("cart.remove")}
                      >
                        <svg
                          className="w-5 h-5"
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
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="font-display text-2xl font-800 text-gray-900">
                      ${item.price}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-600 text-gray-700">{t("cart.total")}</span>
                <span className="font-display text-3xl font-800 text-gray-900">
                  ${total}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className={`block w-full bg-yellow hover:bg-yellow-dark text-gray-900 font-700 text-lg py-4 rounded-full text-center transition-all hover:scale-105 shadow-lg mb-3 ${
                  isProcessing ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isProcessing ? "Processing..." : t("cart.checkout")}
              </button>
              <Link
                href="/products/bettermessage"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-white hover:bg-gray-50 text-gray-900 font-600 text-base py-3 rounded-full text-center transition-all border-2 border-gray-200"
              >
                {t("cart.continueShopping")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
