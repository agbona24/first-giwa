"use client";

import FadeUp from "@/components/motion/FadeUp";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <FadeUp className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-3 ${
            light ? "text-white/70" : "text-accent"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight ${
          light ? "text-white" : "text-text"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
