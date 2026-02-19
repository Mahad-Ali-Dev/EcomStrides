"use client";

import { motion } from "framer-motion";

const tools = [
    "Helium 10", "Jungle Scout", "Keepa", "DataDive", "MerchantWords", "Viral Launch"
];

export default function TechStack() {
    return (
        <section className="py-20 bg-[#050505] border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-10">
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Powered by Industry Leading Tech</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-16 px-8">
                    {[...tools, ...tools, ...tools].map((tool, i) => (
                        <span key={i} className="text-2xl md:text-3xl font-bold text-white/20 uppercase hover:text-[#FA8112] transition-colors cursor-default">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
