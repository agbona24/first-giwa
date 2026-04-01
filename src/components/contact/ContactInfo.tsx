"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

const info = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: COMPANY.address,
    sublabel: COMPANY.addressLabel,
    gradient: "from-primary to-primary-dark",
    bgGlow: "bg-primary/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: `${COMPANY.phone} • ${COMPANY.phone2} • ${COMPANY.phone3} • ${COMPANY.phone4}`,
    gradient: "from-blue-500 to-cyan-600",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: COMPANY.email,
    gradient: "from-purple-500 to-pink-600",
    bgGlow: "bg-purple-500/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    value: COMPANY.hours,
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/20",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {info.map((item, index) => {
        const [isHovered, setIsHovered] = useState(false);
        
        return (
          <motion.div
            key={item.label}
            className="group relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Card */}
            <motion.div
              className="relative flex items-start gap-4 backdrop-blur-xl bg-white/80 rounded-2xl p-5 border border-neutral-200/50 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 ${item.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon container */}
              <motion.div
                className={`relative shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-white">
                  {item.icon}
                </div>

                {/* Pulsing ring */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-30`}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-light mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-text-dark break-words">{item.value}</p>
                {item.sublabel && (
                  <p className="text-xs text-text-muted mt-0.5">{item.sublabel}</p>
                )}
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
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                }}
              />
            </motion.div>

            {/* Floating glow */}
            <motion.div
              className={`absolute -z-10 inset-0 rounded-2xl blur-xl opacity-0 ${item.bgGlow}`}
              animate={isHovered ? { opacity: 0.4 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        );
      })}

      {/* WhatsApp button */}
      <motion.div
        className="pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          href={`https://wa.me/${COMPANY.whatsapp}`}
          variant="whatsapp"
          size="md"
          className="w-full"
          external
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.316-2.234l-.44-.37-3.528 1.183 1.183-3.528-.37-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Chat on WhatsApp
        </Button>
      </motion.div>
    </motion.div>
  );
}
