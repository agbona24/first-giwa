"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

// Floating feed pellet particles
const particles = [
  { x: "10%", y: "20%", size: 6, delay: 0, duration: 6 },
  { x: "85%", y: "15%", size: 8, delay: 1, duration: 7 },
  { x: "75%", y: "75%", size: 5, delay: 0.5, duration: 5.5 },
  { x: "20%", y: "80%", size: 7, delay: 1.5, duration: 6.5 },
  { x: "50%", y: "10%", size: 4, delay: 2, duration: 5 },
  { x: "30%", y: "60%", size: 5, delay: 0.8, duration: 7.5 },
  { x: "90%", y: "45%", size: 6, delay: 1.2, duration: 6 },
  { x: "5%", y: "45%", size: 4, delay: 2.5, duration: 5.5 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* === BACKGROUND ANIMATED VECTORS === */}

      {/* Large pulsing circles */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full border border-white/5 hidden lg:block"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full border border-white/5 hidden lg:block"
        animate={{ scale: [1.1, 1.3, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Animated hexagon (nutrition/science motif) */}
      <motion.svg
        className="absolute top-[15%] left-[8%] w-16 h-16 hidden md:block"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 0.15, rotate: 30 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" stroke="white" strokeWidth="1.5" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[20%] left-[15%] w-12 h-12 hidden md:block"
        viewBox="0 0 64 64"
        fill="none"
        animate={{ opacity: [0.08, 0.2, 0.08], rotate: [0, 60, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" stroke="white" strokeWidth="1" />
      </motion.svg>

      {/* Animated wheat/grain SVG */}
      <motion.svg
        className="absolute top-[30%] left-[3%] w-20 h-20 opacity-10 hidden lg:block"
        viewBox="0 0 80 80"
        fill="none"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M40 75V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="40" cy="18" rx="6" ry="10" stroke="white" strokeWidth="1.2" />
        <ellipse cx="33" cy="28" rx="5" ry="8" stroke="white" strokeWidth="1.2" transform="rotate(-20 33 28)" />
        <ellipse cx="47" cy="28" rx="5" ry="8" stroke="white" strokeWidth="1.2" transform="rotate(20 47 28)" />
        <ellipse cx="30" cy="40" rx="4" ry="7" stroke="white" strokeWidth="1.2" transform="rotate(-25 30 40)" />
        <ellipse cx="50" cy="40" rx="4" ry="7" stroke="white" strokeWidth="1.2" transform="rotate(25 50 40)" />
      </motion.svg>

      {/* Animated flowing curves */}
      <motion.svg
        className="absolute bottom-[10%] right-[5%] w-48 h-48 hidden lg:block"
        viewBox="0 0 200 200"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.path
          d="M20 180 C60 140, 80 60, 120 80 S180 140, 180 20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          d="M40 180 C80 120, 100 80, 140 100 S180 160, 160 40"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.svg>

      {/* Floating feed pellet particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 hidden md:block"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Diagonal animated lines */}
      <motion.svg
        className="absolute top-0 right-[30%] w-[2px] h-[200px] hidden lg:block"
        viewBox="0 0 2 200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ delay: 1 }}
      >
        <motion.line
          x1="1" y1="0" x2="1" y2="200"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          animate={{ strokeDashoffset: [0, -32] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-0 left-[40%] w-[2px] h-[150px] hidden lg:block"
        viewBox="0 0 2 150"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 1.5 }}
      >
        <motion.line
          x1="1" y1="0" x2="1" y2="150"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          animate={{ strokeDashoffset: [0, 24] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {/* === MAIN CONTENT === */}
      <Container className="relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div>
            <motion.span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Trusted Since 2015
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-white leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Premium Animal Feeds & Agro Solutions for Nigeria&apos;s Growing Industry
            </motion.h1>

            <motion.p
              className="text-lg text-white/85 max-w-[520px] leading-relaxed mb-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              From finished feeds to raw ingredients, we supply farms, feed millers,
              and agribusinesses with reliable, high-quality nutrition across Ogun State.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button href="/products" variant="primary-inverted" size="lg">
                Explore Our Products
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Right: Product image with rich animations */}
          <motion.div
            className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Orbiting particles around product */}
            <motion.div
              className="absolute inset-0 m-auto w-[85%] h-[85%] hidden md:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-white/30" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white/20" />
              <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-secondary/40" />
            </motion.div>

            {/* Counter-rotating orbit */}
            <motion.div
              className="absolute inset-0 m-auto w-[70%] h-[70%] hidden md:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 right-[20%] w-2 h-2 rounded-full bg-accent/40" />
              <div className="absolute bottom-[10%] left-[10%] w-1.5 h-1.5 rounded-full bg-white/25" />
            </motion.div>

            {/* Pulsing concentric rings */}
            <motion.div
              className="absolute inset-0 m-auto w-[75%] h-[75%] rounded-full border border-white/10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full border border-white/5"
              animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Animated dashed orbit ring */}
            <motion.svg
              className="absolute inset-0 m-auto w-[88%] h-[88%] hidden md:block"
              viewBox="0 0 200 200"
              fill="none"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="95"
                stroke="white"
                strokeWidth="0.8"
                strokeDasharray="8 6"
                opacity="0.15"
                animate={{ strokeDashoffset: [0, -56] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.svg>

            {/* Glow behind product */}
            <motion.div
              className="absolute inset-0 m-auto w-[60%] h-[60%] rounded-full bg-secondary/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating + zoom product image */}
            <motion.div
              className="relative w-full max-w-[420px] mx-auto z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  scale: [1, 1.04, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative aspect-square">
                  <Image
                    src="/images/product.png"
                    alt="First-Giwa premium feed product"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                    sizes="(max-width: 768px) 90vw, 420px"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Sparkle/shine effects */}
            {[
              { top: "15%", right: "20%", delay: 0 },
              { top: "70%", right: "15%", delay: 1.5 },
              { top: "25%", left: "18%", delay: 3 },
              { top: "60%", left: "12%", delay: 2 },
            ].map((pos, i) => (
              <motion.svg
                key={i}
                className="absolute w-4 h-4 hidden md:block"
                style={pos}
                viewBox="0 0 16 16"
                fill="white"
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: pos.delay,
                  ease: "easeInOut",
                }}
              >
                <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" />
              </motion.svg>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
