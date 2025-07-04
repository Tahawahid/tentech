import type { Route } from "./+types/about";
import { Header } from "../components/Layout/Header";
import { AboutHeroSection } from "../components/PagesSection/About/AboutHeroSection";
import { MissionVisionSection } from "../components/PagesSection/About/MissionVisionSection";
import { TeamSection } from "../components/PagesSection/About/TeamSection";
import { ClientStatsSection } from "../components/PagesSection/About/ClientStatsSection";
import { CompanyToolsSection } from "../components/PagesSection/About/CompanyToolsSection";
import { WhyChooseUsSection } from "../components/PagesSection/About/WhyChooseUsSection";
import { TestimonialsSection } from "../components/Section/TestimonialsSection";
import { ContactForm } from "../components/Form/ContactForm";
import { Footer } from "../components/Layout/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Mascort | Women-Led Creative Studio from Pakistan" },
    { name: "description", content: "Meet our talented team of women designers and animators from Pakistan. Learn about our mission to empower women in the creative industry while delivering premium graphics and animations." },
    { name: "keywords", content: "women empowerment, pakistan creative studio, female designers, women in tech, creative team, about mascort" },
    { property: "og:title", content: "About Mascort - Empowering Women Through Creative Excellence" },
    { property: "og:description", content: "Discover our story, mission, and the incredible women behind Mascort's success" },
    { property: "og:type", content: "website" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <AboutHeroSection />
      <MissionVisionSection />
      <TeamSection />
      <ClientStatsSection />
      <CompanyToolsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}