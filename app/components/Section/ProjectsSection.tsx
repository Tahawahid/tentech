import React, { useState, useEffect } from 'react';
import { Play, Eye, X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface ProjectItem {
  id: string;
  type: 'banner' | 'logo' | 'intro' | 'outro' | 'mascort' | 'emote';
  title: string;
  category: string;
  src: string;
  isVideo?: boolean;
  actualSrc?: string; // Store the actual working image source
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(12); // Show first 3-4 rows initially
  const [loadingMore, setLoadingMore] = useState(false);

  // Helper function to find working image format
  const findWorkingImageSrc = (basePath: string, fileName: string): Promise<string> => {
    const extensions = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
    
    return new Promise((resolve, reject) => {
      let index = 0;
      
      const tryNextExtension = () => {
        if (index >= extensions.length) {
          reject(new Error('No working image format found'));
          return;
        }
        
        const img = new Image();
        const src = `${basePath}/${fileName}.${extensions[index]}`;
        
        img.onload = () => resolve(src);
        img.onerror = () => {
          index++;
          tryNextExtension();
        };
        
        img.src = src;
      };
      
      tryNextExtension();
    });
  };

  // Generate project data with multiple format support
  const generateProjects = (): ProjectItem[] => {
    return [
      // Banner images (1:2 ratio) - will auto-detect format
      ...Array.from({ length: 8 }, (_, i) => ({
        id: `banner-${i + 1}`,
        type: 'banner' as const,
        title: `Stream Banner ${i + 1}`,
        category: 'Stream Graphics',
        src: `/images/banner/${i + 1}`, // Base path without extension
        isVideo: false
      })),
      
      // Logo images (1:1 ratio) - will auto-detect format
      ...Array.from({ length: 23 }, (_, i) => ({
        id: `logo-${i + 1}`,
        type: 'logo' as const,
        title: `Logo Design ${i + 1}`,
        category: 'Brand Identity',
        src: `/images/logos/${i + 1}`, // Base path without extension
        isVideo: false
      })),
      
      // Video intros
      ...Array.from({ length: 6 }, (_, i) => ({
        id: `intro-${i + 1}`,
        type: 'intro' as const,
        title: `Animated Intro ${i + 1}`,
        category: 'Video Animation',
        src: `/Videos/intro/${i + 1}.mp4`,
        isVideo: true
      })),
      
      // Video outros
      ...Array.from({ length: 3 }, (_, i) => ({
        id: `outro-${i + 1}`,
        type: 'outro' as const,
        title: `Animated Outro ${i + 1}`,
        category: 'Video Animation',
        src: `/Videos/Outro/${i + 1}.mp4`,
        isVideo: true
      })),
      
      // Mascort projects (using some banners as examples)
      ...Array.from({ length: 4 }, (_, i) => ({
        id: `mascort-${i + 1}`,
        type: 'mascort' as const,
        title: `Mascort Project ${i + 1}`,
        category: 'Complete Package',
        src: `/images/banner/${i + 1}`, // Base path without extension
        isVideo: false
      })),
      
      // Emotes (using some logos as examples)
      ...Array.from({ length: 8 }, (_, i) => ({
        id: `emote-${i + 1}`,
        type: 'emote' as const,
        title: `Custom Emote ${i + 1}`,
        category: 'Twitch Emotes',
        src: `/images/logos/${i + 1}`, // Base path without extension
        isVideo: false
      }))
    ];
  };

  const [projects, setProjects] = useState<ProjectItem[]>(generateProjects());

  // Resolve image sources on component mount and when tab changes
  useEffect(() => {
    const resolveImageSources = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          if (!project.isVideo && !project.actualSrc) {
            try {
              const actualSrc = await findWorkingImageSrc(
                project.src.includes('/banner/') ? '/images/banner' : '/images/logos',
                project.src.split('/').pop() || '1'
              );
              return { ...project, actualSrc };
            } catch {
              // Fallback to original src if no format works
              return { ...project, actualSrc: `${project.src}.png` };
            }
          }
          return project;
        })
      );
      setProjects(updatedProjects);
    };

    resolveImageSources();
  }, []);

  const tabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'banner', label: 'Banners', count: projects.filter(p => p.type === 'banner').length },
    { id: 'logo', label: 'Logos', count: projects.filter(p => p.type === 'logo').length },
    { id: 'intro', label: 'Intros', count: projects.filter(p => p.type === 'intro').length },
    { id: 'outro', label: 'Outros', count: projects.filter(p => p.type === 'outro').length },
    { id: 'mascort', label: 'Mascort', count: projects.filter(p => p.type === 'mascort').length },
    { id: 'emote', label: 'Emotes', count: projects.filter(p => p.type === 'emote').length }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeTab);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  const loadMoreProjects = () => {
    setLoadingMore(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 8, filteredProjects.length));
      setLoadingMore(false);
    }, 500);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setVisibleCount(12); // Reset to initial count when changing tabs
  };

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setCurrentIndex(filteredProjects.indexOf(project));
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
      : (currentIndex + 1) % filteredProjects.length;
    
    setCurrentIndex(newIndex);
    setSelectedProject(filteredProjects[newIndex]);
  };

  const getGridItemClass = (project: ProjectItem) => {
    if (project.type === 'logo' || project.type === 'emote') {
      return 'aspect-square'; // 1:1 ratio
    }
    return 'aspect-[2/1]'; // 1:2 ratio for banners and videos
  };

  const getImageSrc = (project: ProjectItem) => {
    return project.actualSrc || `${project.src}.png`;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Discover the incredible work created by our talented team of women designers and animators
          </p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm opacity-75">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 ${getGridItemClass(project)}`}
              onClick={() => openModal(project)}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out both'
              }}
            >
              {/* Project Media */}
              <div className="absolute inset-0">
                {project.isVideo ? (
                  <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                    <video
                      src={project.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <Play className="text-white opacity-80 group-hover:opacity-100 transition-opacity" size={48} />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={getImageSrc(project)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback gradient background if image fails to load
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
                          const fallbackText = document.createElement('div');
                          fallbackText.className = 'absolute inset-0 flex items-center justify-center text-white font-semibold text-center p-4';
                          fallbackText.textContent = project.title;
                          target.parentElement.appendChild(fallbackText);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.category}</p>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="text-center">
            <button
                            onClick={loadMoreProjects}
              disabled={loadingMore}
              className={`group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                loadingMore ? 'animate-pulse' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                {loadingMore ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Loading More...</span>
                  </>
                ) : (
                  <>
                    <Plus size={20} />
                    <span>View More Projects</span>
                    <span className="text-sm opacity-75">
                      ({filteredProjects.length - visibleCount} remaining)
                    </span>
                  </>
                )}
              </div>
              
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        )}

        {/* Show All Loaded Message */}
        {!hasMoreProjects && filteredProjects.length > 12 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-gray-300">
              <span>✨ All {filteredProjects.length} projects loaded!</span>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-xl mb-4">No projects found</div>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-gray-300">{selectedProject.category}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative">
              {selectedProject.isVideo ? (
                <video
                  src={selectedProject.src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[60vh] object-contain bg-black"
                />
              ) : (
                <img
                  src={getImageSrc(selectedProject)}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[60vh] object-contain bg-black"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-60 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xl font-semibold';
                      fallback.textContent = selectedProject.title;
                      target.parentElement.appendChild(fallback);
                    }
                  }}
                />
              )}

              {/* Navigation Buttons */}
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={() => navigateProject('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  >
                    <ChevronLeft className="text-white" size={24} />
                  </button>
                  <button
                    onClick={() => navigateProject('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  >
                    <ChevronRight className="text-white" size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="text-gray-300">
                  Project {currentIndex + 1} of {filteredProjects.length}
                </div>
                <div className="text-sm text-gray-400">
                  Created by our talented women team 💜
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

