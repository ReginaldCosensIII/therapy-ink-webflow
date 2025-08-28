import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const managementEmail = "info@tattoo-therapy.com"; // TODO: Update to your official inbox

    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Website Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    // Send to management
    const sendMgmt = await resend.emails.send({
      from: "Tattoo Therapy <onboarding@resend.dev>",
      to: [managementEmail],
      subject: `New Contact: ${subject}`,
      html,
      reply_to: email,
    });

    // Auto-confirmation to user
    const sendUser = await resend.emails.send({
      from: "Tattoo Therapy <onboarding@resend.dev>",
      to: [email],
      subject: "We've received your message",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Thanks for reaching out, ${name}!</h2>
          <p>We received your message about "${subject}" and will get back to you shortly.</p>
          <p>If it's urgent, you can reply to this email or call us.</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ ok: true, sendMgmt, sendUser }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("send-contact error:", error);
    return new Response(
      JSON.stringify({ error: error?.message ?? "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
