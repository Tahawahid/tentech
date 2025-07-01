import type { Route } from "./+types/services";
import { Header } from "../components/Layout/Header";
import { ServicesHeroSection } from "../components/Section/ServicesHeroSection";
import { AllServicesSection } from "../components/Section/AllServicesSection";
import { TestimonialsSection } from "../components/Section/TestimonialsSection";
import { ContactForm } from "../components/Form/ContactForm";
import { Footer } from "../components/Layout/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "All Services - Mascort | Professional Graphics & Video Animation" },
    { name: "description", content: "Explore our complete range of creative services: Twitch overlays, YouTube intros, custom emotes, brand design, and more. Professional quality, fast delivery." },
    { name: "keywords", content: "creative services, twitch overlays, youtube intros, brand design, custom graphics, video animation, emotes, streaming graphics" },
    { property: "og:title", content: "All Services - Mascort" },
    { property: "og:description", content: "Complete range of professional creative services for content creators" },
    { property: "og:type", content: "website" },
  ];
}

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <ServicesHeroSection />
      <AllServicesSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}