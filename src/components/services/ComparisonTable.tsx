"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    { name: "Strategy Customization", us: true, others: false },
    { name: "24/7 Account Monitoring", us: true, others: false },
    { name: "Dedicated Slack Channel", us: true, others: false },
    { name: "Profit-First Optimization", us: true, others: true },
    { name: "Brand Protection Suite", us: true, others: false },
    { name: "No Long-Term Contracts", us: true, others: false },
    { name: "Weekly Reporting Calls", us: true, others: true },
];

export default function ComparisonTable() {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        Compare the <span className="text-[#FA8112]">Difference</span>
                    </h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
                    <div className="grid grid-cols-3 bg-white/5 p-6 border-b border-white/10">
                        <div className="col-span-1 font-bold text-white/50 uppercase tracking-widest text-sm self-end">Feature</div>
                        <div className="col-span-1 text-center font-bold text-[#FA8112] text-xl">EcomStride</div>
                        <div className="col-span-1 text-center font-bold text-white/50 text-xl">Others</div>
                    </div>
                    {features.map((feature, i) => (
                        <div key={i} className={cn(
                            "grid grid-cols-3 p-6 border-b last:border-0 hover:bg-white/5 transition-colors",
                            i % 2 === 0 ? "bg-[#121212]" : "bg-[#0a0a0a]"
                        )}>
                            <div className="col-span-1 flex items-center font-medium text-white/80">{feature.name}</div>
                            <div className="col-span-1 flex justify-center">
                                {feature.us ? (
                                    <div className="w-8 h-8 rounded-full bg-[#FA8112]/20 flex items-center justify-center">
                                        <Check size={18} className="text-[#FA8112]" />
                                    </div>
                                ) : <X size={18} className="text-white/20" />}
                            </div>
                            <div className="col-span-1 flex justify-center">
                                {feature.others ? (
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                        <Check size={18} className="text-white/50" />
                                    </div>
                                ) : <X size={18} className="text-white/20" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
