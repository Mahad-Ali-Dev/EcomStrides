"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ReactElement } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "default" | "sm" | "lg" | "icon";
    isLoading?: boolean;
    icon?: ReactElement;
}

export default function GradientButton({
    children,
    className,
    variant = "primary",
    size = "default",
    isLoading = false,
    icon,
    ...props
}: GradientButtonProps) {
    const baseStyles = "relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-semibold tracking-tight rounded-full";

    const variants = {
        // Lime CTA — primary brand action
        primary: "bg-[#FA8112] hover:bg-[#e0710f] text-black shadow-md shadow-[#FA8112]/30 border border-[#FA8112]",
        // Secondary - Dark theme: White outline or dark grey
        secondary: "bg-white/5 hover:bg-white/10 text-white shadow-sm border border-white/10 hover:border-white/20",
        // Transparent outline
        outline: "bg-transparent border-2 border-[#FA8112] hover:bg-[#FA8112]/10 text-[#FA8112]",
    };

    const sizes = {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base font-semibold",
        icon: "h-10 w-10",
    };

    return (
        <Button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            disabled={isLoading || props.disabled}
            {...(props as any)}
        >
            {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : icon ? (
                <span className="mr-2">{icon}</span>
            ) : null}

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </Button>
    );
}
