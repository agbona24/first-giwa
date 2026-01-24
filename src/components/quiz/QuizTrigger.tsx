"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuizModal from "./QuizModal";

interface QuizTriggerProps {
  variant?: "floating" | "inline";
  label?: string;
}

export default function QuizTrigger({ variant = "floating", label = "Find Your Feed" }: QuizTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "inline") {
    return (
      <>
        <motion.button
          onClick={() => setIsOpen(true)}
          className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <span className="relative flex items-center gap-3 text-white font-bold text-lg">
            <span className="text-2xl">🎯</span>
            {label}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </motion.button>

        <QuizModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", duration: 0.6 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex items-center gap-3 pl-6 pr-5 py-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-2xl hover:shadow-primary/50 transition-all duration-300 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <span className="relative text-2xl">🎯</span>
          <AnimatePresence mode="wait">
            {isHovered && (
              <motion.span
                className="relative text-white font-bold whitespace-nowrap"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                Take Quiz
              </motion.span>
            )}
          </AnimatePresence>
          
          {/* Sparkle effect */}
          <motion.div
            className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              className="absolute bottom-full right-0 mb-3 px-4 py-2 rounded-xl bg-text-dark text-white text-sm font-medium whitespace-nowrap shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 2 }}
            >
              Find your perfect feed! 🎯
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-text-dark" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <QuizModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
