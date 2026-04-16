"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const sizes = [
  {
    size: "2mm",
    label: "Starter",
    suitableFor: "Fingerlings, day-old chicks",
    notes: "Highest protein ratio — critical early stage",
    color: "from-sky-400 to-blue-500",
    dotSize: "w-3 h-3",
  },
  {
    size: "3mm",
    label: "Early Grower",
    suitableFor: "Growing fish, pullets, broiler starters",
    notes: "Most popular size across farms",
    color: "from-emerald-400 to-green-500",
    dotSize: "w-4 h-4",
    popular: true,
  },
  {
    size: "4mm",
    label: "Grower",
    suitableFor: "Medium catfish, grower poultry",
    notes: "Grower to finisher transition",
    color: "from-primary to-primary-dark",
    dotSize: "w-5 h-5",
  },
  {
    size: "6mm",
    label: "Finisher",
    suitableFor: "Large catfish & tilapia",
    notes: "High energy content for rapid gain",
    color: "from-amber-500 to-orange-600",
    dotSize: "w-6 h-6",
  },
  {
    size: "8mm",
    label: "Table Size",
    suitableFor: "Table-size catfish, specialty feeds",
    notes: "Maximum pellet — highest energy density",
    color: "from-red-500 to-rose-600",
    dotSize: "w-8 h-8",
  },
];

export default function FeedSizesDetail() {
  return (
    <Section background="surface">
      <Container>
        <SectionHeading
          eyebrow="Pellet Sizes"
          heading="Feed Size Guide"
          description="Select the right pellet size for your livestock's current growth stage."
        />

        {/* Size progression visual */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {sizes.map((s, i) => (
            <div key={s.size} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <motion.div
                  className={`rounded-full bg-gradient-to-br ${s.color} shadow-md ${s.dotSize}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                />
                <span className="text-xs font-bold text-text-dark">{s.size}</span>
              </div>
              {i < sizes.length - 1 && (
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-neutral-200 to-neutral-300 mx-1.5 mt-[-14px]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15, duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sizes.map((s, i) => (
            <motion.div
              key={s.size}
              className={`relative flex flex-col rounded-3xl overflow-hidden border ${
                s.popular
                  ? "border-primary/40 ring-2 ring-primary/20 shadow-lg"
                  : "border-neutral-200/60"
              } bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              {s.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-gradient-to-r from-primary to-primary-dark text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
                    Most Used
                  </span>
                </div>
              )}

              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${s.color}`} />

              <div className="flex flex-col flex-1 p-5">
                {/* Pellet visual */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`rounded-full bg-gradient-to-br ${s.color} shadow-md flex-shrink-0 ${s.dotSize}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div>
                    <div className="font-heading font-black text-2xl text-text-dark leading-none">{s.size}</div>
                    <div className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                      {s.label}
                    </div>
                  </div>
                </div>

                {/* Suitable for */}
                <p className="text-sm font-semibold text-text-dark leading-snug mb-2">
                  {s.suitableFor}
                </p>

                {/* Notes */}
                <p className="text-xs text-text-muted leading-relaxed mt-auto pt-3 border-t border-neutral-100">
                  {s.notes}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tip */}
        <motion.div
          className="mt-10 flex items-start gap-4 bg-primary/5 border border-primary/15 rounded-2xl p-5 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-dark mb-0.5">Not sure which size to choose?</p>
            <p className="text-sm text-text-muted">
              Our team can recommend the ideal pellet size for your specific species and growth stage.{" "}
              <a href="/contact" className="text-primary hover:underline font-semibold">Get advice →</a>
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
