"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="relative backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 md:p-10 text-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Success glow */}
        <motion.div
          className="absolute inset-0 bg-primary/5"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <motion.div
          className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-0.5 mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </motion.div>
        
        <motion.h3 
          className="font-heading font-bold text-2xl mb-3 text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Message Sent!
        </motion.h3>
        
        <motion.p 
          className="text-text-muted"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative backdrop-blur-xl bg-white/80 rounded-3xl p-6 md:p-8 border border-neutral-200/50 shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white text-text text-sm focus:outline-none focus:border-primary transition-all"
              placeholder="Your full name"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label htmlFor="email" className="block text-sm font-semibold text-text mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white text-text text-sm focus:outline-none focus:border-primary transition-all"
              placeholder="you@example.com"
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2">
              Phone Number
            </label>
            <motion.input
              id="phone"
              name="phone"
              type="tel"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white text-text text-sm focus:outline-none focus:border-primary transition-all"
              placeholder="+2348101632636"
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label htmlFor="company" className="block text-sm font-semibold text-text mb-2">
              Company Name
            </label>
            <motion.input
              id="company"
              name="company"
              type="text"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white text-text text-sm focus:outline-none focus:border-primary transition-all"
              placeholder="Your company or farm name"
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="subject" className="block text-sm font-semibold text-text mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <motion.select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white text-text text-sm focus:outline-none focus:border-primary transition-all appearance-none"
            onFocus={() => setFocusedField("subject")}
            onBlur={() => setFocusedField(null)}
            whileFocus={{ scale: 1.01 }}
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="bulk-order">Bulk Order</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </motion.select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <label htmlFor="message" className="block text-sm font-semibold text-text mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <motion.textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white text-text text-sm focus:outline-none focus:border-primary transition-all resize-none"
            placeholder="Tell us about your requirements..."
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            whileFocus={{ scale: 1.01 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
            <span className="flex items-center gap-2">
              Send Message
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
        </motion.div>
      </form>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-b-3xl" />
    </motion.div>
  );
}
