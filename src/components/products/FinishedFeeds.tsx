"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
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

function Premium3DProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  return (
    <motion.div
      className="perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        className="relative h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card */}
        <motion.div
          className="relative h-full backdrop-blur-xl bg-white/80 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image/Icon section with gradient */}
          <div className={`relative h-44 overflow-hidden ${
            product.category === 'poultry' 
              ? 'bg-gradient-to-br from-primary/20 to-accent/20' 
              : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
          }`}>
            {/* Animated orbs */}
            <motion.div
              className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl ${
                product.category === 'poultry' ? 'bg-primary/30' : 'bg-blue-500/30'
              }`}
              animate={isHovered ? { scale: [1, 1.3, 1], x: [0, 10, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <motion.div
                className={`w-16 h-16 rounded-2xl ${
                  product.category === 'poultry'
                    ? 'bg-gradient-to-br from-primary to-primary-dark'
                    : 'bg-gradient-to-br from-blue-500 to-cyan-600'
                } p-0.5`}
                animate={isHovered ? { rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <svg className={`w-8 h-8 ${
                    product.category === 'poultry' ? 'text-primary' : 'text-blue-500'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6">
            <motion.span 
              className={`inline-block text-xs font-semibold uppercase tracking-wider mb-2 px-2.5 py-1 rounded-full ${
                product.category === 'poultry'
                  ? 'bg-primary/10 text-primary'
                  : 'bg-blue-500/10 text-blue-600'
              }`}
            >
              {product.category}
            </motion.span>
            
            <h3 className="font-heading font-bold text-xl mb-3 text-text-dark">
              {product.name}
            </h3>
            
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {product.description}
            </p>
            
            {/* Size badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {product.sizes.map((size) => (
                <motion.span
                  key={size}
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    product.category === 'poultry'
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {size}
                </motion.span>
              ))}
            </div>
            
            <Button href="/contact" variant="ghost" size="sm" className="w-full">
              Inquire Now →
            </Button>
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

        {/* Floating glow */}
        <motion.div
          className={`absolute -z-10 inset-0 rounded-3xl blur-2xl opacity-0 ${
            product.category === 'poultry' ? 'bg-primary/30' : 'bg-blue-500/30'
          }`}
          animate={isHovered ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

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
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg"
                  : "backdrop-blur-xl bg-white/60 text-text-muted hover:text-primary hover:bg-white/80 border border-neutral-200/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, index) => (
            <Premium3DProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
