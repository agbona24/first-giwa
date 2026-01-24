"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { fadeUpVariants } from "@/lib/animations";

const categories = [
  {
    name: "Protein Meals",
    description: "High-quality protein sources for feed formulation including soybean meal, groundnut cake, and fish meal.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    name: "Energy Sources",
    description: "Carbohydrate and fat-rich ingredients for energy density including maize, wheat offal, and palm kernel cake.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Premixes & Additives",
    description: "Vitamin-mineral premixes, amino acids, enzymes, and other feed additives for complete formulations.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

export default function RawIngredients() {
  return (
    <Section background="alt">
      <Container>
        <SectionHeading
          eyebrow="Bulk Supply"
          heading="Raw Feed Ingredients"
          description="We supply feed millers and formulators with quality raw materials in bulk."
        />

        <StaggerChildren className="space-y-4 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={fadeUpVariants}
              className="flex items-start gap-5 bg-surface rounded-xl p-6 shadow-card"
            >
              <div className="shrink-0 w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center">
                {cat.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-heading font-semibold text-lg">{cat.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-secondary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Available
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <p className="text-center text-text-light text-sm mt-8 max-w-md mx-auto">
          Contact us for specific ingredient availability and bulk pricing.
          Minimum order quantities apply for raw materials.
        </p>
      </Container>
    </Section>
  );
}
