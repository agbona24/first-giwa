"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import { COMPANY } from "@/lib/constants";

// Animated floating particles
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient orbs
function AnimatedOrbs() {
  return (
    <>
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-tl from-yellow-500/30 to-transparent blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/10 via-transparent to-yellow-500/10 blur-3xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}

// Animated grid pattern
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{
          y: [0, 40],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Glowing border animation
function GlowingBorder() {
  return (
    <motion.div
      className="absolute inset-0 rounded-3xl"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        backgroundSize: "200% 100%",
      }}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  );
}

export default function HomeCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-surface overflow-hidden">
      <Container>
        <FadeUp>
          <motion.div 
            ref={containerRef}
            className="relative rounded-[2.5rem] px-8 py-16 md:px-20 md:py-24 text-center overflow-hidden cursor-default"
            onMouseMove={handleMouse}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: "1000px",
              background: "linear-gradient(135deg, #C97435 0%, #E8924A 25%, #C97435 50%, #A85D28 75%, #C97435 100%)",
              boxShadow: "0 25px 80px -20px rgba(201, 116, 53, 0.5), 0 10px 40px -10px rgba(0,0,0,0.3)",
            }}
          >
            {/* Animated background elements */}
            <AnimatedOrbs />
            <AnimatedGrid />
            <FloatingParticles />
            
            {/* Glowing border effect */}
            <div className="absolute inset-[1px] rounded-[2.4rem] overflow-hidden">
              <GlowingBorder />
            </div>

            {/* Diagonal shimmer overlay */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)",
              }}
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
            />

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-[2.5rem]" />

            {/* Content */}
            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
              {/* Decorative badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Ready to Serve You
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Ready to Partner{" "}
                <span className="relative inline-block">
                  With Us?
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <motion.path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    />
                  </motion.svg>
                </span>
              </motion.h2>

              <motion.p 
                className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Get competitive pricing on bulk orders. We supply quality livestock feeds
                and raw feed ingredients across Ogun State.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    href="/contact" 
                    variant="primary-inverted" 
                    size="lg"
                    className="shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-shadow"
                  >
                    Request a Quote
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    variant="whatsapp"
                    size="lg"
                    external
                    className="shadow-xl shadow-green-900/30 hover:shadow-2xl hover:shadow-green-900/40 transition-shadow"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.316-2.234l-.44-.37-3.528 1.183 1.183-3.528-.37-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    WhatsApp Us
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-20 h-20 opacity-20">
              <motion.svg 
                viewBox="0 0 80 80" 
                fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="15" stroke="white" strokeWidth="0.5" />
              </motion.svg>
            </div>
            <div className="absolute bottom-6 right-6 w-20 h-20 opacity-20">
              <motion.svg 
                viewBox="0 0 80 80" 
                fill="none"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="15" stroke="white" strokeWidth="0.5" />
              </motion.svg>
            </div>
          </motion.div>
        </FadeUp>
      </Container>
    </section>
  );
}
