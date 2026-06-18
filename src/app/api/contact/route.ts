import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane" },
        { status: 400 }
      );
    }

    // Send email to admin
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL || "admin@freemoji.com",
      subject: `📬 Nowa wiadomość z formularza kontaktowego: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1f2937; margin-bottom: 24px;">Nowa wiadomość kontaktowa 📬</h1>
          
          <div style="background-color: #f3f4f6; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
            <div style="margin-bottom: 16px;">
              <strong style="color: #1f2937;">Od:</strong>
              <p style="margin: 4px 0; color: #4b5563;">${name}</p>
            </div>
            
            <div style="margin-bottom: 16px;">
              <strong style="color: #1f2937;">Email:</strong>
              <p style="margin: 4px 0;">
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">
                  ${email}
                </a>
              </p>
            </div>
            
            <div style="margin-bottom: 16px;">
              <strong style="color: #1f2937;">Temat:</strong>
              <p style="margin: 4px 0; color: #4b5563;">${subject}</p>
            </div>
            
            <div style="border-top: 1px solid #d1d5db; padding-top: 16px; margin-top: 16px;">
              <strong style="color: #1f2937;">Wiadomość:</strong>
              <p style="margin: 8px 0; color: #4b5563; white-space: pre-wrap; line-height: 1.6;">
                ${message}
              </p>
            </div>
          </div>

          <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
            📅 Data: ${new Date().toLocaleString('pl-PL')}<br/>
            🔔 To jest automatyczna wiadomość z formularza kontaktowego Freemoji.
          </p>
        </div>
      `,
      replyTo: email,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "✅ Otrzymaliśmy Twoją wiadomość - Freemoji",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1f2937; margin-bottom: 24px;">Dziękujemy za kontakt! 💬</h1>
          
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            Cześć ${name}!
          </p>

          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-top: 16px;">
            Otrzymaliśmy Twoją wiadomość i <strong>odpowiemy najszybciej jak to możliwe</strong>.
          </p>

          <div style="background-color: #f3f4f6; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              <strong>Temat:</strong> ${subject}
            </p>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 32px;">
            Freemoji - Komunikacja która działa 💬
          </p>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true,
      message: "Wiadomość została wysłana pomyślnie" 
    });

  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości" },
      { status: 500 }
    );
  }
}
