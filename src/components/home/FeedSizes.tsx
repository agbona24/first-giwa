"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/motion/FadeUp";

const sizes = [
  { size: "2mm", label: "Starter", desc: "Fry & chicks", color: "from-emerald-400 to-green-500" },
  { size: "3mm", label: "Grower", desc: "Most popular", highlighted: true, color: "from-primary to-green-600" },
  { size: "4mm", label: "Finisher", desc: "Medium fish & poultry", color: "from-teal-400 to-emerald-500" },
  { size: "6mm", label: "Jumbo", desc: "Large fish & livestock", color: "from-blue-400 to-cyan-500" },
  { size: "8mm", label: "Extra", desc: "Catfish & specialty", color: "from-violet-400 to-purple-500" },
];

function InteractiveSizeNode({ 
  item, 
  index, 
  isActive, 
  onHover 
}: { 
  item: typeof sizes[0]; 
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 400, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const baseSize = item.highlighted ? 140 : 110 + index * 5;
  const activeScale = isActive ? 1.15 : 1;

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
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
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.12, 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1] 
      }}
    >
      {/* Outer glow ring */}
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} blur-xl`}
        style={{ 
          width: baseSize, 
          height: baseSize,
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isActive ? 0.6 : item.highlighted ? 0.3 : 0.15,
          scale: isActive ? 1.3 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main circle */}
      <motion.div
        className={`relative flex flex-col items-center justify-center rounded-full border-2 backdrop-blur-sm overflow-hidden
          ${item.highlighted 
            ? "border-white/30 bg-gradient-to-br from-primary to-green-600 text-white shadow-2xl shadow-primary/40" 
            : "border-white/20 bg-white/90 text-text hover:border-primary/40"
          }`}
        style={{ 
          width: baseSize, 
          height: baseSize,
          transform: "translateZ(20px)",
        }}
        animate={{
          scale: activeScale,
          boxShadow: isActive 
            ? `0 20px 40px rgba(31, 94, 46, 0.4), 0 0 60px ${item.highlighted ? 'rgba(31, 94, 46, 0.3)' : 'rgba(31, 94, 46, 0.2)'}` 
            : item.highlighted 
              ? "0 10px 30px rgba(31, 94, 46, 0.3)" 
              : "0 4px 20px rgba(0,0,0,0.1)",
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full" />
        
        {/* Inner decorative ring */}
        <motion.div 
          className={`absolute inset-2 rounded-full border ${item.highlighted ? "border-white/20" : "border-primary/10"}`}
          animate={{ rotate: isActive ? 360 : 0 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Particle effect on hover */}
        {isActive && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1.5 h-1.5 rounded-full ${item.highlighted ? "bg-white/60" : "bg-primary/40"}`}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(i * 60 * Math.PI / 180) * 60,
                  y: Math.sin(i * 60 * Math.PI / 180) * 60,
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </>
        )}

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.span 
            className="text-2xl md:text-3xl font-bold font-heading block"
            animate={{ scale: isActive ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.size}
          </motion.span>
          <span className={`text-xs font-semibold ${item.highlighted ? "text-white/90" : "text-text-muted"}`}>
            {item.label}
          </span>
        </div>
      </motion.div>

      {/* Description tooltip */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isActive ? 1 : 0, 
          y: isActive ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="px-3 py-1.5 rounded-full bg-text text-white text-xs font-medium shadow-lg">
          {item.desc}
        </span>
      </motion.div>
    </motion.div>
  );
}

function ConnectorLine({ from, to, isActive }: { from: number; to: number; isActive: boolean }) {
  return (
    <motion.div
      className="absolute h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 hidden lg:block"
      style={{
        width: "60px",
        top: "50%",
        left: `calc(${from}% + 55px)`,
        transformOrigin: "left center",
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 + from * 0.01, duration: 0.5 }}
    >
      {/* Animated pulse along the line */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-primary -top-[3px] -left-1"
        animate={{
          x: isActive ? [0, 60, 0] : 0,
          opacity: isActive ? [1, 0.5, 1] : 0.5,
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function FeedSizes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section background="surface" className="py-20 md:py-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Flexibility"
              heading="Available in All Sizes"
              description="From 2mm starter pellets to 8mm jumbo feeds, we produce the right size for every stage of growth."
              align="left"
            />
            <FadeUp delay={0.2}>
              <p className="text-text-muted leading-relaxed mb-8">
                Our 3mm pellet is our most requested size, ideal for a wide range
                of fish and poultry at the growing stage. All sizes are produced
                with consistent quality and optimal nutrient density.
              </p>
              
              {/* Size legend */}
              <div className="flex flex-wrap gap-3">
                {sizes.map((item, i) => (
                  <motion.div
                    key={item.size}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all
                      ${activeIndex === i 
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                        : "bg-surface-dark/50 text-text-muted hover:bg-surface-dark"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  >
                    {item.size} - {item.label}
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="relative">
              {/* Central decoration */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  className="w-[300px] h-[300px] rounded-full border border-primary/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-primary/5"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Size nodes in a flowing layout */}
              <div className="flex flex-wrap gap-6 md:gap-8 justify-center items-center min-h-[300px] py-12">
                {sizes.map((item, i) => (
                  <InteractiveSizeNode
                    key={item.size}
                    item={item}
                    index={i}
                    isActive={activeIndex === i}
                    onHover={setActiveIndex}
                  />
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
