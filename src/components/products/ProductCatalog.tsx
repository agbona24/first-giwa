"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY } from "@/lib/constants";

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.849L0 24l6.335-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.012-1.375l-.36-.214-3.733.882.934-3.638-.235-.374A9.772 9.772 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z" />
    </svg>
  );
}

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

// ─── Cart Drawer ──────────────────────────────────────────────────────────────

interface CartDrawerProps {
  cart: string[];
  onRemove: (name: string) => void;
  onClear: () => void;
}

function CartDrawer({ cart, onRemove, onClear }: CartDrawerProps) {
  const [open, setOpen] = useState(false);

  const handleCheckout = () => {
    const itemList = cart.map((name) => `  • ${name}`).join("\n");
    const message = encodeURIComponent(
      `Hello First-Giwa Feeds! 👋\n\nI'd like to enquire about the following products:\n\n${itemList}\n\nCould you please provide pricing and availability for these items? Thank you.`
    );
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <AnimatePresence>
      {cart.length > 0 && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50"
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          exit={{ y: 120 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Expanded items panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="mx-auto max-w-2xl bg-white rounded-t-3xl shadow-2xl border border-neutral-200 border-b-0 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="px-5 pt-5 pb-3 max-h-60 overflow-y-auto">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-heading font-bold text-text-dark text-base">
                      Cart ({cart.length} item{cart.length !== 1 ? "s" : ""})
                    </h4>
                    <button
                      onClick={onClear}
                      className="text-xs text-red-500 hover:text-red-700 font-semibold transition-colors"
                    >
                      Clear all
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {cart.map((name) => (
                      <li
                        key={name}
                        className="flex items-center justify-between gap-3 bg-neutral-50 rounded-xl px-3 py-2"
                      >
                        <span className="text-sm font-medium text-text-dark">{name}</span>
                        <button
                          onClick={() => onRemove(name)}
                          className="flex-shrink-0 p-1 rounded-lg text-text-muted hover:text-red-500 hover:bg-red-50 transition-colors"
                          aria-label={`Remove ${name}`}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sticky bar */}
          <div className="bg-white border-t border-neutral-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 py-3 flex items-center gap-3">
            {/* Toggle drawer */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 flex-1 min-w-0"
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
                <motion.span
                  key={cart.length}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center"
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {cart.length}
                </motion.span>
              </div>
              <div className="text-left min-w-0">
                <p className="text-sm font-bold text-text-dark">
                  {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
                </p>
                <p className="text-xs text-text-muted truncate">
                  {open ? "Tap to collapse" : "Tap to review your selection"}
                </p>
              </div>
              <svg
                className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>

            {/* Checkout button */}
            <motion.button
              onClick={handleCheckout}
              className="flex-shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-5 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-[#25D366]/30 text-sm"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Checkout via WhatsApp</span>
              <span className="sm:hidden">Checkout</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<string[]>([]);

  const toggleCart = (name: string) => {
    setCart((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((n) => n !== name));
  };

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
    <>
      <Section background="default" id="catalog">
        <div className={cart.length > 0 ? "pb-24" : ""}>
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
        </div>
      </Section>

      {/* Floating cart bar — outside Section so it stays fixed at screen bottom */}
      <CartDrawer cart={cart} onRemove={removeFromCart} onClear={() => setCart([])} />
    </>
  );
}
