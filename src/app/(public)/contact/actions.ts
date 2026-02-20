"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitContactForm(formData: FormData) {
    const supabase = await createClient();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !service) {
        return { error: "Please fill in all required fields." };
    }

    const { error } = await supabase.from("leads").insert({
        name,
        email,
        phone,
        service,
        message,
    });

    if (error) {
        console.error("Supabase error:", error);
        return { error: "Failed to submit form. Please try again later." };
    }

    // Email Notification to Admin
    try {
        // This is a placeholder for actual email sending logic (e.g., using Resend, SendGrid, or nodemailer)
        // For now, we log the intent as requested.
        console.log(`[EMAIL NOTIFICATION] Sending lead data to hello@ecomstridesolution.com:`, {
            to: "hello@ecomstridesolution.com",
            subject: `New Lead: ${name}`,
            data: { name, email, phone, service, message }
        });

        // In a real production environment, you would call your email service here:
        // await resend.emails.send({ ... });
    } catch (emailError) {
        console.error("Email notification failed:", emailError);
        // We still return success because the lead was saved to the database
    }

    return { success: true };
}
