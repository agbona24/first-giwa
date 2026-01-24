import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import CompanyBackground from "@/components/about/CompanyBackground";
import MissionVision from "@/components/about/MissionVision";
import Leadership from "@/components/about/Leadership";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about First-Giwa Feeds & Agro Tech Ltd — our history, mission, and leadership in Nigeria's agricultural industry since 2015.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <p className="text-white/60 text-sm mb-2">Home / About</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
            About First-Giwa Feeds
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-xl">
            Building Nigeria&apos;s agricultural future, one feed at a time.
          </p>
        </Container>
      </section>

      <CompanyBackground />
      <MissionVision />
      <Leadership />
    </>
  );
}
