"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Real factory background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/factory.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={85}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(26, 92, 42, 0.82) 0%, transparent 60%),
            linear-gradient(160deg, rgba(15, 51, 24, 0.92) 0%, rgba(26, 84, 40, 0.85) 40%, rgba(23, 74, 36, 0.75) 70%, rgba(13, 44, 21, 0.88) 100%)
          `,
        }}
      />

      {/* Animated blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }} />

      {/* Floating particles */}
      {[
        { left: "8%", top: "15%", dur: 4.2, delay: 0 },
        { left: "22%", top: "72%", dur: 5.1, delay: 0.4 },
        { left: "38%", top: "33%", dur: 3.8, delay: 1.1 },
        { left: "55%", top: "88%", dur: 4.7, delay: 0.7 },
        { left: "67%", top: "20%", dur: 5.5, delay: 1.5 },
        { left: "80%", top: "60%", dur: 3.4, delay: 0.2 },
        { left: "12%", top: "45%", dur: 4.9, delay: 1.8 },
        { left: "92%", top: "35%", dur: 3.6, delay: 0.9 },
        { left: "47%", top: "55%", dur: 5.2, delay: 0.3 },
        { left: "73%", top: "80%", dur: 4.1, delay: 1.3 },
        { left: "30%", top: "10%", dur: 3.9, delay: 1.6 },
        { left: "85%", top: "12%", dur: 4.4, delay: 0.6 },
        { left: "5%", top: "90%", dur: 5.8, delay: 1.0 },
        { left: "60%", top: "42%", dur: 3.3, delay: 1.9 },
        { left: "95%", top: "70%", dur: 4.6, delay: 0.5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Content */}
      <Container className="relative z-10 py-32">
        <motion.div
          className="max-w-4xl"
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
            <span className="text-white/90">About</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About{" "}
            <span className="relative inline-block">
              First-Giwa Feeds
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
            className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Building Nigeria's agricultural future, one feed at a time.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              { value: "2015", label: "Established" },
              { value: "1000+", label: "Clients Served" },
              { value: "50+", label: "Products" },
              { value: "100%", label: "Quality Assured" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-white font-heading mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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
