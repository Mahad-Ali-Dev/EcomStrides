"use client";

import { motion } from "framer-motion";
import { ClipboardList, Search, Rocket, LineChart } from "lucide-react";

const steps = [
    {
        step: "01",
        icon: ClipboardList,
        title: "Free Strategy Call",
        description: "Book a 30-minute discovery call. We learn about your brand, goals, current challenges, and create a custom roadmap tailored to your business.",
    },
    {
        step: "02",
        icon: Search,
        title: "Deep Account Audit",
        description: "Our experts run a comprehensive audit of your listings, PPC campaigns, backend SEO, and competitive landscape to uncover every growth opportunity.",
    },
    {
        step: "03",
        icon: Rocket,
        title: "Full Implementation",
        description: "We execute the strategy — optimized listings, targeted PPC campaigns, A+ content, and inventory management — while you focus on your business.",
    },
    {
        step: "04",
        icon: LineChart,
        title: "Scale & Report",
        description: "Weekly performance reports, monthly strategy reviews, and continuous optimization keep your brand growing month over month — profitably.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FA8112]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FA8112]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium">
                        Simple 4-Step Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        How We Scale Your{" "}
                        <span className="text-[#FA8112]">Amazon Brand</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                        A proven, repeatable system that&apos;s driven over $1M in client revenue.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative p-8 md:p-12 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#FA8112]/50 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <div className="text-8xl font-black text-white">{step.step}</div>
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-[#FA8112]/10 border border-[#FA8112]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-[#FA8112]" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-white/60 leading-relaxed text-base mb-8 flex-grow">
                                        {step.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-[#FA8112] text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                                        <span>Step {step.step}</span>
                                        <div className="h-px w-8 bg-[#FA8112]" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
