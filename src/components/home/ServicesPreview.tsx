"use client";

import { services } from "@/data/services";
import { ArrowRight, Box, BarChart, ShoppingCart, Search, Globe, ShieldCheck, Rocket, Tag, Package, FileSearch, Layers, Truck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
    "product-research": Search,
    "product-launching": Rocket,
    "sourcing": Globe,
    "inventory-planning": Package,
    "listing": ShoppingCart,
    "keyword-research": FileSearch,
    "brand-registry": Tag,
    "aplus": Layers,
    "case-management": Box,
    "ppc": BarChart,
    "account-management": ShieldCheck,
    "trademark": ShieldCheck,
    "freight-forwarding": Truck,
};

export default function ServicesPreview() {
    // Show all 13 services
    const allServices = services;

    return (
        <section id="services" className="py-24 md:py-32 bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium"
                    >
                        13 Expert Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-6 text-white tracking-widest uppercase leading-none"
                    >
                        COMPREHENSIVE{" "}
                        <span className="text-[#FA8112]">SOLUTIONS</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        We offer end-to-end services to manage, optimize, and scale your Amazon business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allServices.map((service, index) => {
                        const Icon = iconMap[service.id] || Box;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (index % 6) * 0.08 }}
                                viewport={{ once: true }}
                                className={`group p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 bg-[#121212] border-white/10 hover:border-[#FA8112]/50`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-[#FA8112]/10 border border-[#FA8112]/20 group-hover:bg-[#FA8112]`}>
                                    <Icon className={`w-7 h-7 transition-colors duration-300 group-hover:text-white text-[#FA8112]`} />
                                </div>

                                <h3 className={`text-xl font-semibold mb-2 text-white`}>
                                    {service.title}
                                </h3>

                                {service.tagline && (
                                    <p className={`text-xs font-medium mb-3 text-[#FA8112]`}>
                                        {service.tagline}
                                    </p>
                                )}

                                <p className={`mb-6 leading-relaxed line-clamp-2 text-sm text-white/60 group-hover:text-white/80 transition-colors`}>
                                    {service.description}
                                </p>

                                <Link
                                    href={`/services#${service.id}`}
                                    className={`inline-flex items-center text-sm font-medium transition-colors text-[#FA8112] hover:text-[#ff9d42]`}
                                >
                                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#FA8112] hover:bg-[#e0710f] rounded-full transition-all duration-300 shadow-md shadow-[#FA8112]/30"
                    >
                        View Full Service Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
