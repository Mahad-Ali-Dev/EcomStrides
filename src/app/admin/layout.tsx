"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, LogOut, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
    };

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Leads", href: "/admin/leads", icon: Users },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#0a0a0a] hidden md:flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />

                <div className="p-6 border-b border-white/5 relative z-10">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#FA8112] flex items-center justify-center text-black font-bold text-xl">E</div>
                        <span className="text-xl font-bold text-white tracking-tight">EcomStride</span>
                    </Link>
                    <span className="text-xs text-white/40 block mt-2 ml-10">Admin Portal</span>
                </div>

                <nav className="flex-1 p-4 space-y-1 relative z-10">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                                    isActive
                                        ? "bg-[#FA8112]/10 text-[#FA8112]"
                                        : "text-white/60 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#FA8112] rounded-r-full" />
                                )}
                                <Icon size={20} className={cn("relative z-10", isActive ? "text-[#FA8112]" : "text-white/40 group-hover:text-white")} />
                                <span className="font-medium relative z-10">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/5 relative z-10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors group"
                    >
                        <LogOut size={20} className="group-hover:text-red-400 transition-colors" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-[#050505] relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none fixed" />
                {/* Mobile Header (TODO: Add mobile toggle if needed) */}
                <div className="p-8 relative z-10 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
