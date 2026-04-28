"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";

export default function ProductHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[15%] left-[10%] w-80 h-80 rounded-full bg-white/5 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[5%] w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{ x: [0, -35, 0], y: [0, 35, 0], scale: [1.15, 1, 1.15] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }} />

      {/* Floating particles */}
      {[
        { left: "6%", top: "18%", dur: 3.8, delay: 0 },
        { left: "20%", top: "70%", dur: 4.5, delay: 0.5 },
        { left: "40%", top: "30%", dur: 3.2, delay: 1.2 },
        { left: "58%", top: "85%", dur: 5.0, delay: 0.3 },
        { left: "72%", top: "22%", dur: 4.1, delay: 1.7 },
        { left: "85%", top: "55%", dur: 3.6, delay: 0.8 },
        { left: "14%", top: "48%", dur: 4.8, delay: 1.4 },
        { left: "93%", top: "32%", dur: 3.3, delay: 0.6 },
        { left: "50%", top: "60%", dur: 4.3, delay: 1.0 },
        { left: "30%", top: "12%", dur: 5.2, delay: 1.9 },
        { left: "78%", top: "78%", dur: 3.9, delay: 0.2 },
        { left: "63%", top: "44%", dur: 4.6, delay: 1.5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Content */}
      <Container className="relative z-10 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-white/60 text-sm mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span>Home</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/90">Products</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Premium{" "}
            <span className="relative inline-block">
              Feed Solutions
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-white/85 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Quality feed solutions for poultry, fish, and livestock at every growth stage.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              { icon: "✓", text: "High-Quality Ingredients" },
              { icon: "✓", text: "2mm - 8mm Sizes" },
              { icon: "✓", text: "Bulk Available" },
            ].map((badge, i) => (
              <motion.div
                key={badge.text}
                className="backdrop-blur-sm bg-white/10 rounded-full px-4 py-2 border border-white/20 flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <span className="text-accent font-bold">{badge.icon}</span>
                <span className="text-white text-sm">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Product image */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative w-80 h-80"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-110" />
            <Image
              src="/images/product.webp"
              alt="First-Giwa premium animal feeds"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="320px"
            />
          </motion.div>
        </motion.div>
        </div>
      </Container>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 50C240 80 480 20 720 50C960 80 1200 20 1440 50V100H0V50Z" fill="#F7F6F2" />
        </svg>
      </div>
    </section>
  );
}
