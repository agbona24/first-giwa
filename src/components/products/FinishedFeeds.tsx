"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const products = [
  {
    id: "poultry-starter",
    name: "Poultry Starter Feed",
    category: "poultry" as const,
    description: "High-protein feed for day-old chicks to 4 weeks. Promotes strong early growth and immunity.",
    sizes: ["2mm", "3mm"],
    highlight: false,
  },
  {
    id: "poultry-grower",
    name: "Poultry Grower Feed",
    category: "poultry" as const,
    description: "Balanced nutrition for growing broilers and pullets from 4 to 8 weeks.",
    sizes: ["3mm", "4mm"],
    highlight: false,
  },
  {
    id: "poultry-finisher",
    name: "Poultry Finisher Feed",
    category: "poultry" as const,
    description: "Optimized for rapid weight gain and market readiness in broilers.",
    sizes: ["4mm"],
    highlight: false,
  },
  {
    id: "layer-feed",
    name: "Layer Mash / Pellet",
    category: "poultry" as const,
    description: "Complete nutrition for laying hens, supporting consistent and high egg production.",
    sizes: ["3mm", "4mm"],
    highlight: true,
  },
  {
    id: "fish-starter",
    name: "Fish Starter Feed",
    category: "fish" as const,
    description: "Fine pellets for fingerlings and juvenile fish with high protein content.",
    sizes: ["2mm", "3mm"],
    highlight: false,
  },
  {
    id: "fish-grower",
    name: "Fish Grower Feed",
    category: "fish" as const,
    description: "Nutrient-dense feed for catfish and tilapia at the growing stage.",
    sizes: ["3mm", "4mm"],
    highlight: true,
  },
  {
    id: "fish-finisher",
    name: "Fish Finisher Feed",
    category: "fish" as const,
    description: "High-energy feed to bring catfish to table size efficiently.",
    sizes: ["6mm", "8mm"],
    highlight: false,
  },
];

const tabs = [
  { key: "all", label: "All Feeds", icon: "🌿" },
  { key: "poultry", label: "Poultry", icon: "🐔" },
  { key: "fish", label: "Fish", icon: "🐟" },
] as const;

type TabKey = typeof tabs[number]["key"];

const POULTRY_GRADIENT = "from-amber-500/15 via-primary/5 to-primary/10";
const FISH_GRADIENT = "from-blue-500/15 via-cyan-500/5 to-sky-500/10";

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const isPoultry = product.category === "poultry";
  const accentColor = isPoultry ? "text-amber-600" : "text-blue-600";
  const badgeBg = isPoultry ? "bg-amber-500/10 text-amber-700 border-amber-400/20" : "bg-blue-500/10 text-blue-700 border-blue-400/20";
  const sizeBg = isPoultry ? "bg-gradient-to-r from-primary to-primary-dark" : "bg-gradient-to-r from-blue-500 to-cyan-600";
  const gradient = isPoultry ? POULTRY_GRADIENT : FISH_GRADIENT;
  const ringColor = isPoultry ? "ring-primary/20" : "ring-blue-500/20";

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      layout
    >
      {product.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-primary to-primary-dark text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <motion.div
        className={`relative h-full flex flex-col rounded-3xl overflow-hidden border bg-gradient-to-br ${gradient} backdrop-blur-sm shadow-[var(--shadow-card)] ${
          product.highlight
            ? `border-primary/40 ring-2 ${ringColor}`
            : "border-neutral-200/60 hover:border-neutral-300/80"
        }`}
        whileHover={{ y: -6, boxShadow: "var(--shadow-card-hover)" }}
        transition={{ duration: 0.25 }}
      >
        {/* Top colour strip */}
        <div className={`h-1.5 ${sizeBg}`} />

        <div className="flex flex-col flex-1 p-6">
          {/* Category badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeBg}`}>
              {isPoultry ? "🐔" : "🐟"} {product.category}
            </span>
          </div>

          {/* Name */}
          <h3 className={`font-heading font-bold text-lg text-text-dark mb-2 group-hover:${accentColor} transition-colors duration-200`}>
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">
            {product.description}
          </p>

          {/* Sizes */}
          <div className="flex flex-wrap gap-2 mb-5">
            {product.sizes.map((size) => (
              <span key={size} className={`inline-flex items-center ${sizeBg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                {size}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button href="/contact" variant="ghost" size="sm" className="w-full justify-center border border-neutral-200 hover:border-primary hover:bg-primary/5 rounded-xl transition-all">
            Enquire Now →
          </Button>
        </div>

        {/* Shimmer on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={false}
          whileHover={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 0%)",
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0) 100%)",
            ],
          }}
          transition={{ duration: 0.7 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function FinishedFeeds() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const filtered =
    activeTab === "all" ? products : products.filter((p) => p.category === activeTab);

  return (
    <Section background="surface">
      <Container>
        <SectionHeading
          eyebrow="Finished Feeds"
          heading="Ready-to-Use Animal Feeds"
          description="Complete feeds formulated for optimal growth at every stage of your animals' lifecycle."
        />

        {/* Tab bar */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? "text-white shadow-lg"
                  : "bg-neutral-100 text-text-muted hover:bg-neutral-200 hover:text-text"
              }`}
              whileTap={{ scale: 0.96 }}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-2xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-base">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
              <span className={`relative z-10 text-xs px-1.5 py-0.5 rounded-full font-bold ${
                activeTab === tab.key ? "bg-white/20 text-white" : "bg-white text-text-muted"
              }`}>
                {tab.key === "all" ? products.length : products.filter(p => p.category === tab.key).length}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
