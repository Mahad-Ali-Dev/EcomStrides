"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
    { icon: "🏋️", name: "Health & Fitness", count: "80+ brands" },
    { icon: "💄", name: "Beauty & Skincare", count: "65+ brands" },
    { icon: "🏠", name: "Home & Kitchen", count: "90+ brands" },
    { icon: "🐾", name: "Pet Supplies", count: "45+ brands" },
    { icon: "📱", name: "Electronics", count: "55+ brands" },
    { icon: "👶", name: "Baby & Kids", count: "40+ brands" },
    { icon: "🌿", name: "Supplements", count: "70+ brands" },
    { icon: "🎮", name: "Sports & Outdoors", count: "60+ brands" },
    { icon: "🍳", name: "Food & Grocery", count: "35+ brands" },
    { icon: "📦", name: "Office & Industrial", count: "30+ brands" },
    { icon: "🌙", name: "Fashion & Apparel", count: "50+ brands" },
    { icon: "🧸", name: "Toys & Games", count: "25+ brands" },
];

const caseStudies = [
    {
        industry: "Health & Fitness",
        brand: "FitLife Sports",
        result: "$20K → $1.8M/month",
        period: "8 months",
        service: "Full Account Management",
    },
    {
        industry: "Home & Kitchen",
        brand: "PureKitchen",
        result: "Organic sales +60%",
        period: "6 weeks",
        service: "Listing Optimization",
    },
    {
        industry: "Beauty & Skincare",
        brand: "GlowSkin Labs",
        result: "ACOS 38% → 8%",
        period: "3 months",
        service: "PPC Optimization",
    },
];

export default function Industries() {
    return (
        <section className="py-24 md:py-32 bg-[#F5E7C6] relative overflow-hidden border-t border-[#E8D5A8]">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium">
                        20+ Industries Served
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 leading-tight tracking-tight">
                        We&apos;ve Scaled Brands{" "}
                        <span className="text-[#FA8112]">Across Every Category</span>
                    </h2>
                    <p className="text-[#6B5C3E] text-lg leading-relaxed">
                        From baby products to B2B industrial equipment — our strategies adapt to your category&apos;s unique dynamics.
                    </p>
                </motion.div>

                {/* Industry chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="group flex items-center gap-2 px-4 py-2.5 bg-[#121212] border border-white/10 rounded-full hover:bg-[#FA8112]/10 hover:border-[#FA8112]/40 transition-all duration-200 cursor-default shadow-sm"
                        >
                            <span className="text-lg">{industry.icon}</span>
                            <span className="text-white text-sm font-medium">{industry.name}</span>
                            <span className="text-white/40 text-xs">{industry.count}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Case Study Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {caseStudies.map((cs, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className="relative p-6 rounded-2xl border border-white/10 bg-[#121212] shadow-sm overflow-hidden group hover:-translate-y-1 hover:border-[#FA8112]/40 hover:shadow-md transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FA8112]/30 to-transparent" />
                            <div className="inline-flex text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-[#FA8112]/10 text-[#FA8112] border border-[#FA8112]/20">
                                {cs.industry}
                            </div>
                            <h4 className="text-white font-bold text-lg mb-1">{cs.brand}</h4>
                            <p className="text-white/60 text-sm mb-4">{cs.service}</p>
                            <div className="flex items-end justify-between border-t border-white/10 pt-4">
                                <div>
                                    <p className="text-white font-black text-2xl">{cs.result}</p>
                                    <p className="text-white/40 text-xs">in {cs.period}</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 group-hover:bg-[#FA8112] group-hover:text-white transition-all duration-300">
                                    →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[#FA8112] hover:text-[#e0710f] font-semibold transition-colors">
                        See if we work in your category — Book a free call
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
