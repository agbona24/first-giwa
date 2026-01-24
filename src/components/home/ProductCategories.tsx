"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUpVariants } from "@/lib/animations";
import Link from "next/link";

const categories = [
  {
    num: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Finished Feeds",
    description: "Complete nutrition solutions ready for your livestock — poultry and fish feeds in multiple pellet sizes.",
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/5",
    glowColor: "rgba(16, 185, 129, 0.4)",
    iconGradient: "from-emerald-500 to-green-600",
  },
  {
    num: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Raw Ingredients",
    description: "Premium raw materials for feed millers and formulators — protein meals, energy sources, and premixes.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-sky-500/5",
    glowColor: "rgba(59, 130, 246, 0.4)",
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    num: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Custom Formulations",
    description: "Tailored feed solutions for your specific requirements — we work with you to develop the right formula.",
    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/5",
    glowColor: "rgba(245, 158, 11, 0.4)",
    iconGradient: "from-amber-500 to-orange-500",
  },
];

function Premium3DCard({ children, className, glowColor }: { children: React.ReactNode; className?: string; glowColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseEnter={() => { setIsHovered(true); scale.set(1.02); }}
      onMouseLeave={() => { 
        x.set(0); 
        y.set(0); 
        setIsHovered(false);
        scale.set(1);
      }}
      style={{ 
        rotateX, 
        rotateY, 
        scale,
        transformStyle: "preserve-3d", 
        perspective: "1200px",
        boxShadow: isHovered ? `0 25px 50px -12px ${glowColor}` : "0 10px 40px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedIcon({ icon, gradient, isHovered }: { icon: React.ReactNode; gradient: string; isHovered: boolean }) {
  return (
    <motion.div
      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}
      animate={{
        y: isHovered ? -4 : 0,
        rotateZ: isHovered ? 5 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      style={{ transform: "translateZ(40px)" }}
    >
      {/* Pulsing ring effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient}`}
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.5, 0, 0.5] : 0,
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Icon with bounce animation */}
      <motion.div
        animate={{ 
          scale: isHovered ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

export default function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-background-alt via-background-alt to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-secondary/[0.04] blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[50%] left-[50%] w-64 h-64 rounded-full bg-accent/[0.03] blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(31,94,46,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,94,46,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="What We Offer"
          heading="Our Product Range"
          description="Quality feed solutions for every stage of your livestock production."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.title} 
              variants={fadeUpVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Premium3DCard className="group h-full cursor-pointer" glowColor={cat.glowColor}>
                {/* Glass card */}
                <div className="relative h-full backdrop-blur-xl bg-white/80 rounded-3xl p-8 lg:p-10 border border-white/60 overflow-hidden">
                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-3xl" />
                  
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} rounded-3xl`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
                    }}
                    animate={{
                      x: ["-150%", "150%"],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Number watermark with 3D effect */}
                  <motion.span 
                    className="absolute top-2 right-4 text-8xl font-black font-heading text-primary/[0.03] select-none"
                    style={{ transform: "translateZ(-20px)" }}
                    animate={{
                      opacity: hoveredIndex === index ? 0.12 : 0.03,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {cat.num}
                  </motion.span>

                  <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                    {/* Animated icon */}
                    <div className="mb-7">
                      <AnimatedIcon 
                        icon={cat.icon} 
                        gradient={cat.iconGradient} 
                        isHovered={hoveredIndex === index}
                      />
                    </div>

                    {/* Title with animated underline */}
                    <div className="relative mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold font-heading text-text">{cat.title}</h3>
                      <motion.div 
                        className={`h-0.5 bg-gradient-to-r ${cat.iconGradient} mt-2`}
                        initial={{ width: 0 }}
                        animate={{ width: hoveredIndex === index ? "60%" : "30%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    <p className="text-text-muted text-sm lg:text-base leading-relaxed mb-7">{cat.description}</p>

                    {/* Animated link */}
                    <Link
                      href="/products"
                      className="inline-flex items-center text-sm font-semibold gap-2 group/link"
                    >
                      <motion.span
                        className={`bg-gradient-to-r ${cat.iconGradient} bg-clip-text text-transparent`}
                        whileHover={{ x: 2 }}
                      >
                        Learn More
                      </motion.span>
                      <motion.div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${cat.iconGradient} flex items-center justify-center`}
                        whileHover={{ x: 4, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </Premium3DCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
