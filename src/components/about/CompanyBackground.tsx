"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function CompanyBackground() {
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
    <Section background="surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium">Our Story</span>
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-text-dark">
              Building Nigeria&apos;s Agricultural{" "}
              <span className="text-primary">Future</span>
            </h2>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-text-muted leading-relaxed text-lg">
                <span className="text-4xl font-heading font-bold text-primary float-left mr-3 mt-1 leading-none">F</span>
                irst-Giwa Feeds & Agro Tech Ltd was incorporated in 2015 with a clear mission:
                to provide Nigerian farmers and feed millers with reliable, high-quality
                animal feed and raw ingredients at competitive prices.
              </p>

              <p className="text-text-muted leading-relaxed">
                Based in Odogbolu, Ogun State, we have grown from a local feed supplier
                into a trusted name in the agricultural sector. Our facility handles
                the production and distribution of finished feeds as well as bulk raw
                materials for feed formulators.
              </p>

              <p className="text-text-muted leading-relaxed">
                Over the years, we have built strong relationships with poultry farmers,
                fish farmers, feed millers, and agricultural retailers across the region.
                Our commitment to quality and consistency has made us a preferred supplier
                for businesses that depend on reliable feed solutions.
              </p>
            </motion.div>

            {/* Stats highlights */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, value: "2015", label: "Founded" },
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, value: "1000+", label: "Clients" },
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, value: "100%", label: "Quality" },
              ].map((stat, i) => {
                return (
                  <motion.div
                    key={stat.label}
                    className="backdrop-blur-xl bg-white/60 rounded-2xl p-4 border border-neutral-200/50"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
                  >
                    <div className="text-primary mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-text-dark font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Premium 3D image card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              mouseX.set(0);
              mouseY.set(0);
            }}
          >
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glass card with real factory image */}
              <motion.div
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/factory2.jpeg"
                  alt="First-Giwa Feeds factory facility in Odogbolu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle gradient overlay at bottom for label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-semibold text-sm">Our Odogbolu Facility</p>
                  <p className="text-white/70 text-xs">Modern warehouse & production</p>
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  animate={isHovered ? {
                    opacity: [0, 0.3, 0],
                    x: ["-100%", "100%"]
                  } : {}}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  }}
                />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-3xl blur-2xl -z-10"
                animate={{ 
                  scale: isHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-3xl blur-2xl -z-10"
                animate={{ 
                  scale: isHovered ? [1.2, 1, 1.2] : 1,
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Factory photo gallery */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">
            Inside Our Facility
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { src: "/images/factory.jpeg", alt: "Factory exterior" },
              { src: "/images/factory2.jpeg", alt: "Production area" },
              { src: "/images/factory3.jpeg", alt: "Warehouse storage" },
              { src: "/images/factory4.jpeg", alt: "Processing equipment" },
              { src: "/images/factory5.jpeg", alt: "Feed production line" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
