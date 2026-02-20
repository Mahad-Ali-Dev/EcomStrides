"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "How quickly will I see results after starting with EcomStride?",
        a: "Most clients see meaningful improvements within the first two weeks. PPC optimizations typically show results within one week, while listing SEO and organic rank improvements take 2 to 3 weeks. Full account transformation timelines vary by brand size and competition, but our average client sees significant revenue growth within 15 to 30 days.",
    },
    {
        q: "Do I have to give you access to my Amazon account?",
        a: "Yes — we need account access to do our job effectively. We use a secure, permission-based access model where you grant specific roles to our team. You maintain full ownership and can revoke access at any time. We follow strict security protocols and have never had a data breach in our history.",
    },
    {
        q: "What if I'm just starting out and don't have any products yet?",
        a: "We work with sellers at every stage — from idea to $10M+. Our product research and sourcing services help you identify winning products, source them from premium suppliers, and launch them profitably. Many of our 7-figure clients started with zero products when they hired us.",
    },
    {
        q: "Do you work with brands outside of Amazon US?",
        a: "Yes! We manage accounts across Amazon US, UK, CA, DE, FR, IT, ES, JP, AU, and more. Our international expansion service helps brands replicate their US success in new marketplaces, including full listing localization and market-specific PPC strategies.",
    },
    {
        q: "What does 'Full Account Management' actually include?",
        a: "Everything. Daily account health monitoring, listing creation and optimization, PPC campaign management, inventory forecasting, customer service oversight, review management, A+ content updates, policy compliance, competitor monitoring, FBA issue resolution, and monthly growth strategy planning. You focus on your brand — we handle Amazon.",
    },
    {
        q: "Are there any long-term contracts?",
        a: "No. We believe in earning your business every month. All our plans are month-to-month with 30-day notice to cancel. That said, our average client stays with us for 2+ years because the results speak for themselves.",
    },
    {
        q: "What reporting do I get and how often?",
        a: "You receive weekly email performance reports covering key metrics: revenue, units sold, BSR, ACOS/ROAS, organic rank, and account health. You also get a monthly in-depth strategy call where we review the full picture, present competitive analysis, and plan for the next 30 days.",
    },
    {
        q: "Can you handle a large catalog with 100+ products?",
        a: "Yes — our largest client has over 350 active ASINs. We use systematic workflows and specialized tools to manage large catalogs efficiently. Every product gets the attention it deserves, prioritized by revenue potential and growth opportunity.",
    },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? "border-[#FA8112]/50 bg-[#121212]" : "border-white/10 bg-[#0A0A0A] hover:border-[#FA8112]/40"
                }`}
        >
            <button
                className="w-full flex items-center justify-between p-5 text-left gap-4"
                onClick={() => setOpen(!open)}
            >
                <span className="font-medium text-base text-white">
                    {q}
                </span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[#FA8112] text-white" : "bg-white/10 text-white/60"
                    }`}>
                    {open ? <Minus size={14} /> : <Plus size={14} />}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Orange Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#050505] to-[#FA8112]/20 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                    {/* Left: Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-28"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium">
                            FAQ
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 leading-tight tracking-tight">
                            Questions?{" "}
                            <span className="text-[#FA8112]">Answered.</span>
                        </h2>
                        <p className="text-[#6B5C3E] text-base leading-relaxed mb-8">
                            Everything you need to know before getting started. Still have questions? Book a free call.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FA8112] text-white hover:bg-[#e0710f] transition-all duration-200 text-sm font-semibold shadow-md shadow-[#FA8112]/20"
                        >
                            Ask Us Directly →
                        </a>
                    </motion.div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-2 space-y-3">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
