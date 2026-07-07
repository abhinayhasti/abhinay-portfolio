"use server";

import { personal } from "@/app/data/social";

export interface ContactState {
  status: "idle" | "success" | "error" | "unconfigured";
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Sends the contact form via Resend. Requires the RESEND_API_KEY env var;
 * when it's absent the action reports "unconfigured" and the client falls
 * back to a mailto: link so the form is never a dead end.
 */
export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot: real users never fill this hidden field.
  const company = String(formData.get("company") ?? "");

  if (company) {
    return { status: "success" };
  }
  if (!name || !message || !EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "Please fill in your name, a valid email, and a message.",
    };
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return { status: "error", message: "That message is a bit too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: "unconfigured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [personal.email],
        reply_to: [email],
        subject: `Portfolio contact from ${name}`,
        text: `${message}\n\n— ${name} (${email})`,
      }),
    });

    if (!res.ok) {
      console.error("Resend API error:", res.status, await res.text());
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
