"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    once?: boolean;
    distance?: number;
}

export default function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.6,
    direction = "up",
    once = true,
    distance = 30,
}: FadeInProps) {
    const directionMap: Record<string, { x?: number; y?: number }> = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...directionMap[direction],
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-80px" }}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
