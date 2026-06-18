import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "No signature provided" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      // Get customer email
      const customerEmail = session.customer_details?.email;
      
      if (!customerEmail) {
        console.error("No customer email found in session");
        return NextResponse.json({ received: true });
      }

      // Parse items from metadata
      const items = session.metadata?.items 
        ? JSON.parse(session.metadata.items)
        : [];

      const itemsText = items
        .map((item: any) => `• ${item.name} - $${item.price}`)
        .join('\n');

      // Send email to customer
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: customerEmail,
        subject: "✅ Potwierdzenie zamówienia - Freemoji",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1f2937; margin-bottom: 24px;">Dziękujemy za zakup! 🎉</h1>
            
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Twoje zamówienie zostało przyjęte i opłacone.
            </p>

            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-top: 16px;">
              <strong>Skontaktujemy się z Tobą wkrótce.</strong>
            </p>

            <div style="background-color: #f3f4f6; border-radius: 12px; padding: 20px; margin: 24px 0;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Numer zamówienia: ${session.id}
              </p>
            </div>

            <p style="color: #6b7280; font-size: 12px; margin-top: 32px;">
              Freemoji - Komunikacja która działa 💬
            </p>
          </div>
        `,
      });

      // Send email to admin
      const paymentStatus = session.payment_status === 'paid' ? '✅ OPŁACONE' : '⚠️ NIEOPŁACONE';
      const paymentStatusColor = session.payment_status === 'paid' ? '#10b981' : '#ef4444';
      
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.ADMIN_EMAIL || "admin@freemoji.com",
        subject: `🛒 Nowe zamówienie od ${customerEmail}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1f2937; margin-bottom: 24px;">Nowe zamówienie! 🛒</h1>
            
            <div style="background-color: #f3f4f6; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
              <div style="margin-bottom: 12px;">
                <strong>Status płatności:</strong>
                <span style="color: ${paymentStatusColor}; font-weight: bold; margin-left: 8px;">
                  ${paymentStatus}
                </span>
              </div>
              
              <div style="border-top: 1px solid #d1d5db; margin: 16px 0; padding-top: 16px;">
                <p style="margin: 8px 0;"><strong>Email klienta:</strong> ${customerEmail}</p>
                <p style="margin: 8px 0;"><strong>Kwota:</strong> $${(session.amount_total! / 100).toFixed(2)}</p>
                <p style="margin: 8px 0;"><strong>ID sesji:</strong> ${session.id}</p>
                <p style="margin: 8px 0;"><strong>Data:</strong> ${new Date().toLocaleString('pl-PL')}</p>
              </div>
              
              <div style="border-top: 1px solid #d1d5db; margin: 16px 0; padding-top: 16px;">
                <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 16px;">Zamówione produkty:</h3>
                <div style="color: #1f2937; font-size: 14px; line-height: 1.8; white-space: pre-line;">
${itemsText}
                </div>
              </div>
            </div>

            <p style="color: #6b7280; font-size: 12px;">
              🔔 To jest automatyczne powiadomienie o nowym zamówieniu.
            </p>
          </div>
        `,
      });

      console.log(`Order confirmation emails sent for session ${session.id}`);
    } catch (error) {
      console.error("Error sending emails:", error);
      // Don't return error to Stripe, as payment was successful
    }
  }

  return NextResponse.json({ received: true });
}
