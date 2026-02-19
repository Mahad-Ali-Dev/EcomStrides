"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { Users, Mail, TrendingUp, DollarSign, ArrowUpRight, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";

export const dynamic = 'force-dynamic';

type Lead = {
    id: string;
    name: string;
    email: string;
    service: string;
    created_at: string;
};

const serviceColorMap: Record<string, string> = {
    "Product Research & Hunting": "bg-[#FA8112]/20 text-[#FA8112]",
    "PPC Setup & Optimization": "bg-amber-500/20 text-amber-400",
    "Full A to Z Account Management": "bg-white/10 text-white",
    "Listing Creation & Optimization": "bg-[#FA8112]/10 text-[#FA8112]",
    "A+ Content & EBC": "bg-amber-500/10 text-amber-400",
    "Sourcing & Supplier Management": "bg-white/5 text-slate-300",
};

export default function AdminDashboard() {
    const [leadCount, setLeadCount] = useState(0);
    const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
    const supabase = createClient();

    useEffect(() => {
        async function getStats() {
            const { count } = await supabase
                .from("leads")
                .select("*", { count: "exact", head: true });
            setLeadCount(count || 0);

            const { data } = await supabase
                .from("leads")
                .select("id, name, email, service, created_at")
                .order("created_at", { ascending: false })
                .limit(5);
            if (data) setRecentLeads(data);
        }
        getStats();
    }, [supabase]);

    const stats = [
        { name: "Total Leads", value: leadCount, icon: Users, change: "+12%", color: "text-[#FA8112]", bg: "bg-[#FA8112]/10 border-[#FA8112]/20" },
        { name: "Active Campaigns", value: "24", icon: TrendingUp, change: "+3 this week", color: "text-white", bg: "bg-white/5 border-white/10" },
        { name: "Est. Revenue", value: "$45.2k", icon: DollarSign, change: "+8% MoM", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
        { name: "Open Tickets", value: "5", icon: Mail, change: "2 urgent", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                    <p className="text-white/40 text-sm">Welcome back! Here&apos;s what&apos;s happening across your platform.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/20 text-[#FA8112] text-xs font-medium shadow-[0_0_15px_rgba(250,129,18,0.2)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA8112] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FA8112]" />
                    </span>
                    System Live
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-[#FA8112]/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl border ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={20} className={stat.color} />
                                </div>
                                <div className="flex items-center gap-1 text-xs text-white/40 font-medium">
                                    <ArrowUpRight size={12} className="text-green-400" />
                                    <span className="text-green-400">{stat.change}</span>
                                </div>
                            </div>
                            <p className="text-white/40 text-sm font-medium mb-1">{stat.name}</p>
                            <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Revenue + Recent Leads */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:col-span-3 bg-[#121212] border border-white/5 p-8 rounded-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FA8112]/5 rounded-full blur-[80px] pointer-events-none" />
                    <div className="flex items-center justify-between mb-8 relative z-10">
                        <div>
                            <h3 className="text-white font-bold text-lg">Revenue Trends</h3>
                            <p className="text-white/40 text-sm mt-1">Last 12 months performance</p>
                        </div>
                        <span className="text-[#FA8112] text-sm font-bold flex items-center gap-1 bg-[#FA8112]/10 px-3 py-1 rounded-full border border-[#FA8112]/20">
                            <TrendingUp size={14} /> +18% YoY
                        </span>
                    </div>
                    <div className="h-48 flex items-end gap-3 relative z-10">
                        {[
                            { h: 40, l: "Jan" }, { h: 52, l: "Feb" }, { h: 45, l: "Mar" },
                            { h: 63, l: "Apr" }, { h: 55, l: "May" }, { h: 70, l: "Jun" },
                            { h: 62, l: "Jul" }, { h: 78, l: "Aug" }, { h: 72, l: "Sep" },
                            { h: 88, l: "Oct" }, { h: 81, l: "Nov" }, { h: 100, l: "Dec" },
                        ].map((bar, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer w-full">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${bar.h}%` }}
                                    transition={{ delay: 0.4 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                                    className="w-full rounded-sm bg-[#222] group-hover:bg-[#FA8112] transition-colors relative overflow-hidden"
                                >
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#FA8112]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                                <span className="text-white/20 group-hover:text-white/60 text-[10px] uppercase font-medium transition-colors">{bar.l}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Recent Leads */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 bg-[#121212] border border-white/5 p-6 rounded-2xl flex flex-col"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-bold text-lg">Recent Leads</h3>
                        <a href="/admin/leads" className="text-[#FA8112] text-xs font-medium hover:text-white flex items-center gap-1 transition-colors">
                            View all <ArrowUpRight size={12} />
                        </a>
                    </div>

                    {recentLeads.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-white/20 gap-3 flex-1">
                            <Zap size={24} className="opacity-30" />
                            <p className="text-sm">No recent leads found</p>
                        </div>
                    ) : (
                        <div className="space-y-3 flex-1 overflow-auto pr-2">
                            {recentLeads.map((lead, i) => (
                                <motion.div
                                    key={lead.id}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.07 }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#FA8112]/20 transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#FA8112] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg shadow-[#FA8112]/20">
                                        {lead.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white text-sm font-semibold truncate group-hover:text-[#FA8112] transition-colors">{lead.name}</p>
                                        <p className="text-white/40 text-xs truncate">{lead.email}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 shrink-0">
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${serviceColorMap[lead.service] || "bg-white/10 text-white/50"}`}>
                                            {lead.service?.split(" ")[0] ?? "—"}
                                        </span>
                                        <div className="flex items-center gap-1 text-white/20 text-[10px]">
                                            <Clock size={9} />
                                            {format(new Date(lead.created_at), "MMM d")}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
