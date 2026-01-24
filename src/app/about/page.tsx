"use client";

import CompanyBackground from "@/components/about/CompanyBackground";
import MissionVision from "@/components/about/MissionVision";
import Leadership from "@/components/about/Leadership";
import CoreValues from "@/components/about/CoreValues";
import AboutHero from "@/components/about/AboutHero";
import QuizTrigger from "@/components/quiz/QuizTrigger";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyBackground />
      <MissionVision />
      <CoreValues />
      <Leadership />
      <QuizTrigger variant="floating" />
    </>
  );
}
