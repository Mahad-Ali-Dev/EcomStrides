"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
        badge?: React.ReactNode;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--background)",
        "var(--background)",
        "var(--background)",
    ];

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md py-10 no-scrollbar relative"
            ref={ref}
            style={{ scrollBehavior: 'smooth' }}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="max-w-sm lg:hidden block mb-10"
                            >
                                {item.content}
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-white mb-4"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-lg text-white/60 max-w-sm mt-4 leading-relaxed"
                            >
                                {item.description}
                            </motion.div>
                            {item.badge && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                    className="mt-6"
                                >
                                    {item.badge}
                                </motion.div>
                            )}
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                className={cn(
                    "hidden lg:block h-96 w-[500px] sticky top-20 rounded-2xl overflow-hidden",
                    contentClassName
                )}
            >
                <div className="h-full w-full flex items-center justify-center">
                    {content[activeCard].content ?? null}
                </div>
            </div>
        </motion.div>
    );
};
