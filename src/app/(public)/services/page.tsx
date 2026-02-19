"use client";

import { services } from "@/data/services";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { ServiceVisual } from "@/components/services/ServiceVisuals";
import { CheckCircle2, ArrowRight, Zap, Target, BarChart, Users } from "lucide-react";
import Link from "next/link";
import GradientButton from "@/components/ui/GradientButton";

// New Components
import StatsTicker from "@/components/services/StatsTicker";
import ProblemSolution from "@/components/services/ProblemSolution";
import WhyUsGrid from "@/components/services/WhyUsGrid";
import TechStack from "@/components/services/TechStack";
import ComparisonTable from "@/components/services/ComparisonTable";
import FAQAccordion from "@/components/services/FAQAccordion";
import TestimonialsCarousel from "@/components/services/TestimonialsCarousel";

export default function ServicesPage() {
    // Map services to StickyScroll content format
    const content = services.map((service, index) => ({
        title: service.title,
        description: service.description,
        badge: (
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                            <CheckCircle2 size={14} className="text-[#FA8112]" />
                            {benefit}
                        </div>
                    ))}
                </div>
                <div className="pt-2">
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                        <GradientButton size="sm" variant="primary" className="text-white group">
                            Get Started <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </GradientButton>
                    </Link>
                </div>
            </div>
        ),
        content: (
            <ServiceVisual service={service} index={index} />
        ),
    }));

    return (
        <main className="min-h-screen pt-32 pb-0 bg-[#050505] overflow-x-hidden">
            {/* 1. Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <h1 className="text-profound text-white text-5xl md:text-7xl mb-6 uppercase tracking-tight">
                        Our <span className="text-[#FA8112]">Services</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        End-to-end Amazon management solutions designed to scale your brand.
                    </p>
                </div>
            </div>

            {/* 2. Stats Ticker */}
            <StatsTicker />

            {/* 3. Problem vs Solution */}
            <ProblemSolution />

            {/* 4. Sticky Scroll Services (Core) */}
            <div id="core-services" className="py-24">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        Comprehensive <span className="text-[#FA8112]">Solutions</span>
                    </h2>
                </div>
                <StickyScroll content={content} />
            </div>

            {/* 5. Why Choose Us */}
            <WhyUsGrid />

            {/* 6. Tech Stack */}
            <TechStack />

            {/* 7. Comparison Table */}
            <ComparisonTable />

            {/* 8. Process Section */}
            <section className="py-24 border-t border-white/5 bg-[#050505]">
                <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        How We <span className="text-[#FA8112]">Work</span>
                    </h2>
                    <p className="text-white/60">A proven framework for consistent growth.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                    {[
                        { icon: Zap, title: "Audit", desc: "We dive deep into your account to spot leaks and opportunities." },
                        { icon: Target, title: "Strategy", desc: "Custom-built roadmap aligned with your revenue goals." },
                        { icon: BarChart, title: "Execute", desc: "Our team implements changes while you sleep." },
                        { icon: Users, title: "Scale", desc: "Data-driven optimization to maximize ROAS and rank." }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#121212] p-8 rounded-2xl border border-white/10 text-center group hover:border-[#FA8112]/30 transition-colors">
                            <div className="w-12 h-12 bg-[#FA8112]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FA8112]/20 transition-colors">
                                <item.icon size={24} className="text-[#FA8112]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-white/50 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. Testimonials */}
            <TestimonialsCarousel />

            {/* 10. FAQ */}
            <FAQAccordion />

            {/* 11. Bottom CTA */}
            <div className="py-24 px-4 bg-[#050505]">
                <div className="container mx-auto">
                    <div className="text-center bg-[#FA8112]/5 rounded-3xl p-12 border border-[#FA8112]/20 relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#FA8112]/5 blur-3xl rounded-full" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Ready to <span className="text-[#FA8112]">DominatE?</span></h2>
                            <p className="text-white/60 max-w-2xl mx-auto mb-8 text-lg">
                                Stop guessing. Start growing. Join the brands that trust EcomStride to manage their Amazon presence.
                            </p>
                            <Link href="/contact">
                                <GradientButton size="lg" variant="primary" className="text-white text-lg px-8 py-6">
                                    Book Your Strategy Call
                                </GradientButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
