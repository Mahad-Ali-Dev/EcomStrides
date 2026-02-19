"use client";

import { testimonials } from "@/data/testimonials";
import { Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
    return (
        <div className="relative shrink-0 w-[320px] md:w-[360px] p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FA8112]/40 hover:shadow-md transition-all duration-300 group mx-2">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={12}
                        className={`${i < t.rating ? "fill-[#FA8112] text-[#FA8112]" : "fill-white/10 text-white/10"}`}
                    />
                ))}
                {t.result && (
                    <span className="ml-auto text-xs text-[#FA8112] font-medium bg-[#FA8112]/10 px-2 py-0.5 rounded-full border border-[#FA8112]/20">
                        {t.result}
                    </span>
                )}
            </div>

            {/* Quote */}
            <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-white/90 transition-colors">
                &ldquo;{t.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FA8112]/20 flex items-center justify-center text-[#FA8112] font-bold text-xs shrink-0 border border-[#FA8112]/30">
                    {t.avatar}
                </div>
                <div className="min-w-0">
                    <p className="text-white font-medium text-sm truncate">{t.name}</p>
                    <p className="text-white/40 text-xs truncate">{t.role}, {t.company}</p>
                </div>
                {t.service && (
                    <span className="ml-auto shrink-0 text-xs text-[#FA8112] bg-[#FA8112]/10 border border-[#FA8112]/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {t.service}
                    </span>
                )}
            </div>
        </div>
    );
}

export default function TestimonialsPreview() {
    const half = Math.ceil(testimonials.length / 2);
    const row1 = testimonials.slice(0, half);
    const row2 = testimonials.slice(half);

    return (
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8 relative z-10 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium">
                        ⭐⭐⭐⭐⭐ Rated 5/5 by our clients
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none tracking-widest uppercase">
                        TRUSTED BY{" "}
                        <span className="text-[#FA8112]">
                            BRANDS
                        </span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Real reviews from real clients. See what brands say about working with EcomStride.
                    </p>
                </motion.div>
            </div>

            {/* Row 1 — scrolls left */}
            <div className="relative mb-6 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
                <div className="flex animate-marquee">
                    {[...row1, ...row1].map((t, i) => (
                        <TestimonialCard key={`r1-${i}`} t={t} />
                    ))}
                </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
                <div className="flex animate-marquee-reverse">
                    {[...row2, ...row2].map((t, i) => (
                        <TestimonialCard key={`r2-${i}`} t={t} />
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-16 relative z-10"
            >
                <p className="text-white/40 text-sm mb-4">Showing {testimonials.length} verified client reviews</p>
                <Link
                    href="/testimonials"
                    className="inline-flex items-center gap-2 text-[#FA8112] hover:text-[#e0710f] font-semibold transition-colors text-sm group"
                >
                    Read all {testimonials.length}+ success stories
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </motion.div>
        </section>
    );
}
