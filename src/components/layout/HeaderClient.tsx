"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function HeaderClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolid
            ? "backdrop-blur-xl bg-white/90 border-b border-neutral-200/50 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary origin-left"
          style={{ scaleX }}
        />

        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 relative">
              <div className={`transition-all duration-300 ${showSolid ? "brightness-100" : "brightness-0 invert"}`}>
                <Image
                  src="/images/logo.svg"
                  alt={COMPANY.name}
                  width={180}
                  height={50}
                  priority
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredLink === link.href;
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 group"
                  >
                    <motion.span
                      className={`relative text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? showSolid
                            ? "text-primary"
                            : "text-white"
                          : showSolid
                            ? "text-text-dark hover:text-primary"
                            : "text-white/90 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.label}
                    </motion.span>
                    
                    {/* Active/Hover indicator */}
                    {(isActive || isHovered) && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                          showSolid
                            ? "bg-gradient-to-r from-primary to-accent"
                            : "bg-white"
                        }`}
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    {/* Glow effect on hover */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href="/contact"
                  variant={showSolid ? "primary" : "primary-inverted"}
                  size="sm"
                  className="relative group overflow-hidden"
                >
                  <span className="relative z-10">Get a Quote</span>
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                  />
                </Button>
              </motion.div>
            </div>

            <motion.button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                showSolid 
                  ? "text-text-dark hover:bg-primary/10" 
                  : "text-white hover:bg-white/10"
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </motion.button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
