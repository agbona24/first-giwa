"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Product3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural movement
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  // Shadow offset follows tilt
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const shadowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 30]), springConfig);

  // Shimmer light position
  const shimmerX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-100, 100]), springConfig);
  const shimmerY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-100, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-[500px] md:min-h-[650px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Orbiting particles */}
      <motion.div
        className="absolute inset-0 m-auto w-[85%] h-[85%] hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-white/30" />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white/20" />
        <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-secondary-light/40" />
      </motion.div>

      <motion.div
        className="absolute inset-0 m-auto w-[68%] h-[68%] hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 right-[20%] w-2 h-2 rounded-full bg-accent-light/40" />
        <div className="absolute bottom-[10%] left-[10%] w-1.5 h-1.5 rounded-full bg-white/25" />
      </motion.div>

      {/* 3D ring platform */}
      <motion.div
        className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[70%] h-[18%] hidden md:block"
        style={{
          perspective: "800px",
          rotateX: 75,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            borderStyle: "dashed",
            borderWidth: "1px",
          }}
        />
      </motion.div>

      {/* Pulsing energy rings */}
      <motion.div
        className="absolute inset-0 m-auto w-[72%] h-[72%] rounded-full border border-white/8"
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.22, 0.08] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 m-auto w-[88%] h-[88%] rounded-full border border-white/5"
        animate={{ scale: [1, 1.08, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Animated dashed orbit */}
      <motion.svg
        className="absolute inset-0 m-auto w-[90%] h-[90%] hidden md:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <motion.circle
          cx="100" cy="100" r="96"
          stroke="white" strokeWidth="0.5" strokeDasharray="4 6"
          opacity="0.1"
          animate={{ strokeDashoffset: [0, -40] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {/* Dynamic glow that follows tilt */}
      <motion.div
        className="absolute inset-0 m-auto w-[50%] h-[50%] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(62,142,65,0.3) 0%, transparent 70%)",
          x: shimmerX,
          y: shimmerY,
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === 3D PRODUCT CONTAINER === */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[550px] mx-auto z-10 cursor-grab active:cursor-grabbing"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="relative"
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
          initial={{ rotateY: -90, opacity: 0, scale: 0.6 }}
          animate={{
            rotateY: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Auto-float when not hovered */}
          <motion.div
            animate={!isHovered ? {
              y: [0, -16, 0],
              rotateY: [0, 5, 0, -5, 0],
              rotateX: [0, 3, 0, -3, 0],
            } : {}}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Main product image */}
            <div className="relative aspect-square">
              <Image
                src="/images/product.webp"
                alt="First-Giwa premium feed product"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 420px"
                style={{ transform: "translateZ(40px)" }}
              />

              {/* Holographic shimmer overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
                style={{ transform: "translateZ(50px)" }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(
                      105deg,
                      transparent 40%,
                      rgba(255,255,255,0.08) 45%,
                      rgba(255,255,255,0.15) 50%,
                      rgba(255,255,255,0.08) 55%,
                      transparent 60%
                    )`,
                    x: shimmerX,
                  }}
                />
              </motion.div>

              {/* Edge glow on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 30px rgba(255,255,255,0.1)",
                      transform: "translateZ(45px)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* 3D Dynamic shadow */}
            <motion.div
              className="absolute bottom-[-8%] left-[10%] right-[10%] h-[20%] rounded-[50%] blur-2xl"
              style={{
                background: "rgba(0,0,0,0.3)",
                x: shadowX,
                y: shadowY,
                transform: "translateZ(-20px)",
              }}
              animate={!isHovered ? {
                scale: [0.9, 1, 0.9],
                opacity: [0.25, 0.4, 0.25],
              } : {}}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Reflection (mirrored, faded) */}
            <motion.div
              className="absolute top-[100%] left-0 right-0 h-[35%] overflow-hidden opacity-15 hidden md:block"
              style={{
                transform: "translateZ(-10px) scaleY(-1)",
                maskImage: "linear-gradient(to top, transparent 20%, black 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 20%, black 100%)",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/product.webp"
                  alt=""
                  fill
                  className="object-contain blur-[1px]"
                  sizes="420px"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sparkles */}
      {[
        { top: "10%", right: "15%", delay: 0, size: "w-5 h-5" },
        { top: "75%", right: "10%", delay: 1.5, size: "w-3 h-3" },
        { top: "20%", left: "12%", delay: 3, size: "w-4 h-4" },
        { top: "68%", left: "8%", delay: 2, size: "w-3 h-3" },
        { top: "38%", right: "3%", delay: 4, size: "w-4 h-4" },
        { top: "50%", left: "5%", delay: 1, size: "w-3 h-3" },
      ].map((pos, i) => (
        <motion.svg
          key={i}
          className={`absolute ${pos.size} hidden md:block`}
          style={{ top: pos.top, right: "right" in pos ? pos.right : undefined, left: "left" in pos ? pos.left : undefined }}
          viewBox="0 0 16 16"
          fill="white"
          animate={{ opacity: [0, 0.9, 0], scale: [0.3, 1.4, 0.3], rotate: [0, 90, 180] }}
          transition={{ duration: 3, repeat: Infinity, delay: pos.delay, ease: "easeInOut" }}
        >
          <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" />
        </motion.svg>
      ))}
    </motion.div>
  );
}
