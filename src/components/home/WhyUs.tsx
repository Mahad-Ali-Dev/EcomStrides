"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const comparison = [
    { feature: "Dedicated Account Manager", us: true, others: false },
    { feature: "Weekly Performance Reports", us: true, others: false },
    { feature: "Data-Driven PPC Strategies", us: true, others: "partial" },
    { feature: "Full Transparency & Access", us: true, others: false },
    { feature: "Amazon TOS Compliant", us: true, others: "partial" },
    { feature: "Multi-Marketplace Experience", us: true, others: false },
    { feature: "No Long-Term Contracts", us: true, others: false },
    { feature: "Proven 7-Figure Results", us: true, others: "partial" },
];

const advantages = [
    {
        title: "Amazon-Only Focus",
        description: "We don't dabble in other platforms. Amazon is all we do, which means you get best-in-class expertise for your specific marketplace.",
        stat: "100%",
        statLabel: "Amazon specialization"
    },
    {
        title: "Data-First Decisions",
        description: "Every decision we make is backed by real data from Helium 10, DataDive, and first-party analytics. No guessing, no gut feeling.",
        stat: "$150M+",
        statLabel: "Revenue driven for clients"
    },
    {
        title: "Performance Accountability",
        description: "We set clear KPIs before we start. You get weekly reports and monthly strategy calls where we're accountable for every metric.",
        stat: "100%",
        statLabel: "Client retention rate"
    },
    {
        title: "Dedicated Team",
        description: "You're not handed off to a junior. You get a dedicated team with a senior strategist, PPC manager, content writer, and account manager.",
        stat: "4+",
        statLabel: "Experts on every account"
    },
];

export default function WhyUs() {
    return (
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium">
                        Why EcomStride?
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        The{" "}
                        <span className="text-[#FA8112]">Smarter Choice</span>{" "}
                        for Amazon Growth
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Most agencies overpromise and underdeliver. We do the opposite. See exactly how we compare.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Comparison Table */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-sm"
                    >
                        {/* Table header */}
                        <div className="grid grid-cols-3 p-4 bg-white/5 border-b border-white/10 text-sm font-semibold">
                            <span className="text-white">Feature</span>
                            <div className="text-center">
                                <span className="text-[#FA8112] font-bold">EcomStride</span>
                            </div>
                            <div className="text-center text-white/40">Other Agencies</div>
                        </div>
                        <div className="divide-y divide-white/5">
                            {comparison.map((row, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-3 px-4 py-3.5 hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-white text-sm">{row.feature}</span>
                                    <div className="flex justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-[#FA8112]" />
                                    </div>
                                    <div className="flex justify-center">
                                        {row.others === true ? (
                                            <CheckCircle2 className="w-5 h-5 text-white/60" />
                                        ) : row.others === "partial" ? (
                                            <span className="text-white/60 text-xs font-medium px-2 py-0.5 bg-white/10 rounded-full">Sometimes</span>
                                        ) : (
                                            <X className="w-5 h-5 text-white/20" />
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Advantages Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {advantages.map((adv, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FA8112]/40 hover:bg-[#1A1A1A] transition-all duration-300 shadow-sm"
                            >
                                <div className="mb-4">
                                    <div className="text-3xl font-black text-[#FA8112] leading-none">
                                        {adv.stat}
                                    </div>
                                    <div className="text-white/60 text-xs mt-0.5">{adv.statLabel}</div>
                                </div>
                                <h4 className="text-white font-semibold text-base mb-2">
                                    {adv.title}
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
