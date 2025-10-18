import React from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark"; // light = for dark backgrounds, dark = for light backgrounds
};

// Recreated vector logo: mountain mark + CHENAB VALLEY + rectangular DESiGNERS bar
export const Logo: React.FC<LogoProps> = ({ className, size = "md", variant = "dark" }) => {
  const isLight = variant === "light";
  const mainColor = isLight ? "text-white" : "text-black";
  const barBg = isLight ? "bg-white" : "bg-black";
  const barText = isLight ? "text-black" : "text-white";

  const sizing = {
    sm: {
      svg: "w-10 h-6",
      title: "text-base",
      bar: "h-5 px-2",
      barText: "text-[10px] tracking-[0.25em]",
    },
    md: {
      svg: "w-14 h-8",
      title: "text-xl",
      bar: "h-6 px-3",
      barText: "text-[11px] tracking-[0.3em]",
    },
    lg: {
      svg: "w-16 h-10",
      title: "text-2xl",
      bar: "h-7 px-4",
      barText: "text-xs tracking-[0.35em]",
    },
  } as const;

  const s = sizing[size];

  return (
    <div
      className={cn("inline-flex flex-col items-center select-none", mainColor, className)}
      role="img"
      aria-label="Chenab Valley Designers logo"
    >
      {/* Mountain Mark */}
      <svg
        viewBox="0 0 200 100"
        className={cn(s.svg, "-mb-1")}
        fill="none"
        stroke="currentColor"
        strokeWidth={10}
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        {/* Two peaks forming a stylized valley/mountain */}
        <polyline points="10,90 55,30 100,90" />
        <polyline points="70,90 115,30 160,90" />
      </svg>

      {/* Brand Name */}
      <div className={cn("font-sans font-extrabold uppercase tracking-wide leading-none", s.title)}>
        Chenab Valley
      </div>

      {/* Designers Bar */}
      <div className={cn("mt-1 rounded-[2px]", barBg, s.bar)}>
        <div className={cn("font-medium uppercase text-center", barText, s.barText)}>Designers</div>
      </div>
    </div>
  );
};

export default Logo;
