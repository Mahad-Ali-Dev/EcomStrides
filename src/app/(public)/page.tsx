import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUs from "@/components/home/WhyUs";
import ResultsShowcase from "@/components/home/ResultsShowcase";
import Industries from "@/components/home/Industries";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 overflow-hidden">
            <Hero />
            <Stats />
            <HowItWorks />
            <ServicesPreview />
            <WhyUs />
            <ResultsShowcase />
            <Industries />
            <TestimonialsPreview />
            <Pricing />
            <FAQ />
            <CtaBanner />
        </main>
    );
}
