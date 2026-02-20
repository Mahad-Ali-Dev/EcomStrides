"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Amazon A-Z Management",
        tagline: "Full-service growth for Amazon brands",
        price: "150-250",
        period: "/ ASIN",
        description: "Everything you need to scale including full account management, A+ content, and advanced PPC optimization.",
        features: [
            "Full Account Management",
            "A+ Content & EBC Design",
            "Advanced PPC Optimization",
            "Inventory Forecasting",
            "Review Management",
            "Bi-weekly Strategy Calls",
            "Dedicated Account Manager",
            "Competitor Monitoring",
        ],
        cta: "Get Started",
        highlighted: true,
        badge: "Most Popular",
    },
];

export default function Pricing() {
    return (
        <section className="py-24 md:py-32 bg-[#FAF3E1] relative overflow-hidden border-t border-[#E8D5A8]">
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium">
                        <Zap size={13} /> Transparent Pricing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 leading-tight tracking-tight">
                        Simple, Honest{" "}
                        <span className="text-[#FA8112]">Pricing</span>
                    </h2>
                    <p className="text-[#6B5C3E] text-lg leading-relaxed">
                        No hidden fees, no long-term lock-ins. Just results you can measure every month.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden bg-[#121212] border border-white/10 shadow-2xl"
                        >
                            {/* Accent Glows */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FA8112]/20 blur-[100px] rounded-full" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FA8112]/10 blur-[100px] rounded-full" />

                            <div className="relative z-10 flex flex-col md:flex-row">
                                {/* Left Side - Info */}
                                <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-xs font-bold uppercase tracking-wider mb-6">
                                        {plan.badge}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-[#FA8112] font-medium mb-6 text-lg">{plan.tagline}</p>
                                    <p className="text-white/60 leading-relaxed mb-8 text-lg">
                                        {plan.description}
                                    </p>

                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-2xl font-medium text-[#FA8112]">$</span>
                                        <span className="text-6xl font-black text-white">{plan.price}</span>
                                        <span className="text-white/40 font-medium">/ ASIN</span>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FA8112] hover:bg-[#e0710f] text-white rounded-xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-[#FA8112]/20 group"
                                    >
                                        {plan.cta}
                                        <Zap size={18} className="transition-transform group-hover:scale-125" />
                                    </Link>
                                </div>

                                {/* Right Side - Features */}
                                <div className="flex-1 p-8 md:p-12 bg-white/[0.02]">
                                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">What's Included</div>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                        {plan.features.map((feat, j) => (
                                            <li key={j} className="flex items-start gap-3 text-white/80">
                                                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-[#FA8112]" />
                                                <span className="text-sm font-medium">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                        <p className="text-white/40 text-xs">Customized strategy for every marketplace. No setup fees.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-white/50 text-sm mt-8"
                >
                    All plans include a 30-day free strategy session. Cancel anytime.
                </motion.p>
            </div>
        </section>
    );
}
