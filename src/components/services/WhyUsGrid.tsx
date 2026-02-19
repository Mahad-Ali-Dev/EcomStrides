"use client";

import { motion } from "framer-motion";
import { Search, BarChart2, Users, ShieldCheck, Zap, Globe } from "lucide-react";

const reasons = [
    {
        icon: Search,
        title: "Deep Market Data",
        desc: "We don't guess. We analyze millions of data points to find opportunities others miss."
    },
    {
        icon: BarChart2,
        title: "Profit-First Strategy",
        desc: "Revenue is vanity, profit is sanity. We optimize for your bottom line at every step."
    },
    {
        icon: Users,
        title: "Dedicated Experts",
        desc: "No junior account managers. You get seasoned pros who have scaled brands before."
    },
    {
        icon: ShieldCheck,
        title: "Brand Protection",
        desc: "We relentlessly monitor for hijackers and IP infringements to keep your brand safe."
    },
    {
        icon: Zap,
        title: "Rapid Execution",
        desc: "Speed wins on Amazon. We launch, test, and optimized faster than the competition."
    },
    {
        icon: Globe,
        title: "Global Reach",
        desc: "Ready to expand? We help you launch into new marketplaces (UK, DE, JP, etc.) seamlessly."
    }
];

export default function WhyUsGrid() {
    return (
        <section className="py-24 bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        Why Choose <span className="text-[#FA8112]">EcomStride?</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        We're not just a service provider. We're your growth partner.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reasons.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#121212] p-8 rounded-2xl border border-white/10 group hover:border-[#FA8112]/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-[#FA8112]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FA8112] transition-colors duration-300">
                                <item.icon size={24} className="text-[#FA8112] group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FA8112] transition-colors">{item.title}</h3>
                            <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
