"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2, Eye } from "lucide-react";
import { format } from "date-fns";

export const dynamic = 'force-dynamic';

type Lead = {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    created_at: string;
};

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        fetchLeads();
    }, []);

    async function fetchLeads() {
        setLoading(true);
        const { data } = await supabase
            .from("leads")
            .select("*")
            .order("created_at", { ascending: false });

        if (data) setLeads(data);
        setLoading(false);
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this lead?")) return;

        const { error } = await supabase.from("leads").delete().match({ id });
        if (!error) {
            setLeads((prev) => prev.filter((lead) => lead.id !== id));
        } else {
            alert("Error deleting lead");
        }
    }

    if (loading) {
        return (
            <div className="flex h-[50vh] items-center justify-center text-white">
                <Loader2 className="animate-spin text-[#FA8112]" size={32} />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">Leads Management</h1>
                    <p className="text-white/40 text-sm">Track and manage all incoming inquiries.</p>
                </div>
                <Button onClick={() => fetchLeads()} variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white">
                    <Loader2 size={16} className="mr-2" />
                    Refresh Data
                </Button>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#121212] overflow-hidden shadow-2xl shadow-black/50">
                <Table>
                    <TableHeader className="bg-white/5">
                        <TableRow className="border-white/5 hover:bg-transparent">
                            <TableHead className="text-white/60 font-medium">Date</TableHead>
                            <TableHead className="text-white/60 font-medium">Name</TableHead>
                            <TableHead className="text-white/60 font-medium">Service</TableHead>
                            <TableHead className="text-white/60 font-medium">Contact</TableHead>
                            <TableHead className="text-white/60 font-medium">Message Preview</TableHead>
                            <TableHead className="text-right text-white/60 font-medium">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {leads.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center h-48 text-white/30">
                                    No leads found yet.
                                </TableCell>
                            </TableRow>
                        ) : (
                            leads.map((lead) => (
                                <TableRow key={lead.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                                    <TableCell className="text-white/40 font-mono text-xs">
                                        {format(new Date(lead.created_at), "MMM d, yyyy")}
                                    </TableCell>
                                    <TableCell className="text-white font-bold">{lead.name}</TableCell>
                                    <TableCell>
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FA8112]/10 text-[#FA8112] border border-[#FA8112]/20">
                                            {lead.service}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="text-white/80 text-sm">{lead.email}</span>
                                            <span className="text-white/30 text-xs">{lead.phone || "No phone"}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-white/50 max-w-[200px] truncate text-sm" title={lead.message}>
                                        {lead.message}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-white/40 hover:text-white hover:bg-white/10">
                                                <Eye size={16} />
                                            </Button>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="h-8 w-8 text-white/40 hover:text-red-400 hover:bg-red-500/10"
                                                onClick={() => handleDelete(lead.id)}
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
