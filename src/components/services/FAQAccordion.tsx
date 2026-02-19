"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "How fast can I see results?",
        a: "Typically, our clients see initial traction within the first 14 days of optimization. Full scaling usually takes 3-6 months depending on the category competitiveness."
    },
    {
        q: "Do you guarantee sales?",
        a: "While no one can ethically guarantee specific sales numbers, we guarantee our process. If we don't hit agreed KPIs, we work for free until we do."
    },
    {
        q: "What is your pricing model?",
        a: "We offer both flat-rate retainers and performance-based models depending on your revenue stage. Book a call to find the best fit for you."
    },
    {
        q: "Do you handle account suspensions?",
        a: "Yes! Our Case Management team specializes in reinstating ASINs and full accounts. We recover over 98% of suspended listings."
    },
    {
        q: "Can you manage global marketplaces?",
        a: "Absolutely. We manage accounts across North America, Europe (UK, DE, FR, IT, ES), and Japan."
    }
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        Frequently Asked <span className="text-[#FA8112]">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl bg-[#121212] overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{faq.q}</span>
                                {openIndex === i ? <Minus className="text-[#FA8112]" /> : <Plus className="text-white/40" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
