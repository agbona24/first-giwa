"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import { COMPANY } from "@/lib/constants";

export default function HomeCTA() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <FadeUp>
          <div className="bg-accent rounded-2xl px-8 py-14 md:px-16 md:py-20 text-center relative overflow-hidden">
            {/* Subtle diagonal stripe pattern */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(255,255,255,1) 20px,
                rgba(255,255,255,1) 22px
              )`
            }} />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
                Get competitive pricing on bulk orders. We supply quality livestock feeds
                and raw feed ingredients across Ogun State.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary-inverted" size="lg">
                  Request a Quote
                </Button>
                <Button
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  variant="whatsapp"
                  size="lg"
                  external
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.316-2.234l-.44-.37-3.528 1.183 1.183-3.528-.37-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
