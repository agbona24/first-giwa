import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import ProductCategories from "@/components/home/ProductCategories";
import FeedSizes from "@/components/home/FeedSizes";
import WhoWeSupply from "@/components/home/WhoWeSupply";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <ProductCategories />
      <FeedSizes />
      <WhoWeSupply />
      <HomeCTA />
    </>
  );
}
