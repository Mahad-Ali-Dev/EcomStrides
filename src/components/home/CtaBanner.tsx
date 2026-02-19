"use client";

import GradientButton from "@/components/ui/GradientButton";
import Link from "next/link";
import { ArrowRight, Rocket, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaBanner() {
    return (
        <section className="py-28 relative overflow-hidden">
            {/* Full brand-dark background */}
            <div className="absolute inset-0 bg-[#222222]" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]" />
            {/* Orange accent lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FA8112] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FA8112] to-transparent" />
            {/* Subtle orange glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(250,129,18,0.08),transparent)]" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/15 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-8"
                >
                    <Rocket size={14} />
                    Start scaling today — No lock-in contracts
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Ready to Dominate{" "}
                    <span className="text-[#FA8112]">Amazon?</span>
                </motion.h2>

                <motion.p
                    className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Let&apos;s discuss how our data-driven strategies can accelerate your brand&apos;s growth. Book a free call — we&apos;ll build a custom roadmap for your business.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Link href="/contact">
                        <GradientButton
                            size="lg"
                            variant="primary"
                            className="min-w-[220px]"
                            icon={<PhoneCall size={18} />}
                        >
                            Book Free Strategy Call
                        </GradientButton>
                    </Link>
                    <Link href="/services">
                        <GradientButton
                            variant="secondary"
                            size="lg"
                            className="min-w-[200px] !bg-white/10 !border-white/20 !text-white hover:!bg-white/20"
                            icon={<ArrowRight size={18} />}
                        >
                            View All Services
                        </GradientButton>
                    </Link>
                </motion.div>

                {/* Social proof row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[#F5E7C6]/50 text-sm"
                >
                    <span className="flex items-center gap-1.5">
                        <span className="text-[#FA8112]">✓</span> No setup fees
                    </span>
                    <span className="text-[#FA8112]/30">|</span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-[#FA8112]">✓</span> Cancel anytime
                    </span>
                    <span className="text-[#FA8112]/30">|</span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-[#FA8112]">✓</span> Results in 30 days
                    </span>
                    <span className="text-[#FA8112]/30">|</span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-[#FA8112]">✓</span> Dedicated account manager
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
