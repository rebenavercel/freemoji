"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { variant, setVariant } = useLanguage();
  
  return (
    <main className="bg-white">
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      
      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </main>
  );
}
