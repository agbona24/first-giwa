"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/motion/FadeUp";

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

        <FadeUp>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="pb-3 pr-4 text-sm font-semibold font-heading text-text">Size</th>
                  <th className="pb-3 pr-4 text-sm font-semibold font-heading text-text">Suitable For</th>
                  <th className="pb-3 text-sm font-semibold font-heading text-text">Notes</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row) => (
                  <tr key={row.size} className="border-b border-border/60 hover:bg-background-alt/50 transition-colors">
                    <td className="py-4 pr-4">
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold font-heading ${
                        row.size === "3mm"
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {row.size}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-sm text-text-muted">{row.suitableFor}</td>
                    <td className="py-4 text-sm text-text-muted">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
