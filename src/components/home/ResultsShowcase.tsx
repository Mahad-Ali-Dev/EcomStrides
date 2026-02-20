"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const results = [
    {
        brand: "FitLife Sports",
        category: "Health & Fitness",
        before: "$20K/mo",
        after: "$1.8M/mo",
        metric: "Monthly Revenue",
        period: "8 months",
        highlight: "90x revenue growth",
        growth: 100,
    },
    {
        brand: "PureKitchen",
        category: "Home & Kitchen",
        before: "Low Organic",
        after: "+60% Organic",
        metric: "Organic Sales Growth",
        period: "6 weeks",
        highlight: "60% organic sales boost",
        growth: 60,
    },
    {
        brand: "GlowSkin Labs",
        category: "Beauty & Skincare",
        before: "38% ACOS",
        after: "8% ACOS",
        metric: "Advertising Efficiency",
        period: "3 months",
        highlight: "ACOS reduced to 8%",
        growth: 85,
    },
    {
        brand: "GardenMate",
        category: "Garden & Outdoors",
        before: "$100K",
        after: "$10M+",
        metric: "Annual Revenue",
        period: "18 months",
        highlight: "0 → 8-figure brand",
        growth: 100,
    },
    {
        brand: "BloomBox",
        category: "Subscription Box",
        before: "0 reviews",
        after: "8,000+ reviews",
        metric: "Product Reviews",
        period: "12 months",
        highlight: "4.8★ Bestseller badge earned",
        growth: 80,
    },
];

export default function ResultsShowcase() {
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
                        <TrendingUp size={13} /> Proven Results
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 leading-tight tracking-tight">
                        Real Numbers.{" "}
                        <span className="text-[#FA8112]">Real Brands.</span>
                    </h2>
                    <p className="text-[#6B5C3E] text-lg leading-relaxed">
                        These aren&apos;t projections or estimates. These are actual results from real clients who trusted us with their Amazon business.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {results.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}

                            className="relative p-6 rounded-2xl border border-white/10 bg-[#121212] shadow-sm group hover:-translate-y-1 hover:border-[#FA8112]/40 hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FA8112]/30 to-transparent" />

                            <div className="flex items-start justify-between mb-5">
                                <div>
                                    <h4 className="text-white font-bold text-base">{r.brand}</h4>
                                    <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block bg-[#FA8112]/10 text-[#FA8112] border border-[#FA8112]/20">
                                        {r.category}
                                    </span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 group-hover:bg-[#FA8112] group-hover:text-white transition-all duration-300">
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>

                            <div className="mb-5">
                                <p className="text-white/60 text-xs uppercase tracking-wider mb-2">{r.metric}</p>
                                <div className="flex items-center gap-3">
                                    <span className="text-white/40 text-sm line-through">{r.before}</span>
                                    <span className="text-white/40">→</span>
                                    <span className="text-white font-black text-2xl">{r.after}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between text-xs mb-1.5">
                                    <span className="text-white/50">in {r.period}</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${r.growth}%` }}
                                        transition={{ duration: 1, delay: 0.3 + i * 0.08 }}
                                        viewport={{ once: true }}
                                        className="h-full bg-[#FA8112] rounded-full"
                                    />
                                </div>
                            </div>

                            <p className="text-[#FA8112] text-xs font-semibold border-t border-[#E8D5A8] pt-3">
                                ✦ {r.highlight}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-[#6B5C3E] text-sm mb-4">Join 50+ brands that have transformed their Amazon business</p>
                    <a
                        href="/testimonials"
                        className="inline-flex items-center gap-2 text-[#FA8112] hover:text-[#e0710f] font-semibold transition-colors text-sm"
                    >
                        Read all success stories
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
