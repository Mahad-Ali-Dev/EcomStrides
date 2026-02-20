"use client";

import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";
import Link from "next/link";
import { ArrowRight, BarChart2, TrendingUp, ShieldCheck, Users, PieChart } from "lucide-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const floatingStats = [
    { label: "Revenue Generated", value: "$150M+", icon: TrendingUp },
    { label: "Client Retention", value: "100%", icon: ShieldCheck },
    { label: "Brands Scaled", value: "50+", icon: Users },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#050505]" />
            <BackgroundRippleEffect />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />

            {/* Orange accent blobs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FA8112]/10 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#FA8112]/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FA8112] mb-8 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA8112] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FA8112]" />
                    </span>
                    <span className="text-sm font-medium tracking-wide text-white/80">Top Rated Amazon Agency 2021</span>
                </motion.div>

                {/* H1 - Bold Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="mb-8 relative"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight uppercase">
                        AMAZON
                    </h1>
                    <div className="mt-2 md:mt-4">
                        <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FA8112] to-[#ff9d42] tracking-tighter">
                            A-Z MANAGEMENT
                        </span>
                    </div>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    We scale brands from zero to 7-figures. Data-driven strategies, expert execution, and measurable results — all under one roof.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                >
                    <Link href="/contact">
                        <GradientButton
                            size="lg"
                            variant="primary"
                            className="min-w-[240px] h-14 text-lg"
                            icon={<BarChart2 size={24} />}
                        >
                            Get Free Consultation
                        </GradientButton>
                    </Link>
                    <Link href="/services">
                        <GradientButton
                            variant="outline"
                            size="lg"
                            className="min-w-[220px] h-14 text-lg !border-white/20 !text-white hover:!bg-white/10"
                            icon={<ArrowRight size={24} />}
                        >
                            View Services
                        </GradientButton>
                    </Link>
                </motion.div>

                {/* Floating Mini Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {floatingStats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                            >
                                <Icon size={16} className="text-[#FA8112]" />
                                <span className="text-white font-bold text-sm">{stat.value}</span>
                                <span className="text-white/60 text-sm">{stat.label}</span>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Bento Grid Layout - Dark Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="relative mx-auto max-w-6xl z-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                        {/* 1. Large Chart Card (Main Dashboard Feel) - Spans 2 cols */}
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-[#121212] border border-white/10 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <TrendingUp className="text-[#FA8112] w-24 h-24 opacity-5" />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-1">Revenue Growth</h3>
                                <p className="text-white/60 text-sm">Real-time performance tracking</p>
                            </div>

                            {/* Updated Linear Chart Visualization */}
                            <div className="h-48 flex items-end justify-center gap-2 px-4 mt-4">
                                {[30, 45, 38, 60, 52, 70, 58, 80, 68, 92, 78, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 0.6, delay: 1.4 + i * 0.07, ease: "easeOut" }}
                                        className="flex-1 rounded-t-md relative group/bar"
                                        style={{
                                            background: `linear-gradient(to top, #FA8112, #fb9e4f)`,
                                            opacity: 0.7 + (h / 100) * 0.3,
                                        }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                                            ${(h * 1250).toLocaleString()}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex justify-between text-white/40 text-xs mt-2 px-1 border-t border-white/10 pt-2">
                                <span>Jan</span>
                                <span>Jun</span>
                                <span>Dec</span>
                            </div>
                        </div>

                        {/* 2. Image Card - Warehouse/Logistics */}
                        <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden shadow-lg border border-white/10 relative group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2574&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-5">
                                <p className="text-white font-bold text-lg">Global Logistics</p>
                                <p className="text-white/80 text-xs">Seamless FBA management</p>
                            </div>
                        </div>

                        {/* 3. Social Proof Card */}
                        {/* 3. Ad Spend Managed Card (Replaces Trusted Partners) */}
                        <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-[#121212] border border-white/10 p-5 shadow-lg flex flex-col justify-between group hover:border-[#FA8112]/50 transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="p-2 rounded-lg bg-[#FA8112]/10">
                                    <PieChart className="text-[#FA8112] w-6 h-6" />
                                </div>
                                <span className="text-xs text-white/40 font-mono">YTD</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white mb-1">$60M+</div>
                                <div className="text-white/60 text-xs">Ad Revenue Managed</div>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-2">
                                <div className="h-full bg-[#FA8112] w-[85%]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
        </section>
    );
}
