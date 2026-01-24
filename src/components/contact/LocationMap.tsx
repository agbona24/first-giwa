"use client";

import { motion } from "framer-motion";

export default function LocationMap() {
  return (
    <motion.div
      className="mt-6 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <motion.div 
        className="backdrop-blur-xl bg-white/80 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-2xl"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d3.7!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="First-Giwa Feeds Location"
          className="w-full"
        />
        
        {/* Gradient bottom border */}
        <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-secondary" />
      </motion.div>
    </motion.div>
  );
}
