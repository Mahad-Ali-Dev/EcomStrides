"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export default function SectionWrapper({
    children,
    className,
    id,
    delay = 0,
}: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn("py-20 md:py-32 relative overflow-hidden", className)}
        >
            {children}
        </motion.section>
    );
}
