import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Client Success Stories | EcomStride Agency",
    description: "Read what our clients say about our Amazon account management and growth services.",
};

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-[#FAF3E1] text-[#222222] overflow-hidden pb-24">
            <div className="container mx-auto px-4 relative z-10 pt-36">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA8112]/10 border border-[#FA8112]/30 text-[#FA8112] text-sm mb-6 font-medium">
                        ⭐⭐⭐⭐⭐ Rated 5/5 by our clients
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#222222] leading-tight tracking-tight">
                        Real Results.{" "}
                        <span className="text-[#FA8112]">Real Stories.</span>
                    </h1>
                    <p className="text-xl text-[#6B5C3E] leading-relaxed">
                        We&apos;ve helped brands scale on Amazon. Here&apos;s what they say about working with EcomStride.
                    </p>
                </div>

                {/* Testimonials — masonry staggered layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className="break-inside-avoid mb-6">
                            <TestimonialCard testimonial={testimonial} index={index} />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <div className="inline-flex flex-col items-center p-10 rounded-3xl bg-[#222222] border border-[#FA8112]/20 max-w-lg mx-auto">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Be Our Next Success Story</h3>
                        <p className="text-[#F5E7C6]/70 mb-6 text-sm leading-relaxed">
                            Join 10+ brands that have scaled their Amazon business with EcomStride.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FA8112] hover:bg-[#e0710f] text-white font-semibold rounded-full transition-all duration-300 shadow-md shadow-[#FA8112]/30 active:scale-95"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
