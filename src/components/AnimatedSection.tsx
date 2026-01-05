import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationType?: "fade-in" | "fade-in-up" | "scale-in";
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animationType = "fade-in-up",
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    "fade-in": "animate-fade-in",
    "fade-in-up": "animate-fade-in-up",
    "scale-in": "animate-scale-in",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-700",
        isVisible
          ? `opacity-100 ${animationClasses[animationType]}`
          : "opacity-0",
        className
      )}
      style={delay > 0 ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

