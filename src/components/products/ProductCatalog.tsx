"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCart } from "@/contexts/CartContext";

type Category = "all" | "finished-feeds" | "protein-sources" | "energy-sources" | "premixes-additives";

interface Product {
  name: string;
  category: Exclude<Category, "all">;
}

const PRODUCTS: Product[] = [
  // Finished Feeds
  { name: "Creeps", category: "finished-feeds" },
  { name: "Giwa Feed", category: "finished-feeds" },
  { name: "Giwa Feed 2mm", category: "finished-feeds" },
  { name: "Giwa Feed 4mm", category: "finished-feeds" },
  { name: "GIWA FEED P & G", category: "finished-feeds" },
  { name: "GIWA FEEDS P & G", category: "finished-feeds" },
  { name: "Hope Feed 5mm", category: "finished-feeds" },
  { name: "Roshela", category: "finished-feeds" },

  // Protein Sources
  { name: "Bone meal", category: "protein-sources" },
  { name: "Feather meal", category: "protein-sources" },
  { name: "Fishmeal 60%", category: "protein-sources" },
  { name: "GNC", category: "protein-sources" },
  { name: "GNC Kano", category: "protein-sources" },
  { name: "Imported Bloodmeal", category: "protein-sources" },
  { name: "Local bloodmeal", category: "protein-sources" },
  { name: "Meat meal 55%", category: "protein-sources" },
  { name: "PKC", category: "protein-sources" },
  { name: "Poultry meal 65%", category: "protein-sources" },
  { name: "Soya meal", category: "protein-sources" },

  // Energy Sources
  { name: "Cassava flour", category: "energy-sources" },
  { name: "Cassava peel", category: "energy-sources" },
  { name: "COCO POPS", category: "energy-sources" },
  { name: "COCOSHELL", category: "energy-sources" },
  { name: "Garri", category: "energy-sources" },
  { name: "Palamu", category: "energy-sources" },
  { name: "Rice bran", category: "energy-sources" },
  { name: "SORGHUM", category: "energy-sources" },
  { name: "Soya oil", category: "energy-sources" },
  { name: "Wheat flour", category: "energy-sources" },
  { name: "Wheat offal", category: "energy-sources" },

  // Premixes & Additives
  { name: "Bio-vit", category: "premixes-additives" },
  { name: "Champremix", category: "premixes-additives" },
  { name: "Concentrate premix", category: "premixes-additives" },
  { name: "CRUSHING", category: "premixes-additives" },
  { name: "Enzymes", category: "premixes-additives" },
  { name: "Fish Prem", category: "premixes-additives" },
  { name: "KOKO", category: "premixes-additives" },
  { name: "Lysine", category: "premixes-additives" },
  { name: "Salt", category: "premixes-additives" },
  { name: "Toxin binder", category: "premixes-additives" },
  { name: "Venor", category: "premixes-additives" },
  { name: "Vitamin C Cups", category: "premixes-additives" },
  { name: "Vitranor", category: "premixes-additives" },
];

const TABS: { key: Category; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "finished-feeds", label: "Finished Feeds" },
  { key: "protein-sources", label: "Protein Sources" },
  { key: "energy-sources", label: "Energy Sources" },
  { key: "premixes-additives", label: "Premixes & Additives" },
];

const CATEGORY_CONFIG: Record<
  Exclude<Category, "all">,
  { label: string; gradient: string; badgeBg: string; badgeText: string; border: string; icon: React.ReactNode }
> = {
  "finished-feeds": {
    label: "Finished Feed",
    gradient: "from-primary/10 to-accent/10",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    border: "border-primary/30",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  "protein-sources": {
    label: "Protein Source",
    gradient: "from-emerald-500/10 to-green-500/10",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-700",
    border: "border-emerald-400/30",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082" />
      </svg>
    ),
  },
  "energy-sources": {
    label: "Energy Source",
    gradient: "from-amber-500/10 to-orange-500/10",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-700",
    border: "border-amber-400/30",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  "premixes-additives": {
    label: "Premix / Additive",
    gradient: "from-purple-500/10 to-pink-500/10",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-700",
    border: "border-purple-400/30",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
};

// ─── Product Card ─────────────────────────────────────────────────────────────

interface ProductCardProps {
  product: Product;
  index: number;
  inCart: boolean;
  onToggle: (name: string) => void;
}

function ProductCard({ product, index, inCart, onToggle }: ProductCardProps) {
  const config = CATEGORY_CONFIG[product.category];

  return (
    <motion.div
      className={`group relative flex flex-col rounded-2xl overflow-hidden border bg-gradient-to-br ${config.gradient} backdrop-blur-sm shadow-sm transition-all duration-300 ${
        inCart
          ? "border-[#25D366] shadow-[#25D366]/20 shadow-lg ring-2 ring-[#25D366]/30"
          : `${config.border} hover:shadow-lg`
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className="flex flex-col flex-1 p-5">
        {/* Category badge */}
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 w-fit ${config.badgeBg} ${config.badgeText}`}
        >
          {config.icon}
          {config.label}
        </span>

        {/* Product name */}
        <h3
          className={`font-heading font-bold text-base leading-snug mb-4 flex-1 transition-colors duration-200 ${
            inCart ? "text-[#128C7E]" : "text-text-dark group-hover:text-primary"
          }`}
        >
          {product.name}
        </h3>

        {/* Add / Remove button */}
        <motion.button
          onClick={() => onToggle(product.name)}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            inCart
              ? "bg-[#25D366] text-white hover:bg-red-500"
              : "bg-white border-2 border-neutral-200 text-text hover:border-primary hover:text-primary"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {inCart ? (
              <motion.span
                key="added"
                className="flex items-center gap-1.5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Added — tap to remove
              </motion.span>
            ) : (
              <motion.span
                key="add"
                className="flex items-center gap-1.5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* In-cart accent bar */}
      <AnimatePresence>
        {inCart && (
          <motion.div
            className="h-1 bg-gradient-to-r from-[#25D366] to-[#128C7E]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            style={{ originX: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");
  const { cart, toggleCart } = useCart();

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    return list;
  }, [activeCategory, search]);

  return (
    <Section background="default" id="catalog">
      <Container>
        <SectionHeading
          eyebrow="Full Inventory"
          heading="Complete Product Catalog"
          description={`Browse all ${PRODUCTS.length} products. Add items to your cart, then checkout via WhatsApp in one message.`}
        />

        {/* Search + Filter bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-shrink-0 md:w-64">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-neutral-200 bg-white text-text text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {TABS.map((tab) => {
              const count =
                tab.key === "all"
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === tab.key).length;
              return (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
                    activeCategory === tab.key
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                      : "bg-white text-text-muted border-neutral-200 hover:border-primary hover:text-primary"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {tab.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                      activeCategory === tab.key
                        ? "bg-white/20 text-white"
                        : "bg-neutral-100 text-text-muted"
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-text-muted mb-6">
          Showing{" "}
          <span className="font-semibold text-text">{filtered.length}</span>{" "}
          product{filtered.length !== 1 ? "s" : ""}
          {search && (
            <>
              {" "}matching "
              <span className="font-semibold text-primary">{search}</span>"
            </>
          )}
        </p>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  index={i}
                  inCart={cart.includes(product.name)}
                  onToggle={toggleCart}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-text-muted"
            >
              <svg
                className="w-12 h-12 mx-auto mb-4 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <p className="font-semibold">No products found for &quot;{search}&quot;</p>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
