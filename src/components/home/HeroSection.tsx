"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Product3D from "./Product3D";
import QuizModal from "@/components/quiz/QuizModal";

export default function HeroSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* === RICH GRADIENT BACKGROUND === */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, #1a5c2a 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, #235a35 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 70% 80%, #143d1e 0%, transparent 50%),
            linear-gradient(160deg, #0f3318 0%, #1a5428 30%, #1F5E2E 50%, #174a24 75%, #0d2c15 100%)
          `,
        }}
      />

      {/* === ANIMATED AURORA BLOBS === */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, #3E8E41 0%, transparent 70%)", top: "-10%", left: "-5%" }}
        animate={{
          x: [0, 80, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[80px]"
        style={{ background: "radial-gradient(circle, #4FA854 0%, transparent 70%)", top: "20%", right: "-10%" }}
        animate={{
          x: [0, -60, -20, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full opacity-10 blur-[90px]"
        style={{ background: "radial-gradient(circle, #8B6F3D 0%, transparent 70%)", bottom: "0%", left: "30%" }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-12 blur-[70px] hidden lg:block"
        style={{ background: "radial-gradient(circle, #2a7a3b 0%, transparent 70%)", top: "50%", left: "50%" }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 30, -40, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* === ANIMATED MESH GRID === */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2 }}
      >
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </motion.svg>

      {/* === ANIMATED DIAGONAL LIGHT RAYS === */}
      <motion.div
        className="absolute inset-0 overflow-hidden hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="absolute top-0 -left-[20%] w-[40%] h-[200%] -rotate-[25deg] origin-top-left"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)" }}
          animate={{ x: ["0%", "250%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.div
          className="absolute top-0 -left-[10%] w-[20%] h-[200%] -rotate-[25deg] origin-top-left"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.015) 50%, transparent 100%)" }}
          animate={{ x: ["0%", "300%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 6 }}
        />
      </motion.div>

      {/* === TOPOGRAPHIC CONTOUR LINES === */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.035] hidden md:block"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <motion.path
          d="M0 400 Q200 350, 400 380 T800 360 T1200 400"
          stroke="white" strokeWidth="1"
          animate={{ d: ["M0 400 Q200 350, 400 380 T800 360 T1200 400", "M0 400 Q200 420, 400 370 T800 390 T1200 400"] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M0 440 Q300 400, 500 430 T900 410 T1200 440"
          stroke="white" strokeWidth="0.8"
          animate={{ d: ["M0 440 Q300 400, 500 430 T900 410 T1200 440", "M0 440 Q300 460, 500 420 T900 445 T1200 440"] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          d="M0 480 Q250 450, 450 470 T850 460 T1200 480"
          stroke="white" strokeWidth="0.6"
          animate={{ d: ["M0 480 Q250 450, 450 470 T850 460 T1200 480", "M0 480 Q250 500, 450 465 T850 490 T1200 480"] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
        />
        <motion.path
          d="M0 520 Q200 500, 400 515 T800 505 T1200 520"
          stroke="white" strokeWidth="0.5"
          animate={{ d: ["M0 520 Q200 500, 400 515 T800 505 T1200 520", "M0 520 Q200 535, 400 510 T800 530 T1200 520"] }}
          transition={{ duration: 11, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 3 }}
        />
        <motion.path
          d="M0 560 Q300 540, 600 555 T1000 545 T1200 560"
          stroke="white" strokeWidth="0.4"
          animate={{ d: ["M0 560 Q300 540, 600 555 T1000 545 T1200 560", "M0 560 Q300 570, 600 550 T1000 565 T1200 560"] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 4 }}
        />
      </motion.svg>

      {/* === FLOATING PARTICLES === */}
      {[
        { x: "8%", y: "18%", size: 5, delay: 0, dur: 7 },
        { x: "88%", y: "12%", size: 7, delay: 1, dur: 8 },
        { x: "72%", y: "78%", size: 4, delay: 0.5, dur: 6 },
        { x: "18%", y: "75%", size: 6, delay: 1.5, dur: 7.5 },
        { x: "45%", y: "8%", size: 3, delay: 2, dur: 5.5 },
        { x: "92%", y: "55%", size: 5, delay: 0.8, dur: 8.5 },
        { x: "35%", y: "65%", size: 4, delay: 1.2, dur: 6.5 },
        { x: "5%", y: "50%", size: 3, delay: 2.5, dur: 6 },
        { x: "60%", y: "25%", size: 6, delay: 3, dur: 7 },
        { x: "78%", y: "42%", size: 4, delay: 0.3, dur: 9 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white hidden md:block"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{
            y: [0, -25, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            opacity: [0.08, 0.25, 0.08],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* === ANIMATED HEXAGONS === */}
      <motion.svg
        className="absolute top-[12%] left-[6%] w-20 h-20 hidden lg:block"
        viewBox="0 0 80 80"
        fill="none"
        animate={{ opacity: [0.06, 0.14, 0.06], rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M40 5L70 22.5V57.5L40 75L10 57.5V22.5L40 5Z" stroke="white" strokeWidth="1" />
        <path d="M40 18L58 28.5V49.5L40 60L22 49.5V28.5L40 18Z" stroke="white" strokeWidth="0.5" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[25%] left-[12%] w-14 h-14 hidden lg:block"
        viewBox="0 0 64 64"
        fill="none"
        animate={{ opacity: [0.05, 0.12, 0.05], rotate: [-20, 40, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" stroke="white" strokeWidth="0.8" />
      </motion.svg>

      {/* === WAVE BOTTOM DIVIDER === */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z" fill="#F7F6F2" />
        </svg>
      </div>

      {/* === MAIN CONTENT === */}
      <Container className="relative z-10 pt-28 pb-24 md:pt-32 md:pb-28">
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
              className="text-[2.25rem] leading-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-white md:leading-[1.1] mb-5 md:mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Premium Animal Feeds & Agro Solutions for Nigeria&apos;s Growing Industry
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-white/85 max-w-[520px] leading-relaxed mb-8 md:mb-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              From finished feeds to raw ingredients, we supply farms, feed millers,
              and agribusinesses with reliable, high-quality nutrition across Ogun State.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Button href="/products" variant="primary-inverted" size="lg" className="w-full sm:w-auto min-h-[52px]">
                  Explore Our Products
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Button 
                  onClick={() => setIsQuizOpen(true)} 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary min-h-[52px]"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>

            {/* Scroll indicator for mobile */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2 text-white/60"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: 3D Product showcase */}
          <Product3D />
        </div>
      </Container>

      {/* Quiz Modal */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
