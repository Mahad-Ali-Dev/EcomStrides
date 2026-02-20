"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-[#050505]/95 backdrop-blur-xl border-b border-[#333333] py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <img
                        src="/1.png"
                        alt="EcomStride"
                        className="h-14 md:h-20 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors duration-200 py-1",
                                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300",
                                    isActive
                                        ? "text-[#FA8112] after:w-full after:bg-[#FA8112]"
                                        : "text-[#6B5C3E] hover:text-[#222222] after:w-0 after:bg-[#FA8112] hover:after:w-full"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/contact"
                        className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                            "bg-[#FA8112] hover:bg-[#e0710f] text-white shadow-md shadow-[#FA8112]/30",
                            "active:scale-95 transform"
                        )}
                    >
                        <Phone size={14} />
                        Book Call
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={isOpen ? "close" : "open"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden md:hidden"
                    >
                        <div className="bg-[#121212] border-b border-white/10 px-4 py-4 flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                                            pathname === link.href
                                                ? "text-[#FA8112] bg-[#FA8112]/10"
                                                : "text-white/80 hover:text-white hover:bg-white/10"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                className="pt-2"
                            >
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#FA8112] hover:bg-[#e0710f] rounded-xl text-white font-semibold transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone size={16} />
                                    Book a Free Call
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
