"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { fadeUpVariants } from "@/lib/animations";

const team = [
  {
    name: "Alhaji Garba Wahab Adisa",
    title: "Chief Executive Officer",
    featured: true,
  },
  {
    name: "Management Team",
    title: "Operations & Logistics",
    featured: false,
  },
  {
    name: "Technical Team",
    title: "Feed Formulation & Quality",
    featured: false,
  },
];

export default function Leadership() {
  return (
    <Section background="surface">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          heading="The Team Behind First-Giwa"
          description="Experienced professionals committed to delivering quality feed solutions."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUpVariants}
              className={`text-center p-6 rounded-xl ${
                member.featured ? "bg-primary/5 border border-primary/10" : ""
              }`}
            >
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
                member.featured ? "bg-primary/10" : "bg-background-alt"
              }`}>
                <svg className={`w-8 h-8 ${member.featured ? "text-primary" : "text-text-light"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-text-muted text-sm">{member.title}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
