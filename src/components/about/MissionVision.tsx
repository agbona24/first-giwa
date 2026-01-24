"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const cards = [
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Our Mission",
    description: "To provide affordable, high-quality animal feeds and raw feed ingredients that help Nigerian farmers and agribusinesses grow their operations profitably and sustainably.",
    gradient: "from-primary via-primary-dark to-primary",
    accentColor: "text-white",
    bgGlow: "bg-primary/30",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    title: "Our Vision",
    description: "To be the most trusted and reliable feed supplier in South-West Nigeria, known for consistent quality, competitive pricing, and strong partnerships with the farming community.",
    gradient: "from-accent via-secondary to-accent",
    accentColor: "text-white",
    bgGlow: "bg-accent/30",
  },
];

function Premium3DCard({ 
  icon, 
  title, 
  description, 
  gradient,
  accentColor,
  bgGlow,
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  gradient: string;
  accentColor: string;
  bgGlow: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  return (
    <motion.div
      className="perspective-1000 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        className="relative h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card */}
        <motion.div
          className={`relative h-full bg-gradient-to-br ${gradient} rounded-3xl p-8 md:p-10 overflow-hidden`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated gradient orb */}
          <motion.div
            className={`absolute top-0 right-0 w-64 h-64 ${bgGlow} rounded-full blur-3xl opacity-50`}
            animate={isHovered ? {
              scale: [1, 1.3, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Glass overlay */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5" />

          <div className="relative z-10">
            {/* Icon container with pulsing effect */}
            <motion.div
              className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-6 relative overflow-hidden"
              animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className={`${accentColor} relative z-10`}>{icon}</div>
              
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/20"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
            </motion.div>

            {/* Title */}
            <h3 className={`text-2xl md:text-3xl font-bold ${accentColor} font-heading mb-4`}>
              {title}
            </h3>

            {/* Description */}
            <p className={`${accentColor}/90 leading-relaxed text-lg`}>
              {description}
            </p>

            {/* Decorative line */}
            <motion.div
              className="mt-6 h-1 bg-white/30 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: isHovered ? "100%" : "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-0"
            animate={isHovered ? { 
              opacity: [0, 0.2, 0],
              x: ["-100%", "100%"]
            } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            }}
          />

          {/* Corner accent */}
          <motion.div
            className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{
              scale: isHovered ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Floating glow behind card */}
        <motion.div
          className={`absolute -z-10 inset-0 ${bgGlow} rounded-3xl blur-2xl opacity-0`}
          animate={isHovered ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function MissionVision() {
  return (
    <Section background="default">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Premium3DCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
