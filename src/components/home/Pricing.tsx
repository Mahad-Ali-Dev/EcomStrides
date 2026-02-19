"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        tagline: "Perfect for new sellers",
        price: "300",
        period: "/ month",
        description: "Get your Amazon business off the ground with expert listing optimization and PPC setup.",
        features: [
            "Up to 10 ASINs managed",
            "Full listing optimization",
            "PPC setup & management",
            "Weekly performance report",
            "Email & chat support",
            "Monthly strategy call",
        ],
        cta: "Get Started",
        highlighted: false,
        badge: null,
    },
    {
        name: "Growth",
        tagline: "Most popular for 6-figure brands",
        price: "1,000",
        period: "/ month",
        description: "Everything you need to scale past $100K/month with full account management and A+ content.",
        features: [
            "Up to 50 ASINs managed",
            "A+ Content & EBC design",
            "Advanced PPC optimization",
            "Inventory forecasting",
            "Review management",
            "Bi-weekly strategy calls",
            "Dedicated account manager",
            "Competitor monitoring",
        ],
        cta: "Start Scaling",
        highlighted: true,
        badge: "Most Popular",
    },
    {
        name: "Enterprise",
        tagline: "For 7-figure Amazon brands",
        price: "Custom",
        period: "",
        description: "Full A to Z white-glove account management for high-volume brands across multiple marketplaces.",
        features: [
            "Unlimited ASINs",
            "Multi-marketplace management",
            "Custom A+ & storefront",
            "Dedicated team of 4+",
            "24/7 priority support",
            "Weekly executive reports",
            "International expansion",
            "Custom KPIs & SLAs",
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: null,
    },
];

export default function Pricing() {
    return (
        <section className="py-24 md:py-32 bg-[#FAF3E1] relative overflow-hidden border-t border-[#E8D5A8]">
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium">
                        <Zap size={13} /> Transparent Pricing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 leading-tight tracking-tight">
                        Simple, Honest{" "}
                        <span className="text-[#FA8112]">Pricing</span>
                    </h2>
                    <p className="text-[#6B5C3E] text-lg leading-relaxed">
                        No hidden fees, no long-term lock-ins. Just results you can measure every month.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-2xl p-7 flex flex-col ${plan.highlighted
                                ? "bg-[#222222] border-2 border-[#FA8112] shadow-2xl shadow-[#FA8112]/20"
                                : "bg-[#F5E7C6] border border-[#E8D5A8] shadow-sm"
                                }`}
                        >
                            {/* Top orange glow line on highlighted */}
                            {plan.highlighted && (
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FA8112] to-transparent" />
                            )}

                            {plan.badge && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FA8112] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className={`font-bold text-xl mb-1 text-white`}>{plan.name}</h3>
                                <p className={`text-sm ${plan.highlighted ? "text-[#FA8112]" : "text-white/60"}`}>{plan.tagline}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    {plan.price !== "Custom" && <span className={`text-lg font-medium ${plan.highlighted ? "text-[#FA8112]" : "text-white/60"}`}>$</span>}
                                    <span className={`font-black text-4xl text-white`}>{plan.price}</span>
                                    <span className={`text-sm ${plan.highlighted ? "text-white/60" : "text-white/60"}`}>{plan.period}</span>
                                </div>
                                <p className={`text-sm mt-2 leading-relaxed ${plan.highlighted ? "text-white/70" : "text-white/60"}`}>{plan.description}</p>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className={`flex items-start gap-2.5 text-sm ${plan.highlighted ? "text-white/80" : "text-white/70"}`}>
                                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-[#FA8112]" : "text-[#FA8112]"}`} />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className={`w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-300 active:scale-95 text-sm ${plan.highlighted
                                    ? "bg-[#FA8112] text-white hover:bg-[#e0710f] shadow-md shadow-[#FA8112]/30"
                                    : "bg-[#222222] text-white hover:bg-[#333333]"
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-white/50 text-sm mt-8"
                >
                    All plans include a 30-day free strategy session. Cancel anytime.
                </motion.p>
            </div>
        </section>
    );
}
