"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        Why Most Brands <span className="text-red-500">Fail</span> vs. How We <span className="text-[#FA8112]">Scale</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Amazon is competitive. The "set it and forget it" approach no longer works. You need a data-driven partner.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Problem Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white/5 border border-red-500/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <XCircle size={100} className="text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <XCircle className="text-red-500" /> The Typical Agency
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Generic, template-based listings",
                                "Wasted ad spend on broad keywords",
                                "Slow communication via tickets",
                                "No proactive inventory planning",
                                "Reactive instead of strategic"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/70">
                                    <span className="text-red-500 mt-1">✕</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Solution Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-[#FA8112]/5 border border-[#FA8112]/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle2 size={100} className="text-[#FA8112]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircle2 className="text-[#FA8112]" /> The EcomStride Way
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Custom strategy based on real data",
                                "Precision PPC with high ROAS focus",
                                "Dedicated account manager (Slack access)",
                                "90-day inventory forecasting",
                                "Full brand protection & growth roadmap"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white">
                                    <CheckCircle2 size={18} className="text-[#FA8112] mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
