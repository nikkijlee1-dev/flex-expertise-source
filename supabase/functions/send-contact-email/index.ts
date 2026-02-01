import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RECAPTCHA_SECRET_KEY = Deno.env.get("RECAPTCHA_SECRET_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  companyOrRole?: string;
  enquiryType?: string;
  message?: string;
  recaptchaToken: string;
  formType: "contact" | "callback" | "talent";
  // Additional fields for callback form
  location?: string;
  enquiry?: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    console.log("reCAPTCHA verification response:", data);
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

async function sendEmail(to: string[], subject: string, html: string, replyTo?: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Blue Caye <noreply@bluecaye.com.au>",
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to send email");
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormRequest = await req.json();

    // Verify reCAPTCHA token
    const isRecaptchaValid = await verifyRecaptcha(formData.recaptchaToken);
    if (!isRecaptchaValid) {
      console.error("reCAPTCHA verification failed");
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed. Please try again." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Build email content based on form type
    let subject: string;
    let htmlContent: string;

    if (formData.formType === "callback") {
      subject = `[Blue Caye] Callback Request from ${formData.name}`;
      htmlContent = `
        <h2>New Callback Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Location:</strong> ${formData.location || "Not provided"}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <h3>Nature of Enquiry:</h3>
        <p>${formData.enquiry || "Not provided"}</p>
      `;
    } else if (formData.formType === "talent") {
      subject = `[Blue Caye] Talent Pool Application from ${formData.name}`;
      htmlContent = `
        <h2>New Talent Pool Application</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Company/Role:</strong> ${formData.companyOrRole || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${formData.message || "Not provided"}</p>
      `;
    } else {
      // Default contact form
      const enquiryTypeLabel = formData.enquiryType === "client" 
        ? "Client looking for Talent" 
        : "Specialist looking for a Role";
      
      subject = `[Blue Caye] Contact Form: ${enquiryTypeLabel} - ${formData.name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Company/Role:</strong> ${formData.companyOrRole || "Not provided"}</p>
        <p><strong>Enquiry Type:</strong> ${enquiryTypeLabel}</p>
        <h3>Message:</h3>
        <p>${formData.message || "Not provided"}</p>
      `;
    }

    const emailResponse = await sendEmail(
      ["admin@bluecaye.com.au"],
      subject,
      htmlContent,
      formData.email
    );

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
