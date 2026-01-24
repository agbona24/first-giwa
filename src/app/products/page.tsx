import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import FinishedFeeds from "@/components/products/FinishedFeeds";
import RawIngredients from "@/components/products/RawIngredients";
import FeedSizesDetail from "@/components/products/FeedSizesDetail";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse our range of finished poultry and fish feeds, raw feed ingredients, and custom formulations. Available in 2mm to 8mm pellet sizes.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <p className="text-white/60 text-sm mb-2">Home / Products</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
            Our Products
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-xl">
            Quality feed solutions for poultry, fish, and livestock at every growth stage.
          </p>
        </Container>
      </section>

      <FinishedFeeds />
      <RawIngredients />
      <FeedSizesDetail />
    </>
  );
}
