"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import CountUp from "@/components/motion/CountUp";
import { STATS } from "@/lib/constants";
import { fadeUpVariants } from "@/lib/animations";

const icons = [
  // Clock/Experience icon
  <svg key="exp" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Truck/Delivery icon
  <svg key="ton" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0V5.625m0 0a2.25 2.25 0 114.5 0M12 5.625a2.25 2.25 0 10-4.5 0M3.75 12h16.5" />
  </svg>,
  // Partners icon
  <svg key="par" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  // Products icon
  <svg key="pro" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>,
];

const iconColors = [
  "from-emerald-500 to-green-600",
  "from-blue-500 to-cyan-500",
  "from-amber-500 to-orange-500",
  "from-violet-500 to-purple-600",
];

function FloatingParticle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-20, -60],
        x: [0, Math.random() * 20 - 10],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export default function TrustIndicators() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-surface via-surface to-background overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1F5E2E 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }} />

      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUpVariants}
              className="relative group"
            >
              {/* Glass card with premium effects */}
              <motion.div 
                className="relative h-full backdrop-blur-xl bg-white/70 dark:bg-white/90 rounded-3xl p-7 md:p-9 border border-white/50 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10"
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                }}
                style={{
                  boxShadow: "0 8px 32px rgba(31, 94, 46, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(135deg, rgba(31,94,46,0.1) 0%, rgba(62,142,65,0.15) 50%, rgba(31,94,46,0.1) 100%)",
                  }}
                />

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)",
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating particles */}
                <div className="absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[0, 0.5, 1, 1.5].map((delay, idx) => (
                    <FloatingParticle key={idx} delay={delay} />
                  ))}
                </div>

                {/* Decorative rings */}
                <svg className="absolute -top-6 -right-6 w-32 h-32 text-primary/[0.03] group-hover:text-primary/[0.08] transition-colors duration-700" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
                </svg>

                <div className="relative z-10">
                  {/* Premium icon container with gradient */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconColors[i]} flex items-center justify-center text-white mb-5 shadow-lg`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 5,
                      boxShadow: "0 12px 24px rgba(31, 94, 46, 0.3)"
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {icons[i]}
                  </motion.div>

                  {/* Animated number with glow */}
                  <div className="relative">
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-primary font-heading mb-2 tracking-tight"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                    >
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </motion.div>
                    {/* Number glow effect */}
                    <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-primary/20 font-heading blur-xl -z-10">
                      {stat.value}{stat.suffix}
                    </div>
                  </div>

                  {/* Label with animated underline */}
                  <div className="relative inline-block">
                    <p className="text-sm md:text-base text-text-muted font-medium">{stat.label}</p>
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary/40 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
