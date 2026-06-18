# Konfiguracja Webhooks Stripe i Email na Vercel

## 1. Dodaj zmienne środowiskowe w Vercel

Przejdź do swojego projektu na Vercel → Settings → Environment Variables

Dodaj następujące zmienne:

```
STRIPE_SECRET_KEY=your_stripe_live_secret_key_here
STRIPE_WEBHOOK_SECRET=(zostanie dodany w kroku 3)
RESEND_API_KEY=re_4EqhsN5u_GpV6MBh7Cd9qnbtCCjUpD3nv
NEXT_PUBLIC_SITE_URL=https://twoja-domena.vercel.app
ADMIN_EMAIL=twoj-email@example.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51TbHEXBfcYjifgKsKfYIU10RmnVe0imSh0112AkNqVZwZi9L49KWhsLmP7CgXre7LHrOoBVmNc6DqUYxjKU5nbot00Lv6ViRsq
```

**Ważne:** 
- Zmień `ADMIN_EMAIL` na swój prawdziwy adres email!
- Pobierz `STRIPE_SECRET_KEY` (sk_live_...) ze Stripe Dashboard → API keys

## 2. Deploy na Vercel

```bash
git add .
git commit -m "Add email notifications"
git push
```

Vercel automatycznie zdeployuje nową wersję.

## 3. Skonfiguruj Stripe Webhook

1. Przejdź do: https://dashboard.stripe.com/webhooks
2. Kliknij **"Add endpoint"**
3. Endpoint URL: `https://twoja-domena.vercel.app/api/webhooks/stripe`
4. Wybierz event do nasłuchiwania: **`checkout.session.completed`**
5. Kliknij "Add endpoint"
6. Kliknij na nowy endpoint i skopiuj **"Signing secret"** (zaczyna się od `whsec_`)
7. Wróć do Vercel → Settings → Environment Variables
8. Dodaj/zaktualizuj `STRIPE_WEBHOOK_SECRET` z wartością skopiowaną z Stripe
9. Redeploy aplikację w Vercel (Settings → Deployments → ... → Redeploy)

## 4. Konfiguracja Resend (opcjonalna - własna domena)

Obecnie maile wysyłane są z `onboarding@resend.dev` (domena testowa Resend).

Aby wysyłać z własnej domeny (np. `orders@freemoji.com`):
1. Przejdź do: https://resend.com/domains
2. Dodaj swoją domenę
3. Skonfiguruj rekordy DNS zgodnie z instrukcją
4. Po weryfikacji zmień w kodzie `/src/app/api/webhooks/stripe/route.ts`:
   ```typescript
   from: "orders@twojadomena.com"
   ```

## 5. Testowanie lokalnie (opcjonalne)

### Stripe CLI (do testowania lokalnie)

1. Zainstaluj Stripe CLI: https://stripe.com/docs/stripe-cli

2. Zaloguj się:
```bash
stripe login
```

3. Przekieruj webhook na localhost:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

4. Skopiuj `webhook signing secret` (zaczyna się od `whsec_`) i dodaj do `.env.local`:
```
STRIPE_WEBHOOK_SECRET=whsec_...
```

4. Testuj lokalnie (aplikacja + Stripe CLI muszą działać równocześnie)

## Co się dzieje po zakupie?

### Mail dla klienta (automatyczny):
```
Temat: ✅ Potwierdzenie zamówienia - Freemoji

Dziękujemy za zakup! 🎉
Twoje zamówienie zostało przyjęte i opłacone.
Skontaktujemy się z Tobą wkrótce.
```

### Mail dla admina (automatyczny):
```
Temat: 🛒 Nowe zamówienie od email@klienta.com
      lub
      📬 Nowa wiadomość z formularza kontaktowego

Nowe zamówienie (lub wiadomość kontaktowa):
✅ OPŁACONE

Email klienta: email@klienta.com
Kwota: $XX.XX (dla zamówień)
Temat: ... (dla formularza)
Treść wiadomości: ... (dla formularza)
```

## Troubleshooting

**Problem:** Webhook nie działa
- Sprawdź czy `STRIPE_WEBHOOK_SECRET` jest poprawny w Vercel
- Sprawdź logi w Stripe Dashboard → Webhooks → [Twój endpoint] → Events

**Problem:** Maile nie przychodzą
- Sprawdź czy `RESEND_API_KEY` jest poprawny
- Sprawdź logi w Vercel (View Function Logs)
- Sprawdź w Resend Dashboard czy wysłano maile

**Problem:** Admin nie dostaje maili
- Sprawdź czy `ADMIN_EMAIL` jest ustawiony w Vercel
- Sprawdź spam/promocje w skrzynce
