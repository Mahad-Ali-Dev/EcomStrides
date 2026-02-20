"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Revenue Generated", value: "$150M+" },
    { label: "Accounts Managed", value: "500+" },
    { label: "Success Rate", value: "100%" },
    { label: "Avg. ROAS", value: "6.5x" },
];

export default function StatsTicker() {
    return (
        <section className="py-12 border-y border-white/5 bg-[#050505]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 mx-2 rounded-xl p-6 border border-white/10"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-[#FA8112] text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
