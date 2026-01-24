"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { fadeUpVariants } from "@/lib/animations";
import Button from "@/components/ui/Button";

const products = [
  {
    id: "poultry-starter",
    name: "Poultry Starter Feed",
    category: "poultry" as const,
    description: "High-protein feed for day-old chicks to 4 weeks. Promotes strong early growth.",
    sizes: ["2mm", "3mm"],
  },
  {
    id: "poultry-grower",
    name: "Poultry Grower Feed",
    category: "poultry" as const,
    description: "Balanced nutrition for growing broilers and pullets from 4 to 8 weeks.",
    sizes: ["3mm", "4mm"],
  },
  {
    id: "poultry-finisher",
    name: "Poultry Finisher Feed",
    category: "poultry" as const,
    description: "Optimized for weight gain and market readiness in broilers.",
    sizes: ["4mm"],
  },
  {
    id: "layer-feed",
    name: "Layer Mash / Pellet",
    category: "poultry" as const,
    description: "Complete nutrition for laying hens, supporting consistent egg production.",
    sizes: ["3mm", "4mm"],
  },
  {
    id: "fish-starter",
    name: "Fish Starter Feed",
    category: "fish" as const,
    description: "Fine pellets for fingerlings and juvenile fish with high protein content.",
    sizes: ["2mm", "3mm"],
  },
  {
    id: "fish-grower",
    name: "Fish Grower Feed",
    category: "fish" as const,
    description: "Nutrient-dense feed for catfish and tilapia at the growing stage.",
    sizes: ["3mm", "4mm"],
  },
  {
    id: "fish-finisher",
    name: "Fish Finisher Feed",
    category: "fish" as const,
    description: "High-energy feed to bring catfish to table size efficiently.",
    sizes: ["6mm", "8mm"],
  },
];

const tabs = [
  { key: "all", label: "All Feeds" },
  { key: "poultry", label: "Poultry" },
  { key: "fish", label: "Fish" },
] as const;

export default function FinishedFeeds() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <Section background="surface">
      <Container>
        <SectionHeading
          eyebrow="Finished Feeds"
          heading="Ready-to-Use Animal Feeds"
          description="Complete feeds formulated for optimal growth at every stage."
        />

        <div className="flex gap-2 mb-10 justify-center flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? "bg-primary text-white"
                  : "bg-background-alt text-text-muted hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUpVariants}
              layout
              className="bg-background rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="h-40 bg-background-alt flex items-center justify-center">
                <svg className="w-12 h-12 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent mb-2">
                  {product.category}
                </span>
                <h3 className="font-heading font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex gap-2 mb-4">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <Button href="/contact" variant="ghost" size="sm">
                  Inquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
