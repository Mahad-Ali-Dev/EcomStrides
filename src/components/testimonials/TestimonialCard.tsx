"use client";

import { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { Star, User } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % 9) * 0.05, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-[#FAF3E1] border border-[#E8D5A8] p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-[#FA8112]/40 hover:-translate-y-1 transition-all duration-300"
        >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-7xl font-serif text-[#E8D5A8] group-hover:text-[#FA8112]/20 transition-colors duration-300 select-none leading-none">
                &ldquo;
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        className={cn(
                            "transition-colors duration-300",
                            i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-[#E8D5A8] text-[#E8D5A8]"
                        )}
                    />
                ))}
            </div>

            {/* Content */}
            <p className="text-[#6B5C3E] leading-relaxed mb-8 italic relative z-10 min-h-[100px]">
                &ldquo;{testimonial.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-[#E8D5A8]">
                <div className="w-12 h-12 rounded-full bg-[#FA8112] flex items-center justify-center shrink-0">
                    {testimonial.avatar && testimonial.avatar.length > 3 ? (
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                        <span className="text-white font-bold text-sm">{testimonial.avatar || <User size={20} />}</span>
                    )}
                </div>

                <div>
                    <h4 className="text-[#222222] font-semibold text-lg">
                        {testimonial.name}
                    </h4>
                    <p className="text-[#6B5C3E]/70 text-sm">
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>

                {testimonial.result && (
                    <div className="ml-auto shrink-0">
                        <span className="text-xs font-medium bg-[#FA8112]/10 text-[#FA8112] border border-[#FA8112]/20 px-2 py-1 rounded-full">
                            {testimonial.result}
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
