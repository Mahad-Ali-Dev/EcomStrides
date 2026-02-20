"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/(public)/contact/actions";
import GradientButton from "@/components/ui/GradientButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "@/data/services";
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ConfettiParticle({ delay, x, color, rotation }: { delay: number; x: number; color: string; rotation: number }) {
    return (
        <motion.div
            initial={{ y: -20, opacity: 1, rotate: 0, scale: 1 }}
            animate={{ y: "110vh", opacity: 0, rotate: rotation, scale: 0.4 }}
            transition={{ duration: 2.5 + Math.random() * 1.5, delay, ease: "easeIn" }}
            className="fixed top-0 w-3 h-3 rounded-sm pointer-events-none z-[200]"
            style={{ backgroundColor: color, left: `${x}%` }}
        />
    );
}

const confettiColors = ["#6366f1", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444", "#3b82f6", "#ec4899"];
const confettiParticles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    delay: i * 0.04,
    x: Math.random() * 100,
    color: confettiColors[i % confettiColors.length],
    rotation: Math.random() * 720 - 360,
}));

function Confetti() {
    return (
        <>
            {confettiParticles.map(p => (
                <ConfettiParticle key={p.id} delay={p.delay} x={p.x} color={p.color} rotation={p.rotation} />
            ))}
        </>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <GradientButton
            type="submit"
            isLoading={pending}
            className="w-full group active:scale-95"
        >
            Send Message
            <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </GradientButton>
    );
}

const contactInfo = [
    {
        icon: MapPin,
        title: "Office Location",
        lines: ["Jada, Jhelum, Punjab", "Pakistan 49600"],
    },
    {
        icon: Phone,
        title: "Phone Number",
        lines: ["+92 332 6976408"],
    },
    {
        icon: Mail,
        title: "Email Address",
        lines: ["hello@ecomstride.com"],
    },
];

export default function ContactPage() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);

    async function clientAction(formData: FormData) {
        const result = await submitContactForm(formData);
        if (result?.error) {
            setError(result.error);
        } else {
            setSuccess(true);
            setShowConfetti(true);
            setError(null);
            setTimeout(() => setShowConfetti(false), 4500);
        }
    }

    return (
        <>
            {showConfetti && <Confetti />}

            <main className="min-h-screen bg-[#050505] text-white pt-28 pb-24 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[#050505]" />
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FA8112]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FA8112]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] mb-6 text-sm font-medium">
                            <MessageSquare size={14} />
                            Free Consultation — No Commitment
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            Let&apos;s{" "}
                            <span className="text-[#FA8112]">
                                Grow
                            </span>{" "}
                            Your Brand
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Fill out the form and our Amazon experts will reach out within 24 hours with a tailored strategy for your brand.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <div className="bg-[#121212] border border-white/10 shadow-xl p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <h3 className="text-2xl font-bold mb-8 text-white relative z-10">Contact Information</h3>
                                <div className="space-y-7 relative z-10">
                                    {contactInfo.map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                className="flex items-start gap-4 group/item"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-[#FA8112]/50 group-hover/item:bg-[#FA8112]/10 transition-all duration-300">
                                                    <Icon className="text-white/60 w-5 h-5 group-hover/item:text-[#FA8112] transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white mb-0.5">{item.title}</h4>
                                                    {item.lines.map((line, j) => (
                                                        <p key={j} className={j === 0 ? "text-white/80" : "text-white/40 text-sm"}>{line}</p>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 bg-[#FA8112]/5 border border-[#FA8112]/20 rounded-2xl">
                                <div className="w-10 h-10 rounded-full bg-[#FA8112]/10 flex items-center justify-center shrink-0 border border-[#FA8112]/20">
                                    <Clock size={18} className="text-[#FA8112]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">24/7 Availability</p>
                                    <p className="text-white/50 text-sm">We respond to all inquiries as soon as possible</p>
                                </div>
                            </div>

                            <div className="aspect-video bg-[#121212] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                                <div className="relative z-10 text-center px-6">
                                    <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🚀</div>
                                    <p className="text-white font-bold text-lg">Ready to scale your brand?</p>
                                    <p className="text-white/40 text-sm mt-1">50+ brands already growing with us</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#121212] border border-white/10 shadow-xl p-8 rounded-2xl"
                        >
                            <AnimatePresence mode="wait">
                                {success ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-10"
                                    >
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className="w-24 h-24 bg-[#FA8112]/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#FA8112]"
                                        >
                                            <CheckCircle2 className="w-12 h-12 text-[#FA8112]" />
                                        </motion.div>
                                        <h3 className="text-3xl font-bold text-white mb-3">Message Sent! 🎉</h3>
                                        <p className="text-white/80 mb-2 text-lg">Thanks for reaching out!</p>
                                        <p className="text-white/50 mb-10 max-w-sm mx-auto">
                                            Our Amazon experts will review your inquiry and respond within 24 hours.
                                        </p>
                                        <GradientButton onClick={() => setSuccess(false)} variant="outline" className="!border-white/20 !text-white hover:!bg-white/10">
                                            Send Another Message
                                        </GradientButton>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        action={clientAction}
                                        className="space-y-5"
                                    >
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-1">Get Free Consultation</h3>
                                            <p className="text-white/50 text-sm">Fill out the form and we&apos;ll be in touch shortly.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-white/80 text-sm font-medium">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="John Doe"
                                                    required
                                                    className="bg-white/5 border-white/10 focus:border-[#FA8112] text-white placeholder:text-white/20 focus:ring-[#FA8112]/20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-white/80 text-sm font-medium">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+1 (555) 000-0000"
                                                    className="bg-white/5 border-white/10 focus:border-[#FA8112] text-white placeholder:text-white/20 focus:ring-[#FA8112]/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-white/80 text-sm font-medium">Email Address *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@company.com"
                                                required
                                                className="bg-white/5 border-white/10 focus:border-[#FA8112] text-white placeholder:text-white/20 focus:ring-[#FA8112]/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="service" className="text-white/80 text-sm font-medium">Service Interested In *</Label>
                                            <Select name="service">
                                                <SelectTrigger className="bg-white/5 border-white/10 focus:border-[#FA8112] text-white focus:ring-[#FA8112]/20">
                                                    <SelectValue placeholder="Select a service..." />
                                                </SelectTrigger>
                                                <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                                                    {services.map((s) => (
                                                        <SelectItem
                                                            key={s.id}
                                                            value={s.title}
                                                            className="focus:bg-[#FA8112]/20 focus:text-white cursor-pointer"
                                                        >
                                                            {s.title}
                                                        </SelectItem>
                                                    ))}
                                                    <SelectItem value="Other" className="focus:bg-[#FA8112]/20 focus:text-white cursor-pointer">
                                                        Other Inquiry
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-white/80 text-sm font-medium">Your Message</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Tell us about your brand, current situation, and goals..."
                                                className="min-h-[130px] bg-white/5 border-white/10 focus:border-[#FA8112] text-white placeholder:text-white/20 resize-none focus:ring-[#FA8112]/20"
                                            />
                                        </div>

                                        {error && (
                                            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                                                <span className="w-4 h-4 rounded-full bg-red-500/80 text-white flex items-center justify-center text-xs font-bold shrink-0">!</span>
                                                {error}
                                            </div>
                                        )}

                                        <SubmitButton />

                                        <p className="text-white/30 text-xs text-center">
                                            By submitting, you agree to our Privacy Policy. No spam, ever.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    );
}
