"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { fadeUpVariants } from "@/lib/animations";

const audiences = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Poultry Farms",
    desc: "Broiler & layer operations",
    gradient: "from-amber-400 to-orange-500",
    bgGlow: "rgba(251, 191, 36, 0.3)",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18a.94.94 0 00-.662.274.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
      </svg>
    ),
    title: "Fish Farms",
    desc: "Catfish & tilapia producers",
    gradient: "from-cyan-400 to-blue-500",
    bgGlow: "rgba(34, 211, 238, 0.3)",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Feed Distributors",
    desc: "Bulk & wholesale supply",
    gradient: "from-emerald-400 to-green-500",
    bgGlow: "rgba(52, 211, 153, 0.3)",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: "Agro Retailers",
    desc: "Feed & agro-allied shops",
    gradient: "from-violet-400 to-purple-500",
    bgGlow: "rgba(167, 139, 250, 0.3)",
  },
];

function PremiumCard({ 
  item, 
  index, 
  isActive, 
  onHover 
}: { 
  item: typeof audiences[0]; 
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      className="relative group"
      onMouseMove={handleMouse}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
        onHover(null);
      }}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl blur-2xl -z-10"
        style={{ backgroundColor: item.bgGlow }}
        animate={{
          opacity: isActive ? 0.6 : 0,
          scale: isActive ? 1.1 : 0.9,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Card */}
      <motion.div
        className="relative h-full backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 overflow-hidden"
        animate={{
          y: isActive ? -8 : 0,
          boxShadow: isActive 
            ? "0 25px 50px -12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" 
            : "0 10px 40px -10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
        
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${item.bgGlow}, transparent, ${item.bgGlow})`,
            padding: "1px",
          }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
          }}
          animate={{
            x: isActive ? ["-150%", "150%"] : "-150%",
          }}
          transition={{
            duration: 1,
            repeat: isActive ? Infinity : 0,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon container with gradient background */}
          <motion.div
            className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}
            animate={{
              rotate: isActive ? 5 : 0,
              scale: isActive ? 1.1 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            style={{ transform: "translateZ(30px)" }}
          >
            {/* Pulsing ring */}
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient}`}
              animate={{
                scale: isActive ? [1, 1.3, 1] : 1,
                opacity: isActive ? [0.5, 0, 0.5] : 0,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Icon */}
            <motion.div
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="text-white font-bold font-heading text-lg md:text-xl mb-2"
            style={{ transform: "translateZ(20px)" }}
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.title}
          </motion.h3>

          {/* Description */}
          <p className="text-white/70 text-sm md:text-base" style={{ transform: "translateZ(15px)" }}>
            {item.desc}
          </p>

          {/* Decorative line */}
          <motion.div
            className={`h-0.5 bg-gradient-to-r ${item.gradient} mt-4 rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: isActive ? "60%" : "30%" }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="100" cy="0" r="80" stroke="white" strokeWidth="0.5" />
            <circle cx="100" cy="0" r="60" stroke="white" strokeWidth="0.5" />
            <circle cx="100" cy="0" r="40" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhoWeSupply() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section background="primary" className="py-20 md:py-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Our Clients"
          heading="Who We Supply"
          description="We serve a wide range of agricultural businesses across Ogun State and beyond."
          light
        />

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {audiences.map((item, index) => (
            <PremiumCard
              key={item.title}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onHover={setActiveIndex}
            />
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
