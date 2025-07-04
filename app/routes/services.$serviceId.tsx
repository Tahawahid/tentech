import type { Route } from "./+types/services.$serviceId";
import { data } from "react-router";
import { Header } from "../components/Layout/Header";
import { SubServiceHeroSection } from "../components/PagesSection/Services/SubServices/SubServiceHeroSection";
import { ServiceDetailsSection } from "../components/PagesSection/Services/SubServices/ServiceDetailsSection";
import { ServiceWorkflowSection } from "../components/PagesSection/Services/SubServices/ServiceWorkflowSection";
import { ServicePackagesSection } from "../components/PagesSection/Services/SubServices/ServicePackagesSection";
import { ServicePortfolioSection } from "../components/PagesSection/Services/SubServices/ServicePortfolioSection";
import { ServiceFAQSection } from "../components/PagesSection/Services/SubServices/ServiceFAQSection";
import { RelatedServicesSection } from "../components/PagesSection/Services/SubServices/RelatedServicesSection";
import { ContactForm } from "../components/Form/ContactForm";
import { Footer } from "../components/Layout/Footer";
import { getServiceById, type ServiceData } from "../utils/serviceData";

export async function loader({ params }: Route.LoaderArgs) {
  const service = getServiceById(params.serviceId);
  
  if (!service) {
    throw data("Service not found", { status: 404 });
  }

  return { service };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data || !('service' in data)) {
    return [
      { title: "Service Not Found - Mascort" },
      { name: "description", content: "The requested service could not be found." },
    ];
  }

  const { service } = data as { service: ServiceData };
  
  return [
    { title: `${service.title} - Mascort | Professional Graphics & Animation` },
    { name: "description", content: service.metaDescription },
    { name: "keywords", content: service.keywords.join(", ") },
    { property: "og:title", content: `${service.title} - Mascort` },
    { property: "og:description", content: service.shortDescription },
    { property: "og:image", content: service.heroImage },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${service.title} - Mascort` },
    { name: "twitter:description", content: service.shortDescription },
    { name: "twitter:image", content: service.heroImage },
  ];
}

export default function ServiceDetail({ loaderData }: Route.ComponentProps) {
  const { service } = loaderData;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <SubServiceHeroSection service={service} />
      <ServiceDetailsSection service={service} />
      <ServiceWorkflowSection service={service} />
      <ServicePackagesSection service={service} />
      <ServicePortfolioSection service={service} />
      <ServiceFAQSection service={service} />
      <RelatedServicesSection currentService={service} />
      <ContactForm />
      <Footer />
    </div>
  );
}
