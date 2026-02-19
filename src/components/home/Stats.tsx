"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, Users, Star, Award } from "lucide-react";

interface StatProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    description: string;
    icon: React.ElementType;
    delay?: number;
}

function StatCounter({ value, suffix = "", prefix = "", label, description, icon: Icon, delay = 0 }: StatProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { stiffness: 60, damping: 20 });
    const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

    useEffect(() => {
        if (isInView) spring.set(value);
    }, [isInView, value, spring]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-[#121212] hover:bg-[#1A1A1A] hover:border-[#FA8112]/40 transition-all duration-300 shadow-sm"
        >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 bg-[#FA8112]/10 border border-[#FA8112]/30">
                <Icon className="w-7 h-7 text-[#FA8112]" />
            </div>
            <div className="flex items-baseline gap-0.5 mb-2">
                {prefix && <span className="text-3xl md:text-4xl font-bold text-white">{prefix}</span>}
                <motion.span className="text-4xl md:text-5xl font-black text-white tabular-nums">
                    {display}
                </motion.span>
                {suffix && <span className="text-2xl md:text-3xl font-bold text-[#FA8112] ml-0.5">{suffix}</span>}
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[#FA8112] text-sm uppercase tracking-widest font-semibold">By the numbers</p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <StatCounter
                        value={10} suffix="+"
                        label="Brands Scaled"
                        description="Active clients across Amazon US, UK, CA & DE"
                        icon={Users}
                        delay={0}
                    />
                    <StatCounter
                        value={1} prefix="$" suffix="M+"
                        label="Revenue Generated"
                        description="In cumulative client sales on Amazon"
                        icon={TrendingUp}
                        delay={0.1}
                    />
                    <StatCounter
                        value={90} suffix="%"
                        label="Client Retention"
                        description="Of clients stay with us after year one"
                        icon={Star}
                        delay={0.2}
                    />
                    <StatCounter
                        value={300} suffix="$/mo"
                        label="Starting Price"
                        description="Affordable plans for every brand size"
                        icon={Award}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}
