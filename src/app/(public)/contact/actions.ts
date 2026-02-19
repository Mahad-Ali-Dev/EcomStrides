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

    return { success: true };
}
