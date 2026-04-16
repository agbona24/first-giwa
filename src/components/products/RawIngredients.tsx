"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    key: "protein",
    label: "Protein Sources",
    icon: "🥩",
    gradient: "from-emerald-500 to-green-600",
    lightBg: "bg-emerald-50",
    chipBg: "bg-emerald-500/10 text-emerald-800 border-emerald-400/25",
    description: "High-quality protein meals for muscle growth and feed formulation.",
    ingredients: [
      "Bone meal", "Feather meal", "Fishmeal 60%", "GNC", "GNC Kano",
      "Imported Bloodmeal", "Local bloodmeal", "Meat meal 55%",
      "PKC", "Poultry meal 65%", "Soya meal",
    ],
  },
  {
    key: "energy",
    label: "Energy Sources",
    icon: "⚡",
    gradient: "from-amber-500 to-orange-600",
    lightBg: "bg-amber-50",
    chipBg: "bg-amber-500/10 text-amber-800 border-amber-400/25",
    description: "Carbohydrate and fat-rich ingredients for energy density in formulations.",
    ingredients: [
      "Cassava flour", "Cassava peel", "COCO POPS", "COCOSHELL",
      "Garri", "Palamu", "Rice bran", "SORGHUM",
      "Soya oil", "Wheat flour", "Wheat offal",
    ],
  },
  {
    key: "premix",
    label: "Premixes & Additives",
    icon: "🧪",
    gradient: "from-purple-500 to-pink-600",
    lightBg: "bg-purple-50",
    chipBg: "bg-purple-500/10 text-purple-800 border-purple-400/25",
    description: "Vitamins, minerals, enzymes and speciality additives for complete nutrition.",
    ingredients: [
      "Bio-vit", "Champremix", "Concentrate premix", "CRUSHING",
      "Enzymes", "Fish Prem", "KOKO", "Lysine",
      "Salt", "Toxin binder", "Venor", "Vitamin C Cups", "Vitranor",
    ],
  },
];

export default function RawIngredients() {
  const [active, setActive] = useState(categories[0].key);
  const cat = categories.find((c) => c.key === active)!;

  return (
    <Section background="alt">
      <Container>
        <SectionHeading
          eyebrow="Bulk Supply"
          heading="Raw Feed Ingredients"
          description="We supply feed millers and formulators with quality raw materials in bulk quantities."
        />

        {/* Category selector */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10 max-w-2xl mx-auto">
          {categories.map((c) => (
            <motion.button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl text-sm font-semibold border-2 transition-all duration-200 cursor-pointer ${
                active === c.key
                  ? "border-transparent text-white shadow-xl"
                  : "border-neutral-200 bg-white text-text-muted hover:border-neutral-300 hover:text-text"
              }`}
              style={active === c.key ? { background: `linear-gradient(135deg, var(--tw-gradient-stops))` } : {}}
              whileTap={{ scale: 0.97 }}
            >
              {active === c.key && (
                <motion.span
                  layoutId="cat-bg"
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.gradient}`}
                  style={{ position: "absolute" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-lg">{c.icon}</span>
              <span className="relative z-10">{c.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl shadow-[var(--shadow-card)] border border-neutral-200/60 overflow-hidden"
          >
            {/* Panel header */}
            <div className={`bg-gradient-to-br ${cat.gradient} px-8 py-6`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-xl">{cat.label}</h3>
                  <p className="text-white/75 text-sm mt-0.5">{cat.description}</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-1.5 bg-white/20 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M3.375 7.5h17.25" />
                  </svg>
                  {cat.ingredients.length} items
                </div>
              </div>
            </div>

            {/* Ingredient chips */}
            <div className="p-8">
              <motion.div className="flex flex-wrap gap-3">
                {cat.ingredients.map((name, i) => (
                  <motion.span
                    key={name}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium cursor-default ${cat.chipBg}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.035, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                    {name}
                  </motion.span>
                ))}
              </motion.div>

              <p className="mt-8 text-sm text-text-muted border-t border-neutral-100 pt-6">
                <span className="font-semibold text-primary">Minimum order quantities apply.</span>{" "}
                <a href="/contact" className="text-primary hover:underline font-medium">Contact us</a>{" "}
                for bulk pricing and availability.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Summary row */}
        <motion.div
          className="mt-8 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                active === c.key
                  ? "border-primary bg-primary/5"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-lg flex-shrink-0`}>
                {c.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-text-dark truncate">{c.label}</p>
                <p className="text-xs text-text-muted">{c.ingredients.length} items</p>
              </div>
            </button>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
