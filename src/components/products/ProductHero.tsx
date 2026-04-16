"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/Container";

const stats = [
  { value: "43+", label: "Products" },
  { value: "4", label: "Categories" },
  { value: "2mm–8mm", label: "Pellet Sizes" },
  { value: "Bulk", label: "Supply Available" },
];

export default function ProductHero() {
  return (
    <section className="relative min-h-[75vh] flex flex-col overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-secondary">

      {/* Layered background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-secondary/10 blur-3xl"
          animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main content */}
      <Container className="relative z-10 flex-1 flex items-center py-28 md:py-36">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Breadcrumb */}
            <motion.div
              className="flex items-center gap-2 text-white/50 text-sm mb-6"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white/90 font-medium">Products</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.span
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Full Product Range
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white font-heading leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Premium{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Feed Solutions</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-light to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              <br />
              <span className="text-white/70 text-3xl md:text-4xl xl:text-5xl font-medium">
                for Every Farm
              </span>
            </motion.h1>

            <motion.p
              className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Finished feeds, raw ingredients, premixes and additives — everything your livestock needs, from First-Giwa.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3.5 rounded-xl hover:bg-white/90 transition-colors shadow-xl shadow-black/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84" />
                </svg>
                Browse Catalog
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
              >
                Get Pricing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — visual feature cards */}
          <motion.div
            className="hidden lg:grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { emoji: "🐔", title: "Poultry Feeds", desc: "Starter, grower & finisher for broilers and layers", color: "from-amber-500/20 to-yellow-500/10" },
              { emoji: "🐟", title: "Fish Feeds", desc: "Pelleted catfish & tilapia feeds, 2mm–8mm", color: "from-blue-500/20 to-cyan-500/10" },
              { emoji: "🌾", title: "Raw Ingredients", desc: "Protein meals, energy sources & premixes in bulk", color: "from-green-500/20 to-emerald-500/10" },
              { emoji: "🧪", title: "Additives", desc: "Enzymes, vitamins, toxin binders & more", color: "from-purple-500/20 to-pink-500/10" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className={`relative rounded-2xl bg-gradient-to-br ${card.color} border border-white/15 backdrop-blur-sm p-5 overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-3xl mb-3">{card.emoji}</div>
                <h3 className="font-heading font-bold text-white text-sm mb-1">{card.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/10 backdrop-blur-sm bg-black/10">
        <Container>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="py-5 px-6 text-center">
                <div className="font-heading font-bold text-2xl text-white">{s.value}</div>
                <div className="text-white/50 text-xs mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* Wave divider */}
      <div className="relative z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: 60 }}>
          <path d="M0 30C360 60 720 0 1080 30C1260 45 1380 20 1440 30V60H0V30Z" fill="#F7F6F2" />
        </svg>
      </div>
    </section>
  );
}
