# 🚀 Szybki przewodnik: Deploy na Vercel z Email

## Krok 1: Dodaj zmienne środowiskowe w Vercel

1. Przejdź do https://vercel.com/dashboard
2. Wybierz swój projekt → **Settings** → **Environment Variables**
3. Dodaj te zmienne (wszystkie środowiska: Production, Preview, Development):

| Nazwa | Wartość |
|-------|---------|
| `STRIPE_SECRET_KEY` | **Twój klucz tajny Stripe (sk_live_...)** - znajdziesz go w [Stripe Dashboard](https://dashboard.stripe.com/apikeys) |
| `RESEND_API_KEY` | `re_4EqhsN5u_GpV6MBh7Cd9qnbtCCjUpD3nv` |
| `ADMIN_EMAIL` | **TWÓJ EMAIL** (np. `jakub@example.com`) |
| `NEXT_PUBLIC_SITE_URL` | URL twojej strony (np. `https://freemoji.vercel.app`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_51TbHEXBfcYjifgKsKfYIU10RmnVe0imSh0112AkNqVZwZi9L49KWhsLmP7CgXre7LHrOoBVmNc6DqUYxjKU5nbot00Lv6ViRsq` |
| `STRIPE_WEBHOOK_SECRET` | *Dodamy w kroku 3* |

⚠️ **Ważne:**
- Zmień `ADMIN_EMAIL` na swój prawdziwy adres!
- Dodaj `STRIPE_SECRET_KEY` - klucz **tajny** (sk_live_...) ze Stripe Dashboard → API keys

## Krok 2: Deploy aplikacji

```bash
git add .
git commit -m "Add email notifications system"
git push
```

Vercel automatycznie zdeployuje aplikację.

## Krok 3: Skonfiguruj Stripe Webhook

1. Otwórz https://dashboard.stripe.com/webhooks
2. Kliknij **"Add endpoint"**
3. Wpisz URL: `https://TWOJA-DOMENA.vercel.app/api/webhooks/stripe`
   - Przykład: `https://freemoji.vercel.app/api/webhooks/stripe`
4. W sekcji **"Select events to listen to"** → wybierz: `checkout.session.completed`
5. Kliknij **"Add endpoint"**
6. Kliknij na utworzony endpoint
7. W sekcji **"Signing secret"** kliknij **"Reveal"** i skopiuj klucz (zaczyna się od `whsec_`)
8. Wróć do Vercel → Settings → Environment Variables
9. Dodaj zmienną `STRIPE_WEBHOOK_SECRET` z skopiowaną wartością
10. Redeploy: Settings → Deployments → (najnowszy) → **⋯** → **Redeploy**

## ✅ Gotowe!

Teraz po każdym zakupie i wypełnieniu formularza kontaktowego:

**Zakup produktu:**
- **Klient** dostanie email: "Dziękujemy za zakup, skontaktujemy się wkrótce"
- **Ty (admin)** dostaniesz email z:
  - ✅/⚠️ Status płatności (OPŁACONE/NIEOPŁACONE)
  - Email klienta
  - Kwota zamówienia
  - Lista produktów
  - ID sesji Stripe

**Formularz kontaktowy:**
- **Klient** dostanie email: "Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe"
- **Ty (admin)** dostaniesz email z:
  - Imię i nazwisko
  - Email klienta (z opcją reply)
  - Temat
  - Treść wiadomości

## 🧪 Testowanie

**UWAGA:** Używasz kluczy PRODUKCYJNYCH Stripe - transakcje będą prawdziwe!

Jeśli chcesz testować bez prawdziwych płatności:
- Użyj kluczy testowych (zaczynających się od `pk_test_` i `sk_test_`)
- Wtedy możesz użyć testowej karty: `4242 4242 4242 4242`

Do testowania formularza kontaktowego:
1. Wejdź na swoją stronę `/contact`
2. Wypełnij formularz
3. Sprawdź skrzynkę - powinieneś dostać email z wiadomością klienta

## 🐛 Problemy?

**Nie przychodzą maile?**
- Sprawdź spam/promocje
- Zobacz logi w Vercel: Project → Deployments → [najnowszy] → **View Function Logs**
- Zobacz czy webhook zadziałał: Stripe Dashboard → Webhooks → [twój endpoint] → Events

**Webhook zwraca błąd?**
- Sprawdź czy `STRIPE_WEBHOOK_SECRET` jest dobrze wpisany w Vercel
- Sprawdź czy zrobiłeś redeploy po dodaniu zmiennej
