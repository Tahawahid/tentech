import React, { useState, useMemo } from 'react';
import type { Route } from "./+types/portfolio";
import { Header } from "../components/Layout/Header";
import { PortfolioHero } from "../components/Portfolio/PortfolioHero";
import { PortfolioFilter } from "../components/Portfolio/PortfolioFilter";
import { PortfolioCard } from "../components/Portfolio/PortfolioCard";
import { ProjectModal } from "../components/Portfolio/ProjectModal";
import { ContactForm } from "../components/Form/ContactForm";
import { Footer } from "../components/Layout/Footer";
import { getAllProjects, getCategories, type PortfolioProject } from "../utils/portfolioData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio - Mascort | Professional Graphics & Video Animation Projects" },
    { name: "description", content: "Explore our portfolio of premium graphics, video animations, stream overlays, and brand design projects for content creators and businesses worldwide." },
    { name: "keywords", content: "portfolio, graphics design, video animation, stream overlays, brand design, content creation, digital art, mascort projects" },
    { property: "og:title", content: "Portfolio - Mascort Professional Design Work" },
    { property: "og:description", content: "Discover our creative portfolio featuring premium graphics and animations for content creators" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Portfolio - Mascort Creative Work" },
    { name: "twitter:description", content: "Premium graphics & animations portfolio by our all-women creative studio" },
  ];
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = getAllProjects();
  const categories = getCategories();

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [projects, activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <PortfolioHero />
      
      {/* Portfolio Grid Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <PortfolioFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onProjectClick={handleProjectClick}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
              <p className="text-gray-400">
                No projects found in the "{activeCategory}" category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most impactful projects that showcase our creative excellence and client success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).slice(0, 4).map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onProjectClick={handleProjectClick}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Amazing</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's bring your creative vision to life with our professional design and animation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="bg-white/10 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
      
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}