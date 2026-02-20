"use server";

import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Email Notification to Admin via Resend
    try {
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: "EcomStride <onboarding@resend.dev>",
                to: "hello@ecomstridesolution.com",
                subject: `New Lead: ${name} (${service})`,
                html: `
                    <h2>New Potential Client Lead</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message || "No message provided."}</p>
                    <hr />
                    <p>View this lead in your admin dashboard.</p>
                `,
            });
        } else {
            console.warn("RESEND_API_KEY is not set. Email notification skipped.");
        }
    } catch (emailError) {
        console.error("Email notification failed:", emailError);
        // We still return success because the lead was saved to the database
    }

    return { success: true };
}
