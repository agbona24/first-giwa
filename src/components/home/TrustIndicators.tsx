"use client";

import Container from "@/components/layout/Container";
import CountUp from "@/components/motion/CountUp";
import FadeUp from "@/components/motion/FadeUp";
import { STATS } from "@/lib/constants";

export default function TrustIndicators() {
  return (
    <section className="py-12 md:py-16 bg-surface">
      <Container>
        <FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary font-heading mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
