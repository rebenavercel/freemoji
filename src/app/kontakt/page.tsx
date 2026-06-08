"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </main>
  );
}
