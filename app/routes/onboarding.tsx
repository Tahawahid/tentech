import type { Route } from "./+types/onboarding";
import { OnboardingFlow } from "../components/Onboarding/OnboardingFlow";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Get Started - Mascort | Professional Graphics & Video Animation" },
    { name: "description", content: "Start your creative project with Mascort. Get a personalized quote for professional graphics, video animation, and digital content creation services." },
    { name: "keywords", content: "get started, project quote, creative services, graphics design, video animation, onboarding" },
    { property: "og:title", content: "Get Started - Mascort Creative Services" },
    { property: "og:description", content: "Begin your creative journey with our professional design and animation services" },
    { property: "og:type", content: "website" },
    { name: "robots", content: "noindex, nofollow" }, // Don't index onboarding pages
  ];
}

export default function Onboarding() {
  return <OnboardingFlow />;
}
