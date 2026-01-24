"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/motion/FadeUp";

const sizes = [
  { size: "2mm", label: "Starter", desc: "Fry & chicks" },
  { size: "3mm", label: "Grower", desc: "Most popular", highlighted: true },
  { size: "4mm", label: "Finisher", desc: "Medium fish & poultry" },
  { size: "6mm", label: "Jumbo", desc: "Large fish & livestock" },
  { size: "8mm", label: "Extra", desc: "Catfish & specialty" },
];

export default function FeedSizes() {
  return (
    <Section background="surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Flexibility"
              heading="Available in All Sizes"
              description="From 2mm starter pellets to 8mm jumbo feeds, we produce the right size for every stage of growth."
              align="left"
            />
            <FadeUp delay={0.2}>
              <p className="text-text-muted leading-relaxed">
                Our 3mm pellet is our most requested size, ideal for a wide range
                of fish and poultry at the growing stage. All sizes are produced
                with consistent quality and optimal nutrient density.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {sizes.map((item, i) => (
                <motion.div
                  key={item.size}
                  className={`relative flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 transition-all ${
                    item.highlighted
                      ? "border-primary bg-primary text-white scale-110"
                      : "border-border bg-surface text-text hover:border-primary"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: item.highlighted ? 1.1 : 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: item.highlighted ? 1.15 : 1.05 }}
                >
                  <span className="text-lg font-bold font-heading">{item.size}</span>
                  <span className={`text-[10px] ${item.highlighted ? "text-white/80" : "text-text-muted"}`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
