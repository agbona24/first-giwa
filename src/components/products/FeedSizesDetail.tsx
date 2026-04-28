"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const sizeData = [
  { size: "2mm", suitableFor: "Fingerlings, day-old chicks", notes: "Starter feeds, high protein" },
  { size: "3mm", suitableFor: "Growing fish, pullets, broiler starters", notes: "Most popular size" },
  { size: "4mm", suitableFor: "Medium catfish, grower poultry", notes: "Grower to finisher transition" },
  { size: "6mm", suitableFor: "Large catfish, tilapia", notes: "High energy content" },
  { size: "8mm", suitableFor: "Table-size catfish, specialty feeds", notes: "Maximum pellet size" },
];

export default function FeedSizesDetail() {
  return (
    <Section background="surface">
      <Container narrow>
        <SectionHeading
          eyebrow="Pellet Sizes"
          heading="Feed Size Guide"
          description="Choose the right pellet size for your livestock's growth stage."
        />

        <motion.div
          className="backdrop-blur-xl bg-white/80 rounded-3xl border border-neutral-200/50 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <th className="py-5 px-6 text-sm font-bold font-heading text-primary uppercase tracking-wider">
                    Size
                  </th>
                  <th className="py-5 px-6 text-sm font-bold font-heading text-primary uppercase tracking-wider">
                    Suitable For
                  </th>
                  <th className="py-5 px-6 text-sm font-bold font-heading text-primary uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row, index) => (
                  <motion.tr
                    key={row.size}
                    className="border-t border-neutral-200/50 hover:bg-primary/5 transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <td className="py-5 px-6">
                      <motion.div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-base font-bold font-heading ${
                          row.size === "3mm"
                            ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg"
                            : "backdrop-blur-sm bg-primary/10 text-primary border border-primary/20"
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {row.size}
                      </motion.div>
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-text-dark font-medium group-hover:text-primary transition-colors">
                        {row.suitableFor}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-text-muted group-hover:text-text transition-colors">
                        {row.notes}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom decoration */}
          <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
        </motion.div>
      </Container>
    </Section>
  );
}
