"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { fadeUpVariants } from "@/lib/animations";
import Link from "next/link";

const categories = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Finished Feeds",
    description:
      "Complete nutrition solutions ready for your livestock — poultry and fish feeds in multiple pellet sizes.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Raw Ingredients",
    description:
      "Premium raw materials for feed millers and formulators — protein meals, energy sources, and premixes.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Custom Formulations",
    description:
      "Tailored feed solutions for your specific requirements — we work with you to develop the right formula.",
  },
];

export default function ProductCategories() {
  return (
    <Section background="alt">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          heading="Our Product Range"
          description="Quality feed solutions for every stage of your livestock production."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUpVariants}
              className="group bg-surface rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-350"
              whileHover={{ y: -4 }}
            >
              <div className="mb-5">{cat.icon}</div>
              <h3 className="text-xl font-semibold mb-3 font-heading">{cat.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{cat.description}</p>
              <Link
                href="/products"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1"
              >
                Learn More
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
