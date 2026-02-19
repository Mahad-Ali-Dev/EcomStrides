"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    const phoneNumber = "923326976408"; // Official Contact Number
    const message = "Hello! I'm interested in your Amazon services.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
        >
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors duration-300"
            >
                <MessageCircle size={32} fill="white" className="text-white" />
            </motion.button>
        </Link>
    );
}
