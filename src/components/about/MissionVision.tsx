"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { fadeUpVariants } from "@/lib/animations";

export default function MissionVision() {
  return (
    <Section background="default">
      <Container>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUpVariants}
            className="bg-primary rounded-xl p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white font-heading mb-4">Our Mission</h3>
            <p className="text-white/85 leading-relaxed">
              To provide affordable, high-quality animal feeds and raw feed ingredients
              that help Nigerian farmers and agribusinesses grow their operations
              profitably and sustainably.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="bg-surface border-2 border-primary/20 rounded-xl p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary font-heading mb-4">Our Vision</h3>
            <p className="text-text-muted leading-relaxed">
              To be the most trusted and reliable feed supplier in South-West Nigeria,
              known for consistent quality, competitive pricing, and strong partnerships
              with the farming community.
            </p>
          </motion.div>
        </StaggerChildren>
      </Container>
    </Section>
  );
}
