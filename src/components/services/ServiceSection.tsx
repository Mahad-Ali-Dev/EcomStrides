"use client";

import { Service } from "@/data/services";
import { cn } from "@/lib/utils";
import GradientButton from "@/components/ui/GradientButton";
import { CheckCircle2, ArrowRight, Search, Truck, FileText, BarChart2, ImageIcon, ShieldCheck, Rocket, Package, Key, BadgeCheck, Scale, ScrollText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceSectionProps {
    service: Service;
    index: number;
}

const serviceIcons: Record<string, React.ElementType> = {
    "product-research": Search,
    "sourcing": Truck,
    "listing": FileText,
    "ppc": BarChart2,
    "aplus": ImageIcon,
    "account-management": ShieldCheck,
    "product-launching": Rocket,
    "inventory-planning": Package,
    "keyword-research": Key,
    "brand-registry": BadgeCheck,
    "case-management": Scale,
    "trademark": ScrollText,
};

function ServiceVisual({ service }: { service: Service; index: number }) {
    if (service.id === "product-research") {
        return (
            <div className="w-full bg-[#121212] rounded-2xl p-6 flex flex-col gap-3 border border-white/10">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Product Opportunity Scores</div>
                {[
                    { name: "Wireless Earbuds", score: 92, competition: "Low" },
                    { name: "Kitchen Gadgets", score: 87, competition: "Med" },
                    { name: "Pet Accessories", score: 81, competition: "Low" },
                    { name: "Fitness Bands", score: 74, competition: "High" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                    >
                        <div className="flex-1">
                            <div className="text-white text-sm font-medium mb-1.5">{item.name}</div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.score}%` }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.7 }}
                                    viewport={{ once: true }}
                                    className="h-full bg-[#FA8112] rounded-full"
                                />
                            </div>
                        </div>
                        <span className="text-white/80 text-sm font-bold">{item.score}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.competition === "Low" ? "bg-[#FA8112]/20 text-[#FA8112]" :
                            item.competition === "Med" ? "bg-[#FA8112]/20 text-[#FA8112]" :
                                "bg-[#FA8112]/10 text-[#FA8112]/70"
                            }`}>
                            {item.competition}
                        </span>
                    </motion.div>
                ))}
            </div>
        );
    }

    if (service.id === "product-launching") {
        return (
            <div className="w-full bg-[#121212] rounded-2xl p-6 border border-white/10">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-4">Launch Velocity Tracker</div>
                <div className="relative h-48 w-full">
                    {/* Graph Grid */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/5" />
                        ))}
                    </div>
                    {/* Trend Line (simulated with multiple divs or SVG) */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        <motion.path
                            d="M0,150 C50,140 100,100 150,80 S250,50 350,10"
                            fill="none"
                            stroke="#FA8112"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />
                        <motion.path
                            d="M0,150 C50,140 100,100 150,80 S250,50 350,10 L350,190 L0,190 Z"
                            fill="url(#gradient)"
                            opacity="0.2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.2 }}
                            transition={{ delay: 1, duration: 1 }}
                            viewport={{ once: true }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FA8112" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {/* Milestones */}
                    {[
                        { day: "Day 1", label: "Launch", x: "0%", y: "80%" },
                        { day: "Day 7", label: "Page 1", x: "45%", y: "40%" },
                        { day: "Day 30", label: "Bestseller", x: "90%", y: "10%" },
                    ].map((m, i) => (
                        <motion.div
                            key={i}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                            style={{ left: m.x, top: m.y }}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-3 h-3 rounded-full bg-[#FA8112] border-2 border-[#121212] shadow-sm mb-1" />
                            <div className="bg-[#121212] border border-white/10 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                                {m.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    if (service.id === "inventory-planning") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-zinc-400 text-xs uppercase tracking-wider">Stock Forecasting</div>
                    <div className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">IPI Score: 740</div>
                </div>
                <div className="space-y-4">
                    {[
                        { sku: "SKU-A01", days: 45, status: "Healthy" },
                        { sku: "SKU-B12", days: 12, status: "Reorder Now" },
                        { sku: "SKU-C88", days: 90, status: "Overstock" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
                                <Package size={18} className="text-zinc-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-zinc-900">{item.sku}</span>
                                    <span className={cn(
                                        "text-xs font-bold",
                                        item.status === "Healthy" ? "text-green-600" :
                                            item.status === "Reorder Now" ? "text-red-500" : "text-amber-500"
                                    )}>{item.status}</span>
                                </div>
                                <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className={cn(
                                            "h-full rounded-full",
                                            item.status === "Healthy" ? "bg-green-500" :
                                                item.status === "Reorder Now" ? "bg-red-500" : "bg-amber-500"
                                        )}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: item.status === "Reorder Now" ? "20%" : item.status === "Overstock" ? "90%" : "60%" }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                <div className="text-[10px] text-zinc-400 mt-1">{item.days} days of stock</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (service.id === "keyword-research") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200">
                <div className="text-zinc-400 text-xs uppercase tracking-wider mb-4">Keyword Opportunity Map</div>
                <div className="flex flex-wrap gap-2">
                    {[
                        { word: "organic supplements", vol: "45K", score: 92 },
                        { word: "vegan protein powder", vol: "22K", score: 88 },
                        { word: "clean energy boost", vol: "12K", score: 85 },
                        { word: "plant based nutrition", vol: "8.5K", score: 79 },
                        { word: "post workout recovery", vol: "30K", score: 95 },
                        { word: "natural amino acids", vol: "5K", score: 70 },
                        { word: "meal replacement shake", vol: "18K", score: 82 },
                    ].map((k, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-xs flex items-center gap-2 hover:border-orange-200 hover:bg-orange-50 transition-colors"
                        >
                            <span className="text-zinc-700 font-medium">{k.word}</span>
                            <span className="text-zinc-400 border-l border-zinc-200 pl-2">{k.vol}</span>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-6 flex items-center justify-between p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                    <div className="flex items-center gap-2">
                        <Key size={16} className="text-indigo-600" />
                        <span className="text-indigo-900 text-xs font-bold">Total Search Volume</span>
                    </div>
                    <span className="text-indigo-700 text-sm font-bold">140,500+ / mo</span>
                </div>
            </div>
        );
    }

    if (service.id === "brand-registry") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200">
                <div className="text-zinc-400 text-xs uppercase tracking-wider mb-4">Brand Protection Suite</div>
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { label: "IP Protection", status: "Active", icon: ShieldCheck },
                        { label: "A+ Content", status: "Unlocked", icon: ImageIcon },
                        { label: "Brand Store", status: "Published", icon: Package },
                        { label: "Sponsored Brands", status: "Enabled", icon: BarChart2 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 flex flex-col items-center text-center"
                        >
                            <item.icon size={20} className="text-zinc-400 mb-2" />
                            <div className="text-zinc-900 text-sm font-bold mb-1">{item.label}</div>
                            <div className="text-green-600 text-[10px] font-bold uppercase tracking-wide bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                {item.status}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    if (service.id === "trademark") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-50" />
                <div className="text-zinc-400 text-xs uppercase tracking-wider mb-6">Application Status</div>

                <div className="relative pl-6 border-l-2 border-zinc-100 space-y-8">
                    {[
                        { step: "Search & Clearance", status: "Completed", date: "Oct 12" },
                        { step: "Application Filing", status: "Completed", date: "Oct 15" },
                        { step: "USPTO Review", status: "In Progress", date: "Current" },
                        { step: "Registration Granted", status: "Pending", date: "Est. Apr" },
                    ].map((s, i) => (
                        <div key={i} className="relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "absolute -left-[31px] w-4 h-4 rounded-full border-2",
                                    s.status === "Completed" ? "bg-green-500 border-green-500" :
                                        s.status === "In Progress" ? "bg-blue-500 border-blue-500" : "bg-white border-zinc-300"
                                )}
                            />
                            <div className="flex justify-between items-center">
                                <span className={cn(
                                    "text-sm font-medium",
                                    s.status === "Pending" ? "text-zinc-400" : "text-zinc-900"
                                )}>{s.step}</span>
                                <span className="text-xs text-zinc-400">{s.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (service.id === "case-management") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-zinc-400 text-xs uppercase tracking-wider">Case Log</div>
                    <div className="text-zinc-900 font-bold text-lg">98% <span className="text-sm font-normal text-zinc-500">Success Rate</span></div>
                </div>
                <div className="space-y-3">
                    {[
                        { id: "CASE-9281", type: "Listing Reinstatement", status: "Resolved", time: "24h" },
                        { id: "CASE-8320", type: "IP Complaint Appeal", status: "Resolved", time: "48h" },
                        { id: "CASE-1102", type: "Category Ungating", status: "Resolved", time: "12h" },
                        { id: "CASE-4491", type: "FBA Reimbursement", status: "Pending", time: "In Queue" },
                    ].map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg border border-zinc-200"
                        >
                            <div>
                                <div className="text-xs font-mono text-zinc-400 mb-0.5">{c.id}</div>
                                <div className="text-sm font-medium text-zinc-800">{c.type}</div>
                            </div>
                            <div className={cn(
                                "px-2 py-1 rounded text-[10px] font-bold uppercase",
                                c.status === "Resolved" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                            )}>
                                {c.status}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    if (service.id === "ppc") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200">
                <div className="text-zinc-400 text-xs uppercase tracking-wider mb-4">Campaign Performance</div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                        { label: "ACOS", value: "12.4%", change: "↓ -8%" },
                        { label: "ROAS", value: "6.8x", change: "↑ +1.2x" },
                        { label: "Impressions", value: "142K", change: "↑ +34%" },
                        { label: "CTR", value: "3.2%", change: "↑ +0.8%" },
                    ].map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + i * 0.08 }}
                            viewport={{ once: true }}
                            className="bg-zinc-50 rounded-xl p-3 border border-zinc-200"
                        >
                            <div className="text-zinc-500 text-xs">{m.label}</div>
                            <div className="text-zinc-900 font-bold text-xl">{m.value}</div>
                            <div className="text-zinc-700 text-xs font-medium">{m.change}</div>
                        </motion.div>
                    ))}
                </div>
                <div className="h-20 flex items-end gap-1.5 px-1">
                    {[40, 55, 48, 70, 62, 80, 72, 90, 85, 100, 88, 95].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex-1 rounded-t"
                            style={{ background: `linear-gradient(to top, rgba(24,24,27,0.85), rgba(113,113,122,0.5))` }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    if (service.id === "listing") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200">
                <div className="text-zinc-400 text-xs uppercase tracking-wider mb-4">Listing Optimization Score</div>
                <div className="space-y-3 mb-4">
                    {[
                        { label: "Title SEO", score: 96 },
                        { label: "Bullet Points", score: 91 },
                        { label: "Backend Keywords", score: 88 },
                        { label: "Image Alt Tags", score: 94 },
                        { label: "Description HTML", score: 85 },
                    ].map((item, i) => (
                        <div key={i} className="space-y-1">
                            <div className="flex justify-between text-xs">
                                <span className="text-zinc-500">{item.label}</span>
                                <span className="text-zinc-700 font-semibold">{item.score}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.score}%` }}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.7 }}
                                    viewport={{ once: true }}
                                    className="h-full bg-zinc-800 rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 p-3 bg-zinc-100 border border-zinc-300 rounded-xl">
                    <CheckCircle2 size={16} className="text-zinc-700" />
                    <span className="text-zinc-700 text-xs font-medium">Listing fully optimized — Ready to rank!</span>
                </div>
            </div>
        );
    }

    if (service.id === "sourcing") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200">
                <div className="text-zinc-400 text-xs uppercase tracking-wider mb-4">Supplier Comparison</div>
                <div className="space-y-3">
                    {[
                        { name: "Supplier A", price: "$4.20", quality: 95, lead: "14 days", status: "Selected" },
                        { name: "Supplier B", price: "$5.10", quality: 88, lead: "21 days", status: "Reviewed" },
                        { name: "Supplier C", price: "$3.80", quality: 72, lead: "28 days", status: "Rejected" },
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "p-4 rounded-xl border",
                                s.status === "Selected" ? "bg-zinc-100 border-zinc-400" :
                                    s.status === "Rejected" ? "bg-red-50/50 border-red-200" : "bg-zinc-50 border-zinc-200"
                            )}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-zinc-900 font-semibold">{s.name}</span>
                                <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium",
                                    s.status === "Selected" ? "bg-zinc-200 text-zinc-700" :
                                        s.status === "Rejected" ? "bg-red-100 text-red-600" : "bg-zinc-100 text-zinc-500"
                                )}>{s.status}</span>
                            </div>
                            <div className="flex gap-4 text-xs text-zinc-400">
                                <span>Cost: <span className="text-zinc-900 font-medium">{s.price}</span></span>
                                <span>Quality: <span className="text-zinc-900 font-medium">{s.quality}%</span></span>
                                <span>Lead Time: <span className="text-zinc-900 font-medium">{s.lead}</span></span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    if (service.id === "aplus") {
        return (
            <div className="w-full bg-white rounded-2xl p-6 border border-zinc-200">
                <div className="text-zinc-400 text-xs uppercase tracking-wider mb-4">A+ Content Modules</div>
                <div className="aspect-video bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative">
                    <div className="text-center relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-800 mx-auto mb-3 flex items-center justify-center">
                            <ImageIcon size={24} className="text-white" />
                        </div>
                        <p className="text-zinc-900 text-sm font-semibold">Brand Story Module</p>
                        <p className="text-zinc-500 text-xs mt-1">Lifestyle imagery + copy</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                    {["Hero Banner", "Feature Grid", "Comparison Chart"].map((module, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="aspect-square bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-center text-xs text-zinc-400 text-center p-2"
                        >
                            {module}
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center gap-2 p-3 bg-zinc-100 border border-zinc-300 rounded-xl">
                    <span className="text-zinc-700 text-xs font-medium">📈 Average conversion lift: <strong>+15%</strong></span>
                </div>
            </div>
        );
    }

    // Premium A to Z — keep amber accents as gold-tier
    return (
        <div className="w-full bg-white rounded-2xl p-6 border border-amber-200">
            <div className="text-amber-600 text-xs uppercase tracking-wider mb-4">Account Health Dashboard</div>
            <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                    { label: "Account Health", value: "Excellent", icon: "✅" },
                    { label: "IPI Score", value: "742 / 800", icon: "📦" },
                    { label: "Order Defect Rate", value: "0.02%", icon: "🛡️" },
                    { label: "Late Ship Rate", value: "0.1%", icon: "🚀" },
                ].map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-amber-50 rounded-xl p-3 border border-amber-200"
                    >
                        <div className="text-xl mb-1">{m.icon}</div>
                        <div className="text-zinc-500 text-xs">{m.label}</div>
                        <div className="text-zinc-900 font-bold">{m.value}</div>
                    </motion.div>
                ))}
            </div>
            <div className="text-zinc-400 text-xs mb-2">Revenue Growth — Last 6 Months</div>
            <div className="h-16 flex items-end gap-2">
                {[45, 52, 61, 70, 82, 100].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 rounded-t bg-gradient-to-t from-amber-600/80 to-amber-400/50"
                    />
                ))}
            </div>
            <div className="flex justify-between text-zinc-400 text-xs mt-1">
                {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => <span key={m}>{m}</span>)}
            </div>
        </div>
    );
}

export default function ServiceSection({ service, index }: ServiceSectionProps) {
    const isEven = index % 2 === 0;
    const Icon = serviceIcons[service.id] || CheckCircle2;

    return (
        <section
            id={service.id}
            className={cn(
                "py-24 md:py-32 relative overflow-hidden",
                service.isPremium
                    ? "bg-[#121212] border-t border-white/10"
                    : index % 2 === 0 ? "bg-[#050505]" : "bg-[#050505]",
                "border-t border-white/5"
            )}
        >
            {service.isPremium && (
                <>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FA8112]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FA8112]/20 to-transparent" />
                </>
            )}

            <div className="container mx-auto px-4 md:px-8">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                    !isEven && "lg:flex-row-reverse"
                )}>

                    {/* Content */}
                    <motion.div
                        className="flex-1 space-y-6"
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="flex items-center gap-3">
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center border",
                                service.isPremium
                                    ? "bg-[#FA8112]/10 border-[#FA8112]/30"
                                    : "bg-white/5 border-white/10"
                            )}>
                                <Icon className={cn("w-6 h-6", service.isPremium ? "text-[#FA8112]" : "text-white/60")} />
                            </div>
                            {service.isPremium && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-xs font-bold uppercase tracking-wider">
                                    ⭐ Most Popular
                                </span>
                            )}
                        </div>

                        <div className="text-white/5 text-8xl font-black leading-none select-none">
                            0{index + 1}
                        </div>

                        <h2 className={cn(
                            "text-3xl md:text-5xl font-bold leading-tight -mt-4 tracking-tight",
                            service.isPremium ? "text-white" : "text-white"
                        )}>
                            {service.title}
                        </h2>

                        <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                            {service.description}
                        </p>

                        <ul className="space-y-3">
                            {service.benefits.map((benefit, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + i * 0.07 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-white/80"
                                >
                                    <CheckCircle2 className={cn(
                                        "w-5 h-5 shrink-0",
                                        service.isPremium ? "text-[#FA8112]" : "text-white/40"
                                    )} />
                                    <span className="font-medium">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                                <GradientButton
                                    size="lg"
                                    className={cn(
                                        "group active:scale-95",
                                        service.isPremium
                                            ? "bg-[#FA8112] hover:bg-[#e0710f] text-white border-[#FA8112]"
                                            : ""
                                    )}
                                    variant="primary"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </GradientButton>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.9, x: isEven ? 40 : -40 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className={cn(
                            "relative rounded-2xl overflow-hidden shadow-sm border group transition-all duration-500 hover:shadow-md",
                            service.isPremium
                                ? "border-[#FA8112]/30 hover:border-[#FA8112]/50"
                                : "border-white/10 hover:border-white/20"
                        )}>
                            <ServiceVisual service={service} index={index} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
