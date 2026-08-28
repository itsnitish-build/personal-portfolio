import { Resend } from "resend";
import { NextResponse } from "next/server";
import { isValidEmail } from "@/lib/utils";

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      // Graceful fallback when Resend is not configured
      console.log("Contact form submission:", { name, email, subject, message });
      return NextResponse.json({
        success: true,
        message: "Message received! I'll get back to you soon.",
      });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
