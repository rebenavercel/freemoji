# Freemoji - Next.js E-commerce Platform

Platforma edukacyjna z systemem płatności Stripe i automatycznymi powiadomieniami email.

## ✨ Funkcje

- 🛒 **Koszyk produktów** - tylko jeden pakiet na raz
- 💳 **Płatności Stripe** - bezpieczne płatności online (produkcyjne klucze)
- 📧 **Email powiadomienia** - automatyczne maile po zakupie i z formularza kontaktowego
- 📝 **Formularz kontaktowy** - z powiadomieniami dla admina i klienta
- 🌍 **Wielojęzyczność** - obsługa wielu języków
- 📱 **Responsive design** - działa na wszystkich urządzeniach

## 🚀 Szybki start

### Instalacja

```bash
npm install
```

### Konfiguracja

1. Skopiuj `.env.local` i uzupełnij:
   - `STRIPE_SECRET_KEY` - klucz tajny ze Stripe Dashboard
   - `ADMIN_EMAIL` - twój email
   - Pozostałe klucze są już skonfigurowane

2. Uruchom serwer deweloperski:

```bash
npm run dev
```

3. Otwórz [http://localhost:3000](http://localhost:3000)

## 📧 Konfiguracja Email i Stripe

**Przed wdrożeniem na produkcję przeczytaj:**

- **[EMAIL_SETUP.md](./EMAIL_SETUP.md)** - Szybki przewodnik konfiguracji
- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Deploy na Vercel krok po kroku
- **[WEBHOOKS_SETUP.md](./WEBHOOKS_SETUP.md)** - Szczegóły techniczne webhooków

## 🛠️ Stack technologiczny

- **Framework:** Next.js 16.2 (App Router)
- **Język:** TypeScript
- **Styling:** Tailwind CSS 4
- **Płatności:** Stripe
- **Email:** Resend
- **Hosting:** Vercel

## 📂 Struktura projektu

```
src/
├── app/              # Next.js App Router
│   ├── api/          # API routes
│   │   ├── contact/  # Formularz kontaktowy
│   │   ├── create-checkout-session/  # Stripe checkout
│   │   └── webhooks/stripe/  # Stripe webhooks
│   └── ...           # Strony aplikacji
├── components/       # Komponenty React
├── context/          # Context providers (koszyk, język)
└── data/            # Treści wielojęzyczne
```

## 🧪 Testowanie

### Formularz kontaktowy:
1. Wejdź na `/contact`
2. Wypełnij formularz
3. Sprawdź email (klient + admin)

### Płatności Stripe:
⚠️ Projekt używa **produkcyjnych** kluczy Stripe!

## 📖 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
