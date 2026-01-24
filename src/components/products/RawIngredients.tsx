"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    name: "Protein Meals",
    description: "High-quality protein sources for feed formulation including soybean meal, groundnut cake, and fish meal.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    gradient: "from-emerald-500 to-green-600",
    bgGlow: "bg-emerald-500/20",
  },
  {
    name: "Energy Sources",
    description: "Carbohydrate and fat-rich ingredients for energy density including maize, wheat offal, and palm kernel cake.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/20",
  },
  {
    name: "Premixes & Additives",
    description: "Vitamin-mineral premixes, amino acids, enzymes, and other feed additives for complete formulations.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-600",
    bgGlow: "bg-purple-500/20",
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

        <div className="space-y-6 max-w-4xl mx-auto">
          {categories.map((cat, index) => {
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <motion.div
                key={cat.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Card */}
                <motion.div
                  className="relative flex items-start gap-6 backdrop-blur-xl bg-white/80 rounded-3xl p-6 md:p-8 border border-neutral-200/50 shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 ${cat.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Icon container */}
                  <motion.div
                    className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${cat.gradient} p-0.5`}
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <div className={`bg-gradient-to-br ${cat.gradient} bg-clip-text text-transparent`}>
                        {cat.icon}
                      </div>
                    </div>

                    {/* Pulsing ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.gradient} opacity-30`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-text-dark">
                        {cat.name}
                      </h3>
                      <motion.span 
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/10 text-secondary"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        Available
                      </motion.span>
                    </div>
                    <p className="text-text-muted leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0"
                    animate={isHovered ? { 
                      opacity: [0, 0.2, 0],
                      x: ["-100%", "100%"]
                    } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                    }}
                  />
                </motion.div>

                {/* Floating glow behind card */}
                <motion.div
                  className={`absolute -z-10 inset-0 rounded-3xl blur-2xl opacity-0 ${cat.bgGlow}`}
                  animate={isHovered ? { opacity: 0.4 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.p 
          className="text-center text-text-muted text-sm mt-10 max-w-lg mx-auto backdrop-blur-sm bg-white/60 rounded-2xl p-4 border border-neutral-200/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="font-semibold text-primary">Contact us</span> for specific ingredient availability and bulk pricing.
          Minimum order quantities apply for raw materials.
        </motion.p>
      </Container>
    </Section>
  );
}
