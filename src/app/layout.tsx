import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Cart from "@/components/Cart";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "freemoji — Dziś piszemy więcej niż mówimy",
  description:
    "Pierwsza w Polsce platforma edukacyjna z cyfrowej mowy ciała. Naucz się komunikować emocje w świecie cyfrowym.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${outfit.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          <CartProvider>
            {children}
            <Cart />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
