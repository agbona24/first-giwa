"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuizAnswer {
  animalType?: string;
  farmSize?: string;
  feedPurpose?: string;
  experience?: string;
}

const animalTypes = [
  {
    id: "poultry",
    label: "Poultry",
    icon: "🐔",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "cattle",
    label: "Cattle",
    icon: "🐄",
    gradient: "from-primary to-primary-dark",
  },
  {
    id: "fish",
    label: "Fish",
    icon: "🐟",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "swine",
    label: "Swine",
    icon: "🐷",
    gradient: "from-pink-500 to-rose-600",
  },
];

const farmSizes = [
  { id: "small", label: "Small Scale", desc: "< 500 animals", icon: "🏡" },
  { id: "medium", label: "Medium Scale", desc: "500 - 5,000", icon: "🏭" },
  { id: "large", label: "Large Scale", desc: "> 5,000 animals", icon: "🏢" },
  { id: "commercial", label: "Commercial", desc: "Industrial level", icon: "🏗️" },
];

const feedPurposes = [
  { id: "growth", label: "Growth & Development", icon: "📈" },
  { id: "maintenance", label: "Maintenance", icon: "⚖️" },
  { id: "breeding", label: "Breeding", icon: "💕" },
  { id: "finishing", label: "Finishing/Fattening", icon: "🎯" },
];

const experiences = [
  { id: "beginner", label: "Just Starting", icon: "🌱" },
  { id: "intermediate", label: "Growing", icon: "🌿" },
  { id: "expert", label: "Experienced", icon: "🌳" },
];

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleAnswer = (key: keyof QuizAnswer, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    
    if (step < totalSteps - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  const getRecommendation = () => {
    const animal = animalTypes.find((a) => a.id === answers.animalType);
    const purpose = feedPurposes.find((p) => p.id === answers.feedPurpose);
    
    return {
      animal: animal?.label || "your animals",
      purpose: purpose?.label.toLowerCase() || "their needs",
      icon: animal?.icon || "🐾",
    };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-neutral-50 to-white rounded-3xl shadow-2xl border border-neutral-200/50"
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {/* Animated gradient orb */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl border border-neutral-200/50 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 text-text-dark"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!showResults ? (
            <>
              {/* Header */}
              <div className="p-8 pb-6 border-b border-neutral-200/50">
                <motion.div
                  className="text-center"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4">
                    <span className="text-2xl">🎯</span>
                    <span className="text-sm font-semibold text-primary">Feed Finder Quiz</span>
                  </div>
                  <h2 className="text-3xl font-bold text-text-dark mb-2">
                    Find Your Perfect Feed Solution
                  </h2>
                  <p className="text-text-muted">
                    Answer a few quick questions to get personalized recommendations
                  </p>
                </motion.div>

                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-text-muted">
                      Question {step + 1} of {totalSteps}
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-text-dark mb-3 text-center">
                        What type of animals do you raise?
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {animalTypes.map((animal, idx) => (
                          <motion.button
                            key={animal.id}
                            onClick={() => handleAnswer("animalType", animal.id)}
                            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                              answers.animalType === animal.id
                                ? "border-primary bg-primary/5"
                                : "border-neutral-200 hover:border-primary/50 bg-white"
                            }`}
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className={`text-5xl mb-3 bg-gradient-to-br ${animal.gradient} bg-clip-text`}>
                              {animal.icon}
                            </div>
                            <p className="font-semibold text-text-dark">{animal.label}</p>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-text-dark mb-3 text-center">
                        What's your farm size?
                      </h3>
                      <div className="space-y-3 mt-6">
                        {farmSizes.map((size, idx) => (
                          <motion.button
                            key={size.id}
                            onClick={() => handleAnswer("farmSize", size.id)}
                            className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                              answers.farmSize === size.id
                                ? "border-primary bg-primary/5"
                                : "border-neutral-200 hover:border-primary/50 bg-white"
                            }`}
                            whileHover={{ scale: 1.02, x: 8 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-3xl">{size.icon}</span>
                            <div className="text-left flex-1">
                              <p className="font-semibold text-text-dark">{size.label}</p>
                              <p className="text-sm text-text-muted">{size.desc}</p>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-text-dark mb-3 text-center">
                        What's your primary feeding purpose?
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {feedPurposes.map((purpose, idx) => (
                          <motion.button
                            key={purpose.id}
                            onClick={() => handleAnswer("feedPurpose", purpose.id)}
                            className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                              answers.feedPurpose === purpose.id
                                ? "border-primary bg-primary/5"
                                : "border-neutral-200 hover:border-primary/50 bg-white"
                            }`}
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="text-4xl mb-2">{purpose.icon}</div>
                            <p className="font-semibold text-text-dark text-sm">{purpose.label}</p>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-text-dark mb-3 text-center">
                        Your farming experience level?
                      </h3>
                      <div className="space-y-3 mt-6">
                        {experiences.map((exp, idx) => (
                          <motion.button
                            key={exp.id}
                            onClick={() => handleAnswer("experience", exp.id)}
                            className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                              answers.experience === exp.id
                                ? "border-primary bg-primary/5"
                                : "border-neutral-200 hover:border-primary/50 bg-white"
                            }`}
                            whileHover={{ scale: 1.02, x: 8 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-4xl">{exp.icon}</span>
                            <p className="font-semibold text-text-dark text-lg">{exp.label}</p>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Back button */}
                {step > 0 && (
                  <motion.button
                    onClick={() => setStep(step - 1)}
                    className="mt-6 text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </motion.button>
                )}
              </div>
            </>
          ) : (
            <motion.div
              className="p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Success animation */}
              <motion.div
                className="text-center mb-8"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h2 className="text-3xl font-bold text-text-dark mb-2">Perfect Match Found!</h2>
                <p className="text-text-muted">We've analyzed your needs and have the ideal solution</p>
              </motion.div>

              {/* Results card */}
              <motion.div
                className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 border border-neutral-200/50 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-center mb-4">
                  <span className="text-6xl mb-4 block">{getRecommendation().icon}</span>
                  <h3 className="text-xl font-bold text-text-dark mb-2">
                    Recommended for {getRecommendation().animal}
                  </h3>
                  <p className="text-text-muted">
                    Optimized for {getRecommendation().purpose} with premium quality ingredients
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="text-xs text-text-muted mb-1">Farm Size</p>
                    <p className="font-semibold text-text-dark capitalize">
                      {farmSizes.find((s) => s.id === answers.farmSize)?.label}
                    </p>
                  </div>
                  <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                    <p className="text-xs text-text-muted mb-1">Purpose</p>
                    <p className="font-semibold text-text-dark">
                      {feedPurposes.find((p) => p.id === answers.feedPurpose)?.label}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="space-y-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleClose}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Get Your Custom Quote
                </Button>

                <Button
                  href={`https://wa.me/${COMPANY.whatsapp}?text=Hi! I just completed the Feed Finder Quiz. I'm interested in feeds for ${getRecommendation().animal}.`}
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                  external
                  onClick={handleClose}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.316-2.234l-.44-.37-3.528 1.183 1.183-3.528-.37-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Chat on WhatsApp
                </Button>

                <button
                  onClick={resetQuiz}
                  className="w-full py-3 text-sm font-medium text-text-muted hover:text-primary transition-colors"
                >
                  Retake Quiz
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
