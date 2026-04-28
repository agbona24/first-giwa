"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { useCart } from "@/contexts/CartContext";

export default function HeaderClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const { cart, removeFromCart, clearCart } = useCart();
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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setCartOpen(false);
      }
    }
    if (cartOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cartOpen]);

  const whatsappCheckoutUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hello First-Giwa Feeds! I'd like to enquire about the following products:\n\n${cart.map((name, i) => `${i + 1}. ${name}`).join("\n")}\n\nPlease provide pricing and availability.`
  )}`;

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
          <div className="flex items-center justify-between h-28 md:h-36">
            <Link href="/" className="flex items-center gap-2 relative">
              <div className={`transition-all duration-300 ${showSolid ? "brightness-100" : "brightness-0 invert"}`}>
                <img
                  src={`/images/logo_new.png?t=${Date.now()}`}
                  alt={COMPANY.name}
                  style={{ height: '150px', width: '150px' }}
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

            <div className="flex items-center gap-2">
              {/* ThemeToggle — desktop only */}
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>

              {/* Cart icon + dropdown — all breakpoints */}
              <div className="relative" ref={cartRef}>
                <motion.button
                  onClick={() => setCartOpen((o) => !o)}
                  className={`relative p-2 rounded-lg transition-all duration-300 ${
                    showSolid
                      ? "text-text-dark hover:bg-primary/10"
                      : "text-white hover:bg-white/10"
                  }`}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Cart"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <AnimatePresence>
                    {cart.length > 0 && (
                      <motion.span
                        key="badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-[#25D366] text-white text-[10px] font-bold rounded-full px-1"
                      >
                        {cart.length}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Cart dropdown */}
                <AnimatePresence>
                  {cartOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute right-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-50"
                    >
                      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100">
                        <span className="font-bold text-text-dark text-sm">
                          Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
                        </span>
                        {cart.length > 0 && (
                          <button
                            onClick={clearCart}
                            className="text-xs text-red-500 hover:text-red-700 font-medium"
                          >
                            Clear all
                          </button>
                        )}
                      </div>

                      {cart.length === 0 ? (
                        <div className="flex flex-col items-center py-8 text-text-muted">
                          <svg className="w-10 h-10 mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>
                          <p className="text-sm">Your cart is empty</p>
                        </div>
                      ) : (
                        <>
                          <ul className="max-h-[240px] overflow-y-auto divide-y divide-neutral-100">
                            {cart.map((name) => (
                              <li key={name} className="flex items-center justify-between px-4 py-2.5">
                                <span className="text-sm text-text-dark font-medium truncate mr-2">{name}</span>
                                <button
                                  onClick={() => removeFromCart(name)}
                                  className="flex-shrink-0 p-1 text-text-muted hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
                                  aria-label={`Remove ${name}`}
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </li>
                            ))}
                          </ul>
                          <div className="p-3 border-t border-neutral-100">
                            <a
                              href={whatsappCheckoutUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setCartOpen(false)}
                              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-bold transition-colors"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.316-2.234l-.44-.37-3.528 1.183 1.183-3.528-.37-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                              </svg>
                              Checkout via WhatsApp
                            </a>
                          </div>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Get a Quote — desktop only */}
              <div className="hidden lg:flex">
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
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    />
                  </Button>
                </motion.div>
              </div>

              {/* Hamburger — mobile only */}
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
          </div>
        </Container>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
