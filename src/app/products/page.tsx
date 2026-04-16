"use client";

import ProductHero from "@/components/products/ProductHero";
import FinishedFeeds from "@/components/products/FinishedFeeds";
import RawIngredients from "@/components/products/RawIngredients";
import FeedSizesDetail from "@/components/products/FeedSizesDetail";
import ProductCatalog from "@/components/products/ProductCatalog";
import QuizTrigger from "@/components/quiz/QuizTrigger";

export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <FinishedFeeds />
      <RawIngredients />
      <FeedSizesDetail />
      <ProductCatalog />
      <QuizTrigger variant="floating" />
    </>
  );
}
