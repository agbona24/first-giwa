"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";

export default function CompanyBackground() {
  return (
    <Section background="surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Building Nigeria&apos;s Agricultural Future
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-text-muted leading-relaxed mb-4">
                <span className="text-2xl font-heading font-bold text-primary float-left mr-2 mt-1">F</span>
                irst-Giwa Feeds & Agro Tech Ltd was incorporated in 2015 with a clear mission:
                to provide Nigerian farmers and feed millers with reliable, high-quality
                animal feed and raw ingredients at competitive prices.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-text-muted leading-relaxed mb-4">
                Based in Odogbolu, Ogun State, we have grown from a local feed supplier
                into a trusted name in the agricultural sector. Our facility handles
                the production and distribution of finished feeds as well as bulk raw
                materials for feed formulators.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-text-muted leading-relaxed">
                Over the years, we have built strong relationships with poultry farmers,
                fish farmers, feed millers, and agricultural retailers across the region.
                Our commitment to quality and consistency has made us a preferred supplier
                for businesses that depend on reliable feed solutions.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl bg-background-alt flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-primary/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  <p className="text-text-light text-sm">Warehouse facility image</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-xl -z-10" />
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
