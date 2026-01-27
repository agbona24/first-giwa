"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { COMPANY } from "@/lib/constants";

export default function DesktopFloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actions = [
    {
      label: "Call Us",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      href: `tel:${COMPANY.phone}`,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      label: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.316-2.234l-.44-.37-3.528 1.183 1.183-3.528-.37-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
      href: `https://wa.me/${COMPANY.whatsapp}?text=Hi, I'm interested in your feed products`,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      external: true,
    },
    {
      label: "Get Quote",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      href: "/contact",
      color: "bg-gradient-to-br from-primary to-primary-dark",
      hoverColor: "hover:from-primary-dark hover:to-primary",
    },
  ];

  return (
    <>
      {/* Action buttons */}
      <div className="hidden md:block fixed bottom-8 left-8 z-50">
        <div className="flex flex-col gap-3">
          {actions.map((action, index) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className={`group relative w-14 h-14 ${action.color} ${action.hoverColor} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              {action.icon}

              {/* Tooltip */}
              <motion.span
                className="absolute left-16 bg-text text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={false}
                transition={{ duration: 0.2 }}
              >
                {action.label}
                {/* Arrow */}
                <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-text rotate-45" />
              </motion.span>

              {/* Pulse effect */}
              <span className="absolute inset-0 rounded-full border-2 border-current animate-ping opacity-20" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Back to top button - positioned separately on the far right */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="hidden md:flex fixed bottom-8 left-28 z-50 w-14 h-14 bg-gradient-to-br from-accent to-orange-600 hover:from-orange-600 hover:to-accent rounded-full items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>

            {/* Tooltip */}
            <motion.span
              className="absolute left-16 bg-text text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={false}
              transition={{ duration: 0.2 }}
            >
              Back to Top
              {/* Arrow */}
              <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-text rotate-45" />
            </motion.span>

            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping opacity-20" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
