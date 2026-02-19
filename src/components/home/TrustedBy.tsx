"use client";

import { motion } from "framer-motion";

const brands = [
    { name: "Amazon", abbr: "AMZ" },
    { name: "Shopify", abbr: "SHP" },
    { name: "Walmart", abbr: "WMT" },
    { name: "eBay", abbr: "EBY" },
    { name: "Target", abbr: "TGT" },
    { name: "Etsy", abbr: "ETY" },
    { name: "Wayfair", abbr: "WAY" },
    { name: "Best Buy", abbr: "BBY" },
    { name: "Overstock", abbr: "OVS" },
    { name: "Newegg", abbr: "NEG" },
];

function BrandLogo({ name, abbr }: { name: string; abbr: string }) {
    return (
        <div className="group flex items-center justify-center px-10 py-2 shrink-0 cursor-default">
            <div className="flex items-center gap-2 transition-all duration-300 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0">
                {/* Abstract logo mark */}
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {abbr.slice(0, 2)}
                </div>
                <span className="text-white font-semibold text-sm tracking-wide whitespace-nowrap">
                    {name}
                </span>
            </div>
        </div>
    );
}

export default function TrustedBy() {
    const doubled = [...brands, ...brands]; // Duplicate for seamless scroll

    return (
        <section className="py-16 bg-slate-900/30 border-y border-white/5 overflow-hidden relative">
            {/* Fade masks on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-4 mb-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest"
                >
                    Trusted by Leading Brands Worldwide
                </motion.p>
            </div>

            <div className="flex w-full overflow-hidden">
                <div className="flex animate-marquee">
                    {doubled.map((brand, i) => (
                        <BrandLogo key={`${brand.name}-${i}`} name={brand.name} abbr={brand.abbr} />
                    ))}
                </div>
            </div>
        </section>
    );
}
