"use client";

import { useState } from "react";
import type React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Tutaj dodaj logikę wysyłania formularza
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Card Container */}
        <div className="bg-white rounded-3xl border-4 border-yellow p-10 md:p-16 shadow-xl">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-800 text-gray-900 mb-3">
              {t("contact.heading")}
            </h2>
            <p className="text-gray-500 text-sm">{t("contact.emojiReminder")}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Subject */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p className="flex flex-wrap items-center gap-2">
                <span>{t("contact.formText.hello")}</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("contact.formText.namePlaceholder")}
                  className="inline-block border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-1 min-w-[200px] bg-transparent transition-colors"
                  required
                />
                <span>{t("contact.formText.andIHave")}</span>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t("contact.formText.subjectPlaceholder")}
                  className="inline-block border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-1 min-w-[250px] bg-transparent transition-colors"
                  required
                />
                <span>,</span>
              </p>

              <p className="flex flex-wrap items-start gap-2">
                <span>{t("contact.formText.namely")}</span>
              </p>

              {/* Message Area */}
              <div className="pl-4">
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("contact.formText.messagePlaceholder")}
                  rows={4}
                  className="w-full border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-2 bg-transparent resize-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="text-lg text-gray-700 pt-4">
              <p className="flex flex-wrap items-center gap-2">
                <span>{t("contact.formText.replyTo")}</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("contact.formText.emailPlaceholder")}
                  className="inline-block border-b-2 border-gray-300 focus:border-yellow outline-none px-2 py-1 min-w-[280px] bg-transparent transition-colors"
                  required
                />
              </p>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-6">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-yellow focus:ring-yellow cursor-pointer"
                required
              />
              <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                {t("contact.formText.consent")}
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t("contact.formText.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
