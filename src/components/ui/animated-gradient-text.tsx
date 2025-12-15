import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}