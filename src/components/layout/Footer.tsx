import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-[#FA8112]/20 pt-16 pb-8 text-[#EDEDED]/70">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative h-28 w-80">
                                <img src="/logo.png" alt="EcomStride" className="w-full h-full object-contain object-left" />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Your trusted partner for Amazon & eCommerce growth. We scale brands with data-driven strategies and expert management.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-[#FA8112] transition-colors"><Linkedin size={20} /></Link>
                            <Link href="#" className="hover:text-[#FA8112] transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-[#FA8112] transition-colors"><Facebook size={20} /></Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services#product-research" className="hover:text-[#FA8112] transition-colors">Product Research</Link></li>
                            <li><Link href="/services#product-launching" className="hover:text-[#FA8112] transition-colors">Product Launching</Link></li>
                            <li><Link href="/services#ppc" className="hover:text-[#FA8112] transition-colors">PPC Optimization</Link></li>
                            <li><Link href="/services#listing" className="hover:text-[#FA8112] transition-colors">Listing Optimization</Link></li>
                            <li><Link href="/services#account-management" className="hover:text-[#FA8112] transition-colors">A to Z Management</Link></li>
                            <li><Link href="/services#trademark" className="hover:text-[#FA8112] transition-colors">Brand Protection</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-[#FA8112] transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-[#FA8112] transition-colors">All Services</Link></li>
                            <li><Link href="/testimonials" className="hover:text-[#FA8112] transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="hover:text-[#FA8112] transition-colors">Contact</Link></li>
                            <li><Link href="/admin" className="hover:text-[#FA8112] transition-colors">Admin Portal</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#FA8112] shrink-0" />
                                <span>Jada, Jhelum, Punjab<br />Pakistan 49600</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#FA8112] shrink-0" />
                                <span>+92 332 6976408</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#FA8112] shrink-0" />
                                <span>hello@ecomstride.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#EDEDED]/40">
                    <p>&copy; {currentYear} EcomStride. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-[#FA8112] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#FA8112] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
