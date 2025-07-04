import type { Route } from "./+types/home";
import { Header } from "../components/Layout/Header";
import { HeroSection } from "../components/PagesSection/Home/HeroSection";
import { ServicesSection } from "../components/PagesSection/Home/ServicesSection";
import { ToolsSection } from "../components/PagesSection/Home/ToolsSection";
import { ProjectsSection } from "../components/PagesSection/Home/ProjectsSection";
import { AboutSection } from "../components/PagesSection/Home/AboutSection";
import { TestimonialsSection } from "../components/Section/TestimonialsSection";
import { ContactForm } from "../components/Form/ContactForm";
import { Footer } from "../components/Layout/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mascort - Premium Graphics & Video Animation for Content Creators" },
    { name: "description", content: "Professional overlays, animated intros, custom emotes for Twitch streamers, YouTubers & content creators. 100% women-led creative studio from Pakistan." },
    { name: "keywords", content: "twitch overlays, youtube intros, custom emotes, stream graphics, content creator design, women empowerment, pakistan creative studio" },
    { property: "og:title", content: "Mascort - Premium Graphics & Video Animation" },
    { property: "og:description", content: "Elevate your content with professional graphics designed by our all-women team" },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
