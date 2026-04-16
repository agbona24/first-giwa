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

const CATEGORY_CONFIG: Record<Exclude<Category, "all">, { label: string; gradient: string; badgeBg: string; badgeText: string; icon: React.ReactNode }> = {
  "finished-feeds": {
    label: "Finished Feed",
    gradient: "from-primary/10 to-accent/10",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  "protein-sources": {
    label: "Protein Source",
    gradient: "from-emerald-500/10 to-green-500/10",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-700",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082" />
      </svg>
    ),
  },
  "energy-sources": {
    label: "Energy Source",
    gradient: "from-amber-500/10 to-orange-500/10",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-700",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  "premixes-additives": {
    label: "Premix / Additive",
    gradient: "from-purple-500/10 to-pink-500/10",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-700",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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

function ProductCard({ product, index }: { product: Product; index: number }) {
  const config = CATEGORY_CONFIG[product.category];

  const handleClick = () => {
    const message = encodeURIComponent(
      `Hello First-Giwa Feeds! 👋\n\nI'm interested in *${product.name}*.\n\nCould you please share more details about pricing and availability? Thank you.`
    );
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`group relative w-full text-left rounded-2xl overflow-hidden border border-neutral-200/60 bg-gradient-to-br ${config.gradient} backdrop-blur-sm shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="p-5">
        {/* Category badge */}
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${config.badgeBg} ${config.badgeText}`}>
          {config.icon}
          {config.label}
        </span>

        {/* Product name */}
        <h3 className="font-heading font-bold text-text-dark text-base leading-snug mb-4 group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>

        {/* WhatsApp CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-[#25D366]">
          <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
          <span>Enquire on WhatsApp</span>
          <span className="ml-auto transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.button>
  );
}

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

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
    <Section background="default">
      <Container>
        <SectionHeading
          eyebrow="Full Inventory"
          heading="Complete Product Catalog"
          description={`Browse all ${PRODUCTS.length} products. Tap any item to enquire directly on WhatsApp.`}
        />

        {/* Search + Filter bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-shrink-0 md:w-64">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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

          {/* Category tabs — scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {TABS.map((tab) => {
              const count = tab.key === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === tab.key).length;
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
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    activeCategory === tab.key ? "bg-white/20 text-white" : "bg-neutral-100 text-text-muted"
                  }`}>
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-text-muted mb-6">
          Showing <span className="font-semibold text-text">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
          {search && <> matching "<span className="font-semibold text-primary">{search}</span>"</>}
        </p>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-text-muted"
            >
              <svg className="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <p className="font-semibold">No products found for "{search}"</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp bulk enquiry CTA */}
        <motion.div
          className="mt-12 rounded-3xl bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20 p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <WhatsAppIcon className="w-10 h-10 text-[#25D366] mx-auto mb-3" />
          <h3 className="font-heading font-bold text-xl text-text-dark mb-2">Need multiple products?</h3>
          <p className="text-text-muted text-sm mb-5 max-w-md mx-auto">
            Chat with us directly on WhatsApp to place a bulk order or ask about any product not listed.
          </p>
          <motion.a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello First-Giwa Feeds! 👋 I'd like to enquire about placing a bulk order. Could you please assist me?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-[#25D366]/30"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat for Bulk Orders
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  );
}
