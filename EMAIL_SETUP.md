# 📧 Konfiguracja Email - Szybki Start

## ✅ Co zostało zaimplementowane:

### 1. Formularz kontaktowy
- Automatyczne powiadomienia email po wysłaniu formularza
- Email do klienta: potwierdzenie otrzymania wiadomości
- Email do admina: pełna treść wiadomości z możliwością odpowiedzi (reply-to)

### 2. Powiadomienia o zamówieniach
- Email do klienta: potwierdzenie zakupu
- Email do admina: szczegóły zamówienia + status płatności

### 3. Klucze produkcyjne Stripe
- ✅ Klucz publiczny: `pk_live_51TbHEXBfcYjifgKsKfYIU10RmnVe0imSh0112AkNqVZwZi9L49KWhsLmP7CgXre7LHrOoBVmNc6DqUYxjKU5nbot00Lv6ViRsq`
- ⚠️ Klucz tajny: **musisz dodać w Vercel** (ze Stripe Dashboard)

---

## 🚀 Jak wdrożyć na Vercel:

### Krok 1: Przygotuj klucze
1. Zaloguj się do [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Skopiuj **Secret key** (zaczyna się od `sk_live_...`)
3. Przygotuj swój email admina

### Krok 2: Dodaj zmienne w Vercel
Otwórz **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** i postępuj zgodnie z instrukcją.

### Krok 3: Deploy
```bash
git add .
git commit -m "Add email notifications"
git push
```

### Krok 4: Skonfiguruj webhook
Szczegóły w **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** → Krok 3

---

## 📝 Pliki do skonfigurowania:

### W Vercel (zmienne środowiskowe):
- `STRIPE_SECRET_KEY` - twój klucz tajny ze Stripe
- `ADMIN_EMAIL` - **ZMIEŃ NA SWÓJ EMAIL**
- `STRIPE_WEBHOOK_SECRET` - z Stripe Dashboard po utworzeniu webhooka
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - już ustawiony
- `RESEND_API_KEY` - już ustawiony
- `NEXT_PUBLIC_SITE_URL` - URL twojej domeny

### Lokalnie (.env.local):
```bash
# Zaktualizuj te wartości:
STRIPE_SECRET_KEY=sk_live_... (twój klucz ze Stripe)
ADMIN_EMAIL=twoj-email@example.com
```

---

## 🧪 Testowanie lokalnie:

```bash
# 1. Zainstaluj zależności (jeśli jeszcze nie)
npm install

# 2. Uruchom aplikację
npm run dev

# 3. Testuj formularz
# Otwórz: http://localhost:3000/contact
```

---

## 📚 Pełna dokumentacja:
- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Instrukcja deploy na Vercel
- **[WEBHOOKS_SETUP.md](./WEBHOOKS_SETUP.md)** - Szczegóły techniczne webhooków

---

## ⚡ Najczęstsze problemy:

**Nie przychodzą maile?**
- Sprawdź spam/promocje
- Sprawdź czy `ADMIN_EMAIL` jest poprawny w Vercel
- Zobacz logi w Vercel → Deployments → View Function Logs

**Błąd webhook Stripe?**
- Sprawdź czy `STRIPE_WEBHOOK_SECRET` jest dobrze wpisany
- Upewnij się że webhook endpoint w Stripe to: `https://twoja-domena.vercel.app/api/webhooks/stripe`
- Zrób redeploy w Vercel po dodaniu zmiennej

**STRIPE_SECRET_KEY błąd?**
- Upewnij się że używasz klucza **tajnego** (zaczyna się od `sk_live_`)
- Nie używaj klucza **publicznego** (pk_live_)
