"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  const { variant, setVariant } = useLanguage();
  const { items, removeItem, total, clearCart } = useCart();
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
    <main className="min-h-screen bg-gradient-to-b from-yellow/10 to-white">
      <Navbar variant={variant} setVariant={setVariant} />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="font-display text-5xl md:text-6xl font-800 text-gray-900 mb-12 text-center">
          Checkout 💳
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg">
              <h2 className="font-display text-3xl font-700 text-gray-900 mb-6">
                Your cart
              </h2>

              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛍️</div>
                  <p className="text-xl font-600 text-gray-900 mb-2">
                    Cart is empty
                  </p>
                  <Link
                    href="/products/bettermessage"
                    className="inline-block mt-4 bg-yellow hover:bg-yellow-dark text-gray-900 font-700 px-6 py-3 rounded-full transition-all"
                  >
                    Browse products
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200"
                      >
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 font-600 mb-1">
                            {item.variant}
                          </div>
                          <h3 className="font-display text-xl font-700 text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.description}
                          </p>
                          <div className="font-display text-2xl font-800 text-gray-900">
                            ${item.price}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-2"
                          aria-label="Remove"
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
                    ))}
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isProcessing}
                    className="w-full bg-yellow hover:bg-yellow-dark text-gray-900 font-700 text-lg py-4 rounded-full transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isProcessing ? "Processing..." : "Proceed to Checkout →"}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-6 shadow-lg sticky top-24">
              <h3 className="font-display text-2xl font-700 text-gray-900 mb-4">
                Summary
              </h3>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-600 text-gray-900">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Subtotal:</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>VAT (23%):</span>
                  <span>${(total * 0.23).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t-2 border-gray-900 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-600 text-gray-900">Total:</span>
                  <span className="font-display text-3xl font-800 text-gray-900">
                    ${(total * 1.23).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 bg-yellow/10 rounded-2xl p-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <p className="text-xs font-600 text-gray-900 mb-1">
                      Secure payment with Stripe
                    </p>
                    <p className="text-xs text-gray-600">
                      Payment and billing details handled securely by Stripe. We accept all major credit cards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
