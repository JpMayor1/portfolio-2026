import { NextRequest, NextResponse } from "next/server";

// Resend API configuration
// Replace with your actual Resend API key in environment variables
const RESEND_API_KEY = process.env.RESEND_API_KEY || "YOUR_RESEND_API_KEY";
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL || "contact@jamesphillipmayor.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    // Note: You need to install and configure Resend SDK
    // npm install resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [RESEND_TO_EMAIL],
        reply_to: email,
        subject: `Portfolio Contact Form: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      let errorMessage = "Failed to send email. Please try again later.";
      try {
        const errorData = await resendResponse.json();
        console.error("Resend API error:", errorData);
        errorMessage = errorData.message || errorMessage;
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
      }
      return NextResponse.json(
        { error: errorMessage },
        { status: resendResponse.status || 500 }
      );
    }

    const data = await resendResponse.json();

    return NextResponse.json(
      { message: "Email sent successfully", id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}