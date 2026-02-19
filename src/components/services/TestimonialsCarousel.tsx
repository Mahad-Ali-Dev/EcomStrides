"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you might use this later or for avatar placeholders if needed, though we use divs here based on previous instructions to avoid external avatars.
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Founder, GlowBeauty",
        text: "EcomStride completely turned our Q4 around. We went from stocking out to scaling 3x YoY. Their inventory planning is a lifesaver.",
        brand: "GlowBeauty"
    },
    {
        name: "Michael Chen",
        role: "CEO, TechGear Pro",
        text: "The best agency we've worked with, period. Their PPC strategy dropped our ACOS by 15% while doubling revenue.",
        brand: "TechGear"
    },
    {
        name: "David Miller",
        role: "Director, HomeSimple",
        text: "Transparent, data-driven, and fast. They treat our budget like it's their own money. Highly recommended.",
        brand: "HomeSimple"
    }
];

export default function TestimonialsCarousel() {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        What Our Clients <span className="text-[#FA8112]">Say</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#121212] p-8 rounded-3xl border border-white/10 relative group hover:border-[#FA8112]/30 transition-all"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-[#FA8112]/10 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-[#FA8112] text-[#FA8112]" />
                                ))}
                            </div>

                            <p className="text-white/70 mb-8 leading-relaxed italic">"{t.text}"</p>

                            <div className="border-t border-white/10 pt-6">
                                <div className="font-bold text-white">{t.name}</div>
                                <div className="text-[#FA8112] text-sm">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
